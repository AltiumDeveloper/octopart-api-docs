---
title: "SupEvalKitSoftwareProjectCompatibleEvalKitInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-eval-kit-software-project-compatible-eval-kit-input"
bounded_context: "Eval Kit"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitSoftwareProjectCompatibleEvalKitInput

Input for software project update.

### Member Of

[`supEvalKitSoftwareProjectCompatibleEvalKit`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/operations/mutations/sup-eval-kit-software-project-compatible-eval-kit.md) mutation

```graphql
input SupEvalKitSoftwareProjectCompatibleEvalKitInput {
  id: ID!
  addCompatibleEvalKits: [SupEvalKitCreateSoftwareProjectCompatibleEvalKitInput!]
  updateCompatibleEvalKits: [SupEvalKitUpdateSoftwareProjectCompatibleEvalKitInput!]
  removeCompatibleEvalKits: [SupEvalKitRemoveSoftwareProjectCompatibleEvalKitInput!]
}
```

### Fields

#### `id` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

The software project identifier.

#### `addCompatibleEvalKits` · [`[SupEvalKitCreateSoftwareProjectCompatibleEvalKitInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-eval-kit-create-software-project-compatible-eval-kit-input.md) list input

Add a new software project evaluation kit project sources.

#### `updateCompatibleEvalKits` · [`[SupEvalKitUpdateSoftwareProjectCompatibleEvalKitInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-eval-kit-update-software-project-compatible-eval-kit-input.md) list input

Update current existing evaluation kit project sources.

#### `removeCompatibleEvalKits` · [`[SupEvalKitRemoveSoftwareProjectCompatibleEvalKitInput!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-eval-kit-remove-software-project-compatible-eval-kit-input.md) list input

Remove current existing evaluation kit project sources.
