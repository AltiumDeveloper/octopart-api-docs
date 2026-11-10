---
title: "SupEvalKitSoftwareProjectToolchainConnection"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit-software-project-toolchain-connection"
bounded_context: "Eval Kit"
kind: "objects"
experimental: false
deprecated: false
---

# SupEvalKitSoftwareProjectToolchainConnection

A connection to a list of items.

### Returned By

[`supEvalKitSoftwareProjectToolchains`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/operations/queries/sup-eval-kit-software-project-toolchains.md) query

```graphql
type SupEvalKitSoftwareProjectToolchainConnection {
  pageInfo: PageInfo!
  edges: [SupEvalKitSoftwareProjectToolchainEdge!]
  nodes: [SupEvalKitSoftwareProjectToolchain!]
  totalCount: Int!
}
```

### Fields

#### `pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/objects/page-info.md) non-null object

Information to aid in pagination.

#### `edges` · [`[SupEvalKitSoftwareProjectToolchainEdge!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit-software-project-toolchain-edge.md) list object

A list of edges.

#### `nodes` · [`[SupEvalKitSoftwareProjectToolchain!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit-software-project-toolchain.md) list object

A flattened list of the nodes.

#### `totalCount` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

Identifies the total count of items in the connection.
