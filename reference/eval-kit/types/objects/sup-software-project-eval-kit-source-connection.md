---
title: "SupSoftwareProjectEvalKitSourceConnection"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-software-project-eval-kit-source-connection"
bounded_context: "Eval Kit"
kind: "objects"
experimental: false
deprecated: false
---

# SupSoftwareProjectEvalKitSourceConnection

A connection to a list of items.

### Returned By

[`supEvalKitSoftwareProjectCompatibleEvalKitSearch`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/operations/queries/sup-eval-kit-software-project-compatible-eval-kit-search.md) query

### Member Of

[`SupSoftwareProject`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/objects/sup-software-project.md) object

```graphql
type SupSoftwareProjectEvalKitSourceConnection {
  pageInfo: PageInfo!
  edges: [SupSoftwareProjectEvalKitSourceEdge!]
  nodes: [SupSoftwareProjectEvalKitSource!]
  totalCount: Int!
}
```

### Fields

#### `pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/objects/page-info.md) non-null object

Information to aid in pagination.

#### `edges` · [`[SupSoftwareProjectEvalKitSourceEdge!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-software-project-eval-kit-source-edge.md) list object

A list of edges.

#### `nodes` · [`[SupSoftwareProjectEvalKitSource!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-software-project-eval-kit-source.md) list object

A flattened list of the nodes.

#### `totalCount` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

Identifies the total count of items in the connection.
