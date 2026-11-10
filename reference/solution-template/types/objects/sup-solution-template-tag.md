---
title: "SupSolutionTemplateTag"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-tag"
bounded_context: "Solution Template"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateTag

Represents a tag for categorizing a solution template.

### Member Of

[`SupSolutionTemplate`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template.md) object

```graphql
type SupSolutionTemplateTag {
  value: String!
  category: String!
}
```

### Fields

#### `value` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The tag value.

#### `category` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The tag category name.
