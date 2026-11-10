---
title: "SupSolutionTemplateRefDesignTagBucket"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-ref-design-tag-bucket"
bounded_context: "Solution Template"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateRefDesignTagBucket

Aggregation bucket for reference design tags with name + counts.

### Member Of

[`SupSolutionTemplateRefDesignResultSet`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-ref-design-result-set.md) object

```graphql
type SupSolutionTemplateRefDesignTagBucket {
  name: String!
  count: Int!
}
```

### Fields

#### `name` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Tag name associated with reference design.

#### `count` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

Number of items in the bucket.
