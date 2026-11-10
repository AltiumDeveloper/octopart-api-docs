---
title: "supSoftwareProjectSolutionTemplateSoftwareProjectsBySolutionTemplateIds"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/operations/queries/sup-software-project-solution-template-software-projects-by-solution-template-ids"
bounded_context: "Supply Software Project"
kind: "queries"
experimental: false
deprecated: false
---

# supSoftwareProjectSolutionTemplateSoftwareProjectsBySolutionTemplateIds

Get software projects associated with multiple solution templates, grouped by solution template identifier.

### Type

#### [`SupSoftwareProjectSolutionTemplateSoftwareProjectsResult`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/objects/sup-software-project-solution-template-software-projects-result.md) object

```graphql
supSoftwareProjectSolutionTemplateSoftwareProjectsBySolutionTemplateIds(
  solutionTemplateIds: [ID!]!
): [SupSoftwareProjectSolutionTemplateSoftwareProjectsResult!]!
```

### Arguments

#### `solutionTemplateIds` · [`[ID!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar
