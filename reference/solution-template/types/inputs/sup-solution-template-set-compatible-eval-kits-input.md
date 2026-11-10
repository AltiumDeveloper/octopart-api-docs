---
title: "SupSolutionTemplateSetCompatibleEvalKitsInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-set-compatible-eval-kits-input"
bounded_context: "Solution Template"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateSetCompatibleEvalKitsInput

Input for replacing all compatible eval kits on a solution template.

### Member Of

[`supSolutionTemplateSetCompatibleEvalKits`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/mutations/sup-solution-template-set-compatible-eval-kits.md) mutation

```graphql
input SupSolutionTemplateSetCompatibleEvalKitsInput {
  solutionTemplateId: ID!
  compatibleEvalKits: [SupSolutionTemplateCompatibleEvalKitInput!]
}
```

### Fields

#### `solutionTemplateId` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

The unique identifier of the solution template.

#### `compatibleEvalKits` · [`[SupSolutionTemplateCompatibleEvalKitInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-compatible-eval-kit-input.md) list input

The new set of compatible eval kits. Replaces all existing compatible eval kits.
