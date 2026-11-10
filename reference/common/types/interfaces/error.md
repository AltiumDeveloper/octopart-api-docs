---
title: "Error"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/interfaces/error"
bounded_context: "Common"
kind: "interfaces"
experimental: false
deprecated: false
---

# Error

### Implemented By

[`SupEvalKitNotFoundError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit-not-found-error.md) object · [`SupEvalKitOperationFailedError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit-operation-failed-error.md) object · [`SupSoftwareProjectNotFoundError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/objects/sup-software-project-not-found-error.md) object · [`SupSoftwareProjectOperationFailedError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/objects/sup-software-project-operation-failed-error.md) object · [`SupSolutionTemplateApplicationIsExistedError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-application-is-existed-error.md) object · [`SupSolutionTemplateApplicationNotFoundError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-application-not-found-error.md) object · [`SupSolutionTemplateInvalidDataError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-invalid-data-error.md) object · [`SupSolutionTemplateNotFoundError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-not-found-error.md) object · [`SupSolutionTemplateOperationFailedError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-operation-failed-error.md) object

```graphql
interface Error {
  message: String!
}
```

### Fields

#### `message` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar
