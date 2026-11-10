---
title: "supPartFamilyPartSearch"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/operations/queries/sup-part-family-part-search"
bounded_context: "Part Family"
kind: "queries"
experimental: false
deprecated: false
---

# supPartFamilyPartSearch

Search for part and group them by Part Group if applicable.

### Type

#### [`SupPartFamilyPartResultSet`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-part-result-set.md) object

[`SupPartFamilyPartResultSet`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-part-result-set.md) is the search results with pagination information.

```graphql
supPartFamilyPartSearch(
  q: String
  mpn: String
  inStockOnly: Boolean
  hasDatasheetOnly: Boolean
  filters: Map
  start: Int! = 0
  limit: Int! = 20
): SupPartFamilyPartResultSet!
```

### Arguments

#### `q` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The query text for descriptive search.

#### `mpn` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The query text for MPN matching search. Override q when this input is given.

#### `inStockOnly` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

Filter to remove parts with no stocking distributors.

#### `hasDatasheetOnly` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

Filter to only include parts with a datasheet.

#### `filters` · [`Map`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/map.md) scalar

Spec Filters to be applied.

#### `start` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

Start offset of the results in the result set.

#### `limit` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

Limit of the number of results to return in the result set.
