---
title: "SupEvalKitCreateEvalKitPayload"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit-create-eval-kit-payload"
bounded_context: "Eval Kit"
kind: "objects"
experimental: false
deprecated: false
---

# SupEvalKitCreateEvalKitPayload

Payload associated with creating a evaluation kit.

### Returned By

[`supEvalKitCreateEvalKit`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/operations/mutations/sup-eval-kit-create-eval-kit.md) mutation

```graphql
type SupEvalKitCreateEvalKitPayload {
  id: ID
  errors: [SupEvalKitCreateEvalKitError!]
}
```

### Fields

#### `id` · [`ID`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) scalar

Evaluation kit identifier.

#### `errors` · [`[SupEvalKitCreateEvalKitError!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/unions/sup-eval-kit-create-eval-kit-error.md) list union
