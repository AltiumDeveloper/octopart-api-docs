---
title: "SupEvalKitPatchParametersInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-eval-kit-patch-parameters-input"
bounded_context: "Eval Kit"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitPatchParametersInput

Input for patching parameters on an evaluation kit.

### Member Of

[`supEvalKitPatchParameters`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/operations/mutations/sup-eval-kit-patch-parameters.md) mutation

```graphql
input SupEvalKitPatchParametersInput {
  evaluationKitId: ID!
  addParameters: [SupEvalKitParameterInput!]
  removeParameters: [SupEvalKitParameterInfoInput!]
}
```

### Fields

#### `evaluationKitId` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

The unique identifier of the evaluation kit.

#### `addParameters` · [`[SupEvalKitParameterInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-eval-kit-parameter-input.md) list input

Parameters to add or update. Creates the parameter if new, replaces its values if it already exists.

#### `removeParameters` · [`[SupEvalKitParameterInfoInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-eval-kit-parameter-info-input.md) list input

Titles of parameters to remove entirely from this evaluation kit.
