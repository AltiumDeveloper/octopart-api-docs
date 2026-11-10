---
title: "SupEvalKitDeleteDevicesPayload"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit-delete-devices-payload"
bounded_context: "Eval Kit"
kind: "objects"
experimental: false
deprecated: false
---

# SupEvalKitDeleteDevicesPayload

Payload returned after deleting devices from an evaluation kit.

### Returned By

[`supEvalKitDeleteDevices`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/operations/mutations/sup-eval-kit-delete-devices.md) mutation

```graphql
type SupEvalKitDeleteDevicesPayload {
  success: Boolean
  errors: [SupEvalKitDeleteDevicesError!]
}
```

### Fields

#### `success` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

Return true if operation succeeded.

#### `errors` · [`[SupEvalKitDeleteDevicesError!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/unions/sup-eval-kit-delete-devices-error.md) list union
