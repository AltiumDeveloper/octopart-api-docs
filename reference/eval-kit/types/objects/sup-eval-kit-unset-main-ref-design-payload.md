---
title: "SupEvalKitUnsetMainRefDesignPayload"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit-unset-main-ref-design-payload"
bounded_context: "Eval Kit"
kind: "objects"
experimental: false
deprecated: false
---

# SupEvalKitUnsetMainRefDesignPayload

Payload returned after unsetting the main reference design of an evaluation kit.

### Returned By

[`supEvalKitUnsetMainRefDesign`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/operations/mutations/sup-eval-kit-unset-main-ref-design.md) mutation

```graphql
type SupEvalKitUnsetMainRefDesignPayload {
  success: Boolean
  errors: [SupEvalKitUnsetMainRefDesignError!]
}
```

### Fields

#### `success` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

Return true if operation succeeded.

#### `errors` · [`[SupEvalKitUnsetMainRefDesignError!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/unions/sup-eval-kit-unset-main-ref-design-error.md) list union
