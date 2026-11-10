---
title: "SupRefDesignTypeBucket"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design-type-bucket"
bounded_context: "Reference Design"
kind: "objects"
experimental: false
deprecated: false
---

# SupRefDesignTypeBucket

Aggregation bucket for reference design types with type + counts.

### Member Of

[`SupRefDesignResultSet`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design-result-set.md) object

```graphql
type SupRefDesignTypeBucket {
  type: SupRefDesignType!
  count: Int!
}
```

### Fields

#### `type` · [`SupRefDesignType!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/enums/sup-ref-design-type.md) non-null enum

Reference design type.

#### `count` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

Number of items in the bucket.
