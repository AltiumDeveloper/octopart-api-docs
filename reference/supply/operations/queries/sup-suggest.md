---
title: "supSuggest"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/operations/queries/sup-suggest"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supSuggest

Attempt to complete a partial query string. Used for autosuggest / typeahead text inputs.

Requires plan tier: `ENTERPRISE`.

### Type

#### [`SupSuggestion`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-suggestion.md) object

Suggests a query based on partial query input. Used for autocomplete / typeahead UIs.

```graphql
supSuggest(
  q: String!
  categoryId: String
  partNumbersOnly: Boolean
): [SupSuggestion!]!
```

### Arguments

#### `q` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

partial query string

Constraint: `max=1000`.

#### `categoryId` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

categoryId to scope suggestions to

#### `partNumbersOnly` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

only return part number suggestions
