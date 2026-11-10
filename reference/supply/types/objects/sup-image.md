---
title: "SupImage"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-image"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupImage

Image of a part. In the case of some symbol and footprint images, the scaled version may not actually be scaled and cropped, and may need to be scaled using CSS or other techniques.

### Member Of

[`SupEvalKit`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit.md) object · [`SupPart`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part.md) object · [`SupRefDesign`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design.md) object · [`SupRefEvaluationKit`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-evaluation-kit.md) object · [`SupSoftwareProject`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/objects/sup-software-project.md) object · [`SupSolutionTemplate`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template.md) object

```graphql
type SupImage {
  urlLargest: String! @deprecated
  url55px: String! @deprecated
  url75px: String! @deprecated
  url90px: String! @deprecated
  url: String!
  creditString: String!
  creditUrl: String!
}
```

### Fields

#### `url` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Image URL

#### `creditString` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Source of description. Used for attribution.

#### `creditUrl` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Source URL of description. Used for attribution.

#### Deprecated

#### `urlLargest` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar

> **Deprecated:** use `url` instead

#### `url55px` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar

> **Deprecated:** use `url` instead

#### `url75px` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar

> **Deprecated:** use `url` instead

#### `url90px` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar

> **Deprecated:** use `url` instead
