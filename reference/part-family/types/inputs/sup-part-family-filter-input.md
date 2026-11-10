---
title: "SupPartFamilyFilterInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/inputs/sup-part-family-filter-input"
bounded_context: "Part Family"
kind: "inputs"
experimental: false
deprecated: false
---

# SupPartFamilyFilterInput

### Member Of

[`supPartFamilySearch`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/operations/queries/sup-part-family-search.md) query

```graphql
input SupPartFamilyFilterInput {
  applicationIDs: [String!]
  categoryIDs: [String!]
  manufacturerIDs: [String!]
  families: [String!]
  groups: [String!]
}
```

### Fields

#### `applicationIDs` · [`[String!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

#### `categoryIDs` · [`[String!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

#### `manufacturerIDs` · [`[String!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

#### `families` · [`[String!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

#### `groups` · [`[String!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar
