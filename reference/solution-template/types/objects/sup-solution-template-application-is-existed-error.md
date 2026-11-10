---
title: "SupSolutionTemplateApplicationIsExistedError"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-application-is-existed-error"
bounded_context: "Solution Template"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateApplicationIsExistedError

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/interfaces/error.md) interface

### Implemented By

[`SupSolutionTemplateCreateSolutionTemplateApplicationError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/unions/sup-solution-template-create-solution-template-application-error.md) union

```graphql
type SupSolutionTemplateApplicationIsExistedError implements Error {
  message: String!
  errorCode: SupSolutionTemplateErrorCode!
}
```

### Fields

#### `message` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `errorCode` · [`SupSolutionTemplateErrorCode!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/enums/sup-solution-template-error-code.md) non-null enum
