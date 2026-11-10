---
title: "SupSolutionTemplateSearchFilterInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-search-filter-input"
bounded_context: "Solution Template"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateSearchFilterInput

Represents the filter for searching solution templates.

### Member Of

[`supSolutionTemplateSearch`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/queries/sup-solution-template-search.md) query

```graphql
input SupSolutionTemplateSearchFilterInput {
  ids: [ID!]
  q: String
  title: String
  description: String
  stableNames: [String!]
  statuses: [SupSolutionTemplateStatus!]
  publisherIds: [String!]
  updatedByIds: [String!]
  aiModelIds: [String!]
  hasAIModels: Boolean
  tags: [String!]
}
```

### Fields

#### `ids` · [`[ID!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) list scalar

Searches by solution template identifiers.

#### `q` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Searches by text data (title, stable name, description).

#### `title` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Searches by solution template title.

#### `description` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Searches by description.

#### `stableNames` · [`[String!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

Searches by stable name identifier.

#### `statuses` · [`[SupSolutionTemplateStatus!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/enums/sup-solution-template-status.md) list enum

Searches by solution template status.

#### `publisherIds` · [`[String!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

Searches by a list of publisher (company) identifiers if specified.

#### `updatedByIds` · [`[String!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

Searches by a list of user identifiers who last modified the solution template.

#### `aiModelIds` · [`[String!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

Searches by AI model identifiers.

#### `hasAIModels` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

Indicates whether the solution template has AI models; null applies no filtering.

#### `tags` · [`[String!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

Searches by tag values (case-insensitive); matches solution templates having any of the specified tags.
