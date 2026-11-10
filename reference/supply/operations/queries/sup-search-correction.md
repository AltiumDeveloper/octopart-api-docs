---
title: "supSearchCorrection"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/operations/queries/sup-search-correction"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supSearchCorrection

Suggest alternate queries when no results are found.

Requires plan tier: `ENTERPRISE`.

### Type

#### [`SupSearchCorrection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-search-correction.md) object

```graphql
supSearchCorrection(
  q: String!
  filters: Map
  fixedFilters: Map
): [SupSearchCorrection!]!
```

### Arguments

#### `q` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Constraint: `max=2000`.

#### `filters` · [`Map`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/map.md) scalar

#### `fixedFilters` · [`Map`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/map.md) scalar

Fixed filters that should always be applied i.e. don't suggest corrections that would drop these filters.
