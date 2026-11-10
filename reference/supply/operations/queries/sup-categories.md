---
title: "supCategories"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/operations/queries/sup-categories"
bounded_context: "Supply"
kind: "queries"
experimental: false
deprecated: false
---

# supCategories

Get categories

### Type

#### [`SupCategory`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-category.md) object

A Category exists in a Category tree. Examples include Passive Components or Capacitors. The `path` field is helpful to see where a category is in the tree.

```graphql
supCategories(
  ids: [String!]
  paths: [String!]
  root: SupCategoryRoot! = ElectronicParts
): [SupCategory!]!
```

### Arguments

#### `ids` · [`[String!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

list of category IDs. Omit to fetch all categories. Where id can be either an Octopart internal id or an Altium Global Resource ID (GRID).

#### `paths` · [`[String!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

list of SEO page paths for categories to include.

#### `root` · [`SupCategoryRoot!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/enums/sup-category-root.md) non-null enum

Root of categories to include, defaults to ElectronicParts.
