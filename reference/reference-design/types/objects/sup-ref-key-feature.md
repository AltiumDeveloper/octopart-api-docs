---
title: "SupRefKeyFeature"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-key-feature"
bounded_context: "Reference Design"
kind: "objects"
experimental: false
deprecated: false
---

# SupRefKeyFeature

Represents a key feature of a reference design.

### Member Of

[`SupRefDesign`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design.md) object

```graphql
type SupRefKeyFeature {
  name: String!
  description: String!
  html: String
}
```

### Fields

#### `name` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The feature name.

#### `description` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The feature description.

#### `html` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The feature description in HTML format.
