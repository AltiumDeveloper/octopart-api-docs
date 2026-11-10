---
title: "Pagination"
url: "https://altiumdeveloper.github.io/octopart-api-docs/guides/pagination"
bounded_context: "none"
kind: "guide"
experimental: false
deprecated: false
---

# Pagination

Lists in the Octopart API are paged in one of two ways. The arguments of an operation tell you which one it uses.

## Offset paging

Part search, part family search and reference design search take `start` (the offset of the first result) and `limit` (the page size), and return the total number of matches in `hits`:

```graphql
query SecondPage {
  supSearch(q: "buck converter", start: 10, limit: 10) {
    hits
    results {
      part {
        mpn
        manufacturer {
          name
        }
      }
    }
  }
}
```

Request the next page by adding `limit` to `start` until `start` reaches `hits`.

Operations that page this way include [`supSearch`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/operations/queries/sup-search.md), [`supSearchMpn`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/operations/queries/sup-search-mpn.md), [`supPartFamilySearch`](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/operations/queries/sup-part-family-search.md), [`supRefDesigns`](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/operations/queries/sup-ref-designs.md), [`supSolutionTemplates`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/queries/sup-solution-templates.md), [`supEvalKits`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/operations/queries/sup-eval-kits.md) and [`supSoftwareProjects`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/operations/queries/sup-software-projects.md).

## Cursor paging

The `…Search` operations of solution templates, evaluation kits and software projects return [Relay connections](https://relay.dev/graphql/connections.htm). They take `first` and `after` (or `last` and `before`), and return `nodes` (or `edges`), `pageInfo` and `totalCount`:

```graphql
query SolutionTemplates($after: String) {
  supSolutionTemplateSearch(first: 20, after: $after) {
    totalCount
    nodes {
      id
      title
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
```

Pass `pageInfo.endCursor` as `after` to get the next page while `pageInfo.hasNextPage` is `true`.

Operations that page this way: [`supSolutionTemplateSearch`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/queries/sup-solution-template-search.md), [`supSolutionTemplateApplicationsSearch`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/operations/queries/sup-solution-template-applications-search.md), [`supEvalKitSearch`](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/operations/queries/sup-eval-kit-search.md), [`supSoftwareProjectSearch`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/operations/queries/sup-software-project-search.md) and [`supSoftwareProjectEvalKitCompatibleSoftwareProjectSearch`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/operations/queries/sup-software-project-eval-kit-compatible-software-project-search.md).

The Developer Center has more on [paging through search results](https://www.altium.com/documentation/altium-developer-center/octopart/api/pagination).
