---
title: "SupSolutionTemplatePatchPreviewImagesPayload"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-patch-preview-images-payload"
bounded_context: "Solution Template"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplatePatchPreviewImagesPayload

Payload for patching preview images on a solution template.

### Returned By

[`supSolutionTemplatePatchPreviewImages`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/mutations/sup-solution-template-patch-preview-images.md) mutation

```graphql
type SupSolutionTemplatePatchPreviewImagesPayload {
  success: Boolean
  errors: [SupSolutionTemplatePatchPreviewImagesError!]
}
```

### Fields

#### `success` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

Return true if operation succeeded.

#### `errors` · [`[SupSolutionTemplatePatchPreviewImagesError!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/unions/sup-solution-template-patch-preview-images-error.md) list union
