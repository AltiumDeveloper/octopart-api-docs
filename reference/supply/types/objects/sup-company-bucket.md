---
title: "SupCompanyBucket"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-company-bucket"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupCompanyBucket

manufacturerAgg and distributorAgg produce a CompanyBucket with company + counts

### Member Of

[`SupPartResultSet`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part-result-set.md) object

```graphql
type SupCompanyBucket {
  company: SupCompany!
  count: Int
}
```

### Fields

#### `company` · [`SupCompany!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-company.md) non-null object

#### `count` · [`Int`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) scalar
