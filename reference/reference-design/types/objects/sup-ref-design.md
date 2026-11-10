---
title: "SupRefDesign"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design"
bounded_context: "Reference Design"
kind: "objects"
experimental: false
deprecated: false
---

# SupRefDesign

A reference design model aggregates the relevant documents, files and parts.

### Common Data Model

- [Reference Design](https://w3id.org/altium/cdm/supply/ReferenceDesign) — An example design published in the supply catalog, bringing together its design files (e.g. schematics and layouts), documentation and the parts it uses. In Renesas 365 a reference design can be imported into a solution, which adds it to the Workspace as a PCB project linked to that solution.

  - IRI: [`https://w3id.org/altium/cdm/supply/ReferenceDesign`](https://w3id.org/altium/cdm/supply/ReferenceDesign)
  - GRID: `grid:supply::platform:ref-design/{id}`

### Returned By

[`supRefDesignById`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/operations/queries/sup-ref-design-by-id.md) query · [`supRefDesignByIds`](https://altiumdeveloper.github.io/octopart-api-docs/reference/deprecated/reference-design/operations/queries/sup-ref-design-by-ids.md) query · [`supRefDesignByName`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/operations/queries/sup-ref-design-by-name.md) query · [`supRefDesignsByIds`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/operations/queries/sup-ref-designs-by-ids.md) query

### Member Of

[`SupEvalKit`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit.md) object · [`SupEvalKitDevice`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit-device.md) object · [`SupRefDesign`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design.md) object · [`SupRefDesignResultSet`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design-result-set.md) object · [`SupSolutionTemplate`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template.md) object

### Implemented By

[`SupSolutionTemplateRefDesign`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/unions/sup-solution-template-ref-design.md) union

```graphql
type SupRefDesign {
  id: ID!
  title: String!
  stableName: String!
  subtitle: String
  description: String!
  type: SupRefDesignType!
  sourceUrl: String
  isVerified: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
  hasEvalBoard: Boolean!
  publisherId: String!
  bomId: String
  releaseDate: DateTime
  defaultSchematicFile: String
  status: SupRefDesignStatus
  parts(
    designators: [String!]
    type: SupRefPartType
    types: [SupRefPartType]
    start: Int! = 0
    limit: Int! = 50
  ): [SupRefPart]!
  applicationIds: [String!]!
  evaluationKitIds: [String!]! @deprecated
  previewImages: [SupImage]
  faqs: [SupRefFaq!]!
  keyFeatures: [SupRefKeyFeature]!
  designFiles(
    type: String
    extensions: [String!]
  ): [SupRefDesignFile]!
  documentations: [SupDocument]!
  tags: [SupRefTag]
  softwares: [SupRefResource]!
  evaluationKits: [SupRefEvaluationKit!]
  publisher: [SupCompany!]
  applications: [SupCategory!]
  evalKitDetails(
    where: SupEvalKitByRefDesignFilterInput
    first: Int
    after: String
    last: Int
    before: String
  ): SupEvalKitConnection
  self: SupRefDesign
}
```

### Fields

#### `id` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

The reference design identifier.

#### `title` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The reference design title.

#### `stableName` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The stable name identifier.

#### `subtitle` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The subtitle providing context.

#### `description` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The detailed description.

#### `type` · [`SupRefDesignType!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/enums/sup-ref-design-type.md) non-null enum

The type identifier of this reference design.

#### `sourceUrl` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The source URL where the reference design is published.

#### `isVerified` · [`Boolean!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Indicates whether the reference design is verified.

#### `createdAt` · [`DateTime!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The creation date.

#### `updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The last updated date.

#### `hasEvalBoard` · [`Boolean!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Indicates if an evaluation board is available.

#### `publisherId` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The publisher identifier.

#### `bomId` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The bill of materials (BOM) identifier.

#### `releaseDate` · [`DateTime`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/date-time.md) scalar

The release date of the reference design.

#### `defaultSchematicFile` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The default schematic file associated with the reference design.

#### `status` · [`SupRefDesignStatus`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/enums/sup-ref-design-status.md) enum

The status name.

#### `parts` · [`[SupRefPart]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-part.md) non-null object

Part identifiers of the reference design, including their designators.

##### `designators` · [`[String!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

##### `type` · [`SupRefPartType`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/enums/sup-ref-part-type.md) **DEPRECATED** enum

> **Deprecated:** Use 'types' instead

##### `types` · [`[SupRefPartType]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/enums/sup-ref-part-type.md) list enum

##### `start` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

##### `limit` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

#### `applicationIds` · [`[String!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The list of application identifiers related to the reference design.

#### `previewImages` · [`[SupImage]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-image.md) list object Supply

Preview images that provide a visual overview of the reference design.

#### `faqs` · [`[SupRefFaq!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-faq.md) non-null object

Frequently asked questions about the reference design.

#### `keyFeatures` · [`[SupRefKeyFeature]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-key-feature.md) non-null object

Key features highlighting the capabilities of the reference design.

#### `designFiles` · [`[SupRefDesignFile]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design-file.md) non-null object

Design files, such as schematics and layouts, for the reference design.

##### `type` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

##### `extensions` · [`[String!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

#### `documentations` · [`[SupDocument]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-document.md) non-null object Supply

Documentation resources related to the reference design.

#### `tags` · [`[SupRefTag]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-tag.md) list object

Tags categorizing the reference design for search and organization.

#### `softwares` · [`[SupRefResource]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-resource.md) non-null object

Software packages and resources associated with the reference design.

#### `evaluationKits` · [`[SupRefEvaluationKit!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-evaluation-kit.md) list object

The list of evaluation kits associated with the reference design.

#### `publisher` · [`[SupCompany!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-company.md) list object Supply

#### `applications` · [`[SupCategory!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-category.md) list object Supply

#### `evalKitDetails` · [`SupEvalKitConnection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit-connection.md) object Eval Kit

##### `where` · [`SupEvalKitByRefDesignFilterInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-eval-kit-by-ref-design-filter-input.md) input Eval Kit

##### `first` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

Returns the first \_n\_ elements from the list.

##### `after` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come after the specified cursor.

##### `last` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

Returns the last \_n\_ elements from the list.

##### `before` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

Returns the elements in the list that come before the specified cursor.

#### `self` · [`SupRefDesign`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design.md) object

The reference design entity for Nexar schema stitching purposes.

#### Deprecated

#### `evaluationKitIds` · [`[String!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar

> **Deprecated:** Use 'evaluationKits' instead.

The list of evaluation kit identifiers associated with the reference design.
