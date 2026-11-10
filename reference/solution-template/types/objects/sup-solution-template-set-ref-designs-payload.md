---
title: "SupSolutionTemplateSetRefDesignsPayload"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-set-ref-designs-payload"
bounded_context: "Solution Template"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateSetRefDesignsPayload

Payload for replacing reference designs on a solution template.

### Returned By

[`supSolutionTemplateSetRefDesigns`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/mutations/sup-solution-template-set-ref-designs.md) mutation

```graphql
type SupSolutionTemplateSetRefDesignsPayload {
  success: Boolean
  errors: [SupSolutionTemplateSetRefDesignsError!]
}
```

### Fields

#### `success` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

Return true if operation succeeded.

#### `errors` · [`[SupSolutionTemplateSetRefDesignsError!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/unions/sup-solution-template-set-ref-designs-error.md) list union
