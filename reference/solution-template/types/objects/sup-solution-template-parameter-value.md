---
title: "SupSolutionTemplateParameterValue"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-parameter-value"
bounded_context: "Solution Template"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateParameterValue

### Member Of

[`SupSolutionTemplateApplicationParameterBundle`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-application-parameter-bundle.md) object · [`SupSolutionTemplateParameterBundle`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-parameter-bundle.md) object

```graphql
type SupSolutionTemplateParameterValue {
  value: String!
  name: String!
  info: SupSolutionTemplateParameterInfo
}
```

### Fields

#### `value` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The value of this parameter value.

#### `name` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The name of this parameter value.

#### `info` · [`SupSolutionTemplateParameterInfo`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-parameter-info.md) object

Details about the parameter.
