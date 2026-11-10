---
title: "SupSolutionTemplatePatchEsdSourcePayload"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-patch-esd-source-payload"
bounded_context: "Solution Template"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplatePatchEsdSourcePayload

Payload for patching the ESD source of a solution template.

### Returned By

[`supSolutionTemplatePatchEsdSource`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/mutations/sup-solution-template-patch-esd-source.md) mutation

```graphql
type SupSolutionTemplatePatchEsdSourcePayload {
  success: Boolean
  errors: [SupSolutionTemplatePatchEsdSourceError!]
}
```

### Fields

#### `success` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

Return true if operation succeeded.

#### `errors` · [`[SupSolutionTemplatePatchEsdSourceError!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/unions/sup-solution-template-patch-esd-source-error.md) list union
