---
title: "SupSolutionTemplatePatchKeyFeatureGroupInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-patch-key-feature-group-input"
bounded_context: "Solution Template"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplatePatchKeyFeatureGroupInput

### Member Of

[`SupSolutionTemplatePatchKeyFeatureGroupsInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-patch-key-feature-groups-input.md) input

```graphql
input SupSolutionTemplatePatchKeyFeatureGroupInput {
  solutionTemplateId: ID!
  addKeyFeatureGroups: [SupSolutionTemplateKeyFeatureGroupInput!]
  removeKeyFeatureGroupAttributes: [SupSolutionTemplateRemoveKeyFeatureGroupAttributeInput!]
}
```

### Fields

#### `solutionTemplateId` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

The solution template identifier.

#### `addKeyFeatureGroups` · [`[SupSolutionTemplateKeyFeatureGroupInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-key-feature-group-input.md) list input

List of new key feature groups associated with a solution template.

#### `removeKeyFeatureGroupAttributes` · [`[SupSolutionTemplateRemoveKeyFeatureGroupAttributeInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-remove-key-feature-group-attribute-input.md) list input

List of existing key feature groups will be removed from a solution template.
