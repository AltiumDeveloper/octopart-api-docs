---
title: "supSoftwareProjectEvalKitCompatibleSoftwareProjectSearch"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/operations/queries/sup-software-project-eval-kit-compatible-software-project-search"
bounded_context: "Supply Software Project"
kind: "queries"
experimental: false
deprecated: false
---

# supSoftwareProjectEvalKitCompatibleSoftwareProjectSearch

Searches evauation kit compatible software projects.

### Type

#### [`SupEvalKitCompatibleSoftwareProjectConnection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/objects/sup-eval-kit-compatible-software-project-connection.md) object

A connection to a list of items.

```graphql
supSoftwareProjectEvalKitCompatibleSoftwareProjectSearch(
  evalKitId: ID!
  where: SupEvalKitCompatibleSoftwareProjectFilterInput
  first: Int
  after: String
  last: Int
  before: String
  order: [SupSoftwareProjectSortInput!]
): SupEvalKitCompatibleSoftwareProjectConnection
```

### Arguments

#### `evalKitId` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `where` · [`SupEvalKitCompatibleSoftwareProjectFilterInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-eval-kit-compatible-software-project-filter-input.md) input

#### `first` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first N elements from the list.

#### `after` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

#### `last` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last N elements from the list.

#### `before` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

#### `order` · [`[SupSoftwareProjectSortInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-software-project-sort-input.md) list input
