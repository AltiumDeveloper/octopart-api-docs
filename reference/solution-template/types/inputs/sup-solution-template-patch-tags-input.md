---
title: "SupSolutionTemplatePatchTagsInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-patch-tags-input"
bounded_context: "Solution Template"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplatePatchTagsInput

### Member Of

[`supSolutionTemplatePatchTags`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/mutations/sup-solution-template-patch-tags.md) mutation

```graphql
input SupSolutionTemplatePatchTagsInput {
  solutionTemplateId: ID!
  addTags: [SupSolutionTemplateTagInput!]
  removeTags: [SupSolutionTemplateTagInput!]
}
```

### Fields

#### `solutionTemplateId` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

The solution template identifier.

#### `addTags` · [`[SupSolutionTemplateTagInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-tag-input.md) list input

List of new tags for categorizing a solution template.

#### `removeTags` · [`[SupSolutionTemplateTagInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-tag-input.md) list input

List of existing tags will be removed from a solution template.
