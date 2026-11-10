---
title: "SupSoftwareProjectOrderInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-software-project-order-input"
bounded_context: "Supply Software Project"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSoftwareProjectOrderInput

Input type for ordering.

### Member Of

[`supSoftwareProjects`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/operations/queries/sup-software-projects.md) query

```graphql
input SupSoftwareProjectOrderInput {
  field: SupSoftwareProjectOrderField!
  direction: SupSoftwareProjectOrderDirection!
}
```

### Fields

#### `field` · [`SupSoftwareProjectOrderField!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/enums/sup-software-project-order-field.md) non-null enum

The field to order by.

#### `direction` · [`SupSoftwareProjectOrderDirection!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/enums/sup-software-project-order-direction.md) non-null enum

The direction of the order.
