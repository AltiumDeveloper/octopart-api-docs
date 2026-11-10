---
title: "DatBomPartItem"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/procurement/types/objects/dat-bom-part-item"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# DatBomPartItem

### Member Of

[`DatBomAnalysis`](https://altiumdeveloper.github.io/octopart-api-docs/reference/procurement/types/objects/dat-bom-analysis.md) object

```graphql
type DatBomPartItem {
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
