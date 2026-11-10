---
title: "SupSoftwareProjectSetPreviewImagesInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-software-project-set-preview-images-input"
bounded_context: "Supply Software Project"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSoftwareProjectSetPreviewImagesInput

Input for replacing all preview images on a software project.

### Member Of

[`supSoftwareProjectSetPreviewImages`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/operations/mutations/sup-software-project-set-preview-images.md) mutation

```graphql
input SupSoftwareProjectSetPreviewImagesInput {
  softwareProjectId: ID!
  previewImages: [SupSoftwareProjectFileInput!]
}
```

### Fields

#### `softwareProjectId` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

The unique identifier of the software project.

#### `previewImages` · [`[SupSoftwareProjectFileInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-software-project-file-input.md) list input

The new set of preview images. Replaces all existing preview images.
