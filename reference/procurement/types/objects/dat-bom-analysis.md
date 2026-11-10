---
title: "DatBomAnalysis"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/procurement/types/objects/dat-bom-analysis"
bounded_context: "Procurement"
kind: "objects"
experimental: false
deprecated: false
---

# DatBomAnalysis

### Returned By

[`datBomAnalyses`](https://altiumdeveloper.github.io/octopart-api-docs/reference/procurement/operations/queries/dat-bom-analyses.md) query · [`datBomDuplicateAnalyses`](https://altiumdeveloper.github.io/octopart-api-docs/reference/procurement/operations/queries/dat-bom-duplicate-analyses.md) query

```graphql
type DatBomAnalysis {
  items: [DatBomPartItem!]!
  level: DatBomAnalysisLevel!
  message: String!
}
```

### Fields

#### `items` · [`[DatBomPartItem!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/procurement/types/objects/dat-bom-part-item.md) non-null object

#### `level` · [`DatBomAnalysisLevel!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/procurement/types/enums/dat-bom-analysis-level.md) non-null enum

#### `message` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar
