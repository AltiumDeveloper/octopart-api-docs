---
title: "supRefParts"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/operations/queries/sup-ref-parts"
bounded_context: "Reference Design"
kind: "queries"
experimental: false
deprecated: false
---

# supRefParts

Search a specific parts by reference design unique identifier and part's designators.

### Type

#### [`SupRefPart`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-part.md) object

```graphql
supRefParts(
  refDesignId: ID!
  designators: [String!]
  start: Int! = 0
  limit: Int! = 50
): [SupRefPart!]
```

### Arguments

#### `refDesignId` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `designators` · [`[String!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

#### `start` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

#### `limit` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar
