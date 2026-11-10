---
title: "SupPartFamilyPartResultSet"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-part-result-set"
bounded_context: "Part Family"
kind: "objects"
experimental: false
deprecated: false
---

# SupPartFamilyPartResultSet

`SupPartFamilyPartResultSet` is the search results with pagination information.

### Returned By

[`supPartFamilyPartSearch`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/operations/queries/sup-part-family-part-search.md) query

```graphql
type SupPartFamilyPartResultSet {
  hits: Int!
  partHits: Int!
  results: [SupPartFamilyPartSearchResult!]!
  appliedFilters: [SupPartFamilyAppliedFilter!]!
  partFamilyAgg: [SupPartFamilyBucket!]!
}
```

### Fields

#### `hits` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

Total number of parts and/or groups found.

#### `partHits` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

Total number of parts found.

#### `results` · [`[SupPartFamilyPartSearchResult!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/unions/sup-part-family-part-search-result.md) non-null union

List of part or part groups in the current result set.

#### `appliedFilters` · [`[SupPartFamilyAppliedFilter!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-applied-filter.md) non-null object

List of filters that were applied to this search.

#### `partFamilyAgg` · [`[SupPartFamilyBucket!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-bucket.md) non-null object

Aggregation for parts by part family.
