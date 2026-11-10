---
title: "SupRefPublisherBucket"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-publisher-bucket"
bounded_context: "Reference Design"
kind: "objects"
experimental: false
deprecated: false
---

# SupRefPublisherBucket

Aggregation bucket for reference design publishers with company identifier + counts.

### Member Of

[`SupRefDesignResultSet`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design-result-set.md) object

```graphql
type SupRefPublisherBucket {
  publisherId: String!
  count: Int!
  publisher: [SupCompany!]
}
```

### Fields

#### `publisherId` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier of the company that publish the reference design.

#### `count` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

Number of items in the bucket.

#### `publisher` · [`[SupCompany!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-company.md) list object Supply
