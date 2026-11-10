---
title: "SupSoftwareProjectSolutionTemplateSoftwareProjectsResult"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/objects/sup-software-project-solution-template-software-projects-result"
bounded_context: "Supply Software Project"
kind: "objects"
experimental: false
deprecated: false
---

# SupSoftwareProjectSolutionTemplateSoftwareProjectsResult

### Returned By

[`supSoftwareProjectSolutionTemplateSoftwareProjectsBySolutionTemplateIds`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/operations/queries/sup-software-project-solution-template-software-projects-by-solution-template-ids.md) query

```graphql
type SupSoftwareProjectSolutionTemplateSoftwareProjectsResult {
  solutionTemplateId: ID!
  softwareProjects: [SupSoftwareProject!]!
}
```

### Fields

#### `solutionTemplateId` · [`ID!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/id.md) non-null scalar

The solution template identifier.

#### `softwareProjects` · [`[SupSoftwareProject!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/types/objects/sup-software-project.md) non-null object

The software projects associated with the solution template.
