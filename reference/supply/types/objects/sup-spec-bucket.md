---
title: "SupSpecBucket"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-spec-bucket"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSpecBucket

### Member Of

[`SupSpecAgg`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-spec-agg.md) object

```graphql
type SupSpecBucket {
  displayValue: String!
  floatValue: Float
  count: Int
}
```

### Fields

#### `displayValue` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

displayValue is the string value. For numerical attributes it is the formatted version of floatValue

#### `floatValue` · [`Float`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/float.md) scalar

floatValue is populated if the attribute is numeric

#### `count` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

count will be null if aggregation timed out
