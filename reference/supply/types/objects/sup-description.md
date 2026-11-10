---
title: "SupDescription"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-description"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupDescription

Textual description of a part

### Member Of

[`SupPart`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part.md) object

```graphql
type SupDescription {
  text: String!
  creditString: String!
  creditUrl: String!
}
```

### Fields

#### `text` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Description text

#### `creditString` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Source of description. Used for attribution.

#### `creditUrl` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Source URL of description. Used for attribution.
