---
title: "SupSolutionTemplatePatchTagsPayload"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-patch-tags-payload"
bounded_context: "Solution Template"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplatePatchTagsPayload

### Returned By

[`supSolutionTemplatePatchTags`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/mutations/sup-solution-template-patch-tags.md) mutation

```graphql
type SupSolutionTemplatePatchTagsPayload {
  result: SupSolutionTemplateResultPayload
  errors: [SupSolutionTemplatePatchTagsError!]
}
```

### Fields

#### `result` · [`SupSolutionTemplateResultPayload`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-result-payload.md) object

#### `errors` · [`[SupSolutionTemplatePatchTagsError!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/unions/sup-solution-template-patch-tags-error.md) list union
