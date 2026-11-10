---
title: "DatBomPart"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/procurement/types/objects/dat-bom-part"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# DatBomPart

### Member Of

[`DatBomPartsResult`](https://altiumdeveloper.github.io/octopart-api-docs/reference/procurement/types/objects/dat-bom-parts-result.md) object

```graphql
type DatBomPart {
  partId: String!
  confidence: Float!
  strategy: DatBomPartSearchStrategy!
  part: [SupPart]!
}
```

### Fields

#### `partId` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `confidence` · [`Float!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/float.md) non-null scalar

#### `strategy` · [`DatBomPartSearchStrategy!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/procurement/types/enums/dat-bom-part-search-strategy.md) non-null enum

#### `part` · [`[SupPart]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part.md) non-null object Supply

Nexar supply part data for internal use only. Array of size 1.
