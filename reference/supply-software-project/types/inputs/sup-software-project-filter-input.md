---
title: "SupSoftwareProjectFilterInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-software-project-filter-input"
bounded_context: "Supply Software Project"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSoftwareProjectFilterInput

Input for filtering software projects by additional conditions.

### Member Of

[`supSoftwareProjects`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/operations/queries/sup-software-projects.md) query

```graphql
input SupSoftwareProjectFilterInput {
  types: [SupSoftwareProjectType!]
  publisherIds: [String!]
  isRecommended: Boolean
}
```

### Fields

#### `types` · [`[SupSoftwareProjectType!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/enums/sup-software-project-type.md) list enum

Filter by a list of software project types if specified.

#### `publisherIds` · [`[String!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

Filter by a list of publisher identifiers if specified.

#### `isRecommended` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

Filter by recommendation status if specified.
