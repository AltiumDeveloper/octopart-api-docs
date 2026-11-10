---
title: "SupSolutionTemplateErrorCode"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/enums/sup-solution-template-error-code"
bounded_context: "Solution Template"
kind: "enums"
experimental: false
deprecated: false
---

# SupSolutionTemplateErrorCode

### Member Of

[`SupSolutionTemplateApplicationIsExistedError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-application-is-existed-error.md) object · [`SupSolutionTemplateApplicationNotFoundError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-application-not-found-error.md) object · [`SupSolutionTemplateInvalidDataError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-invalid-data-error.md) object · [`SupSolutionTemplateNotFoundError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-not-found-error.md) object · [`SupSolutionTemplateOperationFailedError`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-operation-failed-error.md) object

```graphql
enum SupSolutionTemplateErrorCode {
  OPERATION_FAILED
  SUP_SOLUTION_TEMPLATE_NOT_FOUND
  SUP_SOLUTION_TEMPLATE_APPLICATION_IS_EXISTED
  SUP_SOLUTION_TEMPLATE_APPLICATION_NOT_FOUND
  SUP_SOLUTION_TEMPLATE_STABLE_NAME_IS_EXISTED
  SUP_SOLUTION_TEMPLATE_ITEM_CONFLICT
  INVALID_DATA_INPUT
}
```

### Values

#### `OPERATION_FAILED`

The operation failed.

#### `SUP_SOLUTION_TEMPLATE_NOT_FOUND`

The solution template was not found.

#### `SUP_SOLUTION_TEMPLATE_APPLICATION_IS_EXISTED`

The solution template already exists.

#### `SUP_SOLUTION_TEMPLATE_APPLICATION_NOT_FOUND`

The solution template application was not found.

#### `SUP_SOLUTION_TEMPLATE_STABLE_NAME_IS_EXISTED`

The stable name is already in use.

#### `SUP_SOLUTION_TEMPLATE_ITEM_CONFLICT`

Item conflict.

#### `INVALID_DATA_INPUT`

Data input invalid.
