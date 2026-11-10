---
title: "SupPartExtrasTechnicalDetail"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part-extras-technical-detail"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupPartExtrasTechnicalDetail

Nexar supply part data for internal use only.

### Member Of

[`SupPartExtras`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part-extras.md) object

```graphql
type SupPartExtrasTechnicalDetail {
  name: String!
  value: String!
}
```

### Fields

#### `name` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Technical detail name.

#### `value` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Technical detail value.
