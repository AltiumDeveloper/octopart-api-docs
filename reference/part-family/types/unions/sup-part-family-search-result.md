---
title: "SupPartFamilySearchResult"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/unions/sup-part-family-search-result"
bounded_context: "Part Family"
kind: "unions"
experimental: false
deprecated: false
---

# SupPartFamilySearchResult

### Member Of

[`SupPartFamilyResultSet`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-result-set.md) object

```graphql
union SupPartFamilySearchResult = SupPartFamily | SupPartGroup
```

### Possible types

#### [`SupPartFamily`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family.md) object

[`SupPartFamily`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family.md) contains the relevant information related to a part family. It exists in a hierarchy of other part families, they can contain children which represent other part families or `partGroups` which represent the leaves of the hierarchy tree.

#### [`SupPartGroup`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-group.md) object

[`SupPartGroup`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-group.md) contains the relevant information relating to a part group. It represents the leaves of the Part Family hierarchy, and contain the parts represented by this group.
