---
title: "SupSoftwareProjectPatchParametersPayload"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/objects/sup-software-project-patch-parameters-payload"
bounded_context: "Supply Software Project"
kind: "objects"
experimental: false
deprecated: false
---

# SupSoftwareProjectPatchParametersPayload

Payload returned after patching parameters on a software project.

### Returned By

[`supSoftwareProjectPatchParameters`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/operations/mutations/sup-software-project-patch-parameters.md) mutation

```graphql
type SupSoftwareProjectPatchParametersPayload {
  success: Boolean
  errors: [SupSoftwareProjectPatchParametersError!]
}
```

### Fields

#### `success` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

Return true if operation succeeded.

#### `errors` · [`[SupSoftwareProjectPatchParametersError!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/unions/sup-software-project-patch-parameters-error.md) list union
