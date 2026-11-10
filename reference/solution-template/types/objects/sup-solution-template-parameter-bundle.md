---
title: "SupSolutionTemplateParameterBundle"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-parameter-bundle"
bounded_context: "Solution Template"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateParameterBundle

The parameter bundle's list of values.

### Member Of

[`SupSolutionTemplate`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template.md) object · [`SupSolutionTemplateCompatibleEvalKit`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-compatible-eval-kit.md) object

```graphql
type SupSolutionTemplateParameterBundle {
  parameter: SupSolutionTemplateParameter!
  values: [SupSolutionTemplateParameterValue!]!
}
```

### Fields

#### `parameter` · [`SupSolutionTemplateParameter!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-parameter.md) non-null object

Details about the parameter of the parameter bundle.

#### `values` · [`[SupSolutionTemplateParameterValue!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-parameter-value.md) non-null object
