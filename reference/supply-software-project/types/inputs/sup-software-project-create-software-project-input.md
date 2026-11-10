---
title: "SupSoftwareProjectCreateSoftwareProjectInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-software-project-create-software-project-input"
bounded_context: "Supply Software Project"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSoftwareProjectCreateSoftwareProjectInput

Input for software project creation.

### Member Of

[`supSoftwareProjectCreateSoftwareProject`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/operations/mutations/sup-software-project-create-software-project.md) mutation

```graphql
input SupSoftwareProjectCreateSoftwareProjectInput {
  title: String!
  publisherId: String!
  description: String
  type: SupSoftwareProjectType!
  recommendScore: Int
  compatibleEvalKits: [SupSoftwareProjectEvalKitSourceInput!] @deprecated
}
```

### Fields

#### `title` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The software project title.

#### `publisherId` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The publisher identifier.

#### `description` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The software project description.

#### `type` · [`SupSoftwareProjectType!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/enums/sup-software-project-type.md) non-null enum

The software project type.

#### `recommendScore` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar

The recommendation score. Range is 0 to 65535.

#### Deprecated

#### `compatibleEvalKits` · [`[SupSoftwareProjectEvalKitSourceInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-software-project-eval-kit-source-input.md) **DEPRECATED** list input

> **Deprecated:** CompatibleEvalKits is deprecated and no longer accepted.

The list of evaluation kit sources associated with the software project.
