---
title: "SupEvalKitParameterInfo"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit-parameter-info"
bounded_context: "Eval Kit"
kind: "objects"
experimental: false
deprecated: false
---

# SupEvalKitParameterInfo

Represents the information of a parameter in the evaluation kit.

### Returned By

[`supEvalKitParameterInfos`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/operations/queries/sup-eval-kit-parameter-infos.md) query

### Member Of

[`SupEvalKitParameter`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/types/objects/sup-eval-kit-parameter.md) object

```graphql
type SupEvalKitParameterInfo {
  title: String!
}
```

### Fields

#### `title` · [`String!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

The parameter title.
