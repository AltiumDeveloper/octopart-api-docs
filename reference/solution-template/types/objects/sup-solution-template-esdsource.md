---
title: "SupSolutionTemplateESDSource"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-esdsource"
bounded_context: "Solution Template"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplateESDSource

### Member Of

[`SupSolutionTemplate`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template.md) object

```graphql
type SupSolutionTemplateESDSource {
  documentFileUrl: String
  compileModelUrl: String
  previewUrl: String
}
```

### Fields

#### `documentFileUrl` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The URL of the document file associated with the solution template.

#### `compileModelUrl` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The URL of the compile model associated with the solution template.

#### `previewUrl` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The URL of the preview resource associated with the solution template.
