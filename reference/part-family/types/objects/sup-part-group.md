---
title: "SupPartGroup"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-group"
bounded_context: "Part Family"
kind: "objects"
experimental: false
deprecated: false
---

# SupPartGroup

`SupPartGroup` contains the relevant information relating to a part group. It represents the leaves of the Part Family hierarchy, and contain the parts represented by this group.

### Common Data Model

- [Part Group](https://w3id.org/altium/cdm/supply/PartGroup) — A leaf of the part family hierarchy in the supply data, holding the parts that belong to it together with group-level information such as its manufacturer, overview, key features and documents. Groups sharing the same parent family are usually close alternatives to one another.

  - IRI: [`https://w3id.org/altium/cdm/supply/PartGroup`](https://w3id.org/altium/cdm/supply/PartGroup)
  - GRID: `grid:supply::platform:part-group/{id}`

### Returned By

[`supPartGroupById`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/operations/queries/sup-part-group-by-id.md) query · [`supPartGroupByName`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/operations/queries/sup-part-group-by-name.md) query · [`supPartGroupByPartId`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/operations/queries/sup-part-group-by-part-id.md) query · [`supPartGroupsByIds`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/operations/queries/sup-part-groups-by-ids.md) query

### Member Of

[`SupPartFamily`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family.md) object · [`SupPartGroup`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-group.md) object

### Interfaces

#### [`SupPartFamilyEntity`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/interfaces/sup-part-family-entity.md) interface

Shared Fields between [`SupPartFamily`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family.md) and `SupPartGroup`.

### Implemented By

[`SupPartFamilyPartSearchResult`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/unions/sup-part-family-part-search-result.md) union · [`SupPartFamilySearchResult`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/unions/sup-part-family-search-result.md) union

```graphql
type SupPartGroup implements SupPartFamilyEntity {
  id: ID!
  stableName: String!
  parent: SupPartFamily
  siblings: [SupPartGroup!]!
  title: String!
  subtitle: String!
  overview: String!
  categoryID: String!
  applicationIDs: [String!]!
  tags: [SupPartFamilyTag!]!
  lifecycleStatus: SupPartFamilyLifecycleStatus!
  keyFeatures: [SupPartFamilyKeyFeature!]!
  manufacturerID: String!
  partIDs(
    start: Int! = 0
    limit: Int! = 10
  ): [String!]!
  price(
    country: String! = US
    currency: String! = USD
    quantity: Int! = 1000
  ): SupPartFamilyPrice
  complementaryParts: [SupPartFamilyComplementaryPart!]!
  referenceDesignIDs: [String!]!
  documents(
    type: SupPartFamilyDocumentType
  ): [SupPartFamilyDocument!]!
  softwareSupport: [SupPartFamilySoftwareSupport!]!
  videos: [SupPartFamilyVideo!]!
  category: SupCategory!
  applications: [SupCategory]!
  manufacturer: [SupCompany!]
  parts: [SupPart]!
}
```

### Fields

#### `id` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

`id` is the global resource id (GRID) for this Part Group.

#### `stableName` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

`stableName` is an immutable name of this part family.

#### `parent` · [`SupPartFamily`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family.md) object

`parent` is the the part family representing the direct parent of this group.

#### `siblings` · [`[SupPartGroup!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-group.md) non-null object

`siblings` is a list of direct sibling part groups of the current group, which have the same parent. They are usually a close alternative choice of the current group.

#### `title` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

`title` of the part group.

#### `subtitle` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

`subtitle` of the part group.

#### `overview` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

`overview` of the key details of this part group.

#### `categoryID` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

`categoryID` is the identifier of the part category of this part group.

#### `applicationIDs` · [`[String!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

`applicationIDs` is a list of the identifiers of relevant applications this part group can be useful for.

#### `tags` · [`[SupPartFamilyTag!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-tag.md) non-null object

`tags` is a list of additional metadata for categorizing this part group.

#### `lifecycleStatus` · [`SupPartFamilyLifecycleStatus!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/enums/sup-part-family-lifecycle-status.md) non-null enum

`lifecycleStatus` is an enum representing the normalized lifecycle status of this part group.

#### `keyFeatures` · [`[SupPartFamilyKeyFeature!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-key-feature.md) non-null object

`keyFeatures` is the list of key part features relevant to this part group.

#### `manufacturerID` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

`manufacturerID` is the identifier of the manufacturer of this part group.

#### `partIDs` · [`[String!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

`partIDs` is the list of identifiers of the physical parts within this group. start and limit are used for paging part results (including those under the parts field). limit has a max value of 20, any value greater than this will be reduced to it.

##### `start` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

##### `limit` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

#### `price` · [`SupPartFamilyPrice`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-price.md) object

`price` contains pricing information for this part group. It contains the minimum, maximum, and median unit price @ given quantity among all parts in the group.

##### `country` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

##### `currency` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

##### `quantity` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

#### `complementaryParts` · [`[SupPartFamilyComplementaryPart!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-complementary-part.md) non-null object

`complementaryParts` is a list of the identifiers of relevant parts which work with this group.

#### `referenceDesignIDs` · [`[String!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

`referenceDesignIDs` is a list of the identifiers of reference designs relevant to this part group.

#### `documents` · [`[SupPartFamilyDocument!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-document.md) non-null object

`documents` is a list of the key documentation related to this part group.

##### `type` · [`SupPartFamilyDocumentType`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/enums/sup-part-family-document-type.md) enum

#### `softwareSupport` · [`[SupPartFamilySoftwareSupport!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-software-support.md) non-null object

`softwareSupport` is a list of the key supporting documents for this part group.

#### `videos` · [`[SupPartFamilyVideo!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-video.md) non-null object

`videos` is a list of key videos related to this part group.

#### `category` · [`SupCategory!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-category.md) non-null object Supply

#### `applications` · [`[SupCategory]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-category.md) non-null object Supply

#### `manufacturer` · [`[SupCompany!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-company.md) list object Supply

#### `parts` · [`[SupPart]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part.md) non-null object Supply
