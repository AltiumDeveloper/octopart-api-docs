---
title: "supManufacturers"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/operations/queries/sup-manufacturers"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supManufacturers

Get manufacturer companies

### Type

#### [`SupCompany`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-company.md) object

A company record represents a manufacturer or distributor, depending on context.

```graphql
supManufacturers(
  ids: [String!]
  slugs: [String!]
  includeSuspended: Boolean! = false
): [SupCompany!]!
```

### Arguments

#### `ids` · [`[String!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

list of company IDs. Omit to fetch all manufacturers.

#### `slugs` · [`[String!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

list of URL slugs for /manufacturers paths

#### `includeSuspended` · [`Boolean!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Include temporarily suspended manufacturers in results. Intended for manufacturer taxonomy pages.
