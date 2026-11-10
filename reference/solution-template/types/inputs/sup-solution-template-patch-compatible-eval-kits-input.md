---
title: "SupSolutionTemplatePatchCompatibleEvalKitsInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-patch-compatible-eval-kits-input"
bounded_context: "Solution Template"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplatePatchCompatibleEvalKitsInput

Input for adding or removing individual compatible eval kits on a solution template.

### Member Of

[`supSolutionTemplatePatchCompatibleEvalKits`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/mutations/sup-solution-template-patch-compatible-eval-kits.md) mutation

```graphql
input SupSolutionTemplatePatchCompatibleEvalKitsInput {
  solutionTemplateId: ID!
  addCompatibleEvalKits: [SupSolutionTemplateCompatibleEvalKitInput!]
  updateCompatibleEvalKits: [SupSolutionTemplateCompatibleEvalKitUpdateInput!]
  removeCompatibleEvalKitIds: [String!]
}
```

### Fields

#### `solutionTemplateId` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

The unique identifier of the solution template.

#### `addCompatibleEvalKits` · [`[SupSolutionTemplateCompatibleEvalKitInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-compatible-eval-kit-input.md) list input

Compatible eval kits to add, each with its own optional parameters.

#### `updateCompatibleEvalKits` · [`[SupSolutionTemplateCompatibleEvalKitUpdateInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-compatible-eval-kit-update-input.md) list input

Compatible eval kits to update, targeted by their identifier.

#### `removeCompatibleEvalKitIds` · [`[String!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

The identifier(s) of the compatible eval kits to remove.
