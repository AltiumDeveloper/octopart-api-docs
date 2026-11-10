---
title: "SupSolutionTemplateSetTagsPayload"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-set-tags-payload"
bounded_context: "Solution Template"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateSetTagsPayload

### Returned By

[`supSolutionTemplateSetTags`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/mutations/sup-solution-template-set-tags.md) mutation

```graphql
type SupSolutionTemplateSetTagsPayload {
  result: SupSolutionTemplateResultPayload
  errors: [SupSolutionTemplateSetTagsError!]
}
```

### Fields

#### `result` · [`SupSolutionTemplateResultPayload`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-result-payload.md) object

#### `errors` · [`[SupSolutionTemplateSetTagsError!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/unions/sup-solution-template-set-tags-error.md) list union
