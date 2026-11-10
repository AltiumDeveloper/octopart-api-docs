---
title: "SupSolutionTemplateRefDesignCategoryBucket"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-ref-design-category-bucket"
bounded_context: "Solution Template"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateRefDesignCategoryBucket

Aggregation bucket for reference design categories with category identifier + counts.

### Member Of

[`SupSolutionTemplateRefDesignResultSet`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-ref-design-result-set.md) object

```graphql
type SupSolutionTemplateRefDesignCategoryBucket {
  categoryId: String!
  count: Int!
}
```

### Fields

#### `categoryId` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The identifier of category.

#### `count` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

Number of items in the bucket.
