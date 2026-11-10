---
title: "SupSoftwareProjectEvalKitProjectSource"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-software-project-eval-kit-project-source"
bounded_context: "Eval Kit"
kind: "objects"
experimental: false
deprecated: false
---

# SupSoftwareProjectEvalKitProjectSource

### Member Of

[`SupSoftwareProjectEvalKitSource`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-software-project-eval-kit-source.md) object

```graphql
type SupSoftwareProjectEvalKitProjectSource {
  projectSourceId: String! @deprecated
  type: SupSoftwareProjectEvalKitProjectSourceType!
  sourceUrl: String!
  configXmlUrl: String!
  artifactVersion: String
  toolchainVersion: String
  toolchain: SupEvalKitSoftwareProjectToolchain
  framework: SupSoftwareProjectEvalKitProjectSourceFramework
  family: SupSoftwareProjectEvalKitProjectSourceDeviceFamily
  updatedAt: DateTime!
  artifact: SupSoftwareProjectEvalKitProjectSourceArtifact
}
```

### Fields

#### `type` · [`SupSoftwareProjectEvalKitProjectSourceType!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/enums/sup-software-project-eval-kit-project-source-type.md) non-null enum Supply Software Project

The type of the compatible evaluation kit project source.

#### `sourceUrl` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The URL of the source.

#### `configXmlUrl` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The URL of the config XML.

#### `artifactVersion` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The artifact version.

#### `toolchainVersion` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The selected toolchain version string.

#### `toolchain` · [`SupEvalKitSoftwareProjectToolchain`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit-software-project-toolchain.md) object

The selected toolchain and its supported versions.

#### `framework` · [`SupSoftwareProjectEvalKitProjectSourceFramework`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/enums/sup-software-project-eval-kit-project-source-framework.md) enum

The driver framework of the project source.

#### `family` · [`SupSoftwareProjectEvalKitProjectSourceDeviceFamily`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/enums/sup-software-project-eval-kit-project-source-device-family.md) enum

The device family of the project source.

#### `updatedAt` · [`DateTime!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/date-time.md) non-null scalar

The last updated date.

#### `artifact` · [`SupSoftwareProjectEvalKitProjectSourceArtifact`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-software-project-eval-kit-project-source-artifact.md) object

The artifact associated with the project source.

#### Deprecated

#### `projectSourceId` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) **DEPRECATED** non-null scalar

> **Deprecated:** Fields play a technical role for internal uses.

The project source identifier.
