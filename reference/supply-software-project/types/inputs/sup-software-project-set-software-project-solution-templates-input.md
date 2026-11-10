---
title: "SupSoftwareProjectSetSoftwareProjectSolutionTemplatesInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-software-project-set-software-project-solution-templates-input"
bounded_context: "Supply Software Project"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSoftwareProjectSetSoftwareProjectSolutionTemplatesInput

Input for replacing all software project associations on a solution template.

### Member Of

[`supSoftwareProjectSetSoftwareProjectSolutionTemplates`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/operations/mutations/sup-software-project-set-software-project-solution-templates.md) mutation

```graphql
input SupSoftwareProjectSetSoftwareProjectSolutionTemplatesInput {
  solutionTemplateId: ID!
  softwareProjectIds: [ID!]
}
```

### Fields

#### `solutionTemplateId` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

The unique identifier of the solution template.

#### `softwareProjectIds` · [`[ID!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) list scalar

The complete new set of software project IDs. Removes all existing associations and inserts these.
