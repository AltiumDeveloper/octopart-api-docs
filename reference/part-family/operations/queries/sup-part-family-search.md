---
title: "supPartFamilySearch"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/operations/queries/sup-part-family-search"
bounded_context: "Part Family"
kind: "queries"
experimental: false
deprecated: false
---

# supPartFamilySearch

Search for part families and groups. There is a limit on the number of parts allowed for each group. If you want the complete set of parts for a group make a follow up request to [`supPartGroupByName`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/operations/queries/sup-part-group-by-name.md) or [`supPartGroupById`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/operations/queries/sup-part-group-by-id.md).

### Type

#### [`SupPartFamilyResultSet`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-result-set.md) object

[`SupPartFamilyResultSet`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-result-set.md) is the search results with pagination and aggregation information.

```graphql
supPartFamilySearch(
  q: String!
  filters: SupPartFamilyFilterInput
  start: Int = 0
  limit: Int = 10
): SupPartFamilyResultSet!
```

### Arguments

#### `q` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The query text for the descriptive search of the part groups.

#### `filters` · [`SupPartFamilyFilterInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/inputs/sup-part-family-filter-input.md) input

Part group filters to be applied to this search.

#### `start` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

Start offset of the results in the result set.

#### `limit` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

Page size of the results in the result set.
