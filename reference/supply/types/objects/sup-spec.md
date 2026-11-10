---
title: "SupSpec"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-spec"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSpec

Represents a specific value of an Attribute for a given Part

### Member Of

[`SupPart`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part.md) object

```graphql
type SupSpec {
  attribute: SupAttribute!
  value: String!
  siValue: String!
  valueType: String!
  units: String!
  unitsName: String!
  unitsSymbol: String!
  displayValue: String!
}
```

### Fields

#### `attribute` · [`SupAttribute!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-attribute.md) non-null object

#### `value` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The actual value

#### `siValue` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The value of the spec in SI base units

#### `valueType` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The type of the value

#### `units` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The units of the value

#### `unitsName` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The short name of the units

#### `unitsSymbol` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The symbol of the units

#### `displayValue` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The formatted display value
