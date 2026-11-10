---
title: "SupPartFamily"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family"
bounded_context: "Part Family"
kind: "objects"
experimental: false
deprecated: false
---

# SupPartFamily

`SupPartFamily` contains the relevant information related to a part family. It exists in a hierarchy of other part families, they can contain children which represent other part families or `partGroups` which represent the leaves of the hierarchy tree.

### Common Data Model

- [Part Family](https://w3id.org/altium/cdm/supply/PartFamily) — A manufacturer's grouping of parts in the supply data, where the kind of family is vendor-specific (e.g. Series or Family). Part families form a hierarchy: a family has either child families or, at the lowest level, Part Groups. Families sharing the same parent are usually close alternatives to one another.

  - IRI: [`https://w3id.org/altium/cdm/supply/PartFamily`](https://w3id.org/altium/cdm/supply/PartFamily)
  - GRID: `grid:supply::platform:part-family/{id}`

### Member Of

[`SupPartFamily`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family.md) object · [`SupPartFamilyBucket`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-bucket.md) object · [`SupPartGroup`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-group.md) object

### Interfaces

#### [`SupPartFamilyEntity`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/interfaces/sup-part-family-entity.md) interface

Shared Fields between `SupPartFamily` and [`SupPartGroup`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-group.md).

### Implemented By

[`SupPartFamilySearchResult`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/unions/sup-part-family-search-result.md) union

```graphql
type SupPartFamily implements SupPartFamilyEntity {
  id: ID!
  stableName: String!
  familyType: String!
  parent: SupPartFamily
  children: [SupPartFamily!]!
  partGroups: [SupPartGroup!]!
  siblings: [SupPartFamily!]!
  title: String!
  subtitle: String!
  overview: String!
  categoryID: String!
  applicationIDs: [String!]!
  tags: [SupPartFamilyTag!]!
  keyFeatures: [SupPartFamilyKeyFeature!]!
  manufacturerID: String!
  category: SupCategory!
  applications: [SupCategory!]
  manufacturer: [SupCompany!]
}
```

### Fields

#### `id` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

`id` is the global resource id (GRID) for this Part Family.

#### `stableName` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

`stableName` is an immutable name of this part family.

#### `familyType` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

`familyType` describes the part family in a part family hierarchy. It is vendor and part family specific. Examples include: 'Series', 'Family', etc.

#### `parent` · [`SupPartFamily`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family.md) object

`parent` is the the direct parent of this family. This will be `null` if this is the highest level.

#### `children` · [`[SupPartFamily!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family.md) non-null object

`children` is a list of the part families that are the direct children of this family. There will be one of either `children` or `partGroups`.

#### `partGroups` · [`[SupPartGroup!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-group.md) non-null object

`partGroups` is a list of the part groups that are the direct children of this family. There will be one of either `children` or `partGroups`.

#### `siblings` · [`[SupPartFamily!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family.md) non-null object

`siblings` is a list of direct sibling part families of the current group, which have the same parent. They are usually a close alternative choice of the current group.

#### `title` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

`title` of the part family.

#### `subtitle` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

`subtitle` of the part family.

#### `overview` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

`overview` of the part family.

#### `categoryID` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

`categoryID` is the identifier of the part category of this part family.

#### `applicationIDs` · [`[String!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

`applicationIDs` is a list of the identifiers of relevant applications this part family can be useful for.

#### `tags` · [`[SupPartFamilyTag!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-tag.md) non-null object

`tags` is a list of additional metadata for categorizing this part family.

#### `keyFeatures` · [`[SupPartFamilyKeyFeature!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-key-feature.md) non-null object

`keyFeatures` is the list of key part features relevant to this part family.

#### `manufacturerID` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

`manufacturerID` is the identifier of the manufacturer of this part family.

#### `category` · [`SupCategory!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-category.md) non-null object Supply

#### `applications` · [`[SupCategory!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-category.md) list object Supply

#### `manufacturer` · [`[SupCompany!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-company.md) list object Supply
