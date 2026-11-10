---
title: "SupSoftwareProjectSetSoftwareProjectSolutionTemplatesPayload"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/objects/sup-software-project-set-software-project-solution-templates-payload"
bounded_context: "Supply Software Project"
kind: "objects"
experimental: false
deprecated: false
---

# SupSoftwareProjectSetSoftwareProjectSolutionTemplatesPayload

Payload returned after setting software projects on a solution template.

### Returned By

[`supSoftwareProjectSetSoftwareProjectSolutionTemplates`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/operations/mutations/sup-software-project-set-software-project-solution-templates.md) mutation

```graphql
type SupSoftwareProjectSetSoftwareProjectSolutionTemplatesPayload {
  success: Boolean
  errors: [SupSoftwareProjectSetSoftwareProjectSolutionTemplatesError!]
}
```

### Fields

#### `success` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

Return true if operation succeeded.

#### `errors` · [`[SupSoftwareProjectSetSoftwareProjectSolutionTemplatesError!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/unions/sup-software-project-set-software-project-solution-templates-error.md) list union
