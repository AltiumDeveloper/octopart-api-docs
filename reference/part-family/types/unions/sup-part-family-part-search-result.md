---
title: "SupPartFamilyPartSearchResult"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/unions/sup-part-family-part-search-result"
bounded_context: "Part Family"
kind: "unions"
experimental: false
deprecated: false
---

# SupPartFamilyPartSearchResult

### Member Of

[`SupPartFamilyPartResultSet`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-part-result-set.md) object

```graphql
union SupPartFamilyPartSearchResult = SupPartFamilyPart | SupPartGroup
```

### Possible types

#### [`SupPartFamilyPart`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-family-part.md) object

Represents a part object from the supply schema.

#### [`SupPartGroup`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-group.md) object

[`SupPartGroup`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/types/objects/sup-part-group.md) contains the relevant information relating to a part group. It represents the leaves of the Part Family hierarchy, and contain the parts represented by this group.
