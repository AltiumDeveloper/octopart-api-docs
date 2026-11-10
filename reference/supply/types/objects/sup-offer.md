---
title: "SupOffer"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-offer"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupOffer

An offer is a specific buyable part from a distributor, with specific packaging, pricing, stock, moq.

### Common Data Model

- [Offer](https://w3id.org/altium/cdm/supply/Offer) — Supply Offer represents a specific commercial listing of a Part from a supplier, detailing price breaks, stock availability, lead times, and ordering conditions at a given point in time.

  - IRI: [`https://w3id.org/altium/cdm/supply/Offer`](https://w3id.org/altium/cdm/supply/Offer)
  - GRID: `grid:supply::platform:part/{id}/offer/{offerID}`

### Member Of

[`SupPartSeller`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part-seller.md) object

```graphql
type SupOffer {
  _cacheId: String!
  id: ID!
  sku: String!
  eligibleRegion: String
  inventoryLevel: Int!
  packaging: String
  moq: Int
  prices: [SupPricePoint!]!
  clickUrl: String!
  updated: DateTime!
  factoryLeadDays: Int
  onOrderQuantity: Int
  factoryPackQuantity: Int
  orderMultiple: Int
  multipackQuantity: Int
  isCustomPricing: Boolean!
}
```

### Fields

#### `_cacheId` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Cache ID

#### `id` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

Octopart internal ID for this offer

#### `sku` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Stock Keeping Unit used by internally by distributor

#### `eligibleRegion` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The code indicating the region(s) for which offer is valid

#### `inventoryLevel` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

Number of units available to be shipped. (aka Stock, Quantity)

#### `packaging` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Packaging of parts (eg Tape, Reel)

#### `moq` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

Minimum Order Quantity: smallest number of parts that can be purchased

#### `prices` · [`[SupPricePoint!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-price-point.md) non-null object

The price points of the offer, sorted by minimum order quantity

#### `clickUrl` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The URL to view offer on distributor website. This will redirect via Octopart's server.

#### `updated` · [`DateTime!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The last time data was received from distributor feed or API for this offer.

#### `factoryLeadDays` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

Number of days to acquire parts from factory.

Requires plan feature: `LEAD_TIME`.

#### `onOrderQuantity` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

Number of parts on order from factory.

#### `factoryPackQuantity` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

Order multiple for factory orders.

#### `orderMultiple` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

Number of items which must be ordered together.

#### `multipackQuantity` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

The quantity of parts as packaged by the seller.

#### `isCustomPricing` · [`Boolean!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Whether this offer is specific to the customer making the request.
