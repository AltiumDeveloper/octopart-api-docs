---
title: "SupEvalKitSearchFilterInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-eval-kit-search-filter-input"
bounded_context: "Eval Kit"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitSearchFilterInput

Represents the filter for searching evaluation kits.

### Member Of

[`supEvalKitSearch`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/operations/queries/sup-eval-kit-search.md) query

```graphql
input SupEvalKitSearchFilterInput {
  ids: [ID!]
  q: String
  title: String
  description: String
  partIds: [String!]
  refDesignIds: [ID!]
}
```

### Fields

#### `ids` · [`[ID!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) list scalar

Searches by evaluation kit identifiers.

#### `q` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Searches by important fields (title, description).

#### `title` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Searches by title.

#### `description` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Searches by description.

#### `partIds` · [`[String!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

Searches by part identifiers.

#### `refDesignIds` · [`[ID!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) list scalar

Searches by reference design identifiers.
