---
title: "SupCategory"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-category"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupCategory

A Category exists in a Category tree. Examples include Passive Components or Capacitors. The `path` field is helpful to see where a category is in the tree.

### Returned By

[`supCategories`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/operations/queries/sup-categories.md) query · [`supCategoriesByIds`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/operations/queries/sup-categories-by-ids.md) query · [`supCategoryById`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/operations/queries/sup-category-by-id.md) query

### Member Of

[`SupCategory`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-category.md) object · [`SupCategoryBucket`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-category-bucket.md) object · [`SupPart`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part.md) object · [`SupPartFamily`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family.md) object · [`SupPartGroup`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-group.md) object · [`SupPartResultSet`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part-result-set.md) object · [`SupRefApplicationBucket`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-application-bucket.md) object · [`SupRefCategoryBucket`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-category-bucket.md) object · [`SupRefDesign`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design.md) object · [`SupSolutionTemplate`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template.md) object · [`SupSolutionTemplateApplication`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-application.md) object

```graphql
type SupCategory {
  id: ID!
  parentId: ID!
  name: String!
  ancestors: [SupCategory!]!
  children: [SupCategory!]!
  path: String!
  relevantAttributes: [SupAttribute!]!
  blurb: SupBlurb
  numParts: Int!
}
```

### Fields

#### `id` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

Octopart internal id.

#### `parentId` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

ID of parent category.

#### `name` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Display name

#### `ancestors` · [`[SupCategory!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-category.md) non-null object

List of all ancestor in category tree.

#### `children` · [`[SupCategory!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-category.md) non-null object

List of direct children in category tree.

#### `path` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Slash separated path. Can be used to visit URL for category page. (e.g. `/electronic-parts/circuit-protection/esd-and-circuit-protection-ics`)

#### `relevantAttributes` · [`[SupAttribute!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-attribute.md) non-null object

List of Attributes deemed to be relevant to this category. (e.g. Resistance for Resistor category). Useful for showing contextual filters in UI.

#### `blurb` · [`SupBlurb`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-blurb.md) object

Blurb for Category, used on /electronic-parts pages.

#### `numParts` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

Number of parts in Category.
