---
title: "SupSolutionTemplatePatchCompatibleEvalKitsPayload"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-patch-compatible-eval-kits-payload"
bounded_context: "Solution Template"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplatePatchCompatibleEvalKitsPayload

Payload for patching compatible eval kits on a solution template.

### Returned By

[`supSolutionTemplatePatchCompatibleEvalKits`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/mutations/sup-solution-template-patch-compatible-eval-kits.md) mutation

```graphql
type SupSolutionTemplatePatchCompatibleEvalKitsPayload {
  success: Boolean
  errors: [SupSolutionTemplatePatchCompatibleEvalKitsError!]
}
```

### Fields

#### `success` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

Return true if operation succeeded.

#### `errors` · [`[SupSolutionTemplatePatchCompatibleEvalKitsError!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/unions/sup-solution-template-patch-compatible-eval-kits-error.md) list union
