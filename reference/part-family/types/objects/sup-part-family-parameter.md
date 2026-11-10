---
title: "SupPartFamilyParameter"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-parameter"
bounded_context: "Part Family"
kind: "objects"
experimental: false
deprecated: false
---

# SupPartFamilyParameter

`SupPartFamilyParameter` is the parameter definition for a filterable parameter of a part group.

### Returned By

[`supPartFamilyParameters`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/operations/queries/sup-part-family-parameters.md) query

```graphql
type SupPartFamilyParameter {
  name: String!
  displayName: String!
  filterTypes: [SupPartFamilyFilterType!]!
  parameterAgg: SupPartFamilyParameterAgg!
}
```

### Fields

#### `name` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Name of this parameter.

#### `displayName` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Formatted name for use in the UI.

#### `filterTypes` · [`[SupPartFamilyFilterType!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/enums/sup-part-family-filter-type.md) non-null enum

Methods of filtering available for this parameter.

#### `parameterAgg` · [`SupPartFamilyParameterAgg!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-parameter-agg.md) non-null object

Aggregation of parameter values.
