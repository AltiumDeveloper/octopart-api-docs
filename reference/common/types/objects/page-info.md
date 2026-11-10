---
title: "PageInfo"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/objects/page-info"
bounded_context: "Common"
kind: "objects"
experimental: false
deprecated: false
---

# PageInfo

Information about pagination in a connection.

### Member Of

[`SupEvalKitCompatibleSoftwareProjectConnection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/objects/sup-eval-kit-compatible-software-project-connection.md) object · [`SupEvalKitConnection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit-connection.md) object · [`SupEvalKitSoftwareProjectToolchainConnection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit-software-project-toolchain-connection.md) object · [`SupSoftwareProjectConnection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/objects/sup-software-project-connection.md) object · [`SupSoftwareProjectEvalKitSourceConnection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-software-project-eval-kit-source-connection.md) object · [`SupSolutionTemplateApplicationConnection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-application-connection.md) object · [`SupSolutionTemplateConnection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-connection.md) object

```graphql
type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}
```

### Fields

#### `hasNextPage` · [`Boolean!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Indicates whether more edges exist following the set defined by the clients arguments.

#### `hasPreviousPage` · [`Boolean!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) non-null scalar

Indicates whether more edges exist prior the set defined by the clients arguments.

#### `startCursor` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

When paginating backwards, the cursor to continue.

#### `endCursor` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

When paginating forwards, the cursor to continue.
