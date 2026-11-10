---
title: "SupPartFamilyPart"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-part"
bounded_context: "Part Family"
kind: "objects"
experimental: false
deprecated: false
---

# SupPartFamilyPart

Represents a part object from the supply schema.

### Implemented By

[`SupPartFamilyPartSearchResult`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/unions/sup-part-family-part-search-result.md) union

```graphql
type SupPartFamilyPart {
  partID: ID!
  part(
    country: String! = US
    currency: String! = USD
  ): [SupPart]!
}
```

### Fields

#### `partID` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

Nexar ID of the part this object represents.

#### `part` · [`[SupPart]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part.md) non-null object Supply

Nexar supply part data for internal use only. Array of size 1.

##### `country` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

##### `currency` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar
