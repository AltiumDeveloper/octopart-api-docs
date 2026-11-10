---
title: "SupCadBucket"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-cad-bucket"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupCadBucket

cadAgg produces a CadBucket with the count of parts that have CAD Symbol + Footprint and 3D model

### Member Of

[`SupPartResultSet`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part-result-set.md) object

```graphql
type SupCadBucket {
  cadState: String!
  count: Int
}
```

### Fields

#### `cadState` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `count` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar
