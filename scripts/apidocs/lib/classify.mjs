import { getNamedType, isObjectType } from 'graphql';
import { COMMON_ID } from './context-map.mjs';

const ROOT_GETTERS = { query: 'getQueryType', mutation: 'getMutationType', subscription: 'getSubscriptionType' };
const BUILTIN_SCALARS = new Set(['String', 'Int', 'Float', 'Boolean', 'ID']);

export function isNamespaceTypeName(typeName, rootKind) {
  const lower = typeName.toLowerCase();
  const plural = rootKind === 'query' ? 'queries' : `${rootKind}s`;
  return lower.endsWith(rootKind) || lower.endsWith(plural);
}

export function literalPrefixLength(source) {
  if (!source.startsWith('^')) return 0;
  const rest = source.slice(1);
  let length = /^[A-Za-z0-9_]*/.exec(rest)[0].length;
  if (length > 0 && /^[?*{]/.test(rest.slice(length))) length -= 1;
  return length;
}

export function matchContext(name, kind, map, candidates = null) {
  let best = null;
  for (const context of candidates ?? map.all ?? map.contexts) {
    for (const regex of context[kind]) {
      const match = regex.exec(name);
      if (!match) continue;
      const score = [literalPrefixLength(regex.source), match[0].length];
      if (!best || score[0] > best.score[0] || (score[0] === best.score[0] && score[1] > best.score[1])) {
        best = { id: context.id, score, tied: [context.id] };
      } else if (score[0] === best.score[0] && score[1] === best.score[1] && !best.tied.includes(context.id)) {
        best.tied.push(context.id);
      }
    }
  }
  if (!best) return null;
  return { id: best.id, ambiguous: best.tied.length > 1 ? best.tied : null };
}

const hasDirective = (astNode, name) => astNode?.directives?.some((d) => d.name.value === name) ?? false;

// A CDM subset classifies only when exactly one context claims it. A subset shared by several contexts (Octopart's
// `supply`, which spans the whole catalogue) still feeds the overview cards but decides nothing.
const contextForCdm = (map, subset) => {
  const owners = map.contexts.filter((context) => context.cdm.includes(subset));
  return owners.length === 1 ? owners[0].id : null;
};

// Contexts that own a gateway subgraph. One owner decides; several (a subgraph shared by services, like `Intel`)
// narrow the regex match to those owners.
function byDeclaredSource(name, kind, map, sourceList) {
  if (!sourceList || sourceList.length !== 1) return null;
  const owners = (map.all ?? map.contexts).filter((context) => context.source.includes(sourceList[0]));
  if (owners.length === 1) return { id: owners[0].id, ambiguous: null };
  if (owners.length > 1) {
    const match = matchContext(name, kind, map, owners);
    if (match) return match;
  }
  return null;
}

/**
 * `sources` (optional) maps names to the gateway subgraphs they come from (`@source(schema:)` in the raw SDL):
 * `{ types: Map<typeName, string[]>, fields: Map<'Query.field', string[]> }`. Precedence: overrides > common names >
 * single source > CDM > regex. A type that lands in an unpublished context goes to its `adoptedBy` context, else to
 * the best regex match among the published contexts.
 */
export function classifySchema(schema, map, cdmIndex = {}, sources = null) {
  const result = {
    types: new Map(),
    operations: { query: new Map(), mutation: new Map(), subscription: new Map() },
    namespaceTypes: new Map(),
    experimentalNamespaces: new Set(),
    unassigned: [],
    ambiguous: [],
    cdmConflicts: [],
    overrideConflicts: [],
    experimental: { operations: new Set(), types: new Set() },
  };

  const byRegex = (name, kind) => {
    const match = matchContext(name, kind, map);
    if (match) return { id: match.id, ambiguous: match.ambiguous };
    if (kind === 'type' && (map.common.names.has(name) || map.common.type.some((regex) => regex.test(name)))) {
      return { id: COMMON_ID, ambiguous: null };
    }
    return { id: null, ambiguous: null };
  };

  const cdmContextOf = (name) => {
    const subset = (cdmIndex[name] ?? [])[0]?.subset;
    return subset ? contextForCdm(map, subset) : null;
  };

  const excluded = new Map((map.excluded ?? []).map((context) => [context.id, context]));
  const adopt = (name, id) => {
    const context = excluded.get(id);
    if (!context) return id;
    if (context.adoptedBy) return context.adoptedBy;
    const match = matchContext(name, 'type', map, map.contexts);
    if (match?.ambiguous) result.ambiguous.push({ kind: 'type', name, candidates: match.ambiguous, source: 'adoption' });
    return match?.id ?? (map.common.type.some((regex) => regex.test(name)) ? COMMON_ID : null);
  };

  const assign = (name, kind, sourceList = null) => {
    const id = assignRaw(name, kind, sourceList);
    return kind === 'type' && id ? adopt(name, id) : id;
  };

  const assignRaw = (name, kind, sourceList) => {
    if (map.overrides.has(name)) {
      const override = map.overrides.get(name);
      const cdm = kind === 'type' ? cdmContextOf(name) : null;
      if (cdm && cdm !== override) result.overrideConflicts.push({ name, override, cdm });
      return override;
    }
    if (kind === 'type' && map.common.names.has(name)) return COMMON_ID;
    const fromSource = byDeclaredSource(name, kind, map, sourceList);
    if (fromSource) {
      if (fromSource.ambiguous) result.ambiguous.push({ kind, name, candidates: fromSource.ambiguous, source: 'source' });
      return fromSource.id;
    }
    const regex = byRegex(name, kind);
    if (kind === 'type') {
      const entries = cdmIndex[name] ?? [];
      const fromCdm = cdmContextOf(name);
      if (fromCdm) {
        const candidates = [...new Set(entries.map((entry) => (entry.subset ? contextForCdm(map, entry.subset) : null)).filter(Boolean))];
        if (candidates.length > 1) result.ambiguous.push({ kind, name, candidates, source: 'cdm' });
        if (regex.id !== fromCdm) result.cdmConflicts.push({ name, cdm: fromCdm, regex: regex.id });
        return fromCdm;
      }
    }
    if (regex.ambiguous) result.ambiguous.push({ kind, name, candidates: regex.ambiguous });
    return regex.id;
  };

  const rootNames = new Set();
  for (const [rootKind, getter] of Object.entries(ROOT_GETTERS)) {
    const root = schema[getter]();
    if (!root) continue;
    rootNames.add(root.name);

    const walk = (fields, prefix, inheritedId, inheritedExperimental, visited) => {
      for (const field of Object.values(fields)) {
        const dotted = prefix ? `${prefix}.${field.name}` : field.name;
        const id = prefix ? inheritedId : assign(field.name, rootKind, sources?.fields.get(`${root.name}.${field.name}`));
        const experimental = inheritedExperimental || hasDirective(field.astNode, 'experimental');
        const named = getNamedType(field.type);
        const isNamespace = isObjectType(named) && named.name !== root.name && isNamespaceTypeName(named.name, rootKind);
        if (isNamespace) {
          const nsExperimental = experimental || hasDirective(named.astNode, 'experimental');
          result.namespaceTypes.set(named.name, id);
          if (nsExperimental) result.experimentalNamespaces.add(named.name);
          if (!visited.has(named.name)) {
            walk(named.getFields(), dotted, id, nsExperimental, new Set([...visited, named.name]));
          }
          continue;
        }
        if (id) result.operations[rootKind].set(dotted, id);
        else result.unassigned.push({ kind: rootKind, name: dotted });
        if (experimental) result.experimental.operations.add(dotted);
      }
    };
    walk(root.getFields(), '', null, false, new Set([root.name]));
  }

  for (const type of Object.values(schema.getTypeMap())) {
    const { name } = type;
    if (name.startsWith('__') || rootNames.has(name) || result.namespaceTypes.has(name)) continue;
    const id = BUILTIN_SCALARS.has(name) ? COMMON_ID : assign(name, 'type', sources?.types.get(name));
    if (id) result.types.set(name, id);
    else result.unassigned.push({ kind: 'type', name });
    if (hasDirective(type.astNode, 'experimental')) result.experimental.types.add(name);
  }
  return result;
}
