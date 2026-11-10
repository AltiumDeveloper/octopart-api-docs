---
title: "SupEvalKitAddDevicesPayload"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit-add-devices-payload"
bounded_context: "Eval Kit"
kind: "objects"
experimental: false
deprecated: false
---

# SupEvalKitAddDevicesPayload

Payload returned after adding devices to the evaluation kit.

### Returned By

[`supEvalKitAddDevices`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/operations/mutations/sup-eval-kit-add-devices.md) mutation

```graphql
type SupEvalKitAddDevicesPayload {
  success: Boolean
  errors: [SupEvalKitAddDevicesError!]
}
```

### Fields

#### `success` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

Return true if operation succeeded.

#### `errors` · [`[SupEvalKitAddDevicesError!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/unions/sup-eval-kit-add-devices-error.md) list union
