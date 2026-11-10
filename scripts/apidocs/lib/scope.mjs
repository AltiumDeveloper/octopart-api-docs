// Narrows the gateway SDL to the published scope of this site.
//
// The Nexar gateway serves more than this site documents: Design (des*, migrated to the Altium 365 API),
// Manufacturing, Admin and several data products. The context map lists them as `publish: false`. This module
//   1. records which gateway subgraph every type and root field comes from (`@source(schema:)`), for classification;
//   2. removes elements gated to internal callers (`@RequireAny(roles: [INTERNAL])`, "[INTERNAL]" descriptions);
//   3. turns customer-visible entitlements (plan tier, plan feature, argument constraints) into description notes;
//   4. removes the root fields of unpublished contexts, then every type that the remaining root fields no longer reach.
import { buildSchema, getNamedType, isInputObjectType, isInterfaceType, isObjectType, isUnionType, Kind, parse, print, visit } from 'graphql';
import { classifySchema } from './classify.mjs';

const ROOT_KINDS = ['query', 'mutation', 'subscription'];
const BUILTIN_SCALARS = new Set(['String', 'Int', 'Float', 'Boolean', 'ID']);
// Interfaces whose implementers are not pulled in by reachability. Both are shared by every subgraph: `node(id:)`
// returns `Node`, and payload errors are unions of concrete types that also implement `Error`. Following their
// implementers would publish the entities and errors of every unpublished context.
const OPEN_INTERFACES = new Set(['Node', 'Error']);
const INTERNAL_DESCRIPTION = /^\s*(\[INTERNAL\]|\*\*Internal\.?\*\*)/i;

const directivesNamed = (node, name) => (node.directives ?? []).filter((d) => d.name.value === name);
const argValue = (directive, name) => directive.arguments?.find((a) => a.name.value === name)?.value;
const listValues = (value) => (value?.kind === Kind.LIST ? value.values : value ? [value] : []).map((v) => v.value);

export function collectSources(sdl) {
  const types = new Map();
  const fields = new Map();
  const schemasOf = (node) => [...new Set(directivesNamed(node, 'source')
    .map((d) => argValue(d, 'schema')?.value).filter(Boolean))].sort();
  for (const definition of parse(sdl).definitions) {
    if (!definition.name) continue;
    const name = definition.name.value;
    const own = schemasOf(definition);
    if (own.length) types.set(name, own);
    for (const field of definition.fields ?? []) {
      const list = schemasOf(field);
      if (list.length) fields.set(`${name}.${field.name.value}`, list);
    }
  }
  return { types, fields };
}

const isInternal = (node) =>
  directivesNamed(node, 'RequireAny').some((d) => listValues(argValue(d, 'roles')).includes('INTERNAL'))
  || INTERNAL_DESCRIPTION.test(node.description?.value ?? '');

const PATH_KINDS = new Set([Kind.OBJECT_TYPE_DEFINITION, Kind.INTERFACE_TYPE_DEFINITION, Kind.INPUT_OBJECT_TYPE_DEFINITION,
  Kind.ENUM_TYPE_DEFINITION, Kind.FIELD_DEFINITION]);
const MEMBER_KINDS = new Set([Kind.FIELD_DEFINITION, Kind.INPUT_VALUE_DEFINITION, Kind.ENUM_VALUE_DEFINITION]);

// Removes fields, arguments, input fields and enum values gated to internal callers. Returns their dotted paths
// (`Type.field`, `Type.field.argument`) for the report.
export function stripInternal(sdl) {
  const removed = [];
  const path = [];
  const ast = visit(parse(sdl), {
    enter(node) {
      if (MEMBER_KINDS.has(node.kind) && isInternal(node)) {
        removed.push([...path, node.name.value].join('.'));
        return null;
      }
      if (PATH_KINDS.has(node.kind)) path.push(node.name.value);
      return undefined;
    },
    leave(node) {
      if (PATH_KINDS.has(node.kind)) path.pop();
    },
  });
  return { sdl: print(ast), removed };
}

// Customer-visible entitlements and limits, written into descriptions so they survive directive stripping and show on
// the rendered pages. Wording states the directive's value only; plan names and limits are not interpreted.
const NOTES = [
  ['HasPlanTier', (d) => `Requires plan tier: \`${argValue(d, 'tier')?.value}\`.`],
  ['NexarRequire', (d) => `Requires plan feature: \`${argValue(d, 'feature')?.value}\`.`],
  ['Binding', (d) => `Constraint: \`${argValue(d, 'constraint')?.value}\`.`],
];

export function describeEntitlements(sdl) {
  const ast = visit(parse(sdl), {
    enter(node) {
      if (![Kind.FIELD_DEFINITION, Kind.INPUT_VALUE_DEFINITION].includes(node.kind)) return undefined;
      const notes = NOTES.flatMap(([name, render]) => directivesNamed(node, name).map(render));
      if (!notes.length) return undefined;
      const text = [node.description?.value?.trim(), notes.join(' ')].filter(Boolean).join('\n\n');
      return { ...node, description: { kind: Kind.STRING, value: text, block: true } };
    },
  });
  return print(ast);
}

// Descriptions written for a single-page schema viewer link in-page anchors (`[Map](#map)`), which point nowhere on
// generated per-type pages. Keep the link text only.
const ANCHOR_LINK = /\[([^\]]+)\]\(#[^)\s]*\)/g;

export function unlinkAnchors(sdl) {
  const ast = visit(parse(sdl), {
    StringValue(node) {
      if (!node.value.includes('](#')) return undefined;
      return { ...node, value: node.value.replace(ANCHOR_LINK, '$1') };
    },
  });
  return print(ast);
}

export function reachableTypes(schema) {
  const seen = new Set();
  const stack = [];
  const push = (type) => {
    const named = getNamedType(type);
    if (named && !seen.has(named.name)) { seen.add(named.name); stack.push(named); }
  };
  const roots = ROOT_KINDS.map((kind) => schema.getRootType(kind)).filter(Boolean);
  for (const root of roots) {
    seen.add(root.name);
    for (const field of Object.values(root.getFields())) { push(field.type); field.args.forEach((a) => push(a.type)); }
  }
  for (const directive of schema.getDirectives()) directive.args.forEach((a) => push(a.type));
  while (stack.length) {
    const type = stack.pop();
    if (isObjectType(type) || isInterfaceType(type)) {
      for (const field of Object.values(type.getFields())) { push(field.type); field.args.forEach((a) => push(a.type)); }
      type.getInterfaces().forEach(push);
      if (isInterfaceType(type) && !OPEN_INTERFACES.has(type.name)) schema.getPossibleTypes(type).forEach(push);
    } else if (isInputObjectType(type)) {
      Object.values(type.getFields()).forEach((f) => push(f.type));
    } else if (isUnionType(type)) {
      type.getTypes().forEach(push);
    }
  }
  return seen;
}

const TYPE_DEFINITIONS = new Set([Kind.OBJECT_TYPE_DEFINITION, Kind.INTERFACE_TYPE_DEFINITION, Kind.UNION_TYPE_DEFINITION,
  Kind.ENUM_TYPE_DEFINITION, Kind.INPUT_OBJECT_TYPE_DEFINITION, Kind.SCALAR_TYPE_DEFINITION]);

/**
 * Removes the root fields that classify into unpublished contexts, then the types nothing published reaches.
 * `sdl` must already be free of directives whose definitions reference types (they would keep those types alive).
 */
export function pruneToScope(sdl, { contextMap, sources }) {
  const schema = buildSchema(sdl, { assumeValidSDL: true });
  const classification = classifySchema(schema, contextMap, {}, sources);
  const unpublished = new Set((contextMap.excluded ?? []).map((context) => context.id));
  const rootNames = new Map(ROOT_KINDS.map((kind) => [schema.getRootType(kind)?.name, kind]).filter(([name]) => name));
  const removedOperations = [];
  let ast = visit(parse(sdl), {
    ObjectTypeDefinition(node) {
      const kind = rootNames.get(node.name.value);
      if (!kind) return undefined;
      const fields = node.fields.filter((field) => {
        const id = classification.operations[kind].get(field.name.value);
        if (id && unpublished.has(id)) { removedOperations.push({ kind, name: field.name.value, context: id }); return false; }
        return true;
      });
      return { ...node, fields };
    },
  });

  // Root types left without fields disappear, together with their entry in the schema definition.
  const emptyRoots = new Set(ast.definitions
    .filter((d) => d.kind === Kind.OBJECT_TYPE_DEFINITION && rootNames.has(d.name.value) && d.fields.length === 0)
    .map((d) => d.name.value));
  ast = {
    ...ast,
    definitions: ast.definitions
      .filter((d) => !(d.kind === Kind.OBJECT_TYPE_DEFINITION && emptyRoots.has(d.name.value)))
      .map((d) => (d.kind === Kind.SCHEMA_DEFINITION
        ? { ...d, operationTypes: d.operationTypes.filter((o) => !emptyRoots.has(o.type.name.value)) }
        : d)),
  };

  const scoped = buildSchema(print(ast), { assumeValidSDL: true });
  const keep = reachableTypes(scoped);
  const removedTypes = [];
  ast = visit(ast, {
    enter(node) {
      if (!TYPE_DEFINITIONS.has(node.kind)) return undefined;
      const name = node.name.value;
      if (keep.has(name) || BUILTIN_SCALARS.has(name)) {
        if (node.interfaces?.length) {
          return { ...node, interfaces: node.interfaces.filter((i) => keep.has(i.name.value)) };
        }
        return undefined;
      }
      removedTypes.push(name);
      return null;
    },
  });
  return { sdl: print(ast), removedOperations, removedTypes: removedTypes.sort() };
}
