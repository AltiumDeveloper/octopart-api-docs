---
title: "SupSolutionTemplateUpdateSolutionTemplateApplicationInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-update-solution-template-application-input"
bounded_context: "Solution Template"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateUpdateSolutionTemplateApplicationInput

### Member Of

[`supSolutionTemplateUpdateSolutionTemplateApplication`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/mutations/sup-solution-template-update-solution-template-application.md) mutation

```graphql
input SupSolutionTemplateUpdateSolutionTemplateApplicationInput {
  id: ID!
  description: String
  updateParameters: [SupSolutionTemplateApplicationUpdateParameterBundleInput!]
  addParameters: [SupSolutionTemplateApplicationCreateParameterBundleInput!]
  removeParameters: [SupSolutionTemplateApplicationRemoveParameterBundleInput!]
}
```

### Fields

#### `id` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

The solution template application GRID identifier.

#### `description` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The solution template application description.

#### `updateParameters` · [`[SupSolutionTemplateApplicationUpdateParameterBundleInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-application-update-parameter-bundle-input.md) list input

The update list of application parameters associated with the solution template application.

#### `addParameters` · [`[SupSolutionTemplateApplicationCreateParameterBundleInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-application-create-parameter-bundle-input.md) list input

The add list of application parameters associated with the solution template application.

#### `removeParameters` · [`[SupSolutionTemplateApplicationRemoveParameterBundleInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-application-remove-parameter-bundle-input.md) list input

The remove list of application parameters associated with the solution template application.
