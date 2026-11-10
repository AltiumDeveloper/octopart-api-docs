---
title: "supRefDesignsByIds"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/operations/queries/sup-ref-designs-by-ids"
bounded_context: "Reference Design"
kind: "queries"
experimental: false
deprecated: false
---

# supRefDesignsByIds

Search a specific reference designs by its unique identifiers.

### Type

#### [`SupRefDesign`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design.md) object

A reference design model aggregates the relevant documents, files and parts.

```graphql
supRefDesignsByIds(
  ids: [ID!]!
): [SupRefDesign]!
```

### Arguments

#### `ids` · [`[ID!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar
