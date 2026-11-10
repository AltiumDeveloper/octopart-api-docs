---
title: "SupSoftwareProjectSearchFilterInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-software-project-search-filter-input"
bounded_context: "Supply Software Project"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSoftwareProjectSearchFilterInput

Represents the filter for searching software projects.

### Member Of

[`supSoftwareProjectSearch`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/operations/queries/sup-software-project-search.md) query

```graphql
input SupSoftwareProjectSearchFilterInput {
  ids: [ID!]
  q: String
  title: String
  description: String
  types: [SupSoftwareProjectType!]
  isRecommended: Boolean
}
```

### Fields

#### `ids` · [`[ID!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) list scalar

Searches by software project identifiers.

#### `q` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Searches by important fields (title, description).

#### `title` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Searches by title.

#### `description` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Searches by description.

#### `types` · [`[SupSoftwareProjectType!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/enums/sup-software-project-type.md) list enum

Searches by type.

#### `isRecommended` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

Searches by recommendation status.
