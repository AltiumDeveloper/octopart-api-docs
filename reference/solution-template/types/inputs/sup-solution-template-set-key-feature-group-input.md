---
title: "SupSolutionTemplateSetKeyFeatureGroupInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-set-key-feature-group-input"
bounded_context: "Solution Template"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateSetKeyFeatureGroupInput

### Member Of

[`SupSolutionTemplateSetKeyFeatureGroupsInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-set-key-feature-groups-input.md) input

```graphql
input SupSolutionTemplateSetKeyFeatureGroupInput {
  solutionTemplateId: ID!
  keyFeatureGroups: [SupSolutionTemplateKeyFeatureGroupInput!]
}
```

### Fields

#### `solutionTemplateId` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

The solution template identifier.

#### `keyFeatureGroups` · [`[SupSolutionTemplateKeyFeatureGroupInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-key-feature-group-input.md) list input

List of new key feature groups associated with a solution template.
