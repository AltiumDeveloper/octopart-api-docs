---
title: "SupEvalKitConnection"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit-connection"
bounded_context: "Eval Kit"
kind: "objects"
experimental: false
deprecated: false
---

# SupEvalKitConnection

A connection to a list of items.

### Returned By

[`supEvalKitDetailsByRefDesignId`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/operations/queries/sup-eval-kit-details-by-ref-design-id.md) query · [`supEvalKitSearch`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/operations/queries/sup-eval-kit-search.md) query

### Member Of

[`SupRefDesign`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design.md) object

```graphql
type SupEvalKitConnection {
  pageInfo: PageInfo!
  edges: [SupEvalKitEdge!]
  nodes: [SupEvalKit!]
  totalCount: Int!
}
```

### Fields

#### `pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/objects/page-info.md) non-null object

Information to aid in pagination.

#### `edges` · [`[SupEvalKitEdge!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit-edge.md) list object

A list of edges.

#### `nodes` · [`[SupEvalKit!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit.md) list object

A flattened list of the nodes.

#### `totalCount` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

Identifies the total count of items in the connection.
