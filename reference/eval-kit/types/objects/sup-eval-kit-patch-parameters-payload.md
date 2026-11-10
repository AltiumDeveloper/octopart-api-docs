---
title: "SupEvalKitPatchParametersPayload"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit-patch-parameters-payload"
bounded_context: "Eval Kit"
kind: "objects"
experimental: false
deprecated: false
---

# SupEvalKitPatchParametersPayload

Payload returned after patching parameters on an evaluation kit.

### Returned By

[`supEvalKitPatchParameters`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/operations/mutations/sup-eval-kit-patch-parameters.md) mutation

```graphql
type SupEvalKitPatchParametersPayload {
  success: Boolean
  errors: [SupEvalKitPatchParametersError!]
}
```

### Fields

#### `success` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

Return true if operation succeeded.

#### `errors` · [`[SupEvalKitPatchParametersError!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/unions/sup-eval-kit-patch-parameters-error.md) list union
