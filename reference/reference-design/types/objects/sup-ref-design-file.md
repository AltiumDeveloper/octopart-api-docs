---
title: "SupRefDesignFile"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design-file"
bounded_context: "Reference Design"
kind: "objects"
experimental: false
deprecated: false
---

# SupRefDesignFile

Represents a design file belonging to a reference design.

### Member Of

[`SupRefDesign`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design.md) object

```graphql
type SupRefDesignFile {
  refDesignFileId: String!
  name: String!
  url: String!
  type: String!
  extension: String!
  notes: [SupRefDesignNote]!
}
```

### Fields

#### `refDesignFileId` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The design file identifier.

#### `name` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The design file name.

#### `url` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The design file download URL.

#### `type` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The design file type.

#### `extension` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The design file extension.

#### `notes` · [`[SupRefDesignNote]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design-note.md) non-null object

Notes attached to the design file.
