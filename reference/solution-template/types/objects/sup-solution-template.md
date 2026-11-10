---
title: "SupSolutionTemplate"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template"
bounded_context: "Solution Template"
kind: "objects"
experimental: false
deprecated: false
---

# SupSolutionTemplate

### Common Data Model

- [Solution Template](https://w3id.org/altium/cdm/supply/SolutionTemplate) — A publisher's template for a solution, held in the supply catalog. It brings together catalog software projects, evaluation kits and a system design (ESD) source, and users can clone it.

  - IRI: [`https://w3id.org/altium/cdm/supply/SolutionTemplate`](https://w3id.org/altium/cdm/supply/SolutionTemplate)
  - GRID: `grid:supply::platform:solution-template/{id}`

### Returned By

[`supSolutionTemplateById`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/queries/sup-solution-template-by-id.md) query · [`supSolutionTemplateByName`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/queries/sup-solution-template-by-name.md) query · [`supSolutionTemplates`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/queries/sup-solution-templates.md) query · [`supSolutionTemplatesByApplicationId`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/queries/sup-solution-templates-by-application-id.md) query · [`supSolutionTemplatesByIds`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/queries/sup-solution-templates-by-ids.md) query

### Member Of

[`SupSolutionTemplate`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template.md) object · [`SupSolutionTemplateConnection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-connection.md) object · [`SupSolutionTemplateEdge`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-edge.md) object

### Implemented By

[`SupSolutionTemplateRefDesign`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/unions/sup-solution-template-ref-design.md) union

```graphql
type SupSolutionTemplate {
  id: ID!
  title: String!
  stableName: String!
  publisherId: String!
  status: SupSolutionTemplateStatus!
  description: String
  sourceUrl: String
  solutionSourceUrl: String @deprecated
  createdAt: DateTime!
  updatedAt: DateTime!
  updatedById: String
  updatedByName: String
  evalKitIds: [ID!]! @deprecated
  evalKits: [SupEvalKit!]!
  esdSource: SupSolutionTemplateESDSource!
  previewImages: [SupImage!]
  bestPreviewImage: SupImage
  applicationIds: [String!]!
  parameters: [SupSolutionTemplateParameterBundle!]!
  compatibleEvalKits: [SupSolutionTemplateCompatibleEvalKit!]!
  refDesignIds: [String!]! @deprecated
  refDesigns: [SupRefDesign!]!
  aiModelIds: [String!]
  tags: [SupSolutionTemplateTag]
  keyFeatureGroups: [SupSolutionTemplateKeyFeatureGroup!]!
  requirementTemplate: String
  releaseDate: DateTime
  softwareProjectIds: [ID!]! @deprecated
  softwareProjects: [SupSoftwareProject!]!
  applications: [SupCategory!]
  publisher: [SupCompany!]
  self: SupSolutionTemplate
}
```

### Fields

#### `id` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

The solution template identifier.

#### `title` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The solution template title.

#### `stableName` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The solution template stable name identifier.

#### `publisherId` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The publisher identifier.

#### `status` · [`SupSolutionTemplateStatus!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/enums/sup-solution-template-status.md) non-null enum

The solution template status.

#### `description` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The detailed description.

#### `sourceUrl` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The solution source url.

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The creation date.

#### `updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The last updated date.

#### `updatedById` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The user id who last updated the solution template.

#### `updatedByName` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The user name who last updated the solution template.

#### `evalKits` · [`[SupEvalKit!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit.md) non-null object Eval Kit

#### `esdSource` · [`SupSolutionTemplateESDSource!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-esdsource.md) non-null object

The esd source.

#### `previewImages` · [`[SupImage!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-image.md) list object Supply

The list of solution template images.

#### `bestPreviewImage` · [`SupImage`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-image.md) object Supply

The list of solution template images.

#### `applicationIds` · [`[String!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The list of application identifiers associated with the solution template.

#### `parameters` · [`[SupSolutionTemplateParameterBundle!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-parameter-bundle.md) non-null object

The list of parameter bundles associated with the solution template.

#### `compatibleEvalKits` · [`[SupSolutionTemplateCompatibleEvalKit!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-compatible-eval-kit.md) non-null object

The list of evaluation kit parameter bundles associated with the solution template.

#### `refDesigns` · [`[SupRefDesign!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design.md) non-null object Reference Design

The list of reference designs associated with the solution template.

#### `aiModelIds` · [`[String!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

The list of AI model identifiers associated with the solution template.

#### `tags` · [`[SupSolutionTemplateTag]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-tag.md) list object

Tags categorizing the solution template for search and organization.

#### `keyFeatureGroups` · [`[SupSolutionTemplateKeyFeatureGroup!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-key-feature-group.md) non-null object

The list of key features group associated with the solution template.

#### `requirementTemplate` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The default requirement string used when a user first clones the solution template.

#### `releaseDate` · [`DateTime`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/date-time.md) scalar

The optional release date.

#### `softwareProjects` · [`[SupSoftwareProject!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/objects/sup-software-project.md) non-null object Supply Software Project

The list of software projects identifiers associated with the solution template.

#### `applications` · [`[SupCategory!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-category.md) list object Supply

#### `publisher` · [`[SupCompany!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-company.md) list object Supply

#### `self` · [`SupSolutionTemplate`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template.md) object

The solution template entity for Nexar schema stitching purposes.

#### Deprecated

#### `solutionSourceUrl` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** scalar

> **Deprecated:** Use 'sourceUrl' instead.

The solution source url.

#### `evalKitIds` · [`[ID!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** non-null scalar

> **Deprecated:** Use 'compatibleEvalKits' instead

The list of part identifiers associated with the solution template.

#### `refDesignIds` · [`[String!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar

> **Deprecated:** Fields play a technical role for schema stitching purposes.

The list of reference design identifiers associated with the solution template.

#### `softwareProjectIds` · [`[ID!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** non-null scalar

> **Deprecated:** Fields play a technical role for schema stitching purposes.

The list of software projects identifiers associated with the solution template.
