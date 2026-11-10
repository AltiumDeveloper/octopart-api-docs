---
title: "SupPartMatchOptions"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/inputs/sup-part-match-options"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupPartMatchOptions

### Member Of

[`supMultiMatch`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/operations/queries/sup-multi-match.md) query

```graphql
input SupPartMatchOptions {
  requireAuthorizedSellers: Boolean
  requireStockAvailable: Boolean
  filters: Map
}
```

### Fields

#### `requireAuthorizedSellers` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

If true, only parts with at least one authorized seller will be returned.

#### `requireStockAvailable` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

If true, only parts with stock available will be returned.

#### `filters` · [`Map`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/map.md) scalar

a key: value map of filters. See [filter values](https://octopart.com/api/v4/values#attributes)
