---
title: "SupSoftwareProjectEvalKitSource"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-software-project-eval-kit-source"
bounded_context: "Eval Kit"
kind: "objects"
experimental: false
deprecated: false
---

# SupSoftwareProjectEvalKitSource

### Returned By

[`supEvalKitSoftwareProjectCompatibleEvalKitBySoftwareProjectIdAndEvalKitId`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/operations/queries/sup-eval-kit-software-project-compatible-eval-kit-by-software-project-id-and-eval-kit-id.md) query · [`supEvalKitSoftwareProjectCompatibleEvalKitsBySoftwareProjectId`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/operations/queries/sup-eval-kit-software-project-compatible-eval-kits-by-software-project-id.md) query

### Member Of

[`SupSoftwareProject`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/objects/sup-software-project.md) object · [`SupSoftwareProjectEvalKitSourceConnection`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-software-project-eval-kit-source-connection.md) object · [`SupSoftwareProjectEvalKitSourceEdge`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-software-project-eval-kit-source-edge.md) object

```graphql
type SupSoftwareProjectEvalKitSource {
  compatibleEvalKitId: String! @deprecated
  sourceUrl: String! @deprecated
  configXmlUrl: String! @deprecated
  configUrl: String! @deprecated
  readmeUrl: String! @deprecated
  evalKitId: ID! @deprecated
  evalKit: SupEvalKit!
  projectSources(
    types: [SupSoftwareProjectEvalKitProjectSourceType]
  ): [SupSoftwareProjectEvalKitProjectSource!]
}
```

### Fields

#### `evalKit` · [`SupEvalKit!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit.md) non-null object

The evaluation kit associated with the software project.

#### `projectSources` · [`[SupSoftwareProjectEvalKitProjectSource!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-software-project-eval-kit-project-source.md) list object

The list of evaluation kit project sources.

##### `types` · [`[SupSoftwareProjectEvalKitProjectSourceType]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/enums/sup-software-project-eval-kit-project-source-type.md) list enum Supply Software Project

#### Deprecated

#### `compatibleEvalKitId` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar

> **Deprecated:** Fields play a technical role for internal uses.

The compatible evaluation kit identifier.

#### `sourceUrl` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar

> **Deprecated:** Use 'projectSources' instead.

The URL of the source associated with the software project.

#### `configXmlUrl` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar

> **Deprecated:** Use 'projectSources' instead.

The URL of the config XML associated with the software project.

#### `configUrl` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar

> **Deprecated:** Use 'projectSources' instead.

The URL of the config associated with the software project.

#### `readmeUrl` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar

> **Deprecated:** Use 'projectSources' instead.

The URL of the readme associated with the software project.

#### `evalKitId` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** non-null scalar

> **Deprecated:** Fields play a technical role for schema stitching purposes.

The evaluation kit identifier.
