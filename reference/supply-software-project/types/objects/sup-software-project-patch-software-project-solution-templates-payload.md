---
title: "SupSoftwareProjectPatchSoftwareProjectSolutionTemplatesPayload"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/objects/sup-software-project-patch-software-project-solution-templates-payload"
bounded_context: "Supply Software Project"
kind: "objects"
experimental: false
deprecated: false
---

# SupSoftwareProjectPatchSoftwareProjectSolutionTemplatesPayload

Payload returned after patching software projects on a solution template.

### Returned By

[`supSoftwareProjectPatchSoftwareProjectSolutionTemplates`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/operations/mutations/sup-software-project-patch-software-project-solution-templates.md) mutation

```graphql
type SupSoftwareProjectPatchSoftwareProjectSolutionTemplatesPayload {
  success: Boolean
  errors: [SupSoftwareProjectPatchSoftwareProjectSolutionTemplatesError!]
}
```

### Fields

#### `success` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

Return true if operation succeeded.

#### `errors` · [`[SupSoftwareProjectPatchSoftwareProjectSolutionTemplatesError!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/unions/sup-software-project-patch-software-project-solution-templates-error.md) list union
