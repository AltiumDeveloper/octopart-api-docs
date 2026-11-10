---
title: "SupPartSeries"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part-series"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupPartSeries

A Part can be a member of a PartSeries, which represents a product line or "family" of parts from the manufacturer.

See [series](https://octopart.com/series) page for examples.

### Member Of

[`SupPart`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part.md) object

```graphql
type SupPartSeries {
  id: ID!
  name: String!
  url: String!
}
```

### Fields

#### `id` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

Octopart internal ID for this series

#### `name` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Name of the part series

#### `url` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

Octopart URL for this series, specific to the parent part
