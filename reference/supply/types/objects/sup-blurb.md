---
title: "SupBlurb"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-blurb"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupBlurb

Information for use on /electronic-parts Category pages.

### Member Of

[`SupCategory`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-category.md) object

```graphql
type SupBlurb {
  name: String!
  pathName: String!
  description: String!
  content: String!
  metaDescription: String!
  metaTitle: String!
}
```

### Fields

#### `name` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Category name.

#### `pathName` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Path to /electronic-parts Category page.

#### `description` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Short description of Category.

#### `content` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Longer description of Category.

#### `metaDescription` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Description used in webpage metadata - SEO optimised

#### `metaTitle` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Title used in webpage metadata - SEO optimised
