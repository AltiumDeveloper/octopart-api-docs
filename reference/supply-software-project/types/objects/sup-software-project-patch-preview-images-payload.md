---
title: "SupSoftwareProjectPatchPreviewImagesPayload"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/objects/sup-software-project-patch-preview-images-payload"
bounded_context: "Supply Software Project"
kind: "objects"
experimental: false
deprecated: false
---

# SupSoftwareProjectPatchPreviewImagesPayload

Payload for patching preview images on a software project.

### Returned By

[`supSoftwareProjectPatchPreviewImages`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/operations/mutations/sup-software-project-patch-preview-images.md) mutation

```graphql
type SupSoftwareProjectPatchPreviewImagesPayload {
  success: Boolean
  errors: [SupSoftwareProjectPatchPreviewImagesError!]
}
```

### Fields

#### `success` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

Return true if operation succeeded.

#### `errors` · [`[SupSoftwareProjectPatchPreviewImagesError!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/unions/sup-software-project-patch-preview-images-error.md) list union
