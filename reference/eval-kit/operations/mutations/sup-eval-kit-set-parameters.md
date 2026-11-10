---
title: "supEvalKitSetParameters"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/operations/mutations/sup-eval-kit-set-parameters"
bounded_context: "Eval Kit"
kind: "mutations"
experimental: false
deprecated: false
---

# supEvalKitSetParameters

Replace all parameters on an evaluation kit. Deletes all existing parameters and values, then inserts the new ones.

### Type

#### [`SupEvalKitSetParametersPayload`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit-set-parameters-payload.md) object

Payload returned after setting parameters on an evaluation kit.

```graphql
supEvalKitSetParameters(
  input: SupEvalKitSetParametersInput!
): SupEvalKitSetParametersPayload!
```

### Arguments

#### `input` · [`SupEvalKitSetParametersInput!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-eval-kit-set-parameters-input.md) non-null input
