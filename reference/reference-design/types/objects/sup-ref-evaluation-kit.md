---
title: "SupRefEvaluationKit"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-evaluation-kit"
bounded_context: "Reference Design"
kind: "objects"
experimental: false
deprecated: false
---

# SupRefEvaluationKit

### Member Of

[`SupRefDesign`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design.md) object

```graphql
type SupRefEvaluationKit {
  partId: String!
  title: String!
  previewImages: [SupImage!]!
  evalKit(
    country: String! = US
    currency: String! = USD
  ): [SupPart]!
}
```

### Fields

#### `partId` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The part identifier.

#### `title` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The evaluation kit title.

#### `previewImages` · [`[SupImage!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-image.md) non-null object Supply

Preview images that provide a visual overview of the evaluation kit.

#### `evalKit` · [`[SupPart]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part.md) non-null object Supply

Nexar supply part data for internal use only. Array of size 1.

##### `country` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

##### `currency` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar
