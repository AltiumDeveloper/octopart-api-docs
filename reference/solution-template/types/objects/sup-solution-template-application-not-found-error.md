---
title: "SupSolutionTemplateApplicationNotFoundError"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-application-not-found-error"
bounded_context: "Solution Template"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateApplicationNotFoundError

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/interfaces/error.md) interface

### Implemented By

[`SupSolutionTemplateDeleteSolutionTemplateApplicationError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/unions/sup-solution-template-delete-solution-template-application-error.md) union · [`SupSolutionTemplateUpdateSolutionTemplateApplicationError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/unions/sup-solution-template-update-solution-template-application-error.md) union

```graphql
type SupSolutionTemplateApplicationNotFoundError implements Error {
  message: String!
  errorCode: SupSolutionTemplateErrorCode!
}
```

### Fields

#### `message` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `errorCode` · [`SupSolutionTemplateErrorCode!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/enums/sup-solution-template-error-code.md) non-null enum
