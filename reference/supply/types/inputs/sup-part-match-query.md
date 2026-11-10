---
title: "SupPartMatchQuery"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/inputs/sup-part-match-query"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupPartMatchQuery

### Member Of

[`supMultiMatch`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/operations/queries/sup-multi-match.md) query

```graphql
input SupPartMatchQuery {
  mpn: String
  sku: String
  mpnOrSku: String
  manufacturer: String
  seller: String
  start: Int!
  limit: Int!
  reference: String
}
```

### Fields

#### `mpn` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

#### `sku` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

#### `mpnOrSku` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

#### `manufacturer` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

#### `seller` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

#### `start` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

#### `limit` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

#### `reference` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar
