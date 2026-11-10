---
title: "SupSoftwareProjectParameterInfoInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-software-project-parameter-info-input"
bounded_context: "Supply Software Project"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSoftwareProjectParameterInfoInput

Identifies a parameter by its title.

### Member Of

[`SupSoftwareProjectParameterInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-software-project-parameter-input.md) input · [`SupSoftwareProjectPatchParametersInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-software-project-patch-parameters-input.md) input

```graphql
input SupSoftwareProjectParameterInfoInput {
  title: String!
}
```

### Fields

#### `title` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The title of the parameter (case-sensitive).
