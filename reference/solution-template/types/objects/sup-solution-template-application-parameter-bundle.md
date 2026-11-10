---
title: "SupSolutionTemplateApplicationParameterBundle"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-application-parameter-bundle"
bounded_context: "Solution Template"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateApplicationParameterBundle

### Member Of

[`SupSolutionTemplateApplication`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-application.md) object

```graphql
type SupSolutionTemplateApplicationParameterBundle {
  question: String!
  order: Int!
  required: Boolean!
  parameter: SupSolutionTemplateParameter!
  values: [SupSolutionTemplateParameterValue!]!
}
```

### Fields

#### `question` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The content of the question associated with this parameter bundle.

#### `order` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

The display order of the parameter bundle.

#### `required` · [`Boolean!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Indicates whether the parameter bundle is mandatory.

#### `parameter` · [`SupSolutionTemplateParameter!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-parameter.md) non-null object

Details about the parameter of the parameter bundle.

#### `values` · [`[SupSolutionTemplateParameterValue!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-parameter-value.md) non-null object

The parameter's list of values.
