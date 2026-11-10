---
title: "SupSoftwareProjectCompatibleEvalKitFilterInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-software-project-compatible-eval-kit-filter-input"
bounded_context: "Eval Kit"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSoftwareProjectCompatibleEvalKitFilterInput

Represents the filter for searching compatible software projects.

### Member Of

[`supEvalKitSoftwareProjectCompatibleEvalKitSearch`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/operations/queries/sup-eval-kit-software-project-compatible-eval-kit-search.md) query

```graphql
input SupSoftwareProjectCompatibleEvalKitFilterInput {
  q: String
  evalKitIds: [ID!]
}
```

### Fields

#### `q` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Searches by important fields (evaluation kit title, evaluation kit description).

#### `evalKitIds` · [`[ID!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) list scalar

Searches by evaluation kit identifiers.
