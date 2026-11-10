---
title: "supSoftwareProjectEvalKitCompatibleSoftwareProjectsByEvalKitId"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/operations/queries/sup-software-project-eval-kit-compatible-software-projects-by-eval-kit-id"
bounded_context: "Supply Software Project"
kind: "queries"
experimental: false
deprecated: false
---

# supSoftwareProjectEvalKitCompatibleSoftwareProjectsByEvalKitId

Get evaluation kit compatible software projects.

### Type

#### [`SupSoftwareProject`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/objects/sup-software-project.md) object

```graphql
supSoftwareProjectEvalKitCompatibleSoftwareProjectsByEvalKitId(
  evalKitId: ID!
  start: Int! = 0
  limit: Int! = 100
): [SupSoftwareProject!]!
```

### Arguments

#### `evalKitId` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

#### `start` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

#### `limit` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar
