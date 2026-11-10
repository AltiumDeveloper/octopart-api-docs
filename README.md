# Octopart API documentation

Source for https://altiumdeveloper.github.io/octopart-api-docs/, the GraphQL reference for the Octopart API as it is
positioned on the [Altium Developer Center](https://developer.altium.com/). The schema is served by the Nexar gateway
(`https://api.nexar.com/graphql`). The site is grouped by bounded context and shares its look, search UI and LLM
surface with the [Altium 365 API reference](https://github.com/AltiumDeveloper/platform-api-docs), through
[`@altium-developer/docusaurus-theme`](https://github.com/AltiumDeveloper/docusaurus-theme).

This repository started as a copy of `platform-api-docs`. The pipeline, search and llms scripts are the same. The
differences are the scope step (below), the context map and the site's own pages.

## Scope

The gateway serves more than this site documents. The seven published bounded contexts are the ledger rows
**Supply**, **Part Family**, **Reference Design**, **Solution Template**, **Eval Kit**, **Supply Software Project**
and **BOM Analysis** (published as **Procurement**). Everything else in the ledger is listed in `config/context-map.yaml` with `publish: false`:
Design (`des*`, documented in the Altium 365 API reference), Manufacturing, Admin, EDDI, SCR, Octocart,
Reporting, and the gateway's `node`/`nodes`.

`annotate` narrows the SDL before anything is rendered (`scripts/apidocs/lib/scope.mjs`):

1. It records the gateway subgraph of every type and root field (`@source(schema:)`), which is the first
   classification signal.
2. It removes elements gated to internal callers: operations, fields, arguments and enum values with
   `@RequireAny(roles: [INTERNAL])`, and descriptions starting `[INTERNAL]` or `**Internal.**`.
3. It writes `@HasPlanTier`, `@NexarRequire` and `@Binding` into descriptions ("Requires plan tier: `PRO`.",
   "Requires plan feature: `TECH_SPECS`.", "Constraint: `max=2000`.") and strips all access-control and stitching
   directives (`transform-sdl.mjs`, `STRIP`).
4. It removes the root fields of unpublished contexts, then every type that the remaining operations no longer reach.
   Implementers of `Node` and `Error` are not followed, because both interfaces are shared by every subgraph.

The published `schema.graphql` is the scoped SDL. `annotate` prints what it removed, and `.schema/report.json`
(`scope`) lists it.

## How it works

`npm run apidocs` runs the pipeline:

1. `fetch-schema` downloads the SDL (with applied directives) from the gateway (`?sdl`, no token needed).
   `NEXAR_API_GATEWAY` overrides the URL; `APIDOCS_SCHEMA_FILE` reads a local file instead.
2. `fetch-cdm` builds an API-type → CDM-entity index from the public CDM schema. Type pages link their CDM entity
   (nine Octopart entities are mapped today, all in the CDM `supply` subset). A CDM class names its API type in
   `platformAPI` when the Platform API also serves it, and in `nexarAPI` when only the Nexar gateway does; the index
   takes `platformAPI` first. `nexarAPI` is transitional: the supply API is moving to the platform.
   Overview pages list their CDM entities (Entities table) but have no Common Data Model subset card: the one
   `supply` subset spans every context, so its description would repeat on all of them.
3. `annotate` scopes the SDL (above) and assigns every type and operation to a bounded context using
   `config/context-map.yaml`, then writes `.schema/report.json`. The build fails if a name is unassigned and not
   listed in `config/unassigned-allowlist.txt`.
4. `graphql-to-doc`: graphql-markdown renders `docs/reference/**`.
5. `postprocess` writes the bounded-context overview pages and the sidebar index.
6. `search:index` writes the search index `static/search-index.json`.

`npm run build` then builds the Docusaurus site, and `npm run llms` adds the LLM surface to `build/`. The GitHub
workflow runs all three nightly.

There is no changelog section yet: the changelog tracker the Altium 365 site reads has no Octopart feed.
`fetch-changelog` and the changelog rendering are kept and can be enabled when one exists.

## Local development

Requires Node 22. The theme is installed from its GitHub release URL, which `.npmrc` (`allow-remote=root`) allows.

```bash
npm ci
npm run apidocs
npm start
```

Tests: `npm test` (unit), `npm run test:guides` (guide examples against `static/schema.graphql`; run
`npm run apidocs` first). `npm run test:smoke` still builds from the Altium 365 fixture and does not pass yet; see
[OPEN-ISSUES.md](OPEN-ISSUES.md).

## Changing the grouping

Edit `config/context-map.yaml`. Each entry mirrors a row of the Nexar ledger: `source` lists the gateway subgraphs the
context owns, and the query, mutation and type regexes are copied from the ledger. The precedence is: overrides, then
common names, then a single owning subgraph, then the CDM (no context lists a CDM subset here: the one `supply`
subset spans all of them), then the most specific regex. A subgraph that several contexts share (`Intel`) is split by their regexes. A type that lands in an
unpublished context but is still reached goes to that context's `adoptedBy`. Run
`npm run apidocs:fetch && npm run apidocs:annotate` to see the effect.

Keep the context map public-safe: no owner or team names, OAuth resources or internal links.

## Guides, search and the LLM surface

These work exactly as in `platform-api-docs`:

- Guides live in `docs/guides/*.mdx`. Every ` ```graphql ` operation is validated against the published SDL by
  `npm run test:guides`, and every guide needs at least one. Mark schema excerpts with ` ```graphql title="SDL" `.
  Use only public facts; link the Developer Center for authentication and plans instead of repeating them.
- Search runs in the browser over `static/search-index.json`, ranked by `src/search/engine.mjs` with the knobs in
  `config/search.yaml`. `npm run search:eval` checks the cases in `config/search-eval.yaml`.
- `npm run llms` writes `llms.txt`, per-context indexes and schema slices, and a Markdown twin of every page. The site
  identity those files use is in `scripts/apidocs/lib/site.mjs`.

## Failure notifications and the shrink guard

Same as `platform-api-docs`: on `main`, failed builds and failed guide examples open GitHub issues
(`.github/scripts/report-failures.cjs`), and `fetch-schema` refuses an SDL more than 50% smaller than the last
accepted one unless `APIDOCS_ALLOW_SHRINK=1` (or `allow_shrink` on a manual workflow run).
