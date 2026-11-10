---
title: "SupSolutionTemplatePatchRefDesignsInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-patch-ref-designs-input"
bounded_context: "Solution Template"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplatePatchRefDesignsInput

Input for adding or removing individual reference designs on a solution template.

### Member Of

[`supSolutionTemplatePatchRefDesigns`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/mutations/sup-solution-template-patch-ref-designs.md) mutation

```graphql
input SupSolutionTemplatePatchRefDesignsInput {
  solutionTemplateId: ID!
  addRefDesignIds: [ID!]
  removeRefDesignIds: [ID!]
}
```

### Fields

#### `solutionTemplateId` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

The unique identifier of the solution template.

#### `addRefDesignIds` · [`[ID!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) list scalar

The identifier(s) of the reference designs to add.

#### `removeRefDesignIds` · [`[ID!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) list scalar

The identifier(s) of the reference designs to remove.
