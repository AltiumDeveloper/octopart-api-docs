---
title: "SupSolutionTemplateCompatibleEvalKit"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-compatible-eval-kit"
bounded_context: "Solution Template"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateCompatibleEvalKit

### Member Of

[`SupSolutionTemplate`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template.md) object

```graphql
type SupSolutionTemplateCompatibleEvalKit {
  compatibleEvalKitId: String! @deprecated
  evalKitId: ID!
  evalKit: SupEvalKit!
  parameters: [SupSolutionTemplateParameterBundle!]!
}
```

### Fields

#### `evalKitId` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

The evaluation kit identifier associated with the solution template.

#### `evalKit` · [`SupEvalKit!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit.md) non-null object Eval Kit

#### `parameters` · [`[SupSolutionTemplateParameterBundle!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-parameter-bundle.md) non-null object

The list of parameters.

#### Deprecated

#### `compatibleEvalKitId` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar

> **Deprecated:** Fields play a technical role for internal uses.

The compatible evaluation kit identifier.
