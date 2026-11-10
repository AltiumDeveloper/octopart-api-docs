---
title: "SupPartResult"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part-result"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupPartResult

### Member Of

[`SupPartResultSet`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part-result-set.md) object

```graphql
type SupPartResult {
  _cacheId: String!
  part: SupPart!
  explain: String! @deprecated
  akaMpn: String
  description: String!
}
```

### Fields

#### `_cacheId` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Cache ID

#### `part` · [`SupPart!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part.md) non-null object

The part object

#### `akaMpn` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

If the search `q` is an alternate MPN for this part, the `akaMpn` will be populated with this alternate MPN.

#### `description` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Description with query terms highlighted. Often this is the same as part.shortDescription, but if the search `q` matched on a different description it may be longer than part.shortDescription and require truncation.

#### Deprecated

#### `explain` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar

> **Deprecated:** always empty
