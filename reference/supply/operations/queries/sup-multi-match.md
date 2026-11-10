---
title: "supMultiMatch"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/operations/queries/sup-multi-match"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supMultiMatch

Match multiple manufacturer + mpn pairs at once. Useful for when you have a list of parts, as with a BOM (Bill of Materials)

### Type

#### [`SupPartMatch`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part-match.md) object

```graphql
supMultiMatch(
  queries: [SupPartMatchQuery!]!
  options: SupPartMatchOptions
  country: String! = US
  currency: String! = USD
  distributorApi: Boolean
  distributorApiTimeout: String! = 3s
  customPricingCredentials: [SupApiCredentials!]
  rankingMethod: SupSearchRankingMethod! = DEFAULT
): [SupPartMatch!]!
```

### Arguments

#### `queries` · [`[SupPartMatchQuery!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/inputs/sup-part-match-query.md) non-null input

list of inputs to attempt to match

#### `options` · [`SupPartMatchOptions`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/inputs/sup-part-match-options.md) input

options when matching such as applying filters or only including authorized or in-stock parts

#### `country` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

user's country

#### `currency` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

user's currency

#### `distributorApi` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

fetch latest pricing and stock data from distributor API. Company.isDistributorApi indicates if a distributor supports this feature.

#### `distributorApiTimeout` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

how long to wait for distributor API to respond as a duration string (e.g. `3s` or `500ms`)

#### `customPricingCredentials` · [`[SupApiCredentials!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/inputs/sup-api-credentials.md) list input

if needed, pass along credentials for API integrations

Requires plan tier: `ENTERPRISE`.

#### `rankingMethod` · [`SupSearchRankingMethod!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/enums/sup-search-ranking-method.md) non-null enum

Specifying a ranking method.
