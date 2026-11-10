---
title: "supPartGroupsByIds"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/operations/queries/sup-part-groups-by-ids"
bounded_context: "Part Family"
kind: "queries"
experimental: false
deprecated: false
---

# supPartGroupsByIds

Get a set of part groups by their unique identifiers (GRIDs). If an ID is not found it will be returned as null, ensuring a one to one mapping of input ids to output.

### Type

#### [`SupPartGroup`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-group.md) object

[`SupPartGroup`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-group.md) contains the relevant information relating to a part group. It represents the leaves of the Part Family hierarchy, and contain the parts represented by this group.

```graphql
supPartGroupsByIds(
  ids: [ID!]!
): [SupPartGroup]!
```

### Arguments

#### `ids` · [`[ID!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar
