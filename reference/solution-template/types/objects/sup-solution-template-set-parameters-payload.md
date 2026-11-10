---
title: "SupSolutionTemplateSetParametersPayload"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-set-parameters-payload"
bounded_context: "Solution Template"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateSetParametersPayload

Payload for replacing all parameters on a solution template.

### Returned By

[`supSolutionTemplateSetParameters`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/mutations/sup-solution-template-set-parameters.md) mutation

```graphql
type SupSolutionTemplateSetParametersPayload {
  success: Boolean
  errors: [SupSolutionTemplateSetParametersError!]
}
```

### Fields

#### `success` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

Return true if operation succeeded.

#### `errors` · [`[SupSolutionTemplateSetParametersError!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/unions/sup-solution-template-set-parameters-error.md) list union
