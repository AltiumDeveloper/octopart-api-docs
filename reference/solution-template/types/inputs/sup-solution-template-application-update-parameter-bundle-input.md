---
title: "SupSolutionTemplateApplicationUpdateParameterBundleInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-application-update-parameter-bundle-input"
bounded_context: "Solution Template"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateApplicationUpdateParameterBundleInput

### Member Of

[`SupSolutionTemplateUpdateSolutionTemplateApplicationInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-update-solution-template-application-input.md) input

```graphql
input SupSolutionTemplateApplicationUpdateParameterBundleInput {
  order: Int
  required: Boolean
  parameter: SupSolutionTemplateUpdateParameterInput!
  newValues: [SupSolutionTemplateCreateParameterValueInput!]
  question: String!
}
```

### Fields

#### `order` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

The order of the parameter in the bundle.

#### `required` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

Indicates whether the parameter bundle is required.

#### `parameter` · [`SupSolutionTemplateUpdateParameterInput!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-update-parameter-input.md) non-null input

The parameter info identifier by parameter's title.

#### `newValues` · [`[SupSolutionTemplateCreateParameterValueInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-create-parameter-value-input.md) list input

Replace the parameter values with these ones.

#### `question` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar
