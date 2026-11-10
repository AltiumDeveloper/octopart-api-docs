---
title: "SupSolutionTemplateStatus"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/enums/sup-solution-template-status"
bounded_context: "Solution Template"
kind: "enums"
experimental: false
deprecated: false
---

# SupSolutionTemplateStatus

### Member Of

[`SupSolutionTemplate`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/objects/sup-solution-template.md) object · [`SupSolutionTemplateFilterInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-filter-input.md) input · [`SupSolutionTemplateRefDesignFilterInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-ref-design-filter-input.md) input · [`SupSolutionTemplateSearchFilterInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-search-filter-input.md) input · [`SupSolutionTemplateUpdateSolutionTemplateInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-update-solution-template-input.md) input · [`SupSolutionTemplateUpdateSolutionTemplateStatusInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-update-solution-template-status-input.md) input

```graphql
enum SupSolutionTemplateStatus {
  DRAFT
  SUBMITTED
  ON_HOLD
  REVIEWING
  REJECTED
  ACTIVE
  INACTIVE
}
```

### Values

#### `DRAFT`

Work in progress, not yet submitted for review.

#### `SUBMITTED`

Solution Template data has been submitted and awaits review.

#### `ON_HOLD`

Review or progress is paused pending further action.

#### `REVIEWING`

The solution template is currently under review.

#### `REJECTED`

The solution template was reviewed and rejected.

#### `ACTIVE`

The solution template is approved and published and it has active status.

#### `INACTIVE`

The solution template is not active.
