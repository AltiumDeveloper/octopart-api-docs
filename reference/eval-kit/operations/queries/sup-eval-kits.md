---
title: "supEvalKits"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/operations/queries/sup-eval-kits"
bounded_context: "Eval Kit"
kind: "queries"
experimental: false
deprecated: false
---

# supEvalKits

List a evaluation kits.

### Type

#### [`SupEvalKit`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit.md) object

```graphql
supEvalKits(
  q: String
  start: Int! = 0
  limit: Int! = 10
  filter: SupEvalKitFilterInput
  order: [SupEvalKitOrderInput!]
): [SupEvalKit]!
```

### Arguments

#### `q` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The search query string. Leave empty to query all.

#### `start` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

Offset in the result set.

#### `limit` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

Page size of results.

#### `filter` · [`SupEvalKitFilterInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-eval-kit-filter-input.md) input

Optional structured filter input for searching.

#### `order` · [`[SupEvalKitOrderInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-eval-kit-order-input.md) list input

Order the results by one or more fields. The first input is main order field.
