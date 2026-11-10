---
title: "supRefDesignById"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/operations/queries/sup-ref-design-by-id"
bounded_context: "Reference Design"
kind: "queries"
experimental: false
deprecated: false
---

# supRefDesignById

Search a specific reference design by its unique identifier.

### Type

#### [`SupRefDesign`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design.md) object

A reference design model aggregates the relevant documents, files and parts.

```graphql
supRefDesignById(
  id: ID!
): SupRefDesign
```

### Arguments

#### `id` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar
