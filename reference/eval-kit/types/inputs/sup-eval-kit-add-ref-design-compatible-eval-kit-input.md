---
title: "SupEvalKitAddRefDesignCompatibleEvalKitInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-eval-kit-add-ref-design-compatible-eval-kit-input"
bounded_context: "Eval Kit"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitAddRefDesignCompatibleEvalKitInput

Input for adding compatible evaluation kits to a reference design.

### Member Of

[`supEvalKitAddRefDesignCompatibleEvalKit`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/operations/mutations/sup-eval-kit-add-ref-design-compatible-eval-kit.md) mutation

```graphql
input SupEvalKitAddRefDesignCompatibleEvalKitInput {
  refDesignId: ID!
  evalKitIds: [ID!]!
}
```

### Fields

#### `refDesignId` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

The ID of the reference design to which the evaluation kits will be added.

#### `evalKitIds` · [`[ID!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

The list of evaluation kit IDs to be added as compatible with the reference design.
