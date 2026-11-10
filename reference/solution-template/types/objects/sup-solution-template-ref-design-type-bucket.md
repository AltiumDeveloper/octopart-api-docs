---
title: "SupSolutionTemplateRefDesignTypeBucket"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-ref-design-type-bucket"
bounded_context: "Solution Template"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateRefDesignTypeBucket

Aggregation bucket for reference design types with type + counts.

### Member Of

[`SupSolutionTemplateRefDesignResultSet`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-ref-design-result-set.md) object

```graphql
type SupSolutionTemplateRefDesignTypeBucket {
  type: SupSolutionTemplateRefDesignType!
  count: Int!
}
```

### Fields

#### `type` · [`SupSolutionTemplateRefDesignType!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/enums/sup-solution-template-ref-design-type.md) non-null enum

Reference design type or solution template.

#### `count` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

Number of items in the bucket.
