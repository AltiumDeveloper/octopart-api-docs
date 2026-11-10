---
title: "SupSolutionTemplateEsdSourceInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-esd-source-input"
bounded_context: "Solution Template"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateEsdSourceInput

### Member Of

[`SupSolutionTemplateCreateSolutionTemplateInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-create-solution-template-input.md) input

```graphql
input SupSolutionTemplateEsdSourceInput {
  documentFile: SupSolutionTemplateFileInput!
  compileModel: SupSolutionTemplateFileInput
  previewImageFile: SupSolutionTemplateFileInput
}
```

### Fields

#### `documentFile` · [`SupSolutionTemplateFileInput!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-file-input.md) non-null input

The ESD document file.

#### `compileModel` · [`SupSolutionTemplateFileInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-file-input.md) input

The ESD compile model file.

#### `previewImageFile` · [`SupSolutionTemplateFileInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-file-input.md) input

The ESD preview resource file.
