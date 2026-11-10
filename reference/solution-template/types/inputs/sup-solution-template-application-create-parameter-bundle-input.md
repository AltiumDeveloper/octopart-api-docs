---
title: "SupSolutionTemplateApplicationCreateParameterBundleInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-application-create-parameter-bundle-input"
bounded_context: "Solution Template"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateApplicationCreateParameterBundleInput

### Member Of

[`SupSolutionTemplateCreateSolutionTemplateApplicationInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-create-solution-template-application-input.md) input · [`SupSolutionTemplateUpdateSolutionTemplateApplicationInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-update-solution-template-application-input.md) input

```graphql
input SupSolutionTemplateApplicationCreateParameterBundleInput {
  order: Int!
  required: Boolean!
  parameter: SupSolutionTemplateCreateParameterInput!
  values: [SupSolutionTemplateCreateParameterValueInput!]!
  question: String!
}
```

### Fields

#### `order` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

The display order of the parameter bundle.

#### `required` · [`Boolean!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Indicates whether the parameter bundle is required.

#### `parameter` · [`SupSolutionTemplateCreateParameterInput!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-create-parameter-input.md) non-null input

The parameter associated with the bundle.

#### `values` · [`[SupSolutionTemplateCreateParameterValueInput!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-create-parameter-value-input.md) non-null input

The list of values for the parameter.

#### `question` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar
