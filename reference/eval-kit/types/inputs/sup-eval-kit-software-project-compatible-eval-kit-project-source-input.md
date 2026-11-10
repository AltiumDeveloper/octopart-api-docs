---
title: "SupEvalKitSoftwareProjectCompatibleEvalKitProjectSourceInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-eval-kit-software-project-compatible-eval-kit-project-source-input"
bounded_context: "Eval Kit"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitSoftwareProjectCompatibleEvalKitProjectSourceInput

### Member Of

[`SupEvalKitCreateSoftwareProjectCompatibleEvalKitInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-eval-kit-create-software-project-compatible-eval-kit-input.md) input · [`SupEvalKitUpdateSoftwareProjectCompatibleEvalKitInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-eval-kit-update-software-project-compatible-eval-kit-input.md) input

```graphql
input SupEvalKitSoftwareProjectCompatibleEvalKitProjectSourceInput {
  sourceUrl: String
  sourceFile: SupEvalKitFileInput
  configXmlUrl: String!
  artifactVersion: String
  framework: SupSoftwareProjectEvalKitProjectSourceFramework
  family: SupSoftwareProjectEvalKitProjectSourceDeviceFamily
  toolchainId: String
  toolchainVersion: String
  type: SupSoftwareProjectEvalKitProjectSourceType!
}
```

### Fields

#### `sourceUrl` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The URL of the source associated with the evaluation kit source.

#### `sourceFile` · [`SupEvalKitFileInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-eval-kit-file-input.md) input

The upload file of the source associated with the evaluation kit source.

#### `configXmlUrl` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The URL of the config XML associated with the evaluation kit source.

#### `artifactVersion` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The artifact version associated with the evaluation kit source.

#### `framework` · [`SupSoftwareProjectEvalKitProjectSourceFramework`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/enums/sup-software-project-eval-kit-project-source-framework.md) enum

The driver framework of the project source.

#### `family` · [`SupSoftwareProjectEvalKitProjectSourceDeviceFamily`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/enums/sup-software-project-eval-kit-project-source-device-family.md) enum

The device family of the project source.

#### `toolchainId` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The toolchain identifier. A toolchain may be selected without a version.

#### `toolchainVersion` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The supported version string from the toolchain catalog. Must belong to the selected toolchain.

#### `type` · [`SupSoftwareProjectEvalKitProjectSourceType!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/enums/sup-software-project-eval-kit-project-source-type.md) non-null enum Supply Software Project

The project source type.
