---
title: "SupPartFamilyResultSet"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-result-set"
bounded_context: "Part Family"
kind: "objects"
experimental: false
deprecated: false
---

# SupPartFamilyResultSet

`SupPartFamilyResultSet` is the search results with pagination and aggregation information.

### Returned By

[`supPartFamilySearch`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/operations/queries/sup-part-family-search.md) query

```graphql
type SupPartFamilyResultSet {
  hits: Int!
  results: [SupPartFamilySearchResult!]!
}
```

### Fields

#### `hits` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

Total number of part families and/or groups found.

#### `results` · [`[SupPartFamilySearchResult!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/unions/sup-part-family-search-result.md) non-null union

List of part families or part groups in the current result set.
