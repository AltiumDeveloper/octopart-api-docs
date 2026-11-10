---
title: "SupSoftwareProjectUpdateEvalKitSourceInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-software-project-update-eval-kit-source-input"
bounded_context: "Supply Software Project"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSoftwareProjectUpdateEvalKitSourceInput

### Member Of

[`SupSoftwareProjectUpdateSoftwareProjectInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-software-project-update-software-project-input.md) input

```graphql
input SupSoftwareProjectUpdateEvalKitSourceInput {
  compatibleEvalKitId: String!
  evalKitId: ID!
  newProjectSources: [SupSoftwareProjectEvalKitProjectSourceInput!]
}
```

### Fields

#### `compatibleEvalKitId` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The compatible evaluation kit identifier.

#### `evalKitId` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

The evaluation kit identifier.

#### `newProjectSources` · [`[SupSoftwareProjectEvalKitProjectSourceInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-software-project-eval-kit-project-source-input.md) list input

Replace the current software project evaluation kit project sources with these ones.
