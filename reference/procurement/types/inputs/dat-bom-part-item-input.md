---
title: "DatBomPartItemInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/procurement/types/inputs/dat-bom-part-item-input"
bounded_context: "Procurement"
kind: "inputs"
experimental: false
deprecated: false
---

# DatBomPartItemInput

### Member Of

[`datBomAnalyses`](https://altiumdeveloper.github.io/octopart-api-docs/reference/procurement/operations/queries/dat-bom-analyses.md) query · [`datBomDuplicateAnalyses`](https://altiumdeveloper.github.io/octopart-api-docs/reference/procurement/operations/queries/dat-bom-duplicate-analyses.md) query

```graphql
input DatBomPartItemInput {
  itemRefId: String
  partId: String!
  alternateCandidatePartIds: [String!]
  quantity: Int!
}
```

### Fields

#### `itemRefId` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

#### `partId` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `alternateCandidatePartIds` · [`[String!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

#### `quantity` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar
