---
title: "SupAppliedFilter"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-applied-filter"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupAppliedFilter

Used to show the filters that are applied to current search.

### Member Of

[`SupPartResultSet`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part-result-set.md) object

```graphql
type SupAppliedFilter {
  shortname: String!
  name: String!
  values: [String!]!
  displayValues: [String!]!
  unitsSymbol: String
}
```

### Fields

#### `shortname` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

shortname is the key in the filters Map. Usually an attribute shortname, or `manufacturerId`, `distributorId`, etc.

#### `name` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

human readable name to display in the UI

#### `values` · [`[String!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

values in the filter Map.

#### `displayValues` · [`[String!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

human readable values to display in the UI

#### `unitsSymbol` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The symbol of the units
