---
title: "SupPartFamilyDocument"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-document"
bounded_context: "Part Family"
kind: "objects"
experimental: false
deprecated: false
---

# SupPartFamilyDocument

`SupPartFamilyDocument` contains the details for the documentation provided for a Part Family. `url` contains a link to the given document. `updatedAt` is the time we last updated this document.

### Member Of

[`SupPartGroup`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-group.md) object

```graphql
type SupPartFamilyDocument {
  type: SupPartFamilyDocumentType!
  description: String!
  url: String!
  updatedAt: DateTime!
}
```

### Fields

#### `type` · [`SupPartFamilyDocumentType!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/enums/sup-part-family-document-type.md) non-null enum

#### `description` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `url` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/date-time.md) non-null scalar
