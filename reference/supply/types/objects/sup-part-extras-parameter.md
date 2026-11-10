---
title: "SupPartExtrasParameter"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part-extras-parameter"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupPartExtrasParameter

Nexar supply part data for internal use only.

### Member Of

[`SupPartExtras`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part-extras.md) object

```graphql
type SupPartExtrasParameter {
  name: String!
  unit: String
  value: [String!]
}
```

### Fields

#### `name` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Parameter name.

#### `unit` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Parameter unit.

#### `value` · [`[String!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

Parameter value.
