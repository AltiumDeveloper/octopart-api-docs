---
title: "supEvalKitsByIds"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/operations/queries/sup-eval-kits-by-ids"
bounded_context: "Eval Kit"
kind: "queries"
experimental: false
deprecated: false
---

# supEvalKitsByIds

Search a specific evaluation kit by its unique identifier.

### Type

#### [`SupEvalKit`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit.md) object

```graphql
supEvalKitsByIds(
  ids: [ID!]!
): [SupEvalKit]!
```

### Arguments

#### `ids` · [`[ID!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar
