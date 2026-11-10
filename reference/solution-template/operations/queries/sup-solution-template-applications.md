---
title: "supSolutionTemplateApplications"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/queries/sup-solution-template-applications"
bounded_context: "Solution Template"
kind: "queries"
experimental: false
deprecated: false
---

# supSolutionTemplateApplications

List a solution template applications.

### Type

#### [`SupSolutionTemplateApplication`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-application.md) object

```graphql
supSolutionTemplateApplications(
  q: String
  start: Int! = 0
  limit: Int! = 10
): [SupSolutionTemplateApplication]!
```

### Arguments

#### `q` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The search query string. Leave empty to query all.

#### `start` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

Offset in the result set.

#### `limit` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

Page size of results.
