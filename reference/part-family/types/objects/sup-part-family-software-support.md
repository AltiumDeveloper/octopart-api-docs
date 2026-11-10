---
title: "SupPartFamilySoftwareSupport"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-software-support"
bounded_context: "Part Family"
kind: "objects"
experimental: false
deprecated: false
---

# SupPartFamilySoftwareSupport

`SupPartFamilySoftwareSupport` contains the details for the software support provided for a Part Family. `url` contains a link to the given software support package. `updatedAt` is the time we last updated this document.

### Member Of

[`SupPartGroup`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-group.md) object

```graphql
type SupPartFamilySoftwareSupport {
  title: String!
  url: String!
  updatedAt: DateTime!
}
```

### Fields

#### `title` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `url` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/date-time.md) non-null scalar
