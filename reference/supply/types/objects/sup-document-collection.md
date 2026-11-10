---
title: "SupDocumentCollection"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-document-collection"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupDocumentCollection

DocumentCollection groups documents together by type: Datasheets, Compliance Statements.

### Member Of

[`SupPart`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part.md) object

```graphql
type SupDocumentCollection {
  name: String!
  documents: [SupDocument!]!
}
```

### Fields

#### `name` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Name of group, e.g. Datasheets

#### `documents` · [`[SupDocument!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-document.md) non-null object

List of Documents in group
