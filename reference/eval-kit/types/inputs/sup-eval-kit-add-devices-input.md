---
title: "SupEvalKitAddDevicesInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-eval-kit-add-devices-input"
bounded_context: "Eval Kit"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitAddDevicesInput

Input for adding devices to an evaluation kit.

### Member Of

[`supEvalKitAddDevices`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/operations/mutations/sup-eval-kit-add-devices.md) mutation

```graphql
input SupEvalKitAddDevicesInput {
  evalKitId: ID!
  devices: [SupEvalKitDeviceInput!]!
}
```

### Fields

#### `evalKitId` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

The unique identifier of the evaluation kit.

#### `devices` · [`[SupEvalKitDeviceInput!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-eval-kit-device-input.md) non-null input

The list of devices to add.
