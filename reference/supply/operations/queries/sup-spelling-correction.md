---
title: "supSpellingCorrection"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/operations/queries/sup-spelling-correction"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supSpellingCorrection

Suggest an alternate `q` when no results are found. This treats the query as an MPN search so will return suggestions based on MPNs.

Requires plan tier: `ENTERPRISE`.

### Type

#### [`SupSpellingCorrection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-spelling-correction.md) object

```graphql
supSpellingCorrection(
  q: String!
): [SupSpellingCorrection!]!
```

### Arguments

#### `q` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

query string to correct

Constraint: `max=2000`.
