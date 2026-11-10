---
title: "SupSolutionTemplateApplicationRemoveParameterBundleInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-application-remove-parameter-bundle-input"
bounded_context: "Solution Template"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateApplicationRemoveParameterBundleInput

### Member Of

[`SupSolutionTemplateUpdateSolutionTemplateApplicationInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-update-solution-template-application-input.md) input

```graphql
input SupSolutionTemplateApplicationRemoveParameterBundleInput {
  parameterTitle: String!
}
```

### Fields

#### `parameterTitle` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The unique title of the parameter bundle to remove.
