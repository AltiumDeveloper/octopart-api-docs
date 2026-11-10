---
title: "supSellers"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/operations/queries/sup-sellers"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supSellers

Get seller companies (distributors)

### Type

#### [`SupCompany`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-company.md) object

A company record represents a manufacturer or distributor, depending on context.

```graphql
supSellers(
  ids: [String!]
  customPricingOnly: Boolean! = false
  includeSuspended: Boolean! = false
  slugs: [String!]
): [SupCompany!]!
```

### Arguments

#### `ids` · [`[String!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

list of company IDs. Omit to fetch all sellers.

#### `customPricingOnly` · [`Boolean!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Include only companies that support custom pricing.

#### `includeSuspended` · [`Boolean!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Include temporarily suspended distributors in results. Intended for distributor taxonomy pages.

#### `slugs` · [`[String!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

list of URL slugs for /distributors paths
