---
title: "SupPartMatch"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part-match"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupPartMatch

### Returned By

[`supMultiMatch`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/operations/queries/sup-multi-match.md) query

```graphql
type SupPartMatch {
  reference: String
  hits: Int!
  parts: [SupPart!]!
  error: String
}
```

### Fields

#### `reference` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Will match `reference` supplied in PartMatchQuery.

#### `hits` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

Number of parts matched

#### `parts` · [`[SupPart!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part.md) non-null object

Matched parts (may be subset, based on start + limit)

#### `error` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Possible error message
