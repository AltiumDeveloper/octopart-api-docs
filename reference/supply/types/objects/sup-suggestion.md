---
title: "SupSuggestion"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-suggestion"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSuggestion

Suggests a query based on partial query input. Used for autocomplete / typeahead UIs.

### Returned By

[`supSuggest`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/operations/queries/sup-suggest.md) query

```graphql
type SupSuggestion {
  text: String!
  inCategoryName: String!
  inCategoryId: String!
  inManufacturerName: String!
  inPartId: String!
}
```

### Fields

#### `text` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Suggested text of longer query

#### `inCategoryName` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

If the suggestion should also apply a categoryId filter, this is the category name

#### `inCategoryId` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

If the suggestion should also apply a categoryId filter, this is the Category ID

#### `inManufacturerName` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

If the suggestion should also apply a manufacturer filter, this is the Manufacturer name

#### `inPartId` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

If the suggestion should also apply a partId filter, this is the Part ID
