---
title: "SupRefResource"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-resource"
bounded_context: "Reference Design"
kind: "objects"
experimental: false
deprecated: false
---

# SupRefResource

Represents a resource related to a reference design.

### Member Of

[`SupRefDesign`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design.md) object · [`SupRefResource`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-resource.md) object

```graphql
type SupRefResource {
  title: String!
  description: String!
  note: String
  downloadText: String!
  downloadUrl: String!
  revisionDate: DateTime!
  otherResources: [SupRefResource]!
}
```

### Fields

#### `title` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The resource title.

#### `description` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The resource description.

#### `note` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

An optional note for the resource.

#### `downloadText` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The information of the download URL.

#### `downloadUrl` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The download URL for the resource.

#### `revisionDate` · [`DateTime!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The revision date for the resource.

#### `otherResources` · [`[SupRefResource]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-resource.md) non-null object

Other related resources.
