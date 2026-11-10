---
title: "SupEvalKitSoftwareProjectToolchainEdge"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit-software-project-toolchain-edge"
bounded_context: "Eval Kit"
kind: "objects"
experimental: false
deprecated: false
---

# SupEvalKitSoftwareProjectToolchainEdge

An edge in a connection.

### Member Of

[`SupEvalKitSoftwareProjectToolchainConnection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit-software-project-toolchain-connection.md) object

```graphql
type SupEvalKitSoftwareProjectToolchainEdge {
  cursor: String!
  node: SupEvalKitSoftwareProjectToolchain!
}
```

### Fields

#### `cursor` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

A cursor for use in pagination.

#### `node` · [`SupEvalKitSoftwareProjectToolchain!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit-software-project-toolchain.md) non-null object

The item at the end of the edge.
