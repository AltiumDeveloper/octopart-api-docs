---
title: "SupPartFamilyParameterAgg"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-parameter-agg"
bounded_context: "Part Family"
kind: "objects"
experimental: false
deprecated: false
---

# SupPartFamilyParameterAgg

Aggregation of parameter values, `buckets` contains aggregations of the different parameter values. Will contain a `min`, `max`, and `units` if the parameter is a numeric value.

### Member Of

[`SupPartFamilyParameter`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-parameter.md) object

```graphql
type SupPartFamilyParameterAgg {
  buckets(
    size: Int = 10
  ): [SupPartFamilyParameterBucket!]!
  min: Float
  max: Float
  units: String
}
```

### Fields

#### `buckets` · [`[SupPartFamilyParameterBucket!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-parameter-bucket.md) non-null object

Aggregation buckets for this parameter. 'size' specifies the number of aggregation buckets to include.

##### `size` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

#### `min` · [`Float`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/float.md) scalar

Min value of this parameter, if this is a numeric parameter.

#### `max` · [`Float`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/float.md) scalar

Max value of this parameter, if this is a numeric parameter.

#### `units` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Units of this parameter, if this is a numeric parameter.
