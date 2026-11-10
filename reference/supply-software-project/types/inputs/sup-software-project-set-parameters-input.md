---
title: "SupSoftwareProjectSetParametersInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-software-project-set-parameters-input"
bounded_context: "Supply Software Project"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSoftwareProjectSetParametersInput

Input for replacing all parameters on a software project.

### Member Of

[`supSoftwareProjectSetParameters`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/operations/mutations/sup-software-project-set-parameters.md) mutation

```graphql
input SupSoftwareProjectSetParametersInput {
  softwareProjectId: ID!
  parameters: [SupSoftwareProjectParameterInput!]
}
```

### Fields

#### `softwareProjectId` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

The unique identifier of the software project.

#### `parameters` · [`[SupSoftwareProjectParameterInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-software-project-parameter-input.md) list input

The complete new set of parameters. Deletes all existing parameters and values, then inserts these.
