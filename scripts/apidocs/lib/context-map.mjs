import { readFileSync } from 'node:fs';
import { parse } from 'yaml';

export const COMMON_ID = 'common';
const KINDS = ['query', 'mutation', 'subscription', 'type'];

function hasTopLevelAlternation(source) {
  let depth = 0;
  let inClass = false;
  for (let i = 0; i < source.length; i += 1) {
    const ch = source[i];
    if (ch === '\\') i += 1;
    else if (inClass) inClass = ch !== ']';
    else if (ch === '[') inClass = true;
    else if (ch === '(') depth += 1;
    else if (ch === ')') depth -= 1;
    else if (ch === '|' && depth === 0) return true;
  }
  return false;
}

const toRegExps = (list = []) => list.map((source) => {
  if (hasTopLevelAlternation(source)) {
    throw new Error(`context map: regex "${source}" uses top-level alternation; split it into separate entries`);
  }
  return new RegExp(source);
});

export function parseContextMap(text) {
  const raw = parse(text);
  if (!raw || !Array.isArray(raw.contexts) || raw.contexts.length === 0) {
    throw new Error('context map: "contexts" must be a non-empty list');
  }
  const ids = new Set([COMMON_ID]);
  const contexts = raw.contexts.map((entry, index) => {
    if (!entry?.id || !entry?.title) {
      throw new Error(`context map: contexts[${index}] needs "id" and "title"`);
    }
    if (ids.has(entry.id)) throw new Error(`context map: duplicate context id "${entry.id}"`);
    ids.add(entry.id);
    const context = {
      id: entry.id,
      title: entry.title,
      description: entry.description ?? '',
      cdm: [entry.cdm ?? []].flat(),
      // Gateway subgraphs (`@source(schema:)`) whose elements belong to this context; checked before the regexes.
      source: [entry.source ?? []].flat(),
      // `publish: false`: the context is classified (so its names are not "unassigned") but its operations are
      // removed from the published schema. Its types that published operations still reach go to `adoptedBy`.
      publish: entry.publish ?? true,
      adoptedBy: entry.adoptedBy ?? null,
      collapsed: entry.collapsed ?? true,
    };
    for (const kind of KINDS) context[kind] = toRegExps(entry[kind]);
    return context;
  });
  const common = {
    id: COMMON_ID,
    title: raw.common?.title ?? 'Common',
    description: raw.common?.description ?? '',
    cdm: [],
    source: [],
    publish: true,
    adoptedBy: null,
    collapsed: true,
    names: new Set(raw.common?.names ?? []),
    type: toRegExps(raw.common?.type),
  };
  const overrides = new Map(Object.entries(raw.overrides ?? {}));
  for (const [name, id] of overrides) {
    if (!ids.has(id)) throw new Error(`context map: override "${name}" points to unknown context "${id}"`);
  }
  const published = contexts.filter((context) => context.publish);
  const excluded = contexts.filter((context) => !context.publish);
  const publishedIds = new Set([COMMON_ID, ...published.map((context) => context.id)]);
  for (const context of excluded) {
    if (context.adoptedBy && !publishedIds.has(context.adoptedBy)) {
      throw new Error(`context map: "${context.id}" is adopted by "${context.adoptedBy}", which is not a published context`);
    }
  }
  for (const [name, id] of overrides) {
    if (!publishedIds.has(id)) throw new Error(`context map: override "${name}" points to unpublished context "${id}"`);
  }
  // `contexts` are the published ones (pages, sidebar, llms); `all` adds the excluded ones (classification only).
  return { contexts: published, excluded, all: contexts, common, overrides };
}

export function loadContextMap(path) {
  return parseContextMap(readFileSync(path, 'utf8'));
}

export function contextById(map, id) {
  return id === COMMON_ID ? map.common : (map.all ?? map.contexts).find((context) => context.id === id);
}
