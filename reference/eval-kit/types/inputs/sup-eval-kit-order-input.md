---
title: "SupEvalKitOrderInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-eval-kit-order-input"
bounded_context: "Eval Kit"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitOrderInput

Input type for ordering.

### Member Of

[`supEvalKits`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/operations/queries/sup-eval-kits.md) query

```graphql
input SupEvalKitOrderInput {
  field: SupEvalKitOrderField!
  direction: SupEvalKitOrderDirection!
}
```

### Fields

#### `field` · [`SupEvalKitOrderField!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/enums/sup-eval-kit-order-field.md) non-null enum

The field to order by.

#### `direction` · [`SupEvalKitOrderDirection!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/enums/sup-eval-kit-order-direction.md) non-null enum

The direction of the order.
