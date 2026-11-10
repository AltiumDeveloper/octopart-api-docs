---
title: "SupSponsoredPart"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-sponsored-part"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupSponsoredPart

Part identified by manufacturer as being a companion part, for instance a mated connector pair.

### Member Of

[`SupPart`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part.md) object

```graphql
type SupSponsoredPart {
  _cacheId: String!
  ppid: ID! @deprecated
  sourceId: ID! @deprecated
  part: SupPart!
  url: String!
}
```

### Fields

#### `_cacheId` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Cache ID

#### `part` · [`SupPart!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part.md) non-null object

Related part

#### `url` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

URL to visit for related part

#### Deprecated

#### `ppid` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** non-null scalar

> **Deprecated:** use part.id instead

#### `sourceId` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** non-null scalar

> **Deprecated:** unused
