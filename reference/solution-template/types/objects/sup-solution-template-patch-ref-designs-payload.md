---
title: "SupSolutionTemplatePatchRefDesignsPayload"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-patch-ref-designs-payload"
bounded_context: "Solution Template"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplatePatchRefDesignsPayload

Payload for patching reference designs on a solution template.

### Returned By

[`supSolutionTemplatePatchRefDesigns`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/mutations/sup-solution-template-patch-ref-designs.md) mutation

```graphql
type SupSolutionTemplatePatchRefDesignsPayload {
  success: Boolean
  errors: [SupSolutionTemplatePatchRefDesignsError!]
}
```

### Fields

#### `success` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

Return true if operation succeeded.

#### `errors` · [`[SupSolutionTemplatePatchRefDesignsError!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/unions/sup-solution-template-patch-ref-designs-error.md) list union
