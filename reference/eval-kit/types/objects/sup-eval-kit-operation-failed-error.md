---
title: "SupEvalKitOperationFailedError"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit-operation-failed-error"
bounded_context: "Eval Kit"
kind: "objects"
experimental: false
deprecated: false
---

# SupEvalKitOperationFailedError

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/interfaces/error.md) interface

### Implemented By

[`SupEvalKitAddDevicesError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/unions/sup-eval-kit-add-devices-error.md) union · [`SupEvalKitAddPreviewImagesError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/unions/sup-eval-kit-add-preview-images-error.md) union · [`SupEvalKitAddRefDesignCompatibleEvalKitError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/unions/sup-eval-kit-add-ref-design-compatible-eval-kit-error.md) union · [`SupEvalKitCreateEvalKitError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/unions/sup-eval-kit-create-eval-kit-error.md) union · [`SupEvalKitDeleteDevicesError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/unions/sup-eval-kit-delete-devices-error.md) union · [`SupEvalKitDeleteEvalKitError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/unions/sup-eval-kit-delete-eval-kit-error.md) union · [`SupEvalKitDeletePreviewImagesError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/unions/sup-eval-kit-delete-preview-images-error.md) union · [`SupEvalKitDeleteRefDesignCompatibleEvalKitError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/unions/sup-eval-kit-delete-ref-design-compatible-eval-kit-error.md) union · [`SupEvalKitPatchParametersError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/unions/sup-eval-kit-patch-parameters-error.md) union · [`SupEvalKitSetMainRefDesignError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/unions/sup-eval-kit-set-main-ref-design-error.md) union · [`SupEvalKitSetParametersError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/unions/sup-eval-kit-set-parameters-error.md) union · [`SupEvalKitSoftwareProjectCompatibleEvalKitError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/unions/sup-eval-kit-software-project-compatible-eval-kit-error.md) union · [`SupEvalKitSortPreviewImagesError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/unions/sup-eval-kit-sort-preview-images-error.md) union · [`SupEvalKitUnsetMainRefDesignError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/unions/sup-eval-kit-unset-main-ref-design-error.md) union · [`SupEvalKitUpdateEvalKitError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/unions/sup-eval-kit-update-eval-kit-error.md) union

```graphql
type SupEvalKitOperationFailedError implements Error {
  message: String!
  errorCode: SupEvalKitErrorCode!
}
```

### Fields

#### `message` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `errorCode` · [`SupEvalKitErrorCode!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/enums/sup-eval-kit-error-code.md) non-null enum
