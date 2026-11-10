---
title: "SupSoftwareProjectSetParametersPayload"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/objects/sup-software-project-set-parameters-payload"
bounded_context: "Supply Software Project"
kind: "objects"
experimental: false
deprecated: false
---

# SupSoftwareProjectSetParametersPayload

Payload returned after setting parameters on a software project.

### Returned By

[`supSoftwareProjectSetParameters`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/operations/mutations/sup-software-project-set-parameters.md) mutation

```graphql
type SupSoftwareProjectSetParametersPayload {
  success: Boolean
  errors: [SupSoftwareProjectSetParametersError!]
}
```

### Fields

#### `success` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

Return true if operation succeeded.

#### `errors` · [`[SupSoftwareProjectSetParametersError!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/unions/sup-software-project-set-parameters-error.md) list union
