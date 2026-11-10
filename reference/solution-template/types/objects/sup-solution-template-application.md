---
title: "SupSolutionTemplateApplication"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-application"
bounded_context: "Solution Template"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateApplication

### Returned By

[`supSolutionTemplateApplicationByApplicationId`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/queries/sup-solution-template-application-by-application-id.md) query · [`supSolutionTemplateApplicationById`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/queries/sup-solution-template-application-by-id.md) query · [`supSolutionTemplateApplications`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/queries/sup-solution-template-applications.md) query

### Member Of

[`SupSolutionTemplateApplicationConnection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-application-connection.md) object · [`SupSolutionTemplateApplicationEdge`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-application-edge.md) object

```graphql
type SupSolutionTemplateApplication {
  id: ID!
  description: String
  applicationId: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  parameters: [SupSolutionTemplateApplicationParameterBundle!]!
  application: [SupCategory!]
}
```

### Fields

#### `id` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

The solution template application identifier.

#### `description` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The solution template application description.

#### `applicationId` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The solution template application identifier.

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The date and time when the solution template application was created.

#### `updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The date and time when the solution template application was updated.

#### `parameters` · [`[SupSolutionTemplateApplicationParameterBundle!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-application-parameter-bundle.md) non-null object

The list of parameter bundles associated with the solution template.

#### `application` · [`[SupCategory!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-category.md) list object Supply
