---
title: "SupPartResultSet"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part-result-set"
bounded_context: "Supply"
kind: "objects"
experimental: false
deprecated: false
---

# SupPartResultSet

Result of part search.

### Returned By

[`supSearch`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/operations/queries/sup-search.md) query · [`supSearchMpn`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/operations/queries/sup-search-mpn.md) query

```graphql
type SupPartResultSet {
  total: Int! @deprecated
  hits: Int!
  results: [SupPartResult!]
  specsViewAttributeGroups: [SupAttributeGroup!]!
  warnings: [String!]
  specAggs(
    attributeNames: [String!]!
    attributeSelection: SupSpecAggsSelection! = EXPLICIT
    size: Int! = 10
  ): [SupSpecAgg!]!
  manufacturerAgg(
    size: Int! = 10
  ): [SupCompanyBucket!]!
  distributorAgg(
    size: Int! = 10
  ): [SupCompanyBucket!]!
  categoryAgg(
    size: Int! = 10
  ): [SupCategoryBucket!]!
  childCategoryAgg(
    size: Int! = 10
  ): [SupCategoryBucket!]!
  cadAgg: [SupCadBucket!]!
  cadLevelAgg: [SupLevelBucket!]!
  suggestedCategories: [SupCategoryBucket!]!
  suggestedFilters: [SupAttribute!]!
  allFilters(
    sort: SupAllFiltersSort! = default
    minCoverage: Float! = 0.01
  ): [SupAttribute!]!
  appliedCategory: SupCategory
  appliedFilters: [SupAppliedFilter!]!
}
```

### Fields

#### `hits` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

Number of parts in result set

#### `results` · [`[SupPartResult!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part-result.md) list object

Contains nested part along side some fields specific to the query that explain reason for match.

#### `specsViewAttributeGroups` · [`[SupAttributeGroup!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-attribute-group.md) non-null object

Grouped attributes used to render the columns in specs view.

Requires plan tier: `PRO`. Requires plan feature: `TECH_SPECS`.

#### `warnings` · [`[String!]`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) list scalar

If an invalid query was modified or rejected, warnings indicate this fact to the user. For example if query contained too many tokens, some tokens may be ignored.

#### `specAggs` · [`[SupSpecAgg!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-spec-agg.md) non-null object

Perform aggregations on Spec values across multiple Attributes. You \*must\* specify `attributeNames` for this field to be populated. `attributeNames` should be a list of Attribute.shortname values (e.g. `capacitance` or `voltageRatingDc`)

- You can set `attributeSelection=WITHSUGGESTED` to additionally include suggested attributes for aggregation
- Alternatively, set `attributeSelection=ALL` to include all attributes for aggregation
- To rely solely on suggested attributes, set `attributeSelection=WITHSUGGESTED` and `attributeNames=[]`

Requires plan tier: `PRO`. Requires plan feature: `TECH_SPECS`.

##### `attributeNames` · [`[String!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/string.md) non-null scalar

a list of Attribute.shortname values to aggregate on (e.g. `capacitance` or `voltageRatingDc`)

##### `attributeSelection` · [`SupSpecAggsSelection!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/enums/sup-spec-aggs-selection.md) non-null enum

defines how attributes are selected for aggregation (default EXPLICIT)

##### `size` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

number of spec value buckets to return (default 10, maximum 500). Larger values are clamped to 500 and reported in `warnings`.

#### `manufacturerAgg` · [`[SupCompanyBucket!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-company-bucket.md) non-null object

Aggregate on manufacturers for this result set

##### `size` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

number of buckets to return (default 10, maximum 500). Larger values are clamped to 500 and reported in `warnings`.

#### `distributorAgg` · [`[SupCompanyBucket!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-company-bucket.md) non-null object

Aggregate on distributors for this result set

##### `size` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

number of buckets to return (default 10, maximum 500). Larger values are clamped to 500 and reported in `warnings`.

#### `categoryAgg` · [`[SupCategoryBucket!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-category-bucket.md) non-null object

Aggregate on categories for this result set

##### `size` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

number of buckets to return (default 10, maximum 500). Larger values are clamped to 500 and reported in `warnings`.

#### `childCategoryAgg` · [`[SupCategoryBucket!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-category-bucket.md) non-null object

Aggregate on child categories for this result set. Will be empty if appliedCategory is null.

##### `size` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) non-null scalar

number of buckets to return (default 10, maximum 500). Larger values are clamped to 500 and reported in `warnings`.

#### `cadAgg` · [`[SupCadBucket!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-cad-bucket.md) non-null object

Aggregate on the availability of CAD models for the result set

Requires plan tier: `ENTERPRISE`.

#### `cadLevelAgg` · [`[SupLevelBucket!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-level-bucket.md) non-null object

Aggregate on CAD levels for this result set

#### `suggestedCategories` · [`[SupCategoryBucket!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-category-bucket.md) non-null object

Categories that are determined by search algo to be related to the search term. Useful for suggesting a Category filter in the search UI.

#### `suggestedFilters` · [`[SupAttribute!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-attribute.md) non-null object

Attributes that are determined by search algo to be related to the search term. Useful for suggesting most relevant filters in the search UI.

#### `allFilters` · [`[SupAttribute!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-attribute.md) non-null object

Full list of available Attributes in the result set

##### `sort` · [`SupAllFiltersSort!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/enums/sup-all-filters-sort.md) non-null enum

##### `minCoverage` · [`Float!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/float.md) non-null scalar

#### `appliedCategory` · [`SupCategory`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-category.md) object

If a Category filter is applied, this will be the Category

#### `appliedFilters` · [`[SupAppliedFilter!]!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-applied-filter.md) non-null object

If filters are applied, this will contain display information

#### Deprecated

#### `total` · [`Int!`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/scalars/int.md) **DEPRECATED** non-null scalar

> **Deprecated:** use `hits` instead
