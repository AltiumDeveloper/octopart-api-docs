---
title: "SupEvalKitSetParametersPayload"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit-set-parameters-payload"
bounded_context: "Eval Kit"
kind: "objects"
experimental: false
deprecated: false
---

# SupEvalKitSetParametersPayload

Payload returned after setting parameters on an evaluation kit.

### Returned By

[`supEvalKitSetParameters`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/operations/mutations/sup-eval-kit-set-parameters.md) mutation

```graphql
type SupEvalKitSetParametersPayload {
  success: Boolean
  errors: [SupEvalKitSetParametersError!]
}
```

### Fields

#### `success` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

Return true if operation succeeded.

#### `errors` · [`[SupEvalKitSetParametersError!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/unions/sup-eval-kit-set-parameters-error.md) list union
