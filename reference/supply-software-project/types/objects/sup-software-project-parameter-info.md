---
title: "SupSoftwareProjectParameterInfo"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/objects/sup-software-project-parameter-info"
bounded_context: "Supply Software Project"
kind: "objects"
experimental: false
deprecated: false
---

# SupSoftwareProjectParameterInfo

Represents the information of a parameter in the software project.

### Returned By

[`supSoftwareProjectParameterInfos`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/operations/queries/sup-software-project-parameter-infos.md) query

### Member Of

[`SupSoftwareProjectParameter`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/objects/sup-software-project-parameter.md) object

```graphql
type SupSoftwareProjectParameterInfo {
  title: String!
}
```

### Fields

#### `title` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The parameter title.
