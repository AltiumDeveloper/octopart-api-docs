---
title: "SupRefTagBucket"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-tag-bucket"
bounded_context: "Reference Design"
kind: "objects"
experimental: false
deprecated: false
---

# SupRefTagBucket

Aggregation bucket for reference design tags with name + counts.

### Member Of

[`SupRefDesignResultSet`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design-result-set.md) object

```graphql
type SupRefTagBucket {
  name: String!
  count: Int!
}
```

### Fields

#### `name` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Tag name associated with reference design.

#### `count` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

Number of items in the bucket.
