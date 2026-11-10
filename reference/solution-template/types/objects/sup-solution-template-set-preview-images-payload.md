---
title: "SupSolutionTemplateSetPreviewImagesPayload"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-set-preview-images-payload"
bounded_context: "Solution Template"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateSetPreviewImagesPayload

Payload for replacing all preview images on a solution template.

### Returned By

[`supSolutionTemplateSetPreviewImages`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/mutations/sup-solution-template-set-preview-images.md) mutation

```graphql
type SupSolutionTemplateSetPreviewImagesPayload {
  success: Boolean
  errors: [SupSolutionTemplateSetPreviewImagesError!]
}
```

### Fields

#### `success` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

Return true if operation succeeded.

#### `errors` · [`[SupSolutionTemplateSetPreviewImagesError!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/unions/sup-solution-template-set-preview-images-error.md) list union
