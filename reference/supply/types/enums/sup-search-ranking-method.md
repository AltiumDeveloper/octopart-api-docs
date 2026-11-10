---
title: "SupSearchRankingMethod"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/enums/sup-search-ranking-method"
bounded_context: "Supply"
kind: "enums"
experimental: false
deprecated: false
---

# SupSearchRankingMethod

Specify method on ranking search results.

### Member Of

[`supMultiMatch`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/operations/queries/sup-multi-match.md) query · [`supSearch`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/operations/queries/sup-search.md) query · [`supSearchMpn`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/operations/queries/sup-search-mpn.md) query

```graphql
enum SupSearchRankingMethod {
  DEFAULT
  SUPPLY
  DESIGN
}
```

### Values

#### `DEFAULT`

Default Ranking for all searches.

#### `SUPPLY`

Ranking the result for Supply purpose.

#### `DESIGN`

Ranking the result for Design purpose.
