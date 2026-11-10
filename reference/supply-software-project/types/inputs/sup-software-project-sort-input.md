---
title: "SupSoftwareProjectSortInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-software-project-sort-input"
bounded_context: "Supply Software Project"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSoftwareProjectSortInput

Input type for sorting.

### Member Of

[`supSoftwareProjectEvalKitCompatibleSoftwareProjectSearch`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/operations/queries/sup-software-project-eval-kit-compatible-software-project-search.md) query · [`supSoftwareProjectSearch`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/operations/queries/sup-software-project-search.md) query

```graphql
input SupSoftwareProjectSortInput {
  title: SortEnumType
  recommendScore: SortEnumType
  isRecommended: SortEnumType
  createdAt: SortEnumType
  updatedAt: SortEnumType
}
```

### Fields

#### `title` · [`SortEnumType`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/enums/sort-enum-type.md) enum

Sorting by title.

#### `recommendScore` · [`SortEnumType`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/enums/sort-enum-type.md) enum

Sorting by recommendation score.

#### `isRecommended` · [`SortEnumType`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/enums/sort-enum-type.md) enum

Sorting by recommendation status.

#### `createdAt` · [`SortEnumType`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/enums/sort-enum-type.md) enum

Sorting by creation date.

#### `updatedAt` · [`SortEnumType`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/enums/sort-enum-type.md) enum

Sorting by last update date.
