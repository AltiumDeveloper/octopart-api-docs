---
title: "SupSolutionTemplateCreateSolutionTemplatePayload"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-create-solution-template-payload"
bounded_context: "Solution Template"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateCreateSolutionTemplatePayload

Payload associated with creating a solution template.

### Returned By

[`supSolutionTemplateCreateSolutionTemplate`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/mutations/sup-solution-template-create-solution-template.md) mutation

```graphql
type SupSolutionTemplateCreateSolutionTemplatePayload {
  id: ID
  errors: [SupSolutionTemplateCreateSolutionTemplateError!]
}
```

### Fields

#### `id` · [`ID`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) scalar

Solution template identifier.

#### `errors` · [`[SupSolutionTemplateCreateSolutionTemplateError!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/unions/sup-solution-template-create-solution-template-error.md) list union
