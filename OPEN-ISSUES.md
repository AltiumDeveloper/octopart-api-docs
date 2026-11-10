# Open issues

Decisions and gaps found while setting up the site. Nothing here is published.

## Scope decisions to confirm

1. **Content-management mutations.** Solution Template (21), Eval Kit (15) and Supply Software Project (10)
   mutations are published: create, update, delete, Set/Patch of parameters, images, tags and compatibility. None is gated
   `INTERNAL`. Confirm that they are meant for customers and not only for the content team.
2. **Design-subgraph `sup*` operations.** `supPartIdFromCiivaId`, `supPartIdsFromCiivaIds`, `supCiivaIdFromPartId`,
   `supCiivaIdsFromPartIds`, `supOctopartIdFromCiivaId`, `supPartExtrasByPartId` and `supPartExtrasByPartIds` come
   from the Design subgraph and are excluded with it. Confirm, or give them a published context.
3. **Gated but not `INTERNAL`.** `@RequireAny(roles: [CADMODELS])` (2 uses) and `@BlockAll(roles: [DISTRIBUTOR])`
   (4 uses, including `SupPartSeller.offers`) are stripped without a note. Decide whether customers should see them.
4. **`@Expensive`.** Stripped without a note. If it means "counts more against the rate limit", it is worth a
   description note like the plan tier.

## Ledger issues (raise with the ledger owners)

1. The Design row claims query `^supPart` and type `^SupPart`. By regex this would classify `supParts`,
   `supPartOffers` and `SupPart` as Design. The site classifies by `@source` subgraph first, so it is not affected.
2. The type regexes `^SupEvalKit`, `^SupSoftwareProject`, `^SupSolutionTemplate` and `^SupImage` are claimed by two
   or three rows each (Eval Kit, Solution Template, Supply Software Project, Reference Design). `@source` resolves all
   but `SupSoftwareProjectEvalKitProjectSourceType`, which is defined by two subgraphs (override in the context map).
3. The Supply Software Project description says "evil-kit".

## Upstream schema issues (raise with the subgraph owners)

1. `SupPart.counts` links `[Map](#map)`, an in-page anchor. The site strips such links (`unlinkAnchors`).
2. Procurement (ledger row BOM Analysis) has almost no descriptions: 0 of 8 object, interface and input types and 1 of 24 fields. Elsewhere,
   coverage of types and fields is 53–94% (Solution Template types, 61/116, is the lowest). Measured on
   2026-11-09 against the scoped schema.

## Site gaps

1. **Smoke test.** `npm run test:smoke` builds from the Altium 365 fixture (`test/fixtures/`) and asserts Altium 365
   pages. It needs an Octopart fixture and assertions; its overview assertions also expect
   the Common Data Model subset card, which this site's overview pages do not have (they keep the Entities table). It is not run in CI.
2. **Changelog.** The changelog tracker has no Octopart feed, so the site has no Changelog section.
3. **Pages.** The repository `AltiumDeveloper/octopart-api-docs` exists, with Discussions and giscus comments
   configured. After the first workflow run on `main` creates the `gh-pages` branch, set Settings → Pages → Source to
   "Deploy from a branch", `gh-pages`, root.
4. **Canonical domain.** `url` is `https://altiumdeveloper.github.io`, as on the Altium 365 site; GitHub serves the
   org's sites from `docs.developer.altium.com` with a 301 redirect. Sitemap, canonical links and `llms.txt` use the
   github.io URLs. Switch all sites together if the custom domain becomes the canonical one.
5. **Developer Center links.** The Developer Center pages and the Altium 365 API site do not link here yet.
6. **Errors guide.** It covers the `errors` array and payload errors only. The `extensions.code` values and HTTP
   status codes of the Nexar gateway are not documented anywhere public that this site could rely on.
