---
title: "SupSoftwareProjectSetPreviewImagesPayload"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/objects/sup-software-project-set-preview-images-payload"
bounded_context: "Supply Software Project"
kind: "objects"
experimental: false
deprecated: false
---

# SupSoftwareProjectSetPreviewImagesPayload

Payload for replacing all preview images on a software project.

### Returned By

[`supSoftwareProjectSetPreviewImages`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/operations/mutations/sup-software-project-set-preview-images.md) mutation

```graphql
type SupSoftwareProjectSetPreviewImagesPayload {
  success: Boolean
  errors: [SupSoftwareProjectSetPreviewImagesError!]
}
```

### Fields

#### `success` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

Return true if operation succeeded.

#### `errors` · [`[SupSoftwareProjectSetPreviewImagesError!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/unions/sup-software-project-set-preview-images-error.md) list union
