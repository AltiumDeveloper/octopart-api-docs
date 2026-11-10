---
title: "SupPartSeller"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part-seller"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupPartSeller

A company with offers for a given part

### Member Of

[`SupPart`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part.md) object

```graphql
type SupPartSeller {
  _cacheId: String!
  company: SupCompany!
  country: String
  offers: [SupOffer!]!
  isAuthorized: Boolean!
  isBroker: Boolean!
  isRfq: Boolean!
  shipsToCountries: [SupCountry!]!
}
```

### Fields

#### `_cacheId` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Cache ID

#### `company` · [`SupCompany!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-company.md) non-null object

The distributor

#### `country` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Distributor's country

#### `offers` · [`[SupOffer!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-offer.md) non-null object

List of offers. Multiple offers may exist in different packaging. While multiple geo-targeted offers may exist, currently the API only exposes one geo-targeted offer at a time based on `country` parameter. Please contact us if you have a need to see all geo-targeted offer variants.

#### `isAuthorized` · [`Boolean!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

True if the distributor is an authorized distributor for this manufacturer. See [authorized](https://octopart.com/authorized) for more information.

#### `isBroker` · [`Boolean!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

True if the distributor is a Non-Authorized Dealer. See [authorized](https://octopart.com/authorized) for more information.

#### `isRfq` · [`Boolean!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

True if you can request a quote from this seller.

#### `shipsToCountries` · [`[SupCountry!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-country.md) non-null object

List of countries the seller ships to. An empty list represents zero shipping restrictions.
