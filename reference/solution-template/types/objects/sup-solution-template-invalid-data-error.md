---
title: "SupSolutionTemplateInvalidDataError"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-invalid-data-error"
bounded_context: "Solution Template"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateInvalidDataError

### Interfaces

#### [`Error`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/interfaces/error.md) interface

### Implemented By

[`SupSolutionTemplatePatchKeyFeatureGroupsError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/unions/sup-solution-template-patch-key-feature-groups-error.md) union · [`SupSolutionTemplateSetKeyFeatureGroupsError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/unions/sup-solution-template-set-key-feature-groups-error.md) union

```graphql
type SupSolutionTemplateInvalidDataError implements Error {
  message: String!
  errorCode: SupSolutionTemplateErrorCode!
}
```

### Fields

#### `message` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

#### `errorCode` · [`SupSolutionTemplateErrorCode!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/enums/sup-solution-template-error-code.md) non-null enum
