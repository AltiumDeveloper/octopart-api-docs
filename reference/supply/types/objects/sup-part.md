---
title: "SupPart"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupPart

Part model contains the relevant data around a part, including: datasheets, specs, sellers + offers, images, etc.

### Common Data Model

- [Part](https://w3id.org/altium/cdm/supply/Part) — Supply Part represents a market-available instance of a manufactured Part, providing aggregated sourcing data such as pricing, stock levels, and supplier offers.

  - IRI: [`https://w3id.org/altium/cdm/supply/Part`](https://w3id.org/altium/cdm/supply/Part)
  - GRID: `grid:supply::platform:part/{id}`

### Returned By

[`supParts`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/operations/queries/sup-parts.md) query

### Member Of

[`DatBomPart`](https://altiumdeveloper.github.io/octopart-api-docs/reference/procurement/types/objects/dat-bom-part.md) object · [`SupEvalKit`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit.md) object · [`SupPart`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part.md) object · [`SupPartFamilyPart`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-part.md) object · [`SupPartGroup`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-group.md) object · [`SupPartMatch`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part-match.md) object · [`SupPartResult`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part-result.md) object · [`SupRefEvaluationKit`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-evaluation-kit.md) object · [`SupRefPart`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-part.md) object · [`SupSponsoredPart`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-sponsored-part.md) object

```graphql
type SupPart {
  _cacheId: String!
  id: ID!
  name: String!
  mpn: String!
  genericMpn: String!
  manufacturer: SupCompany!
  manufacturerUrl: String
  freeSampleUrl: String
  documentCollections: [SupDocumentCollection!]!
  shortDescription: String!
  descriptions: [SupDescription!]!
  images: [SupImage!]!
  specs: [SupSpec!]!
  slug: String!
  octopartUrl: String!
  similarParts: [SupPart!]!
  companionProducts: [SupSponsoredPart!]!
  category: SupCategory
  series: SupPartSeries
  bestImage: SupImage
  bestDatasheet: SupDocument
  referenceDesigns: [SupReferenceDesign!]!
  cad: SupPartCad
  cadRequestUrl: String
  v3uid: ID!
  counts: Map!
  medianPrice1000: SupPricePoint
  totalAvail: Int!
  avgAvail: Float!
  sellers(
    includeBrokers: Boolean! = false
    authorizedOnly: Boolean! = false
    customPricingOnly: Boolean! = false
  ): [SupPartSeller!]!
  estimatedFactoryLeadDays: Int
  akaMpns: [String!]!
  extras: SupPartExtras
}
```

### Fields

#### `_cacheId` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Cache ID

#### `id` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

Octopart internal ID for this part. Appears at the end of PDP URL / `slug` field.

#### `name` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

manufacturer + mpn for easy display

#### `mpn` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Manufacturer Part Number

#### `genericMpn` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Best guess at a generic MPN

#### `manufacturer` · [`SupCompany!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-company.md) non-null object

Company that manufactures this part

#### `manufacturerUrl` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

A link to the manufacturer detail page for this part or series.

#### `freeSampleUrl` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

A link to a manufacturer page to request free sample kits for this part.

#### `documentCollections` · [`[SupDocumentCollection!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-document-collection.md) non-null object

Documents including Datasheets, Compliance Documents, PCNs

Requires plan tier: `PRO`. Requires plan feature: `DATASHEETS`.

#### `shortDescription` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Best description around 110 characters long, as can be seen on SERP or PDP. May need truncation if all descriptions are long.

#### `descriptions` · [`[SupDescription!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-description.md) non-null object

All part descriptions from sources

#### `images` · [`[SupImage!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-image.md) non-null object

All part images

#### `specs` · [`[SupSpec!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-spec.md) non-null object

Attribute values for this part

Requires plan tier: `PRO`. Requires plan feature: `TECH_SPECS`.

#### `slug` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Path component of PDP URL (e.g. `/ad7792bruz-analog+devices-402798`)

#### `octopartUrl` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

A link to the part page on Octopart. Do not include `rel="nofollow"` when linking to this URL.

#### `similarParts` · [`[SupPart!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part.md) non-null object

Parts identified by Octopart to be similar in specs and functionality.

Requires plan tier: `ENTERPRISE`.

#### `companionProducts` · [`[SupSponsoredPart!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-sponsored-part.md) non-null object

Parts identified by the manufacturer as companion products.

Requires plan tier: `ENTERPRISE`.

#### `category` · [`SupCategory`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-category.md) object

#### `series` · [`SupPartSeries`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part-series.md) object

#### `bestImage` · [`SupImage`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-image.md) object

#### `bestDatasheet` · [`SupDocument`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-document.md) object

Requires plan tier: `PRO`. Requires plan feature: `DATASHEETS`.

#### `referenceDesigns` · [`[SupReferenceDesign!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-reference-design.md) non-null object

Requires plan tier: `PRO`. Requires plan feature: `DATASHEETS`.

#### `cad` · [`SupPartCad`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part-cad.md) object

Data about part's CAD model. If null `cadRequestUrl` can be used to request a CAD model be made.

#### `cadRequestUrl` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

URL to request a CAD model from eeconcierge if a part doesn't already have a CAD model. Will be null part is not eligible, e.g. a multimeter

#### `v3uid` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

The UID from Octopart APIv3. Provided for backwards compatibility, in general ID should be used.

#### `counts` · [`Map!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/map.md) non-null scalar

A Map of number of related objects. Can be used to know the number of `images` or `descriptions` without having to request those related objects.

#### `medianPrice1000` · [`SupPricePoint`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-price-point.md) object

The median USD price at quantity 1,000, discarding outliers. A reasonable estimate of average price for a part.

#### `totalAvail` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

Sum of stock available across all distributors

#### `avgAvail` · [`Float!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/float.md) non-null scalar

The average stock level at each distributor

#### `sellers` · [`[SupPartSeller!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part-seller.md) non-null object

Companies with Offers for this part

##### `includeBrokers` · [`Boolean!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

##### `authorizedOnly` · [`Boolean!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

##### `customPricingOnly` · [`Boolean!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

#### `estimatedFactoryLeadDays` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

The estimated factory lead time in days derived from trusted distributor offers.

Requires plan tier: `PRO`. Requires plan feature: `LEAD_TIME`.

#### `akaMpns` · [`[String!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

This part might be known by these alternate MPNs

#### `extras` · [`SupPartExtras`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part-extras.md) object

Nexar supply part data for internal use only.
