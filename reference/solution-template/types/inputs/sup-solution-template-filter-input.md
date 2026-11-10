---
title: "SupSolutionTemplateFilterInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-filter-input"
bounded_context: "Solution Template"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateFilterInput

Input for filtering solution templates by additional conditions.

### Member Of

[`supSolutionTemplates`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/queries/sup-solution-templates.md) query

```graphql
input SupSolutionTemplateFilterInput {
  statuses: [SupSolutionTemplateStatus!]
  publisherIds: [String!]
  aiModelIds: [String!]
  hasAIModels: Boolean
  tags: [String!]
}
```

### Fields

#### `statuses` · [`[SupSolutionTemplateStatus!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/enums/sup-solution-template-status.md) list enum

Filter by a list of solution template statuses if specified.

#### `publisherIds` · [`[String!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

Filter by a list of publisher (company) identifiers if specified.

#### `aiModelIds` · [`[String!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

Filter by a list of AI model identifiers if specified.

#### `hasAIModels` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

Indicates whether the solution template has AI models; null applies no filtering.

#### `tags` · [`[String!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

Filter by a list of tag values (case-insensitive) if specified; matches solution templates having any of the tags.
