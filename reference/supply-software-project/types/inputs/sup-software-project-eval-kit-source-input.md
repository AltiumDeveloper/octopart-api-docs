---
title: "SupSoftwareProjectEvalKitSourceInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-software-project-eval-kit-source-input"
bounded_context: "Supply Software Project"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSoftwareProjectEvalKitSourceInput

### Member Of

[`SupSoftwareProjectCreateSoftwareProjectInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-software-project-create-software-project-input.md) input · [`SupSoftwareProjectUpdateSoftwareProjectInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-software-project-update-software-project-input.md) input

```graphql
input SupSoftwareProjectEvalKitSourceInput {
  sourceUrl: String @deprecated
  sourceFile: SupSoftwareProjectFileInput @deprecated
  configXmlUrl: String @deprecated
  configUrl: String @deprecated
  readmeUrl: String @deprecated
  evalKitId: ID!
  projectSources: [SupSoftwareProjectEvalKitProjectSourceInput!]!
}
```

### Fields

#### `evalKitId` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

The evaluation kit identifier.

#### `projectSources` · [`[SupSoftwareProjectEvalKitProjectSourceInput!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-software-project-eval-kit-project-source-input.md) non-null input

The project sources associated with the evaluation kit source.

#### Deprecated

#### `sourceUrl` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** scalar

> **Deprecated:** Use 'projectSources.sourceUrl' instead.

The URL of the source associated with the evaluation kit source.

#### `sourceFile` · [`SupSoftwareProjectFileInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-software-project-file-input.md) **DEPRECATED** input

> **Deprecated:** Use 'projectSources.sourceFile' instead.

The upload file of the source associated with the evaluation kit source.

#### `configXmlUrl` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** scalar

> **Deprecated:** Use 'projectSources.configXmlUrl' instead.

The URL of the config XML associated with the evaluation kit source.

#### `configUrl` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** scalar

> **Deprecated:** Use 'projectSources' instead.

The URL of the config associated with the evaluation kit source.

#### `readmeUrl` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** scalar

> **Deprecated:** Use 'projectSources' instead.

The URL of the readme associated with the evaluation kit source.
