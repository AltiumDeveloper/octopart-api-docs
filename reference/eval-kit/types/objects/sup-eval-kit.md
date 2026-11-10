---
title: "SupEvalKit"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit"
bounded_context: "Eval Kit"
kind: "objects"
experimental: false
deprecated: false
---

# SupEvalKit

### Common Data Model

- [Evaluation Kit](https://w3id.org/altium/cdm/supply/EvalKit) — A vendor evaluation kit in the supply catalog, described by its associated devices, its reference designs (including a main one) and the software projects compatible with it. In Renesas 365 an eval kit can be linked to a solution, and the browser can connect to the kit over J-Link.

  - IRI: [`https://w3id.org/altium/cdm/supply/EvalKit`](https://w3id.org/altium/cdm/supply/EvalKit)
  - GRID: `grid:supply::platform:eval-kit/{id}`

### Returned By

[`supEvalKitById`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/operations/queries/sup-eval-kit-by-id.md) query · [`supEvalKits`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/operations/queries/sup-eval-kits.md) query · [`supEvalKitsByIds`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/operations/queries/sup-eval-kits-by-ids.md) query

### Member Of

[`SupEvalKitConnection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit-connection.md) object · [`SupEvalKitEdge`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit-edge.md) object · [`SupSoftwareProjectEvalKitSource`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-software-project-eval-kit-source.md) object · [`SupSolutionTemplate`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template.md) object · [`SupSolutionTemplateCompatibleEvalKit`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-compatible-eval-kit.md) object

```graphql
type SupEvalKit {
  id: ID!
  title: String!
  publisherId: String!
  description: String
  sourceUrl: String
  createdAt: DateTime!
  updatedAt: DateTime!
  updatedById: String
  updatedByName: String
  previewImages: [SupImage!]
  bestPreviewImage: SupImage
  partIds: [String!]! @deprecated
  refDesignIds: [String!]! @deprecated
  refDesigns: [SupRefDesign!]!
  mainRefDesignId: String @deprecated
  mainRefDesign: SupRefDesign
  esdSource: SupEvalKitESDSource
  devices: [SupEvalKitDevice!]!
  parameters: [SupEvalKitParameter!]
  parts: [SupPart]!
  publisher: [SupCompany!]
  compatibleSoftwareProjectIds(
    start: Int! = 0
    limit: Int! = 100
  ): [ID!]! @deprecated
  compatibleSoftwareProjects(
    start: Int! = 0
    limit: Int! = 100
  ): [SupSoftwareProject!]! @deprecated
  compatibleSoftwareProjectData(
    where: SupEvalKitCompatibleSoftwareProjectFilterInput
    first: Int
    after: String
    last: Int
    before: String
    order: [SupSoftwareProjectSortInput!]
  ): SupEvalKitCompatibleSoftwareProjectConnection @deprecated
  compatibleSoftwareProjectDetails(
    where: SupEvalKitCompatibleSoftwareProjectFilterInput
    first: Int
    after: String
    last: Int
    before: String
    order: [SupSoftwareProjectSortInput!]
  ): SupEvalKitCompatibleSoftwareProjectConnection
}
```

### Fields

#### `id` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

The evaluation kit identifier.

#### `title` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The evaluation kit title.

#### `publisherId` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The publisher identifier.

#### `description` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The detailed description.

#### `sourceUrl` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The source url.

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The creation date.

#### `updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The last updated date.

#### `updatedById` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The user id who last updated the evaluation kit.

#### `updatedByName` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The user name who last updated the evaluation kit.

#### `previewImages` · [`[SupImage!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-image.md) list object Supply

The list of evaluation kit images.

#### `bestPreviewImage` · [`SupImage`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-image.md) object Supply

The best evaluation kit images.

#### `refDesigns` · [`[SupRefDesign!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design.md) non-null object Reference Design

#### `mainRefDesign` · [`SupRefDesign`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design.md) object Reference Design

#### `esdSource` · [`SupEvalKitESDSource`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit-esdsource.md) object

The esd source.

#### `devices` · [`[SupEvalKitDevice!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit-device.md) non-null object

The list of devices associated with the evaluation kit.

#### `parameters` · [`[SupEvalKitParameter!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit-parameter.md) list object

The list of parameters associated with the evaluation kit.

#### `parts` · [`[SupPart]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part.md) non-null object Supply

#### `publisher` · [`[SupCompany!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-company.md) list object Supply

#### `compatibleSoftwareProjectDetails` · [`SupEvalKitCompatibleSoftwareProjectConnection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/objects/sup-eval-kit-compatible-software-project-connection.md) object Supply Software Project

The compatible software projects of evaluation kit.

##### `where` · [`SupEvalKitCompatibleSoftwareProjectFilterInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-eval-kit-compatible-software-project-filter-input.md) input Supply Software Project

##### `first` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

##### `after` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

##### `last` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

##### `before` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

##### `order` · [`[SupSoftwareProjectSortInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-software-project-sort-input.md) list input Supply Software Project

#### Deprecated

#### `partIds` · [`[String!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar

> **Deprecated:** Fields play a technical role for schema stitching purposes.

The list of part identifiers associated with the evaluation kit.

#### `refDesignIds` · [`[String!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar

> **Deprecated:** Fields play a technical role for schema stitching purposes.

The list of reference design identifiers associated with the evaluation kit.

#### `mainRefDesignId` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** scalar

> **Deprecated:** Fields play a technical role for schema stitching purposes.

The main reference design identifier associated with the evaluation kit.

#### `compatibleSoftwareProjectIds` · [`[ID!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** non-null scalar

> **Deprecated:** Fields play a technical role for schema stitching purposes.

The list of compatible software project identifiers associated with the evaluation kit.

##### `start` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

##### `limit` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

#### `compatibleSoftwareProjects` · [`[SupSoftwareProject!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/objects/sup-software-project.md) **DEPRECATED** non-null object Supply Software Project

> **Deprecated:** Use 'compatibleSoftwareProjectDetails' instead.

The list of compatible software projects associated with the evaluation kit.

##### `start` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

##### `limit` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

#### `compatibleSoftwareProjectData` · [`SupEvalKitCompatibleSoftwareProjectConnection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/objects/sup-eval-kit-compatible-software-project-connection.md) **DEPRECATED** object Supply Software Project

> **Deprecated:** Use 'compatibleSoftwareProjectDetails' instead.

The compatible software projects of evaluation kit.

##### `where` · [`SupEvalKitCompatibleSoftwareProjectFilterInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-eval-kit-compatible-software-project-filter-input.md) input Supply Software Project

##### `first` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

##### `after` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

##### `last` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

##### `before` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

##### `order` · [`[SupSoftwareProjectSortInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-software-project-sort-input.md) list input Supply Software Project
