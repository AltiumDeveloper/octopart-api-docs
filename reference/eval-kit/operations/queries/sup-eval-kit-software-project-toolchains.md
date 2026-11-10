---
title: "supEvalKitSoftwareProjectToolchains"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/operations/queries/sup-eval-kit-software-project-toolchains"
bounded_context: "Eval Kit"
kind: "queries"
experimental: false
deprecated: false
---

# supEvalKitSoftwareProjectToolchains

Search project source toolchains by querying in the database.

### Type

#### [`SupEvalKitSoftwareProjectToolchainConnection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit-software-project-toolchain-connection.md) object

A connection to a list of items.

```graphql
supEvalKitSoftwareProjectToolchains(
  where: SupEvalKitSoftwareProjectToolchainFilterInput
  first: Int
  after: String
  last: Int
  before: String
  order: [SupEvalKitSoftwareProjectToolchainSortInput!]
): SupEvalKitSoftwareProjectToolchainConnection
```

### Arguments

#### `where` · [`SupEvalKitSoftwareProjectToolchainFilterInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-eval-kit-software-project-toolchain-filter-input.md) input

#### `first` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first N elements from the list.

#### `after` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

#### `last` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last N elements from the list.

#### `before` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

#### `order` · [`[SupEvalKitSoftwareProjectToolchainSortInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-eval-kit-software-project-toolchain-sort-input.md) list input
