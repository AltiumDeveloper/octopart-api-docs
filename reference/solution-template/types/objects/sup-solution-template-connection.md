---
title: "SupSolutionTemplateConnection"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-connection"
bounded_context: "Solution Template"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateConnection

A connection to a list of items.

### Returned By

[`supSolutionTemplateSearch`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/queries/sup-solution-template-search.md) query

```graphql
type SupSolutionTemplateConnection {
  pageInfo: PageInfo!
  edges: [SupSolutionTemplateEdge!]
  nodes: [SupSolutionTemplate!]
  totalCount: Int!
}
```

### Fields

#### `pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/objects/page-info.md) non-null object

Information to aid in pagination.

#### `edges` · [`[SupSolutionTemplateEdge!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-edge.md) list object

A list of edges.

#### `nodes` · [`[SupSolutionTemplate!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template.md) list object

A flattened list of the nodes.

#### `totalCount` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

Identifies the total count of items in the connection.
