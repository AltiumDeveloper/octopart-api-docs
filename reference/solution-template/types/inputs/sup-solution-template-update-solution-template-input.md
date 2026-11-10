---
title: "SupSolutionTemplateUpdateSolutionTemplateInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-update-solution-template-input"
bounded_context: "Solution Template"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateUpdateSolutionTemplateInput

Input for solution template update.

### Member Of

[`supSolutionTemplateUpdateSolutionTemplate`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/mutations/sup-solution-template-update-solution-template.md) mutation

```graphql
input SupSolutionTemplateUpdateSolutionTemplateInput {
  id: ID!
  newEsdSource: SupSolutionTemplatePatchEsdSourceInput @deprecated
  title: String
  stableName: String
  publisherId: String
  status: SupSolutionTemplateStatus
  description: String
  sourceUrl: String
  solutionSourceUrl: String @deprecated
  requirementTemplate: String
  releaseDate: DateTime
  removeApplicationIds: [String!]
  addApplicationIds: [String!]
  addSoftwareProjectIds: [ID!] @deprecated
  removeSoftwareProjectIds: [ID!] @deprecated
  newPreviewImages: [SupSolutionTemplateFileInput!] @deprecated
  newParameters: [SupSolutionTemplateParameterBundleInput!] @deprecated
  newCompatibleEvalKits: [SupSolutionTemplateCompatibleEvalKitInput!] @deprecated
}
```

### Fields

#### `id` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `title` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The solution template title.

#### `stableName` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The solution template stable name identifier.

#### `publisherId` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The publisher identifier.

#### `status` · [`SupSolutionTemplateStatus`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/enums/sup-solution-template-status.md) enum

The solution template status.

#### `description` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The solution template description.

#### `sourceUrl` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The source URL where the solution template is published.

#### `requirementTemplate` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The default requirement string used when a user first clones the solution template.

#### `releaseDate` · [`DateTime`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/date-time.md) scalar

The optional release date of the solution template.

#### `removeApplicationIds` · [`[String!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

Remove list of application identifiers associated with the solution template.

#### `addApplicationIds` · [`[String!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

Remove list of application identifiers associated with the solution template.

#### Deprecated

#### `newEsdSource` · [`SupSolutionTemplatePatchEsdSourceInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-patch-esd-source-input.md) **DEPRECATED** input

> **Deprecated:** Use the SupSolutionTemplatePatchEsdSource mutation instead.

The ESD source.

#### `solutionSourceUrl` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** scalar

> **Deprecated:** Use 'sourceUrl' instead.

The source URL where the solution template is published.

#### `addSoftwareProjectIds` · [`[ID!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** list scalar

> **Deprecated:** Use the SoftwareProject service to manage software project associations.

Add list of software project identifiers associated with the solution template.

#### `removeSoftwareProjectIds` · [`[ID!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** list scalar

> **Deprecated:** Use the SoftwareProject service to manage software project associations.

Remove list of software project identifiers associated with the solution template.

#### `newPreviewImages` · [`[SupSolutionTemplateFileInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-file-input.md) **DEPRECATED** list input

> **Deprecated:** Use the SupSolutionTemplateSetPreviewImages/SupSolutionTemplatePatchPreviewImages mutations instead.

Replace the current solution template preview images with these ones. The first image will be used as a best preview image.

#### `newParameters` · [`[SupSolutionTemplateParameterBundleInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-parameter-bundle-input.md) **DEPRECATED** list input

> **Deprecated:** Use the SupSolutionTemplateSetParameters/SupSolutionTemplatePatchParameters mutations instead.

Replace the current solution template parameters with these ones.

#### `newCompatibleEvalKits` · [`[SupSolutionTemplateCompatibleEvalKitInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-compatible-eval-kit-input.md) **DEPRECATED** list input

> **Deprecated:** Use the SupSolutionTemplateSetCompatibleEvalKits/SupSolutionTemplatePatchCompatibleEvalKits mutations instead.

Replace the current solution template compatible eval kits with these ones.
