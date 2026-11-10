---
title: "SupSolutionTemplateSortInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-sort-input"
bounded_context: "Solution Template"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateSortInput

Input type for solution template sorting.

### Member Of

[`supSolutionTemplateSearch`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/queries/sup-solution-template-search.md) query

```graphql
input SupSolutionTemplateSortInput {
  title: SortEnumType
  stableName: SortEnumType
  createdAt: SortEnumType
  updatedAt: SortEnumType
  releaseDate: SortEnumType
}
```

### Fields

#### `title` · [`SortEnumType`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/enums/sort-enum-type.md) enum

Sort by the solution template title.

#### `stableName` · [`SortEnumType`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/enums/sort-enum-type.md) enum

Sort by the stable name identifier.

#### `createdAt` · [`SortEnumType`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/enums/sort-enum-type.md) enum

Sort by creation date.

#### `updatedAt` · [`SortEnumType`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/enums/sort-enum-type.md) enum

Sort by last update date.

#### `releaseDate` · [`SortEnumType`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/enums/sort-enum-type.md) enum

Sort by release date.
