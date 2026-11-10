---
title: "SupRefDesignType"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/enums/sup-ref-design-type"
bounded_context: "Reference Design"
kind: "enums"
experimental: false
deprecated: false
---

# SupRefDesignType

### Member Of

[`SupRefDesign`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design.md) object · [`SupRefDesignFilterInput`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/inputs/sup-ref-design-filter-input.md) input · [`SupRefDesignTypeBucket`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/types/objects/sup-ref-design-type-bucket.md) object

```graphql
enum SupRefDesignType {
  DEMONSTRATION
  EVALUATION
  DEVELOPMENT
  STARTER
  REFERENCE_DESIGN
  EXPANSION
  SYSTEM
  EXAMPLE
}
```

### Values

#### `DEMONSTRATION`

Highlights a component feature, often for marketing or sales purposes.

#### `EVALUATION`

Intended to test specific electrical/mechanical characteristics.

#### `DEVELOPMENT`

Enables code/hardware development and prototyping.

#### `STARTER`

Bundled offering to help users ramp up quickly.

#### `REFERENCE_DESIGN`

Complete application or subsystem design with documentation.

#### `EXPANSION`

Extends capabilities of a dev board. Often optional.

#### `SYSTEM`

Combines multiple board types, sensors, or modules into a full system.

#### `EXAMPLE`

Example project demonstrating specific use cases or implementations.
