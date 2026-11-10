---
title: "SupSoftwareProjectEvalKitProjectSourceInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-software-project-eval-kit-project-source-input"
bounded_context: "Supply Software Project"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSoftwareProjectEvalKitProjectSourceInput

### Member Of

[`SupSoftwareProjectCreateEvalKitSourceInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-software-project-create-eval-kit-source-input.md) input · [`SupSoftwareProjectEvalKitSourceInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-software-project-eval-kit-source-input.md) input · [`SupSoftwareProjectUpdateEvalKitSourceInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-software-project-update-eval-kit-source-input.md) input

```graphql
input SupSoftwareProjectEvalKitProjectSourceInput {
  sourceUrl: String
  sourceFile: SupSoftwareProjectFileInput
  configXmlUrl: String!
  type: SupSoftwareProjectEvalKitProjectSourceType!
}
```

### Fields

#### `sourceUrl` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The URL of the source associated with the evaluation kit source.

#### `sourceFile` · [`SupSoftwareProjectFileInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/inputs/sup-software-project-file-input.md) input

The upload file of the source associated with the evaluation kit source.

#### `configXmlUrl` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The URL of the config XML associated with the evaluation kit source.

#### `type` · [`SupSoftwareProjectEvalKitProjectSourceType!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/enums/sup-software-project-eval-kit-project-source-type.md) non-null enum

The project source type.
