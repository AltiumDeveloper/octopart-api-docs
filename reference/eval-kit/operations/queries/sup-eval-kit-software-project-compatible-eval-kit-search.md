---
title: "supEvalKitSoftwareProjectCompatibleEvalKitSearch"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/operations/queries/sup-eval-kit-software-project-compatible-eval-kit-search"
bounded_context: "Eval Kit"
kind: "queries"
experimental: false
deprecated: false
---

# supEvalKitSoftwareProjectCompatibleEvalKitSearch

Searches evauation kit compatible software projects.

### Type

#### [`SupSoftwareProjectEvalKitSourceConnection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-software-project-eval-kit-source-connection.md) object

A connection to a list of items.

```graphql
supEvalKitSoftwareProjectCompatibleEvalKitSearch(
  softwareProjectId: ID!
  where: SupSoftwareProjectCompatibleEvalKitFilterInput
  first: Int
  after: String
  last: Int
  before: String
  order: [SupSoftwareProjectCompatibleEvalKitSortInput!]
): SupSoftwareProjectEvalKitSourceConnection
```

### Arguments

#### `softwareProjectId` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `where` · [`SupSoftwareProjectCompatibleEvalKitFilterInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-software-project-compatible-eval-kit-filter-input.md) input

#### `first` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first N elements from the list.

#### `after` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

#### `last` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last N elements from the list.

#### `before` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

#### `order` · [`[SupSoftwareProjectCompatibleEvalKitSortInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-software-project-compatible-eval-kit-sort-input.md) list input
