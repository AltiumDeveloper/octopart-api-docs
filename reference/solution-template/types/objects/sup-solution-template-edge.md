---
title: "SupSolutionTemplateEdge"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-edge"
bounded_context: "Solution Template"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateEdge

An edge in a connection.

### Member Of

[`SupSolutionTemplateConnection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-connection.md) object

```graphql
type SupSolutionTemplateEdge {
  cursor: String!
  node: SupSolutionTemplate!
}
```

### Fields

#### `cursor` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

A cursor for use in pagination.

#### `node` · [`SupSolutionTemplate!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template.md) non-null object

The item at the end of the edge.
