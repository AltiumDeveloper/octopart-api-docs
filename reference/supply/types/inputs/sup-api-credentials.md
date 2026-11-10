---
title: "SupApiCredentials"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/inputs/sup-api-credentials"
bounded_context: "Supply"
kind: "inputs"
experimental: false
deprecated: false
---

# SupApiCredentials

### Member Of

[`supMultiMatch`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/operations/queries/sup-multi-match.md) query · [`supParts`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/operations/queries/sup-parts.md) query · [`supSearch`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/operations/queries/sup-search.md) query · [`supSearchMpn`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/operations/queries/sup-search-mpn.md) query

```graphql
input SupApiCredentials {
  companyId: String!
  clientId: String
  clientSecret: String
  username: String
  password: String
  apiKey: String
}
```

### Fields

#### `companyId` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The ID of the company that you are providing credentials for. An Octopart representative will give this value to you if needed.

#### `clientId` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Authentication details. `clientId` and `clientSecret` should be given together when an API requires them.

#### `clientSecret` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Authentication details. `clientId` and `clientSecret` should be given together when an API requires them.

#### `username` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Authentication details. `username` and `password` should be given together when an API requires them.

#### `password` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Authentication details. `username` and `password` should be given together when an API requires them.

#### `apiKey` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Authentication details. `apiKey` should be given when an API requires it.
