---
title: "SupAttributeGroup"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-attribute-group"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupAttributeGroup

Groups similar attributes together, as can be seen with column groups in specs view

### Member Of

[`SupPartResultSet`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part-result-set.md) object

```graphql
type SupAttributeGroup {
  name: String!
  attributes: [SupAttribute!]!
}
```

### Fields

#### `name` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Name of group, e.g. Technical, Physical, Compliance

#### `attributes` · [`[SupAttribute!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-attribute.md) non-null object

Attributes in group
