---
title: "SupSearchCorrection"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-search-correction"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSearchCorrection

### Returned By

[`supSearchCorrection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/operations/queries/sup-search-correction.md) query

```graphql
type SupSearchCorrection {
  correctionType: SupCorrectionType!
  correctionString: String!
  droppedTerms: [String!]!
  droppedFilters: SupDroppedFilter!
  hits: Int!
}
```

### Fields

#### `correctionType` · [`SupCorrectionType!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/enums/sup-correction-type.md) non-null enum

The type of suggestion this is. Useful for knowing how the suggestion was generated

#### `correctionString` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The new search string for this suggestion

#### `droppedTerms` · [`[String!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

List of any terms from the original search string that have been dropped in this correction. Only populated in `DROPPEDTERM` type corrections

#### `droppedFilters` · [`SupDroppedFilter!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-dropped-filter.md) non-null object

List of any filters from the original search that have been dropped in this correction. Only populated in `DROPPEDFILTER` type corrections

#### `hits` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

Estimated number of part hits for this correction
