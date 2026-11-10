import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildSchema } from 'graphql';
import { parseContextMap } from '../scripts/apidocs/lib/context-map.mjs';
import { classifySchema } from '../scripts/apidocs/lib/classify.mjs';
import { collectSources, describeEntitlements, pruneToScope, stripInternal, unlinkAnchors } from '../scripts/apidocs/lib/scope.mjs';
import { stripDirectives, STRIP } from '../scripts/apidocs/lib/transform-sdl.mjs';

// A miniature of the Nexar gateway: two published subgraphs, one shared subgraph (Intel) split by regex, an
// unpublished subgraph whose type is still reached, an unpublished subgraph that disappears, and internal gating.
const RAW = `
directive @source(name: String!, schema: String!) repeatable on OBJECT | FIELD_DEFINITION | ARGUMENT_DEFINITION | INTERFACE | UNION | ENUM | ENUM_VALUE | INPUT_OBJECT | INPUT_FIELD_DEFINITION
directive @delegate(path: String, schema: String!) on FIELD_DEFINITION
directive @RequireAny(roles: [SupRole!]!) on FIELD_DEFINITION | ARGUMENT_DEFINITION
directive @HasPlanTier(tier: SupPlanTier!) on FIELD_DEFINITION | ARGUMENT_DEFINITION
directive @NexarRequire(feature: SupNexarFeatureID!) on FIELD_DEFINITION
directive @Binding(constraint: String!) on ARGUMENT_DEFINITION | INPUT_FIELD_DEFINITION
enum SupRole { INTERNAL DISTRIBUTOR }
enum SupPlanTier { PRO ENTERPRISE }
enum SupNexarFeatureID { TECH_SPECS }
interface Node { id: ID! }
interface Error { message: String! }
type Query {
  supSearch(q: String @Binding(constraint: "max=2000"), libraryIds: [String!] @RequireAny(roles: [ INTERNAL ])): [SupPart!]! @source(name: "search", schema: "Supply") @delegate(schema: "Supply")
  supResolveParts(ids: [String!]!): [SupPart!]! @RequireAny(roles: [ INTERNAL ]) @source(name: "resolve", schema: "Supply")
  supPartFamilySearch(q: String!): [SupPartFamily!]! @source(name: "search", schema: "SupPartFamily")
  datBomParts(mpn: String!): [DatBomPart!]! @source(name: "parts", schema: "Intel")
  datScrJob(id: ID!): DatScrJob @source(name: "job", schema: "Intel")
  desProjectById(id: ID!): DesProject @source(name: "projectById", schema: "Design")
  supPartIdFromCiivaId(id: String!): String @source(name: "partId", schema: "Design")
  node(id: ID!): Node
}
type SupPart @source(name: "Part", schema: "Supply") {
  mpn: String!
  specs: [String!]! @HasPlanTier(tier: PRO) @NexarRequire(feature: TECH_SPECS)
  "A [Map](#map) of counts."
  counts: String
  altiumInternalId: String! @RequireAny(roles: [ INTERNAL ])
  extras: SupPartExtras
}
type SupPartExtras @source(name: "PartExtras", schema: "Design") { note: String }
type SupPartFamily @source(name: "PartFamily", schema: "SupPartFamily") { id: ID! title: String! }
type DatBomPart @source(name: "BomPart", schema: "Intel") { partId: String! }
type DatScrJob @source(name: "ScrJob", schema: "Intel") { id: ID! }
type DesProject implements Node @source(name: "Project", schema: "Design") { id: ID! }
type SupNotFoundError implements Error @source(name: "NotFound", schema: "Supply") { message: String! }
`;

const MAP = parseContextMap(`
contexts:
  - { id: supply, title: Supply, source: [Supply], query: ['^sup'], type: ['^Sup'] }
  - { id: part-family, title: Part Family, source: [SupPartFamily], query: ['^supPartFamil(y|ies)'], type: ['^SupPartFamily'] }
  - { id: bom-analysis, title: BOM Analysis, source: [Intel], query: ['^datBom'], type: ['^DatBom'] }
  - { id: scr, title: SCR, publish: false, source: [Intel], query: ['^datScr'], type: ['^DatScr'] }
  - { id: design, title: Design, publish: false, adoptedBy: supply, source: [Design], query: ['^des', '^supPart'], type: ['^Des', '^SupPart'] }
  - { id: gateway, title: Gateway, publish: false, query: ['^node$'] }
common:
  names: [Node, Error]
`);

const run = () => {
  const sources = collectSources(RAW);
  const internal = stripInternal(RAW);
  const cleaned = unlinkAnchors(stripDirectives(describeEntitlements(internal.sdl), STRIP));
  const scope = pruneToScope(cleaned, { contextMap: MAP, sources });
  const schema = buildSchema(scope.sdl);
  return { sources, internal, scope, schema, classification: classifySchema(schema, MAP, {}, sources) };
};

test('parseContextMap splits published and excluded contexts and validates adoptedBy', () => {
  assert.deepEqual(MAP.contexts.map((c) => c.id), ['supply', 'part-family', 'bom-analysis']);
  assert.deepEqual(MAP.excluded.map((c) => c.id), ['scr', 'design', 'gateway']);
  assert.throws(() => parseContextMap(`
contexts:
  - { id: a, title: A, publish: false, adoptedBy: b }
  - { id: b, title: B, publish: false }
`), /adopted by "b", which is not a published context/);
});

test('collectSources records the subgraph of types and root fields', () => {
  const { sources } = run();
  assert.deepEqual(sources.types.get('SupPartExtras'), ['Design']);
  assert.deepEqual(sources.fields.get('Query.supPartIdFromCiivaId'), ['Design']);
  assert.equal(sources.fields.get('Query.node'), undefined);
});

test('stripInternal removes internal operations, fields and arguments', () => {
  const { internal, schema } = run();
  assert.deepEqual(internal.removed.sort(), ['Query.supResolveParts', 'Query.supSearch.libraryIds', 'SupPart.altiumInternalId']);
  assert.equal(schema.getQueryType().getFields().supResolveParts, undefined);
  assert.deepEqual(schema.getQueryType().getFields().supSearch.args.map((a) => a.name), ['q']);
});

test('entitlements become description notes; access-control directives are gone', () => {
  const { schema, scope } = run();
  const part = schema.getType('SupPart').getFields();
  assert.equal(part.specs.description, 'Requires plan tier: `PRO`. Requires plan feature: `TECH_SPECS`.');
  assert.equal(schema.getQueryType().getFields().supSearch.args[0].description, 'Constraint: `max=2000`.');
  assert.equal(part.counts.description, 'A Map of counts.');
  assert.doesNotMatch(scope.sdl, /@(source|delegate|RequireAny|HasPlanTier|NexarRequire|Binding)\b/);
});

test('pruneToScope removes operations of unpublished contexts, using @source before the regexes', () => {
  const { scope, schema } = run();
  assert.deepEqual(Object.keys(schema.getQueryType().getFields()).sort(), ['datBomParts', 'supPartFamilySearch', 'supSearch']);
  const removed = Object.fromEntries(scope.removedOperations.map((o) => [o.name, o.context]));
  // supPartIdFromCiivaId matches the Supply regex '^sup', but comes from the Design subgraph.
  assert.deepEqual(removed, { datScrJob: 'scr', desProjectById: 'design', supPartIdFromCiivaId: 'design', node: 'gateway' });
});

test('pruneToScope drops unreachable types, and does not follow Node or Error implementers', () => {
  const { scope, schema } = run();
  for (const name of ['DesProject', 'DatScrJob', 'SupNotFoundError', 'Node', 'SupRole']) assert.equal(schema.getType(name), undefined, name);
  assert.ok(schema.getType('SupPartExtras'));
  assert.ok(scope.removedTypes.includes('DesProject'));
});

test('classification: subgraph owner, shared subgraph split by regex, adoption of reached unpublished types', () => {
  const { classification } = run();
  assert.equal(classification.operations.query.get('supPartFamilySearch'), 'part-family');
  assert.equal(classification.operations.query.get('datBomParts'), 'bom-analysis');
  assert.equal(classification.types.get('SupPartFamily'), 'part-family');
  assert.equal(classification.types.get('DatBomPart'), 'bom-analysis');
  // Design subgraph, reached from SupPart.extras: adopted by Supply.
  assert.equal(classification.types.get('SupPartExtras'), 'supply');
  assert.deepEqual(classification.unassigned, []);
});
