---
title: "SupSolutionTemplatePatchParametersInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-patch-parameters-input"
bounded_context: "Solution Template"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplatePatchParametersInput

Input for adding or removing individual parameters on a solution template.

### Member Of

[`supSolutionTemplatePatchParameters`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/mutations/sup-solution-template-patch-parameters.md) mutation

```graphql
input SupSolutionTemplatePatchParametersInput {
  solutionTemplateId: ID!
  addParameters: [SupSolutionTemplateParameterBundleInput!]
  updateParameters: [SupSolutionTemplateParameterBundleInput!]
  removeParameterTitles: [String!]
}
```

### Fields

#### `solutionTemplateId` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

The unique identifier of the solution template.

#### `addParameters` · [`[SupSolutionTemplateParameterBundleInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-parameter-bundle-input.md) list input

Parameters to add. Fails if a title already exists on this solution template.

#### `updateParameters` · [`[SupSolutionTemplateParameterBundleInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-parameter-bundle-input.md) list input

Parameters to update. Fails if a title does not already exist on this solution template.

#### `removeParameterTitles` · [`[String!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

Parameter titles to remove.
