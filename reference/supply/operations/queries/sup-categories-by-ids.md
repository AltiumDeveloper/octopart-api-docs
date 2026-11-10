---
title: "supCategoriesByIds"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/operations/queries/sup-categories-by-ids"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supCategoriesByIds

Get a list of categories by ids. Where id can be either an Octopart internal id or an Altium Global Resource ID (GRID).

### Type

#### [`SupCategory`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-category.md) object

A Category exists in a Category tree. Examples include Passive Components or Capacitors. The `path` field is helpful to see where a category is in the tree.

```graphql
supCategoriesByIds(
  ids: [ID!]!
): [SupCategory]!
```

### Arguments

#### `ids` · [`[ID!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar
