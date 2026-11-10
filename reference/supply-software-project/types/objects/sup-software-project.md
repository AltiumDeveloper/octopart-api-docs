---
title: "SupSoftwareProject"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/objects/sup-software-project"
bounded_context: "Supply Software Project"
kind: "objects"
experimental: false
deprecated: false
---

# SupSoftwareProject

### Common Data Model

- [Software Project](https://w3id.org/altium/cdm/supply/SoftwareProject) — A software project published in the supply catalog, together with the evaluation kits it is compatible with. In Renesas 365 it can be imported into a solution with a compatible eval kit; the import places the project in the Workspace and links it to the solution (see sft\_SoftwareProject).

  - IRI: [`https://w3id.org/altium/cdm/supply/SoftwareProject`](https://w3id.org/altium/cdm/supply/SoftwareProject)
  - GRID: `grid:supply::platform:software-project/{id}`

### Returned By

[`supSoftwareProjectById`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/operations/queries/sup-software-project-by-id.md) query · [`supSoftwareProjectEvalKitCompatibleSoftwareProjectsByEvalKitId`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/operations/queries/sup-software-project-eval-kit-compatible-software-projects-by-eval-kit-id.md) query · [`supSoftwareProjects`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/operations/queries/sup-software-projects.md) query · [`supSoftwareProjectsByIds`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/operations/queries/sup-software-projects-by-ids.md) query · [`supSoftwareProjectSolutionTemplateSoftwareProjectsBySolutionTemplateId`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/operations/queries/sup-software-project-solution-template-software-projects-by-solution-template-id.md) query

### Member Of

[`SupEvalKit`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit.md) object · [`SupEvalKitCompatibleSoftwareProjectConnection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/objects/sup-eval-kit-compatible-software-project-connection.md) object · [`SupEvalKitCompatibleSoftwareProjectEdge`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/objects/sup-eval-kit-compatible-software-project-edge.md) object · [`SupSoftwareProjectConnection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/objects/sup-software-project-connection.md) object · [`SupSoftwareProjectEdge`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/objects/sup-software-project-edge.md) object · [`SupSoftwareProjectSolutionTemplateSoftwareProjectsResult`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/objects/sup-software-project-solution-template-software-projects-result.md) object · [`SupSolutionTemplate`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template.md) object

```graphql
type SupSoftwareProject {
  id: ID!
  title: String!
  publisherId: String!
  recommendScore: Int!
  isRecommended: Boolean!
  description: String
  type: SupSoftwareProjectType!
  createdAt: DateTime!
  updatedAt: DateTime!
  updatedById: String
  updatedByName: String
  previewImages: [SupImage!]
  bestPreviewImage: SupImage
  parameters: [SupSoftwareProjectParameter!]
  publisher: [SupCompany!]
  compatibleEvalKits: [SupSoftwareProjectEvalKitSource!]
  compatibleEvalKit(
    id: ID!
  ): SupSoftwareProjectEvalKitSource
  compatibleEvalKitData(
    where: SupSoftwareProjectCompatibleEvalKitFilterInput
    first: Int
    after: String
    last: Int
    before: String
    order: [SupSoftwareProjectCompatibleEvalKitSortInput!]
  ): SupSoftwareProjectEvalKitSourceConnection @deprecated
  compatibleEvalKitDetails(
    where: SupSoftwareProjectCompatibleEvalKitFilterInput
    first: Int
    after: String
    last: Int
    before: String
    order: [SupSoftwareProjectCompatibleEvalKitSortInput!]
  ): SupSoftwareProjectEvalKitSourceConnection
}
```

### Fields

#### `id` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

The software project identifier.

#### `title` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The software project title.

#### `publisherId` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The publisher identifier.

#### `recommendScore` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

The recommendation score. Range is 0 to 65535.

#### `isRecommended` · [`Boolean!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Whether the software project is recommended.

#### `description` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The detailed description.

#### `type` · [`SupSoftwareProjectType!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/enums/sup-software-project-type.md) non-null enum

The software project type.

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The creation date.

#### `updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The last updated date.

#### `updatedById` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The user id who last updated the software project.

#### `updatedByName` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The user name who last updated the software project.

#### `previewImages` · [`[SupImage!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-image.md) list object Supply

The list of software project images.

#### `bestPreviewImage` · [`SupImage`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-image.md) object Supply

The best software project image.

#### `parameters` · [`[SupSoftwareProjectParameter!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/objects/sup-software-project-parameter.md) list object

The list of parameters associated with the software project.

#### `publisher` · [`[SupCompany!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-company.md) list object Supply

#### `compatibleEvalKits` · [`[SupSoftwareProjectEvalKitSource!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-software-project-eval-kit-source.md) list object Eval Kit

The list of evaluation kit sources associated with the software project.

#### `compatibleEvalKit` · [`SupSoftwareProjectEvalKitSource`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-software-project-eval-kit-source.md) object Eval Kit

The evaluation kit source associated with the software project.

##### `id` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `compatibleEvalKitDetails` · [`SupSoftwareProjectEvalKitSourceConnection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-software-project-eval-kit-source-connection.md) object Eval Kit

The compatible evaluation kits of software project.

##### `where` · [`SupSoftwareProjectCompatibleEvalKitFilterInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-software-project-compatible-eval-kit-filter-input.md) input Eval Kit

##### `first` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

##### `after` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

##### `last` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

##### `before` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

##### `order` · [`[SupSoftwareProjectCompatibleEvalKitSortInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-software-project-compatible-eval-kit-sort-input.md) list input Eval Kit

#### Deprecated

#### `compatibleEvalKitData` · [`SupSoftwareProjectEvalKitSourceConnection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-software-project-eval-kit-source-connection.md) **DEPRECATED** object Eval Kit

> **Deprecated:** Use 'compatibleEvalKitDetails' instead.

The compatible evaluation kits of software project.

##### `where` · [`SupSoftwareProjectCompatibleEvalKitFilterInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-software-project-compatible-eval-kit-filter-input.md) input Eval Kit

##### `first` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

##### `after` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

##### `last` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

##### `before` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

##### `order` · [`[SupSoftwareProjectCompatibleEvalKitSortInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-software-project-compatible-eval-kit-sort-input.md) list input Eval Kit
