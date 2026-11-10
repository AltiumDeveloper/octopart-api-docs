---
title: "SupRefDesignOrderInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/inputs/sup-ref-design-order-input"
bounded_context: "Reference Design"
kind: "inputs"
experimental: false
deprecated: false
---

# SupRefDesignOrderInput

Input for ordering reference designs by one or more fields.

### Member Of

[`supRefDesigns`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/operations/queries/sup-ref-designs.md) query

```graphql
input SupRefDesignOrderInput {
  title: SupRefSortDirection
  type: SupRefSortDirection
  createdAt: SupRefSortDirection
  updatedAt: SupRefSortDirection
  releaseDate: SupRefSortDirection
  stableName: SupRefSortDirection
  subtitle: SupRefSortDirection
}
```

### Fields

#### `title` · [`SupRefSortDirection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/enums/sup-ref-sort-direction.md) enum

Sort by title in the specified direction.

#### `type` · [`SupRefSortDirection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/enums/sup-ref-sort-direction.md) enum

Sort by type in the specified direction.

#### `createdAt` · [`SupRefSortDirection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/enums/sup-ref-sort-direction.md) enum

Sort by creation date in the specified direction.

#### `updatedAt` · [`SupRefSortDirection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/enums/sup-ref-sort-direction.md) enum

Sort by last update date in the specified direction.

#### `releaseDate` · [`SupRefSortDirection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/enums/sup-ref-sort-direction.md) enum

Sort by release date in the specified direction.

#### `stableName` · [`SupRefSortDirection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/enums/sup-ref-sort-direction.md) enum

Sort by stable name in the specified direction.

#### `subtitle` · [`SupRefSortDirection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/enums/sup-ref-sort-direction.md) enum

Sort by subtitle in the specified direction.
