---
title: "SupPartCad"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part-cad"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupPartCad

### Member Of

[`SupPart`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part.md) object

```graphql
type SupPartCad {
  addToLibraryUrl: String
  has3dModel: Boolean!
  hasAltium: Boolean!
  hasEagle: Boolean!
  hasOrcad: Boolean!
  hasKicad: Boolean!
  downloadUrlAltium: String!
  downloadUrlEagle: String!
  downloadUrlOrcad: String!
  downloadUrlKicad: String!
  footprintImageUrl: String
  symbolImageUrl: String
}
```

### Fields

#### `addToLibraryUrl` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

URL to add this part to your Upverter library. Requires an Upverter account.

#### `has3dModel` · [`Boolean!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

If true, a STEP model will be included with the tool-specific downloads.

#### `hasAltium` · [`Boolean!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

#### `hasEagle` · [`Boolean!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

#### `hasOrcad` · [`Boolean!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

#### `hasKicad` · [`Boolean!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

#### `downloadUrlAltium` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `downloadUrlEagle` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `downloadUrlOrcad` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `downloadUrlKicad` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `footprintImageUrl` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

#### `symbolImageUrl` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar
