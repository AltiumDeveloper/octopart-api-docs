---
title: "supRefDesigns"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/operations/queries/sup-ref-designs"
bounded_context: "Reference Design"
kind: "queries"
experimental: false
deprecated: false
---

# supRefDesigns

Search a reference designs.

### Type

#### [`SupRefDesignResultSet`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design-result-set.md) object

Reference designs with pagination, aggregation information.

```graphql
supRefDesigns(
  q: String!
  filter: SupRefDesignFilterInput
  order: [SupRefDesignOrderInput!]
  start: Int! = 0
  limit: Int! = 10
): SupRefDesignResultSet!
```

### Arguments

#### `q` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The search query string. Leave empty to query all.

#### `filter` · [`SupRefDesignFilterInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/inputs/sup-ref-design-filter-input.md) input

Optional structured filter input for searching.

#### `order` · [`[SupRefDesignOrderInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/inputs/sup-ref-design-order-input.md) list input

Sort order for results. Supports multiple fields.

#### `start` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

Offset in the result set.

#### `limit` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

Page size of results.
