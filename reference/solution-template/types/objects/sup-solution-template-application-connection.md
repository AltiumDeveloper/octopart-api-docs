---
title: "SupSolutionTemplateApplicationConnection"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-application-connection"
bounded_context: "Solution Template"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateApplicationConnection

A connection to a list of items.

### Returned By

[`supSolutionTemplateApplicationsSearch`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/queries/sup-solution-template-applications-search.md) query

```graphql
type SupSolutionTemplateApplicationConnection {
  pageInfo: PageInfo!
  edges: [SupSolutionTemplateApplicationEdge!]
  nodes: [SupSolutionTemplateApplication!]
  totalCount: Int!
}
```

### Fields

#### `pageInfo` · [`PageInfo!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/objects/page-info.md) non-null object

Information to aid in pagination.

#### `edges` · [`[SupSolutionTemplateApplicationEdge!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-application-edge.md) list object

A list of edges.

#### `nodes` · [`[SupSolutionTemplateApplication!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-application.md) list object

A flattened list of the nodes.

#### `totalCount` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

Identifies the total count of items in the connection.
