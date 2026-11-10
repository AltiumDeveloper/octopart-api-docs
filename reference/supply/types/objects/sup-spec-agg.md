---
title: "SupSpecAgg"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-spec-agg"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSpecAgg

### Member Of

[`SupPartResultSet`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part-result-set.md) object

```graphql
type SupSpecAgg {
  attribute: SupAttribute!
  buckets: [SupSpecBucket!]!
  min: Float
  max: Float
  siMin: String
  siMax: String
  displayMin: String
  displayMax: String
  valueType: String!
  units: String
  unitsName: String
  unitsSymbol: String
}
```

### Fields

#### `attribute` · [`SupAttribute!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-attribute.md) non-null object

#### `buckets` · [`[SupSpecBucket!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-spec-bucket.md) non-null object

#### `min` · [`Float`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/float.md) scalar

min is the lowest spec value in this result set for numerical attributes

#### `max` · [`Float`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/float.md) scalar

max is the greatest spec value in this result set for numerical attributes

#### `siMin` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The min value in SI base units

#### `siMax` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The max value in SI base units

#### `displayMin` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

displayMin is the formatted string of min

#### `displayMax` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

displayMax is the formatted string of max

#### `valueType` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The type of the value

#### `units` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The units of the spec

#### `unitsName` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The short name of the units

#### `unitsSymbol` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The symbol of the units
