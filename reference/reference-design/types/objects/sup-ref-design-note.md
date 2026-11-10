---
title: "SupRefDesignNote"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design-note"
bounded_context: "Reference Design"
kind: "objects"
experimental: false
deprecated: false
---

# SupRefDesignNote

Represents a note attached to a reference design file.

### Member Of

[`SupRefDesignFile`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design-file.md) object

```graphql
type SupRefDesignNote {
  title: String!
  description: String
  objectId: String
  attachment: SupDocument
  points: [SupRefPoint2D]!
}
```

### Fields

#### `title` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The note title.

#### `description` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The note description.

#### `objectId` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The note identifier.

#### `attachment` · [`SupDocument`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-document.md) object Supply

The attached resource for the note.

#### `points` · [`[SupRefPoint2D]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-point-2-d.md) non-null object

Points representing the position of the note attached on the design file.
