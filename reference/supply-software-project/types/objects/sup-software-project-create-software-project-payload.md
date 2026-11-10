---
title: "SupSoftwareProjectCreateSoftwareProjectPayload"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/objects/sup-software-project-create-software-project-payload"
bounded_context: "Supply Software Project"
kind: "objects"
experimental: false
deprecated: false
---

# SupSoftwareProjectCreateSoftwareProjectPayload

Payload associated with creating a software project.

### Returned By

[`supSoftwareProjectCreateSoftwareProject`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/operations/mutations/sup-software-project-create-software-project.md) mutation

```graphql
type SupSoftwareProjectCreateSoftwareProjectPayload {
  id: ID
  errors: [SupSoftwareProjectCreateSoftwareProjectError!]
}
```

### Fields

#### `id` · [`ID`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) scalar

Software project identifier.

#### `errors` · [`[SupSoftwareProjectCreateSoftwareProjectError!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/unions/sup-software-project-create-software-project-error.md) list union
