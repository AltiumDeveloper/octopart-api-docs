---
title: "supSearchMpn"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/operations/queries/sup-search-mpn"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supSearchMpn

Search parts by mpn only, including filters, pagination, aggregation, sorting

### Type

#### [`SupPartResultSet`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part-result-set.md) object

Result of part search.

```graphql
supSearchMpn(
  q: String
  country: String! = US
  currency: String! = USD
  start: Int
  limit: Int
  sort: String
  sortDir: SupSortDirection
  inStockOnly: Boolean
  filters: Map
  distributorApi: Boolean
  distributorApiTimeout: String! = 3s
  customPricingCredentials: [SupApiCredentials!]
  rankingMethod: SupSearchRankingMethod! = DEFAULT
): SupPartResultSet!
```

### Arguments

#### `q` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

the query to search on mpn

Constraint: `max=2000`.

#### `country` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

user's country

#### `currency` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

user's currency

#### `start` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

offset in the result set

#### `limit` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

page size of results

#### `sort` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

field to sort by. See [sort values](https://octopart.com/api/v4/values#sort)

#### `sortDir` · [`SupSortDirection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/enums/sup-sort-direction.md) enum

direction of sort: `asc` or `desc`

#### `inStockOnly` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

filter to remove parts with no stocking distributors

#### `filters` · [`Map`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/map.md) scalar

a key: value map of filters. See [filter values](https://octopart.com/api/v4/values#attributes)

#### `distributorApi` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

fetch latest pricing and stock data from distributor API. Company.isDistributorApi indicates if a distributor supports this feature.

#### `distributorApiTimeout` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

how long to wait for distributor API to respond as a duration string (e.g. `3s` or `500ms`)

#### `customPricingCredentials` · [`[SupApiCredentials!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/inputs/sup-api-credentials.md) list input

if needed, pass along credentials for API integrations

Requires plan tier: `ENTERPRISE`.

#### `rankingMethod` · [`SupSearchRankingMethod!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/enums/sup-search-ranking-method.md) non-null enum

Specifying a ranking method.
