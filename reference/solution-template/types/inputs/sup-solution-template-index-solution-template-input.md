---
title: "SupSolutionTemplateIndexSolutionTemplateInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-index-solution-template-input"
bounded_context: "Solution Template"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateIndexSolutionTemplateInput

### Member Of

[`supSolutionTemplateIndexSolutionTemplate`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/mutations/sup-solution-template-index-solution-template.md) mutation

```graphql
input SupSolutionTemplateIndexSolutionTemplateInput {
  solutionTemplateIds: [ID!]!
}
```

### Fields

#### `solutionTemplateIds` · [`[ID!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

List of solution template IDs to index.
