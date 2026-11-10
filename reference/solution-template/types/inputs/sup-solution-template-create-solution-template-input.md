---
title: "SupSolutionTemplateCreateSolutionTemplateInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-create-solution-template-input"
bounded_context: "Solution Template"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateCreateSolutionTemplateInput

Input for solution template creation.

### Member Of

[`supSolutionTemplateCreateSolutionTemplate`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/mutations/sup-solution-template-create-solution-template.md) mutation

```graphql
input SupSolutionTemplateCreateSolutionTemplateInput {
  title: String!
  stableName: String!
  publisherId: String!
  description: String
  sourceUrl: String
  solutionSourceUrl: String @deprecated
  requirementTemplate: String
  releaseDate: DateTime
  esdSource: SupSolutionTemplateEsdSourceInput!
  applicationIds: [String!]
  softwareProjectIds: [ID!] @deprecated
  previewImages: [SupSolutionTemplateFileInput!]!
  parameters: [SupSolutionTemplateParameterBundleInput!]
  compatibleEvalKits: [SupSolutionTemplateCompatibleEvalKitInput!]
}
```

### Fields

#### `title` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The solution template title.

#### `stableName` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The solution template stable name identifier.

#### `publisherId` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The publisher identifier.

#### `description` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The solution template description.

#### `sourceUrl` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The source URL where the solution template is published.

#### `requirementTemplate` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The default requirement string used when a user first clones the solution template.

#### `releaseDate` · [`DateTime`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/date-time.md) scalar

The optional release date of the solution template.

#### `esdSource` · [`SupSolutionTemplateEsdSourceInput!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-esd-source-input.md) non-null input

The ESD source.

#### `applicationIds` · [`[String!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

The list of application identifiers associated with the solution template.

#### `previewImages` · [`[SupSolutionTemplateFileInput!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-file-input.md) non-null input

The list of solution template images input. The first image will be the best preview image.

#### `parameters` · [`[SupSolutionTemplateParameterBundleInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-parameter-bundle-input.md) list input

The list of parameters associated with the solution template application.

#### `compatibleEvalKits` · [`[SupSolutionTemplateCompatibleEvalKitInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-compatible-eval-kit-input.md) list input

The list of evaluation kit associated with the solution template.

#### Deprecated

#### `solutionSourceUrl` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** scalar

> **Deprecated:** Use 'sourceUrl' instead.

The source URL where the solution template is published.

#### `softwareProjectIds` · [`[ID!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** list scalar

> **Deprecated:** Use the SoftwareProject service to manage software project associations.

The list of software project identifiers associated with the solution template.
