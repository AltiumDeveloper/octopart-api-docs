---
title: "SupSolutionTemplateKeyFeatureGroup"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-key-feature-group"
bounded_context: "Solution Template"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateKeyFeatureGroup

### Member Of

[`SupSolutionTemplate`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template.md) object

```graphql
type SupSolutionTemplateKeyFeatureGroup {
  title: String!
  order: Int!
  attributes: [SupSolutionTemplateKeyFeatureGroupAttribute!]!
}
```

### Fields

#### `title` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The key feature group title.

#### `order` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

The display order of the key feature group.

#### `attributes` · [`[SupSolutionTemplateKeyFeatureGroupAttribute!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-key-feature-group-attribute.md) non-null object

The list of attributes associated with key feature group.
