---
title: "SupEvalKitSetMainRefDesignInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-eval-kit-set-main-ref-design-input"
bounded_context: "Eval Kit"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitSetMainRefDesignInput

Input for setting the main reference design of an evaluation kit.

### Member Of

[`supEvalKitSetMainRefDesign`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/operations/mutations/sup-eval-kit-set-main-ref-design.md) mutation

```graphql
input SupEvalKitSetMainRefDesignInput {
  evalKitId: ID!
  refDesignId: ID!
}
```

### Fields

#### `evalKitId` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

The unique identifier of the evaluation kit.

#### `refDesignId` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

The unique identifier of the reference design to set as main.
