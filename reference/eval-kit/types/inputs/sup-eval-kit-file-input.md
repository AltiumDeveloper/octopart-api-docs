---
title: "SupEvalKitFileInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-eval-kit-file-input"
bounded_context: "Eval Kit"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitFileInput

### Member Of

[`SupEvalKitAddPreviewImagesInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-eval-kit-add-preview-images-input.md) input · [`SupEvalKitCreateEvalKitInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-eval-kit-create-eval-kit-input.md) input · [`SupEvalKitSoftwareProjectCompatibleEvalKitProjectSourceInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-eval-kit-software-project-compatible-eval-kit-project-source-input.md) input · [`SupEvalKitUpdateEvalKitInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-eval-kit-update-eval-kit-input.md) input

```graphql
input SupEvalKitFileInput {
  fileId: String!
  fileType: String!
  fileName: String!
}
```

### Fields

#### `fileId` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The nexar file service identifier of the file.

#### `fileType` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The type of the file.

#### `fileName` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The file’s name with extension included (e.g., example.json, image.jpg).
