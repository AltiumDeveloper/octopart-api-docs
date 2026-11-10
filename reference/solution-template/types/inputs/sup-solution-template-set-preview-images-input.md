---
title: "SupSolutionTemplateSetPreviewImagesInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-set-preview-images-input"
bounded_context: "Solution Template"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateSetPreviewImagesInput

Input for replacing all preview images on a solution template.

### Member Of

[`supSolutionTemplateSetPreviewImages`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/mutations/sup-solution-template-set-preview-images.md) mutation

```graphql
input SupSolutionTemplateSetPreviewImagesInput {
  solutionTemplateId: ID!
  previewImages: [SupSolutionTemplateFileInput!]
}
```

### Fields

#### `solutionTemplateId` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

The unique identifier of the solution template.

#### `previewImages` · [`[SupSolutionTemplateFileInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-file-input.md) list input

The new set of preview images. Replaces all existing preview images.
