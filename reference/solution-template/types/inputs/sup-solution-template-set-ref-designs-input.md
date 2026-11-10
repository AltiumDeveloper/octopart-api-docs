---
title: "SupSolutionTemplateSetRefDesignsInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-set-ref-designs-input"
bounded_context: "Solution Template"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateSetRefDesignsInput

Input for replacing all reference designs on a solution template.

### Member Of

[`supSolutionTemplateSetRefDesigns`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/mutations/sup-solution-template-set-ref-designs.md) mutation

```graphql
input SupSolutionTemplateSetRefDesignsInput {
  solutionTemplateId: ID!
  refDesignIds: [ID!]!
}
```

### Fields

#### `solutionTemplateId` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

The unique identifier of the solution template.

#### `refDesignIds` · [`[ID!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

The identifier(s) of the reference designs. An empty list removes all reference designs.
