---
title: "SupSolutionTemplateSetParametersInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-set-parameters-input"
bounded_context: "Solution Template"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateSetParametersInput

Input for replacing all parameters on a solution template.

### Member Of

[`supSolutionTemplateSetParameters`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/mutations/sup-solution-template-set-parameters.md) mutation

```graphql
input SupSolutionTemplateSetParametersInput {
  solutionTemplateId: ID!
  parameters: [SupSolutionTemplateParameterBundleInput!]
}
```

### Fields

#### `solutionTemplateId` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

The unique identifier of the solution template.

#### `parameters` · [`[SupSolutionTemplateParameterBundleInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-parameter-bundle-input.md) list input

The new set of parameters. Replaces all existing top-level parameters.
