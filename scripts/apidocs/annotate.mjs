#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync, realpathSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildSchema } from 'graphql';
import { contextById, loadContextMap } from './lib/context-map.mjs';
import { classifySchema } from './lib/classify.mjs';
import { annotateSdl, rootTypeNamesOf, stripDirectives, stripExperimentalPrefix, STRIP } from './lib/transform-sdl.mjs';
import { buildReport, formatReport, parseAllowlist } from './lib/report.mjs';
import { buildManifest } from './lib/manifest.mjs';
import { buildMismatches, renderMismatches } from './lib/mismatches.mjs';
import { DEFAULT_CDM_REF } from './lib/cdm.mjs';
import { collectSources, describeEntitlements, pruneToScope, stripInternal, unlinkAnchors } from './lib/scope.mjs';

const readJson = (path, fallback) => (existsSync(path) ? JSON.parse(readFileSync(path, 'utf8')) : fallback);

export function runAnnotate({
  schemaDir = '.schema',
  contextMapPath = 'config/context-map.yaml',
  allowlistPath = 'config/unassigned-allowlist.txt',
  publicSchemaPath = 'static/schema.graphql',
  mismatchesPath = null,
  now = new Date(),
} = {}) {
  const raw = readFileSync(join(schemaDir, 'raw.graphql'), 'utf8');
  const contextMap = loadContextMap(contextMapPath);
  // Subgraph of every type and root field, read before @source is stripped.
  const sources = collectSources(raw);
  const internal = stripInternal(raw);
  const cleaned = unlinkAnchors(stripDirectives(describeEntitlements(internal.sdl), STRIP));
  const scope = pruneToScope(cleaned, { contextMap, sources });
  const publicSdl = scope.sdl;
  const schema = buildSchema(publicSdl, { assumeValidSDL: true });
  const cdmIndex = readJson(join(schemaDir, 'cdm-index.json'), {});
  const classification = classifySchema(schema, contextMap, cdmIndex, sources);
  const annotated = stripExperimentalPrefix(annotateSdl(publicSdl, { classification, titleOf: (id) => contextById(contextMap, id).title,
    rootTypeNames: rootTypeNamesOf(schema) }));
  const allowlist = existsSync(allowlistPath) ? parseAllowlist(readFileSync(allowlistPath, 'utf8')) : new Set();
  const report = buildReport({ classification, cdmIndex, schema, contextMap, allowlist });
  report.scope = {
    internal: internal.removed,
    removedOperations: scope.removedOperations,
    removedTypes: scope.removedTypes.length,
  };

  writeFileSync(join(schemaDir, 'annotated.graphql'), annotated);
  mkdirSync(dirname(publicSchemaPath), { recursive: true });
  writeFileSync(publicSchemaPath, publicSdl);
  writeFileSync(join(schemaDir, 'report.json'), JSON.stringify(report, null, 2));
  writeFileSync(join(schemaDir, 'manifest.json'), JSON.stringify(buildManifest({ contextMap, classification, cdmIndex }), null, 2));
  if (mismatchesPath) {
    const cdm = readJson(join(schemaDir, 'cdm-meta.json'), { ref: process.env.CDM_REF || DEFAULT_CDM_REF, sha: null });
    mkdirSync(dirname(mismatchesPath), { recursive: true });
    writeFileSync(mismatchesPath, renderMismatches(buildMismatches({ report, cdmIndex, contextMap }), {
      generatedAt: now.toISOString(), cdm,
    }));
  }
  return { report };
}

if (process.argv[1] && realpathSync(fileURLToPath(import.meta.url)) === realpathSync(process.argv[1])) {
  const { report } = runAnnotate({
    contextMapPath: process.env.APIDOCS_CONTEXT_MAP || undefined,
    allowlistPath: process.env.APIDOCS_ALLOWLIST || undefined,
    mismatchesPath: process.env.APIDOCS_MISMATCHES_FILE || 'notes/cdm-mismatches.md',
  });
  console.log(formatReport(report));
  const byContext = {};
  for (const { context } of report.scope.removedOperations) byContext[context] = (byContext[context] ?? 0) + 1;
  console.log(`\nScope: removed ${report.scope.internal.length} internal elements, `
    + `${report.scope.removedOperations.length} operations of unpublished contexts `
    + `(${Object.entries(byContext).map(([id, n]) => `${id} ${n}`).join(', ')}), ${report.scope.removedTypes} unreachable types`);
  if (report.blocking.length > 0) {
    console.error(`\nannotate: ${report.blocking.length} unassigned names are not in the allowlist; failing the build.`);
    process.exit(1);
  }
}
