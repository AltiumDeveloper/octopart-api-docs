---
title: "SupSolutionTemplateRefDesignResultSet"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-ref-design-result-set"
bounded_context: "Solution Template"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateRefDesignResultSet

Reference designs with pagination, aggregation information.

### Returned By

[`supSolutionTemplateRefDesignSearch`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/queries/sup-solution-template-ref-design-search.md) query

```graphql
type SupSolutionTemplateRefDesignResultSet {
  hits: Int!
  results: [SupSolutionTemplateRefDesign!]!
  publisherAgg(
    size: Int = 10
  ): [SupSolutionTemplateRefDesignPublisherBucket!]
  applicationAgg(
    size: Int = 10
  ): [SupSolutionTemplateRefDesignApplicationBucket!]
  tagAgg(
    size: Int = 10
  ): [SupSolutionTemplateRefDesignTagBucket!]
  categoryAgg(
    size: Int = 10
  ): [SupSolutionTemplateRefDesignCategoryBucket!]
  typeAgg(
    size: Int = 10
  ): [SupSolutionTemplateRefDesignTypeBucket!]
}
```

### Fields

#### `hits` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

Total number of reference designs found.

#### `results` · [`[SupSolutionTemplateRefDesign!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/unions/sup-solution-template-ref-design.md) non-null union

List of reference designs in the current result set.

#### `publisherAgg` · [`[SupSolutionTemplateRefDesignPublisherBucket!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-ref-design-publisher-bucket.md) list object

Aggregate on publishers for this result set.

##### `size` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

#### `applicationAgg` · [`[SupSolutionTemplateRefDesignApplicationBucket!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-ref-design-application-bucket.md) list object

Aggregate on applications for this result set.

##### `size` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

#### `tagAgg` · [`[SupSolutionTemplateRefDesignTagBucket!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-ref-design-tag-bucket.md) list object

Aggregate on tags for this result set.

##### `size` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

#### `categoryAgg` · [`[SupSolutionTemplateRefDesignCategoryBucket!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-ref-design-category-bucket.md) list object

Aggregate on categories for this result set.

##### `size` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

#### `typeAgg` · [`[SupSolutionTemplateRefDesignTypeBucket!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-ref-design-type-bucket.md) list object

Aggregate on reference design types for this result set.

##### `size` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar
