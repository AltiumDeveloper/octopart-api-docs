---
title: "SupPartFamilyComplementaryPart"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-complementary-part"
bounded_context: "Part Family"
kind: "objects"
experimental: false
deprecated: false
---

# SupPartFamilyComplementaryPart

`SupPartFamilyComplementaryPart` contains the details of the complementary part for this part group.

### Member Of

[`SupPartGroup`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-group.md) object

```graphql
type SupPartFamilyComplementaryPart {
  partGroupID: ID!
  name: String!
  categoryID: String!
  slug: String!
  lifecycle: String!
}
```

### Fields

#### `partGroupID` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

`partGroupID` is the GRID of the part group.

#### `name` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

`name` of the part or part group.

#### `categoryID` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

`categoryID` of the category of this part or part group.

#### `slug` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

`slug` is the url slug for this part or part group on Octopart.

#### `lifecycle` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

`lifecycle` status of this part or part group.
