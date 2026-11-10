---
title: "SupSolutionTemplatePatchParametersPayload"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-patch-parameters-payload"
bounded_context: "Solution Template"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplatePatchParametersPayload

Payload for patching parameters on a solution template.

### Returned By

[`supSolutionTemplatePatchParameters`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/mutations/sup-solution-template-patch-parameters.md) mutation

```graphql
type SupSolutionTemplatePatchParametersPayload {
  success: Boolean
  errors: [SupSolutionTemplatePatchParametersError!]
}
```

### Fields

#### `success` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

Return true if operation succeeded.

#### `errors` · [`[SupSolutionTemplatePatchParametersError!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/unions/sup-solution-template-patch-parameters-error.md) list union
