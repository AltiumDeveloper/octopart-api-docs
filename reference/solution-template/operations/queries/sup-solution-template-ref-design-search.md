---
title: "supSolutionTemplateRefDesignSearch"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/queries/sup-solution-template-ref-design-search"
bounded_context: "Solution Template"
kind: "queries"
experimental: false
deprecated: false
---

# supSolutionTemplateRefDesignSearch

Search solution templates and reference designs.

### Type

#### [`SupSolutionTemplateRefDesignResultSet`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-ref-design-result-set.md) object

Reference designs with pagination, aggregation information.

```graphql
supSolutionTemplateRefDesignSearch(
  q: String!
  start: Int!
  limit: Int!
  filter: SupSolutionTemplateRefDesignFilterInput
  order: [SupSolutionTemplateRefDesignOrderInput!]
): SupSolutionTemplateRefDesignResultSet!
```

### Arguments

#### `q` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `start` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

#### `limit` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

#### `filter` · [`SupSolutionTemplateRefDesignFilterInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-ref-design-filter-input.md) input

#### `order` · [`[SupSolutionTemplateRefDesignOrderInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-ref-design-order-input.md) list input
