---
title: "SupPartFamilyPrice"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-price"
bounded_context: "Part Family"
kind: "objects"
experimental: false
deprecated: false
---

# SupPartFamilyPrice

`SupPartFamilyPrice` contains the min and max price of parts in the group. Sourced from octopart part offers.

### Member Of

[`SupPartGroup`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-group.md) object

```graphql
type SupPartFamilyPrice {
  min: Float!
  max: Float!
  median: Float!
  priceBreak: Int!
  currency: String!
}
```

### Fields

#### `min` · [`Float!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/float.md) non-null scalar

`min` is the minimum price of any part in this group.

#### `max` · [`Float!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/float.md) non-null scalar

`max` is the maximum price of any part in this group.

#### `median` · [`Float!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/float.md) non-null scalar

`median` is the median price of the parts in this group.

#### `priceBreak` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

`priceBreak` is the quantity break at which the prices were calculated.

#### `currency` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

`currency` of the price provided.
