---
title: "SupSoftwareProjectParameter"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/objects/sup-software-project-parameter"
bounded_context: "Supply Software Project"
kind: "objects"
experimental: false
deprecated: false
---

# SupSoftwareProjectParameter

Represents a parameter in the software project.

### Member Of

[`SupSoftwareProject`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/objects/sup-software-project.md) object

```graphql
type SupSoftwareProjectParameter {
  parameter: SupSoftwareProjectParameterInfo!
  values: [String!]
}
```

### Fields

#### `parameter` · [`SupSoftwareProjectParameterInfo!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/objects/sup-software-project-parameter-info.md) non-null object

The parameter definition.

#### `values` · [`[String!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

The parameter values.
