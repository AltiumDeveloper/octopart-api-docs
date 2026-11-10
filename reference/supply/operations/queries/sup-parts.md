---
title: "supParts"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/operations/queries/sup-parts"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supParts

Get parts by ID.

### Type

#### [`SupPart`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part.md) object

Part model contains the relevant data around a part, including: datasheets, specs, sellers + offers, images, etc.

```graphql
supParts(
  ids: [String!]!
  country: String! = US
  currency: String! = USD
  distributorApi: Boolean
  distributorApiTimeout: String! = 3s
  customPricingCredentials: [SupApiCredentials!]
): [SupPart]!
```

### Arguments

#### `ids` · [`[String!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

list of part IDs. APIv3 UIDs are also supported.

#### `country` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

user's country

#### `currency` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

user's currency

#### `distributorApi` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

fetch latest pricing and stock data from distributor API. Company.isDistributorApi indicates if a distributor supports this feature.

#### `distributorApiTimeout` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

how long to wait for distributor API to respond as a duration string (e.g. `3s` or `500ms`) up to a max 10s

#### `customPricingCredentials` · [`[SupApiCredentials!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/inputs/sup-api-credentials.md) list input

if needed, pass along credentials for API integrations

Requires plan tier: `ENTERPRISE`.
