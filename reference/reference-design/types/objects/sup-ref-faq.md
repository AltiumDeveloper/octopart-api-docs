---
title: "SupRefFaq"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-faq"
bounded_context: "Reference Design"
kind: "objects"
experimental: false
deprecated: false
---

# SupRefFaq

Represents a frequently asked question for a reference design.

### Member Of

[`SupRefDesign`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design.md) object

```graphql
type SupRefFaq {
  question: String!
  answer: String!
}
```

### Fields

#### `question` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The question text.

#### `answer` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The answer text.
