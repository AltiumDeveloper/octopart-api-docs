---
title: "SupSolutionTemplateIndexSolutionTemplatePayload"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-index-solution-template-payload"
bounded_context: "Solution Template"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateIndexSolutionTemplatePayload

Payload associated with indexing a solution template.

### Returned By

[`supSolutionTemplateIndexSolutionTemplate`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/mutations/sup-solution-template-index-solution-template.md) mutation

```graphql
type SupSolutionTemplateIndexSolutionTemplatePayload {
  success: Boolean
  errors: [SupSolutionTemplateIndexSolutionTemplateError!]
}
```

### Fields

#### `success` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

Indicates whether the indexing operation was successful.

#### `errors` · [`[SupSolutionTemplateIndexSolutionTemplateError!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/unions/sup-solution-template-index-solution-template-error.md) list union
