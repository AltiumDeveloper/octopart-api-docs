---
title: "supRefDesignByName"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/operations/queries/sup-ref-design-by-name"
bounded_context: "Reference Design"
kind: "queries"
experimental: false
deprecated: false
---

# supRefDesignByName

Search a specific reference design by its unique name.

### Type

#### [`SupRefDesign`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design.md) object

A reference design model aggregates the relevant documents, files and parts.

```graphql
supRefDesignByName(
  name: String!
): SupRefDesign
```

### Arguments

#### `name` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar
