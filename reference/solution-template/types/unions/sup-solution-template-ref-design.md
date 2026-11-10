---
title: "SupSolutionTemplateRefDesign"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/unions/sup-solution-template-ref-design"
bounded_context: "Solution Template"
kind: "unions"
experimental: false
deprecated: false
---

# SupSolutionTemplateRefDesign

Union type for solution template and reference design types.

### Member Of

[`SupSolutionTemplateRefDesignResultSet`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template-ref-design-result-set.md) object

```graphql
union SupSolutionTemplateRefDesign = SupRefDesign | SupSolutionTemplate
```

### Possible types

#### [`SupRefDesign`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design.md) object Reference Design

A reference design model aggregates the relevant documents, files and parts.

#### [`SupSolutionTemplate`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template.md) object
