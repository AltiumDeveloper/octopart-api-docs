---
title: "SupSolutionTemplateParameter"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-parameter"
bounded_context: "Solution Template"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateParameter

### Member Of

[`SupSolutionTemplateApplicationParameterBundle`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-application-parameter-bundle.md) object · [`SupSolutionTemplateParameterBundle`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-parameter-bundle.md) object

```graphql
type SupSolutionTemplateParameter {
  title: String!
  info: SupSolutionTemplateParameterInfo
}
```

### Fields

#### `title` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The parameter title.

#### `info` · [`SupSolutionTemplateParameterInfo`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-parameter-info.md) object

Details about the parameter.
