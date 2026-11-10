---
title: "SupRefApplicationBucket"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-application-bucket"
bounded_context: "Reference Design"
kind: "objects"
experimental: false
deprecated: false
---

# SupRefApplicationBucket

Aggregation bucket for reference design applications with application identifier + counts.

### Member Of

[`SupRefDesignResultSet`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design-result-set.md) object

```graphql
type SupRefApplicationBucket {
  applicationId: String!
  count: Int!
  application: [SupCategory!]
}
```

### Fields

#### `applicationId` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier of application.

#### `count` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

Number of items in the bucket.

#### `application` · [`[SupCategory!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-category.md) list object Supply
