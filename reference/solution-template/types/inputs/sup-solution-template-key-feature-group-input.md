---
title: "SupSolutionTemplateKeyFeatureGroupInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-key-feature-group-input"
bounded_context: "Solution Template"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateKeyFeatureGroupInput

### Member Of

[`SupSolutionTemplatePatchKeyFeatureGroupInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-patch-key-feature-group-input.md) input · [`SupSolutionTemplateSetKeyFeatureGroupInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-set-key-feature-group-input.md) input

```graphql
input SupSolutionTemplateKeyFeatureGroupInput {
  title: String!
  order: Int!
  attributes: [SupSolutionTemplateKeyFeatureGroupAttributeInput!]!
}
```

### Fields

#### `title` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The key feature group title.

#### `order` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

The display order of the key feature group.

#### `attributes` · [`[SupSolutionTemplateKeyFeatureGroupAttributeInput!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-key-feature-group-attribute-input.md) non-null input

The list of attributes associated with the key feature group.
