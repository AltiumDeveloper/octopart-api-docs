---
title: "SupPartFamilyAppliedFilter"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-applied-filter"
bounded_context: "Part Family"
kind: "objects"
experimental: false
deprecated: false
---

# SupPartFamilyAppliedFilter

Used to show the filters that are applied to current search.

### Member Of

[`SupPartFamilyPartResultSet`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-part-result-set.md) object

```graphql
type SupPartFamilyAppliedFilter {
  name: String!
  displayName: String!
  values: SupPartFamilyFilterValues!
  displayValues: [String!]!
  units: String
}
```

### Fields

#### `name` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Name of the filter applied, will match the filter key used in the search.

#### `displayName` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Human readable name to display in the UI.

#### `values` · [`SupPartFamilyFilterValues!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-filter-values.md) non-null object

Values in the filter Map.

#### `displayValues` · [`[String!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Human readable values to display in the UI.

#### `units` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The units of the values.
