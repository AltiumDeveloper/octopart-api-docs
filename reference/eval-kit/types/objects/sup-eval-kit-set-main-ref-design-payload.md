---
title: "SupEvalKitSetMainRefDesignPayload"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit-set-main-ref-design-payload"
bounded_context: "Eval Kit"
kind: "objects"
experimental: false
deprecated: false
---

# SupEvalKitSetMainRefDesignPayload

Payload returned after setting the main reference design of an evaluation kit.

### Returned By

[`supEvalKitSetMainRefDesign`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/operations/mutations/sup-eval-kit-set-main-ref-design.md) mutation

```graphql
type SupEvalKitSetMainRefDesignPayload {
  success: Boolean
  errors: [SupEvalKitSetMainRefDesignError!]
}
```

### Fields

#### `success` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

Return true if operation succeeded.

#### `errors` · [`[SupEvalKitSetMainRefDesignError!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/unions/sup-eval-kit-set-main-ref-design-error.md) list union
