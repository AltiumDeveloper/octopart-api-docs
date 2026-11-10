---
title: "SupLevelBucket"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-level-bucket"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupLevelBucket

cadLevelAgg and contentVaultLevelAgg produce a LevelBucket with level + displayName

### Member Of

[`SupPartResultSet`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part-result-set.md) object

```graphql
type SupLevelBucket {
  level: Int
  displayName: String!
  count: Int
}
```

### Fields

#### `level` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

#### `displayName` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `count` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar
