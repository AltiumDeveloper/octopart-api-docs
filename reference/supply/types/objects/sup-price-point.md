---
title: "SupPricePoint"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-price-point"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupPricePoint

Price in a specific currency + quantity. By supplying a `currency` parameter the API will populate an estimated convertedPrice in the user's desired currency.

### Member Of

[`SupOffer`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-offer.md) object · [`SupPart`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part.md) object

```graphql
type SupPricePoint {
  _cacheId: String!
  quantity: Int!
  price: Float!
  currency: String!
  convertedPrice: Float!
  convertedCurrency: String!
  conversionRate: Float!
}
```

### Fields

#### `_cacheId` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Cache ID

#### `quantity` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

Minimum purchase quantity to get this price (aka price break)

#### `price` · [`Float!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/float.md) non-null scalar

Price in currency

#### `currency` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Currency for price

#### `convertedPrice` · [`Float!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/float.md) non-null scalar

Price converted to user's currency using foreign exchange rates.

Since this is an estimate, an indicator should be shown to user if currency != convertedCurrency.

#### `convertedCurrency` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Currency for `convertedPrice`. Will match value of `currency` argument.

#### `conversionRate` · [`Float!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/float.md) non-null scalar

The exchange rate used to calculate convertedPrice
