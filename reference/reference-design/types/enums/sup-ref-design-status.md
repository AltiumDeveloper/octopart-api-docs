---
title: "SupRefDesignStatus"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/enums/sup-ref-design-status"
bounded_context: "Reference Design"
kind: "enums"
experimental: false
deprecated: false
---

# SupRefDesignStatus

### Member Of

[`SupRefDesign`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design.md) object · [`SupRefDesignFilterInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/inputs/sup-ref-design-filter-input.md) input

```graphql
enum SupRefDesignStatus {
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

Design data has been submitted and awaits review.

#### `ON_HOLD`

Review or progress is paused pending further action.

#### `REVIEWING`

The design is currently under review.

#### `REJECTED`

The design was reviewed and rejected.

#### `ACTIVE`

The design is approved and published and it has active status.

#### `INACTIVE`

The design is not active.
