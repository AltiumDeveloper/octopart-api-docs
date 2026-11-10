---
title: "SupSolutionTemplateTagInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-tag-input"
bounded_context: "Solution Template"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateTagInput

### Member Of

[`SupSolutionTemplatePatchTagsInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-patch-tags-input.md) input · [`SupSolutionTemplateSetTagsInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-set-tags-input.md) input

```graphql
input SupSolutionTemplateTagInput {
  value: String!
  category: String!
}
```

### Fields

#### `value` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The tag value.

#### `category` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The tag category name.
