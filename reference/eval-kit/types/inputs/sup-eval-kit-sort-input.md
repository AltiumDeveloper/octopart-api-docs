---
title: "SupEvalKitSortInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-eval-kit-sort-input"
bounded_context: "Eval Kit"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitSortInput

Input type for sorting.

### Member Of

[`supEvalKitDetailsByRefDesignId`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/operations/queries/sup-eval-kit-details-by-ref-design-id.md) query · [`supEvalKitSearch`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/operations/queries/sup-eval-kit-search.md) query · [`SupSoftwareProjectCompatibleEvalKitSortInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-software-project-compatible-eval-kit-sort-input.md) input

```graphql
input SupEvalKitSortInput {
  title: SortEnumType
  createdAt: SortEnumType
  updatedAt: SortEnumType
}
```

### Fields

#### `title` · [`SortEnumType`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/enums/sort-enum-type.md) enum

Sorting by title.

#### `createdAt` · [`SortEnumType`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/enums/sort-enum-type.md) enum

Sorting by creation date.

#### `updatedAt` · [`SortEnumType`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/enums/sort-enum-type.md) enum

Sorting by last update date.
