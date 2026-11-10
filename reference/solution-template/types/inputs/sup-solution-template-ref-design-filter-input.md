---
title: "SupSolutionTemplateRefDesignFilterInput"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/inputs/sup-solution-template-ref-design-filter-input"
bounded_context: "Solution Template"
kind: "inputs"
experimental: false
deprecated: false
---

# SupSolutionTemplateRefDesignFilterInput

Input for filtering reference designs by additional conditions.

### Member Of

[`supSolutionTemplateRefDesignSearch`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/queries/sup-solution-template-ref-design-search.md) query

```graphql
input SupSolutionTemplateRefDesignFilterInput {
  isVerified: Boolean
  hasEvalBoard: Boolean
  applicationIds: [String]
  categoryIds: [String]
  publisherIds: [String]
  tags: [String]
  statuses: [SupSolutionTemplateStatus]
}
```

### Fields

#### `isVerified` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

Filter by verification status if specified.

#### `hasEvalBoard` · [`Boolean`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/boolean.md) scalar

Filter to only include designs that have evaluation boards.

#### `applicationIds` · [`[String]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

Filter by a list of application identifiers if specified.

#### `categoryIds` · [`[String]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

Filter by a list of category identifiers if specified.

#### `publisherIds` · [`[String]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

Filter by a list of publisher (company) identifiers if specified.

#### `tags` · [`[String]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

Filter by a list of tags if specified.

#### `statuses` · [`[SupSolutionTemplateStatus]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/enums/sup-solution-template-status.md) list enum

Filter by a list of solution template or reference design statuses if specified.
