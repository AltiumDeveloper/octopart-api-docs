---
title: "SupRefPart"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-part"
bounded_context: "Reference Design"
kind: "objects"
experimental: false
deprecated: false
---

# SupRefPart

### Returned By

[`supRefParts`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/operations/queries/sup-ref-parts.md) query

### Member Of

[`SupRefDesign`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design.md) object

```graphql
type SupRefPart {
  partId: String!
  type: SupRefPartType!
  designators: [String!]!
  part(
    country: String! = US
    currency: String! = USD
  ): [SupPart]!
}
```

### Fields

#### `partId` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The part identifier.

#### `type` · [`SupRefPartType!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/enums/sup-ref-part-type.md) non-null enum

The type identifier of this component, indicating its role in the reference design.

#### `designators` · [`[String!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The global identifier linked to the reference design components.

#### `part` · [`[SupPart]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part.md) non-null object Supply

Nexar supply part data for internal use only. Array of size 1.

##### `country` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

##### `currency` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar
