---
title: "SupPartFamilyEntity"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/interfaces/sup-part-family-entity"
bounded_context: "Part Family"
kind: "interfaces"
experimental: false
deprecated: false
---

# SupPartFamilyEntity

Shared Fields between [`SupPartFamily`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family.md) and [`SupPartGroup`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-group.md).

### Implemented By

[`SupPartFamily`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family.md) object · [`SupPartGroup`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-group.md) object

```graphql
interface SupPartFamilyEntity {
  id: ID!
  stableName: String!
  title: String!
  subtitle: String!
  overview: String!
  categoryID: String!
  manufacturerID: String!
  applicationIDs: [String!]!
  tags: [SupPartFamilyTag!]!
  keyFeatures: [SupPartFamilyKeyFeature!]!
}
```

### Fields

#### `id` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `stableName` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `title` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `subtitle` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `overview` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `categoryID` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `manufacturerID` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `applicationIDs` · [`[String!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `tags` · [`[SupPartFamilyTag!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-tag.md) non-null object

#### `keyFeatures` · [`[SupPartFamilyKeyFeature!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-key-feature.md) non-null object
