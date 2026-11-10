---
title: "SupCategoryBucket"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-category-bucket"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupCategoryBucket

categoryAgg produces a CategoryBucket with category + counts

### Member Of

[`SupPartResultSet`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part-result-set.md) object

```graphql
type SupCategoryBucket {
  category: SupCategory!
  count: Int
}
```

### Fields

#### `category` · [`SupCategory!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-category.md) non-null object

#### `count` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar
