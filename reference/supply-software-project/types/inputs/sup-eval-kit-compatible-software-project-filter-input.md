---
title: "SupEvalKitCompatibleSoftwareProjectFilterInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-eval-kit-compatible-software-project-filter-input"
bounded_context: "Supply Software Project"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitCompatibleSoftwareProjectFilterInput

Represents the filter for searching compatible software projects.

### Member Of

[`supSoftwareProjectEvalKitCompatibleSoftwareProjectSearch`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/operations/queries/sup-software-project-eval-kit-compatible-software-project-search.md) query

```graphql
input SupEvalKitCompatibleSoftwareProjectFilterInput {
  q: String
  title: String
  description: String
  types: [SupSoftwareProjectType!]
}
```

### Fields

#### `q` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Searches by important fields (title, description).

#### `title` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Searches by title.

#### `description` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Searches by description.

#### `types` · [`[SupSoftwareProjectType!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/enums/sup-software-project-type.md) list enum

Searches by type.
