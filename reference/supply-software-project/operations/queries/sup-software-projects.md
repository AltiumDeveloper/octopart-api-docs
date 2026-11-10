---
title: "supSoftwareProjects"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/operations/queries/sup-software-projects"
bounded_context: "Supply Software Project"
kind: "queries"
experimental: false
deprecated: false
---

# supSoftwareProjects

List a reference solutions.

### Type

#### [`SupSoftwareProject`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/objects/sup-software-project.md) object

```graphql
supSoftwareProjects(
  q: String
  start: Int! = 0
  limit: Int! = 10
  filter: SupSoftwareProjectFilterInput
  order: [SupSoftwareProjectOrderInput!]
): [SupSoftwareProject]!
```

### Arguments

#### `q` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The search query string. Leave empty to query all.

#### `start` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

Offset in the result set.

#### `limit` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

Page size of results.

#### `filter` · [`SupSoftwareProjectFilterInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-software-project-filter-input.md) input

Optional structured filter input for searching.

#### `order` · [`[SupSoftwareProjectOrderInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-software-project-order-input.md) list input

Order the results by one or more fields. The first input is main order field.
