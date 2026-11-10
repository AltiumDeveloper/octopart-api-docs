---
title: "SupSoftwareProjectUpdateEvalKitCompatibleSoftwareProjectInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-software-project-update-eval-kit-compatible-software-project-input"
bounded_context: "Supply Software Project"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSoftwareProjectUpdateEvalKitCompatibleSoftwareProjectInput

Input for evaluation kit compatible software project update.

### Member Of

[`supSoftwareProjectUpdateEvalKitCompatibleSoftwareProject`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/operations/mutations/sup-software-project-update-eval-kit-compatible-software-project.md) mutation

```graphql
input SupSoftwareProjectUpdateEvalKitCompatibleSoftwareProjectInput {
  id: ID!
  addCompatibleSoftwareProjectIds: [ID!]
  removeCompatibleSoftwareProjectIds: [ID!]
}
```

### Fields

#### `id` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

The evaluation kit identifier.

#### `addCompatibleSoftwareProjectIds` · [`[ID!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) list scalar

Add a new list of compatible software projects to evaluation kit.

#### `removeCompatibleSoftwareProjectIds` · [`[ID!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) list scalar

Remove a list of compatible software projects from evaluation kit.
