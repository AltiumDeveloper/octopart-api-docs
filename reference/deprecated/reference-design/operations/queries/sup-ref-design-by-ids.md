---
title: "supRefDesignByIds"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/deprecated/reference-design/operations/queries/sup-ref-design-by-ids"
bounded_context: "Reference Design"
kind: "queries"
experimental: false
deprecated: true
---

# supRefDesignByIds

> **Deprecated:** Use 'supRefDesignsByIds' instead.

Search a specific reference designs by its unique identifiers.

### Type

#### [`SupRefDesign`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design.md) object

A reference design model aggregates the relevant documents, files and parts.

```graphql
supRefDesignByIds(
  ids: [ID!]!
): [SupRefDesign!] @deprecated
```

### Arguments

#### `ids` · [`[ID!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar
