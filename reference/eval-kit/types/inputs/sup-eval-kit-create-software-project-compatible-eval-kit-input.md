---
title: "SupEvalKitCreateSoftwareProjectCompatibleEvalKitInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-eval-kit-create-software-project-compatible-eval-kit-input"
bounded_context: "Eval Kit"
kind: "inputs"
experimental: false
deprecated: false
---

# SupEvalKitCreateSoftwareProjectCompatibleEvalKitInput

### Member Of

[`SupEvalKitSoftwareProjectCompatibleEvalKitInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-eval-kit-software-project-compatible-eval-kit-input.md) input

```graphql
input SupEvalKitCreateSoftwareProjectCompatibleEvalKitInput {
  evalKitId: ID!
  projectSources: [SupEvalKitSoftwareProjectCompatibleEvalKitProjectSourceInput!]!
}
```

### Fields

#### `evalKitId` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

The evaluation kit identifier.

#### `projectSources` · [`[SupEvalKitSoftwareProjectCompatibleEvalKitProjectSourceInput!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/inputs/sup-eval-kit-software-project-compatible-eval-kit-project-source-input.md) non-null input

The project sources associated with the evaluation kit source.
