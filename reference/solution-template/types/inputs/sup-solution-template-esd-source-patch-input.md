---
title: "SupSolutionTemplateEsdSourcePatchInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-esd-source-patch-input"
bounded_context: "Solution Template"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateEsdSourcePatchInput

Input for patching the ESD source of a solution template.

### Member Of

[`supSolutionTemplatePatchEsdSource`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/mutations/sup-solution-template-patch-esd-source.md) mutation

```graphql
input SupSolutionTemplateEsdSourcePatchInput {
  solutionTemplateId: ID!
  documentFile: SupSolutionTemplateFileInput
  compileModel: SupSolutionTemplateFileInput
  previewImageFile: SupSolutionTemplateFileInput
  clearCompileModel: Boolean
  clearPreviewImage: Boolean
}
```

### Fields

#### `solutionTemplateId` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

The unique identifier of the solution template.

#### `documentFile` · [`SupSolutionTemplateFileInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-file-input.md) input

The ESD document file to upload and replace, if specified. There is no way to clear the document file once set.

#### `compileModel` · [`SupSolutionTemplateFileInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-file-input.md) input

The ESD compile model file to upload and replace, if specified.

#### `previewImageFile` · [`SupSolutionTemplateFileInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-file-input.md) input

The ESD preview image file to upload and replace, if specified.

#### `clearCompileModel` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

Clear the existing ESD compile model file when true.

#### `clearPreviewImage` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

Clear the existing ESD preview image file when true.
