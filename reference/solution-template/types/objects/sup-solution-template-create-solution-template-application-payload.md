---
title: "SupSolutionTemplateCreateSolutionTemplateApplicationPayload"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-create-solution-template-application-payload"
bounded_context: "Solution Template"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateCreateSolutionTemplateApplicationPayload

Payload associated with creating a solution template application.

### Returned By

[`supSolutionTemplateCreateSolutionTemplateApplication`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/mutations/sup-solution-template-create-solution-template-application.md) mutation

```graphql
type SupSolutionTemplateCreateSolutionTemplateApplicationPayload {
  id: ID
  errors: [SupSolutionTemplateCreateSolutionTemplateApplicationError!]
}
```

### Fields

#### `id` · [`ID`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) scalar

Solution template application identifier.

#### `errors` · [`[SupSolutionTemplateCreateSolutionTemplateApplicationError!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/unions/sup-solution-template-create-solution-template-application-error.md) list union
