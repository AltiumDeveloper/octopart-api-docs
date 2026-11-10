---
title: "SupDocument"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-document"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupDocument

Document represents a PDF file and can be a Datasheet, Compliance Document, PCN, etc.

### Member Of

[`SupDocumentCollection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-document-collection.md) object · [`SupPart`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part.md) object · [`SupRefDesign`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design.md) object · [`SupRefDesignNote`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design-note.md) object

```graphql
type SupDocument {
  name: String!
  pageCount: Int
  createdAt: DateTime
  url: String!
  creditString: String!
  creditUrl: String!
  mimeType: String!
}
```

### Fields

#### `name` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `pageCount` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

#### `createdAt` · [`DateTime`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/date-time.md) scalar

#### `url` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `creditString` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `creditUrl` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `mimeType` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar
