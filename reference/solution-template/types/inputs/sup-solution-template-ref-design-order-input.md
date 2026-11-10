---
title: "SupSolutionTemplateRefDesignOrderInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-ref-design-order-input"
bounded_context: "Solution Template"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateRefDesignOrderInput

Input for ordering solution templates or reference designs by one or more fields.

### Member Of

[`supSolutionTemplateRefDesignSearch`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/queries/sup-solution-template-ref-design-search.md) query

```graphql
input SupSolutionTemplateRefDesignOrderInput {
  title: SupSolutionTemplateRefDesignSortDirection
  type: SupSolutionTemplateRefDesignSortDirection
  createdAt: SupSolutionTemplateRefDesignSortDirection
  updatedAt: SupSolutionTemplateRefDesignSortDirection
  stableName: SupSolutionTemplateRefDesignSortDirection
  releaseDate: SupSolutionTemplateRefDesignSortDirection
}
```

### Fields

#### `title` · [`SupSolutionTemplateRefDesignSortDirection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/enums/sup-solution-template-ref-design-sort-direction.md) enum

Sort by title in the specified direction.

#### `type` · [`SupSolutionTemplateRefDesignSortDirection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/enums/sup-solution-template-ref-design-sort-direction.md) enum

Sort by type in the specified direction.

#### `createdAt` · [`SupSolutionTemplateRefDesignSortDirection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/enums/sup-solution-template-ref-design-sort-direction.md) enum

Sort by creation date in the specified direction.

#### `updatedAt` · [`SupSolutionTemplateRefDesignSortDirection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/enums/sup-solution-template-ref-design-sort-direction.md) enum

Sort by last update date in the specified direction.

#### `stableName` · [`SupSolutionTemplateRefDesignSortDirection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/enums/sup-solution-template-ref-design-sort-direction.md) enum

Sort by stable name in the specified direction.

#### `releaseDate` · [`SupSolutionTemplateRefDesignSortDirection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/enums/sup-solution-template-ref-design-sort-direction.md) enum

Sort by release date in the specified direction.
