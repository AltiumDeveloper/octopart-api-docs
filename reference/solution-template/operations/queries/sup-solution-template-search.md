---
title: "supSolutionTemplateSearch"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/queries/sup-solution-template-search"
bounded_context: "Solution Template"
kind: "queries"
experimental: false
deprecated: false
---

# supSolutionTemplateSearch

Searches solution templates.

### Type

#### [`SupSolutionTemplateConnection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-connection.md) object

A connection to a list of items.

```graphql
supSolutionTemplateSearch(
  where: SupSolutionTemplateSearchFilterInput
  first: Int
  after: String
  last: Int
  before: String
  order: [SupSolutionTemplateSortInput!]
): SupSolutionTemplateConnection
```

### Arguments

#### `where` · [`SupSolutionTemplateSearchFilterInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-search-filter-input.md) input

#### `first` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first N elements from the list.

#### `after` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

#### `last` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last N elements from the list.

#### `before` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

#### `order` · [`[SupSolutionTemplateSortInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-sort-input.md) list input
