---
title: "SupPartFamilyParameterBucket"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-parameter-bucket"
bounded_context: "Part Family"
kind: "objects"
experimental: false
deprecated: false
---

# SupPartFamilyParameterBucket

Aggregation bucket for parameter values. If the parameter is discrete it will be a terms aggregation. If the parameter is numeric it will be a range aggregation and `min`, `max` will be populated.

### Member Of

[`SupPartFamilyParameterAgg`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-parameter-agg.md) object

```graphql
type SupPartFamilyParameterBucket {
  displayValue: String!
  min: Float
  max: Float
  count: Int!
}
```

### Fields

#### `displayValue` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `min` · [`Float`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/float.md) scalar

#### `max` · [`Float`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/float.md) scalar

#### `count` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar
