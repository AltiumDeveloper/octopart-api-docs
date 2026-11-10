---
title: "SupSoftwareProjectPatchParametersInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-software-project-patch-parameters-input"
bounded_context: "Supply Software Project"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSoftwareProjectPatchParametersInput

Input for patching parameters on a software project.

### Member Of

[`supSoftwareProjectPatchParameters`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/operations/mutations/sup-software-project-patch-parameters.md) mutation

```graphql
input SupSoftwareProjectPatchParametersInput {
  softwareProjectId: ID!
  addParameters: [SupSoftwareProjectParameterInput!]
  removeParameters: [SupSoftwareProjectParameterInfoInput!]
}
```

### Fields

#### `softwareProjectId` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

The unique identifier of the software project.

#### `addParameters` · [`[SupSoftwareProjectParameterInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-software-project-parameter-input.md) list input

Parameters to add or update. Creates the parameter if new, replaces its values if it already exists.

#### `removeParameters` · [`[SupSoftwareProjectParameterInfoInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-software-project-parameter-info-input.md) list input

Titles of parameters to remove entirely from this software project.
