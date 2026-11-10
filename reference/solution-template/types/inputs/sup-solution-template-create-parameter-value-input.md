---
title: "SupSolutionTemplateCreateParameterValueInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-create-parameter-value-input"
bounded_context: "Solution Template"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateCreateParameterValueInput

### Member Of

[`SupSolutionTemplateApplicationCreateParameterBundleInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-application-create-parameter-bundle-input.md) input · [`SupSolutionTemplateApplicationUpdateParameterBundleInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-application-update-parameter-bundle-input.md) input

```graphql
input SupSolutionTemplateCreateParameterValueInput {
  info: SupSolutionTemplateCreateParameterInfoInput
  value: String!
  name: String!
}
```

### Fields

#### `info` · [`SupSolutionTemplateCreateParameterInfoInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-create-parameter-info-input.md) input

The parameter info identifier by parameter's title.

#### `value` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The value of this parameter value.

#### `name` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The name of this parameter value.
