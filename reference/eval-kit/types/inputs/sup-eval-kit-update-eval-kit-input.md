---
title: "SupEvalKitUpdateEvalKitInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-eval-kit-update-eval-kit-input"
bounded_context: "Eval Kit"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitUpdateEvalKitInput

Input for evaluation kit update.

### Member Of

[`supEvalKitUpdateEvalKit`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/operations/mutations/sup-eval-kit-update-eval-kit.md) mutation

```graphql
input SupEvalKitUpdateEvalKitInput {
  id: ID!
  title: String
  publisherId: String
  description: String
  sourceUrl: String
  sourceFile: SupEvalKitFileInput
  removeRefDesignIds: [ID!]
  addRefDesignIds: [ID!]
  removePartIds: [String!]
  addPartIds: [String!]
  newPreviewImages: [SupEvalKitFileInput!]
  addCompatibleSoftwareProjectIds: [ID!] @deprecated
  removeCompatibleSoftwareProjectIds: [ID!] @deprecated
}
```

### Fields

#### `id` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

The evaluation kit identifier.

#### `title` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The evaluation kit title.

#### `publisherId` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The publisher identifier.

#### `description` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The evaluation kit description.

#### `sourceUrl` · [`String`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) scalar

The evaluation kit source url.

#### `sourceFile` · [`SupEvalKitFileInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-eval-kit-file-input.md) input

The evaluation kit source file for building source url.

#### `removeRefDesignIds` · [`[ID!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) list scalar

Remove list of Reference Design identifiers associated with the evaluation kit.

#### `addRefDesignIds` · [`[ID!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) list scalar

Add list of Reference Design identifiers associated with the evaluation kit.

#### `removePartIds` · [`[String!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

Remove list of Part identifiers associated with the evaluation kit.

#### `addPartIds` · [`[String!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

Add list of Part identifiers associated with the evaluation kit.

#### `newPreviewImages` · [`[SupEvalKitFileInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-eval-kit-file-input.md) list input

Replace the current evaluation kit preview images with these ones. The first image will be used as a best preview image.

#### Deprecated

#### `addCompatibleSoftwareProjectIds` · [`[ID!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** list scalar

> **Deprecated:** AddCompatibleSoftwareProjectIds is deprecated and no longer accepted.

Add list of Compatible Software Project identifiers associated with the evaluation kit.

#### `removeCompatibleSoftwareProjectIds` · [`[ID!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) **DEPRECATED** list scalar

> **Deprecated:** RemoveCompatibleSoftwareProjectIds is deprecated and no longer accepted.

Remove list of Compatible Software Project identifiers associated with the evaluation kit.
