---
title: "specifiedBy"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/directives/specified-by"
bounded_context: "Common"
kind: "directives"
experimental: false
deprecated: false
---

# specifiedBy

Exposes a URL that specifies the behavior of this scalar.

```graphql
directive @specifiedBy(
  url: String!
) on SCALAR
```

### Arguments

#### `url` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The URL that specifies the behavior of this scalar.
