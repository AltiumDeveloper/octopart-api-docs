---
title: "SupRefDesignResultSet"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design-result-set"
bounded_context: "Reference Design"
kind: "objects"
experimental: false
deprecated: false
---

# SupRefDesignResultSet

Reference designs with pagination, aggregation information.

### Returned By

[`supRefDesigns`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/operations/queries/sup-ref-designs.md) query

```graphql
type SupRefDesignResultSet {
  hits: Int!
  results: [SupRefDesign!]!
  publisherAgg(
    size: Int = 10
  ): [SupRefPublisherBucket!]
  applicationAgg(
    size: Int = 10
  ): [SupRefApplicationBucket!]
  tagAgg(
    size: Int = 10
  ): [SupRefTagBucket!]
  categoryAgg(
    size: Int = 10
  ): [SupRefCategoryBucket!]
  typeAgg(
    size: Int = 10
  ): [SupRefDesignTypeBucket!]
}
```

### Fields

#### `hits` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

Total number of reference designs found.

#### `results` · [`[SupRefDesign!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design.md) non-null object

List of reference designs in the current result set.

#### `publisherAgg` · [`[SupRefPublisherBucket!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-publisher-bucket.md) list object

Aggregate on publishers for this result set.

##### `size` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

#### `applicationAgg` · [`[SupRefApplicationBucket!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-application-bucket.md) list object

Aggregate on applications for this result set.

##### `size` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

#### `tagAgg` · [`[SupRefTagBucket!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-tag-bucket.md) list object

Aggregate on tags for this result set.

##### `size` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

#### `categoryAgg` · [`[SupRefCategoryBucket!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-category-bucket.md) list object

Aggregate on categories for this result set.

##### `size` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

#### `typeAgg` · [`[SupRefDesignTypeBucket!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design-type-bucket.md) list object

Aggregate on reference design types for this result set.

##### `size` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar
