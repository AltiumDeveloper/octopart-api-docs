---
title: "SupAttribute"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-attribute"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupAttribute

Defines an attribute like Capacitance or Resistance.

### Returned By

[`supAttributes`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/operations/queries/sup-attributes.md) query

### Member Of

[`SupAttributeGroup`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-attribute-group.md) object · [`SupCategory`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-category.md) object · [`SupPartResultSet`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part-result-set.md) object · [`SupSpec`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-spec.md) object · [`SupSpecAgg`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-spec-agg.md) object

```graphql
type SupAttribute {
  id: ID!
  name: String!
  shortname: String!
  group: String!
  valueType: String!
  unitsName: String!
  unitsSymbol: String!
  shortDisplayname: String!
}
```

### Fields

#### `id` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

Internal Octopart ID

#### `name` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

display name

#### `shortname` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

use as key for `sort` or `filter` in part search

#### `group` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

use to group together similar attributes, e.g. Technical, Physical, Compliance

#### `valueType` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The type of the value

#### `unitsName` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The short name of the units

#### `unitsSymbol` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The symbol of the units

#### `shortDisplayname` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Shortened display name
