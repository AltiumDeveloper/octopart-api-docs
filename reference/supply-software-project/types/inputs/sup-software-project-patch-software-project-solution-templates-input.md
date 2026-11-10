---
title: "SupSoftwareProjectPatchSoftwareProjectSolutionTemplatesInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-software-project-patch-software-project-solution-templates-input"
bounded_context: "Supply Software Project"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSoftwareProjectPatchSoftwareProjectSolutionTemplatesInput

Input for patching software project associations on a solution template.

### Member Of

[`supSoftwareProjectPatchSoftwareProjectSolutionTemplates`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/operations/mutations/sup-software-project-patch-software-project-solution-templates.md) mutation

```graphql
input SupSoftwareProjectPatchSoftwareProjectSolutionTemplatesInput {
  solutionTemplateId: ID!
  addSoftwareProjectIds: [ID!]
  removeSoftwareProjectIds: [ID!]
}
```

### Fields

#### `solutionTemplateId` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

The unique identifier of the solution template.

#### `addSoftwareProjectIds` · [`[ID!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) list scalar

Software project IDs to associate with the solution template. Ignored if already associated.

#### `removeSoftwareProjectIds` · [`[ID!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) list scalar

Software project IDs to remove from the solution template.
