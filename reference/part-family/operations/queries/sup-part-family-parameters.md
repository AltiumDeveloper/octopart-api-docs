---
title: "supPartFamilyParameters"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/operations/queries/sup-part-family-parameters"
bounded_context: "Part Family"
kind: "queries"
experimental: false
deprecated: false
---

# supPartFamilyParameters

Get the set of filterable parameters for a part group within the given category.

### Type

#### [`SupPartFamilyParameter`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-parameter.md) object

[`SupPartFamilyParameter`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-parameter.md) is the parameter definition for a filterable parameter of a part group.

```graphql
supPartFamilyParameters(
  categoryId: ID!
): [SupPartFamilyParameter!]!
```

### Arguments

#### `categoryId` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar
