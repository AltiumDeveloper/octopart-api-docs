---
title: "SupEvalKitParameterInfoInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-eval-kit-parameter-info-input"
bounded_context: "Eval Kit"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitParameterInfoInput

Identifies a parameter by its title.

### Member Of

[`SupEvalKitParameterInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-eval-kit-parameter-input.md) input · [`SupEvalKitPatchParametersInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-eval-kit-patch-parameters-input.md) input

```graphql
input SupEvalKitParameterInfoInput {
  title: String!
}
```

### Fields

#### `title` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The title of the parameter (case-sensitive).
