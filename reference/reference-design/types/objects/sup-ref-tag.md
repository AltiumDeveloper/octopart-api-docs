---
title: "SupRefTag"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-tag"
bounded_context: "Reference Design"
kind: "objects"
experimental: false
deprecated: false
---

# SupRefTag

Represents a tag for categorizing a reference design.

### Member Of

[`SupRefDesign`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design.md) object

```graphql
type SupRefTag {
  value: String!
  category: String!
}
```

### Fields

#### `value` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The tag value.

#### `category` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The tag category name.
