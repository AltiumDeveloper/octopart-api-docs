---
title: "SupSoftwareProjectOperationFailedError"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/objects/sup-software-project-operation-failed-error"
bounded_context: "Supply Software Project"
kind: "objects"
experimental: false
deprecated: false
---

# SupSoftwareProjectOperationFailedError

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/interfaces/error.md) interface

### Implemented By

[`SupSoftwareProjectCreateSoftwareProjectError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/unions/sup-software-project-create-software-project-error.md) union · [`SupSoftwareProjectDeleteSoftwareProjectError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/unions/sup-software-project-delete-software-project-error.md) union · [`SupSoftwareProjectPatchParametersError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/unions/sup-software-project-patch-parameters-error.md) union · [`SupSoftwareProjectPatchPreviewImagesError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/unions/sup-software-project-patch-preview-images-error.md) union · [`SupSoftwareProjectPatchSoftwareProjectSolutionTemplatesError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/unions/sup-software-project-patch-software-project-solution-templates-error.md) union · [`SupSoftwareProjectSetParametersError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/unions/sup-software-project-set-parameters-error.md) union · [`SupSoftwareProjectSetPreviewImagesError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/unions/sup-software-project-set-preview-images-error.md) union · [`SupSoftwareProjectSetSoftwareProjectSolutionTemplatesError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/unions/sup-software-project-set-software-project-solution-templates-error.md) union · [`SupSoftwareProjectUpdateEvalKitCompatibleSoftwareProjectError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/unions/sup-software-project-update-eval-kit-compatible-software-project-error.md) union · [`SupSoftwareProjectUpdateSoftwareProjectError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/unions/sup-software-project-update-software-project-error.md) union

```graphql
type SupSoftwareProjectOperationFailedError implements Error {
  message: String!
  errorCode: SupSoftwareProjectErrorCode!
}
```

### Fields

#### `message` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `errorCode` · [`SupSoftwareProjectErrorCode!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/enums/sup-software-project-error-code.md) non-null enum
