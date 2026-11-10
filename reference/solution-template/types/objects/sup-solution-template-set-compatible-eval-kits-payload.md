---
title: "SupSolutionTemplateSetCompatibleEvalKitsPayload"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-set-compatible-eval-kits-payload"
bounded_context: "Solution Template"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateSetCompatibleEvalKitsPayload

Payload for replacing all compatible eval kits on a solution template.

### Returned By

[`supSolutionTemplateSetCompatibleEvalKits`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/mutations/sup-solution-template-set-compatible-eval-kits.md) mutation

```graphql
type SupSolutionTemplateSetCompatibleEvalKitsPayload {
  success: Boolean
  errors: [SupSolutionTemplateSetCompatibleEvalKitsError!]
}
```

### Fields

#### `success` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

Return true if operation succeeded.

#### `errors` · [`[SupSolutionTemplateSetCompatibleEvalKitsError!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/unions/sup-solution-template-set-compatible-eval-kits-error.md) list union
