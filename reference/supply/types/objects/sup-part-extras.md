---
title: "SupPartExtras"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part-extras"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupPartExtras

Nexar supply part data for internal use only.

### Member Of

[`SupPart`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part.md) object · [`SupPartExtras`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part-extras.md) object

```graphql
type SupPartExtras {
  alternatives(
    first: Int! = 100
  ): [SupPartExtras!]!
  partId: String!
  description: String
  isRohsCompliant: Boolean
  confidence: Float
  datasheetUrls: [String!]
  lifeCycle: SupPartLifeCycle!
  parameters: [SupPartExtrasParameter!]
  technicalDetails: [SupPartExtrasTechnicalDetail!] @deprecated
}
```

### Fields

#### `alternatives` · [`[SupPartExtras!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part-extras.md) non-null object

Alternative manufacturer components.

##### `first` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

Limits the number returned.

#### `partId` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Part identifier.

#### `description` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Part description.

#### `isRohsCompliant` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

Indicates whether the part is \*RoHS\* compliant.

#### `confidence` · [`Float`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/float.md) scalar

Confidence score for the data from the source.

#### `datasheetUrls` · [`[String!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

List of datasheet URLs associated with the part.

#### `lifeCycle` · [`SupPartLifeCycle!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/enums/sup-part-life-cycle.md) non-null enum

Lifecycle state of the supplier part.

#### `parameters` · [`[SupPartExtrasParameter!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part-extras-parameter.md) list object

Part parameters.

#### Deprecated

#### `technicalDetails` · [`[SupPartExtrasTechnicalDetail!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part-extras-technical-detail.md) **DEPRECATED** list object

> **Deprecated:** Use `parameters`.
