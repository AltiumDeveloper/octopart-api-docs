---
title: "SupEvalKitByRefDesignFilterInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-eval-kit-by-ref-design-filter-input"
bounded_context: "Eval Kit"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitByRefDesignFilterInput

Represents the filter for searching evaluation kits.

### Member Of

[`supEvalKitDetailsByRefDesignId`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/operations/queries/sup-eval-kit-details-by-ref-design-id.md) query

```graphql
input SupEvalKitByRefDesignFilterInput {
  q: String
  title: String
  description: String
  partIds: [String!]
}
```

### Fields

#### `q` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Searches by important fields (title, description).

#### `title` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Searches by title.

#### `description` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Searches by description.

#### `partIds` · [`[String!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

Searches by part identifiers.
