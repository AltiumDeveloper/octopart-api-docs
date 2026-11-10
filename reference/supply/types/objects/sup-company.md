---
title: "SupCompany"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-company"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupCompany

A company record represents a manufacturer or distributor, depending on context.

### Common Data Model

- [Company](https://w3id.org/altium/cdm/supply/Company) — Supply Company represents an organization in the electronics supply chain. Depending on context it is the manufacturer of a Part or a distributor (or broker) that sells it.

  - IRI: [`https://w3id.org/altium/cdm/supply/Company`](https://w3id.org/altium/cdm/supply/Company)
  - GRID: `grid:supply::platform:company/{id}`

### Returned By

[`supManufacturers`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/operations/queries/sup-manufacturers.md) query · [`supSellers`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/operations/queries/sup-sellers.md) query

### Member Of

[`SupCompanyBucket`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-company-bucket.md) object · [`SupEvalKit`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit.md) object · [`SupPart`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part.md) object · [`SupPartFamily`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family.md) object · [`SupPartGroup`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-group.md) object · [`SupPartSeller`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part-seller.md) object · [`SupRefDesign`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design.md) object · [`SupRefPublisherBucket`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-publisher-bucket.md) object · [`SupSoftwareProject`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/objects/sup-software-project.md) object · [`SupSolutionTemplate`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template.md) object · [`SupSolutionTemplateRefDesignPublisherBucket`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-ref-design-publisher-bucket.md) object

```graphql
type SupCompany {
  id: ID!
  name: String!
  aliases: [String!]!
  displayFlag: String
  homepageUrl: String
  slug: String!
  isVerified: Boolean!
  isBroker: Boolean! @deprecated
  isDistributorApi: Boolean!
  isOctocartSupported: Boolean!
  isSuspended: Boolean!
  customPricingDetails: SupCustomPricingDetails
}
```

### Fields

#### `id` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

Octopart internal id

#### `name` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Display name of company

#### `aliases` · [`[String!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Aliases of company

#### `displayFlag` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The country code for the display flag

#### `homepageUrl` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Homepage URL of company

#### `slug` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Used for URLs like `/manufacturers/aimtec` or `/distributors/digi-key`

#### `isVerified` · [`Boolean!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

True if a manufacturer participates in Octopart's Verified Manufacturer program. See [verified](https://octopart.com/verified) for more information.

#### `isDistributorApi` · [`Boolean!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

True if a distributor has an API integration with Octopart to provide latest pricing and stock data.

#### `isOctocartSupported` · [`Boolean!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

True if Octocart is supported for this distributor

#### `isSuspended` · [`Boolean!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

True if the company is temporarily suspended and excluded from normal results.

#### `customPricingDetails` · [`SupCustomPricingDetails`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-custom-pricing-details.md) object

Custom Pricing details.

#### Deprecated

#### `isBroker` · [`Boolean!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) **DEPRECATED** non-null scalar

> **Deprecated:** use `PartSeller.is_broker` instead

True if a distributor is a broker. See [authorized](https://octopart.com/authorized) for more information.
