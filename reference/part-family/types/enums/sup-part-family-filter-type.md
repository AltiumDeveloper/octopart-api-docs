---
title: "SupPartFamilyFilterType"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/enums/sup-part-family-filter-type"
bounded_context: "Part Family"
kind: "enums"
experimental: false
deprecated: false
---

# SupPartFamilyFilterType

Valid types for a parameter filter. These describe how this parameter can be used in filtering. `VALUES` indicates the parameter can be filtered based on a provided set of terms. `RANGE` indicates the parameter can be filtered based on a range of values, provided a min and max value.

### Member Of

[`SupPartFamilyParameter`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-parameter.md) object

```graphql
enum SupPartFamilyFilterType {
  VALUES
  RANGE
}
```

### Values

#### `VALUES`

#### `RANGE`
