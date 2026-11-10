---
title: "SupCountry"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-country"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupCountry

A country's name, country code, and continent code.

### Member Of

[`SupPartSeller`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part-seller.md) object

```graphql
type SupCountry {
  name: String!
  countryCode: String!
  continentCode: String!
}
```

### Fields

#### `name` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `countryCode` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `continentCode` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar
