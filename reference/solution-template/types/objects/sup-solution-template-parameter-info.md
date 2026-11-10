---
title: "SupSolutionTemplateParameterInfo"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-parameter-info"
bounded_context: "Solution Template"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateParameterInfo

### Member Of

[`SupSolutionTemplateParameter`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-parameter.md) object · [`SupSolutionTemplateParameterValue`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-parameter-value.md) object

```graphql
type SupSolutionTemplateParameterInfo {
  description: String
  imageUrl: String
  summary: String
}
```

### Fields

#### `description` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

A detailed explanation of the parameter.

#### `imageUrl` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The URL of the image associated with this parameter.

#### `summary` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

A brief summary of the parameter.
