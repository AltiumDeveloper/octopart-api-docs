---
title: "DatBomPartsResult"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/procurement/types/objects/dat-bom-parts-result"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# DatBomPartsResult

### Returned By

[`datBomPart`](https://altiumdeveloper.github.io/octopart-api-docs/reference/procurement/operations/queries/dat-bom-part.md) query · [`datBomParts`](https://altiumdeveloper.github.io/octopart-api-docs/reference/procurement/operations/queries/dat-bom-parts.md) query

```graphql
type DatBomPartsResult {
  itemRefId: String
  parts: [DatBomPart!]!
}
```

### Fields

#### `itemRefId` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

#### `parts` · [`[DatBomPart!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/procurement/types/objects/dat-bom-part.md) non-null object
