---
title: "SupEvalKitNotFoundError"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit-not-found-error"
bounded_context: "Eval Kit"
kind: "objects"
experimental: false
deprecated: false
---

# SupEvalKitNotFoundError

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/interfaces/error.md) interface

### Implemented By

[`SupEvalKitAddDevicesError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/unions/sup-eval-kit-add-devices-error.md) union · [`SupEvalKitAddPreviewImagesError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/unions/sup-eval-kit-add-preview-images-error.md) union · [`SupEvalKitDeleteDevicesError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/unions/sup-eval-kit-delete-devices-error.md) union · [`SupEvalKitDeleteEvalKitError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/unions/sup-eval-kit-delete-eval-kit-error.md) union · [`SupEvalKitDeletePreviewImagesError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/unions/sup-eval-kit-delete-preview-images-error.md) union · [`SupEvalKitPatchParametersError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/unions/sup-eval-kit-patch-parameters-error.md) union · [`SupEvalKitSetMainRefDesignError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/unions/sup-eval-kit-set-main-ref-design-error.md) union · [`SupEvalKitSetParametersError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/unions/sup-eval-kit-set-parameters-error.md) union · [`SupEvalKitSortPreviewImagesError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/unions/sup-eval-kit-sort-preview-images-error.md) union · [`SupEvalKitUnsetMainRefDesignError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/unions/sup-eval-kit-unset-main-ref-design-error.md) union · [`SupEvalKitUpdateEvalKitError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/unions/sup-eval-kit-update-eval-kit-error.md) union

```graphql
type SupEvalKitNotFoundError implements Error {
  message: String!
  errorCode: SupEvalKitErrorCode!
}
```

### Fields

#### `message` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `errorCode` · [`SupEvalKitErrorCode!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/enums/sup-eval-kit-error-code.md) non-null enum
