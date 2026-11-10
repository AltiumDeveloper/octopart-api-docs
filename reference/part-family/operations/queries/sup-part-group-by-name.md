---
title: "supPartGroupByName"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/operations/queries/sup-part-group-by-name"
bounded_context: "Part Family"
kind: "queries"
experimental: false
deprecated: false
---

# supPartGroupByName

Get a specific part group by its unique name.

### Type

#### [`SupPartGroup`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-group.md) object

[`SupPartGroup`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-group.md) contains the relevant information relating to a part group. It represents the leaves of the Part Family hierarchy, and contain the parts represented by this group.

```graphql
supPartGroupByName(
  name: String!
): SupPartGroup!
```

### Arguments

#### `name` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar
