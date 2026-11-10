---
title: "SupSolutionTemplateUpdateParameterInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-update-parameter-input"
bounded_context: "Solution Template"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateUpdateParameterInput

### Member Of

[`SupSolutionTemplateApplicationUpdateParameterBundleInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-application-update-parameter-bundle-input.md) input

```graphql
input SupSolutionTemplateUpdateParameterInput {
  info: SupSolutionTemplateUpdateParameterInfoInput
  title: String!
}
```

### Fields

#### `info` · [`SupSolutionTemplateUpdateParameterInfoInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-update-parameter-info-input.md) input

The information to update the parameter.

#### `title` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The parameter title.
