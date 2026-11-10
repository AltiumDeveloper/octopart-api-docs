---
title: "SupRefPoint2D"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-point-2-d"
bounded_context: "Reference Design"
kind: "objects"
experimental: false
deprecated: false
---

# SupRefPoint2D

Represents a 2D point for a file note.

### Member Of

[`SupRefDesignNote`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design-note.md) object

```graphql
type SupRefPoint2D {
  type: String!
  x: Float!
  y: Float!
}
```

### Fields

#### `type` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The point type.

#### `x` · [`Float!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/float.md) non-null scalar

The X coordinate.

#### `y` · [`Float!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/float.md) non-null scalar

The Y coordinate.
