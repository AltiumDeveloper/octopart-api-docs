---
title: "Bounded contexts"
url: "https://altiumdeveloper.github.io/octopart-api-docs/guides/bounded-contexts"
bounded_context: "none"
kind: "guide"
experimental: false
deprecated: false
---

# Bounded contexts

The reference is grouped by **bounded context**: a business area with its own entities and vocabulary. Each context lists its queries, mutations and types. A type that is used in one context but defined in another shows the defining context as a badge.

| Context | What it owns | Example entry points |
| - | - | - |
| [Supply](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/overview.md) | Parts, offers, sellers, manufacturers, categories, attributes, part search and matching | `supSearch`, `supSearchMpn`, `supParts`, `supMultiMatch` |
| [Part Family](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/overview.md) | Part families and part groups, their parameters, and search | `supPartFamilySearch`, `supPartGroupById` |
| [Reference Design](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/overview.md) | Reference designs, their files, parts and resources | `supRefDesigns`, `supRefDesignById` |
| [Solution Template](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/overview.md) | Solution templates and their applications, parameters, compatible evaluation kits and reference designs | `supSolutionTemplateSearch`, `supSolutionTemplateById` |
| [Eval Kit](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/overview.md) | Evaluation kits, their devices, parameters and preview images, and the reference designs and software projects they are compatible with | `supEvalKitSearch`, `supEvalKitById` |
| [Supply Software Project](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/overview.md) | Software projects and their compatibility with evaluation kits and solution templates | `supSoftwareProjectSearch`, `supSoftwareProjectById` |
| [Procurement](https://altiumdeveloper.github.io/octopart-api-docs/reference/procurement/overview.md) | Bill of materials analysis built on supply data | `datBomParts`, `datBomAnalyses` |

[Common](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/overview.md) holds the scalars, paging and error types that every context uses.

A single request can combine contexts. This one matches a BOM line to Octopart parts (Procurement) and reads each match from Supply:

```graphql
query MatchBomLine {
  datBomParts(items: [{ itemRefId: "R1", mpn: "RC0603FR-0710KL", manufacturerName: "Yageo" }]) {
    itemRefId
    parts {
      confidence
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

## What is not on this site

The endpoint serves more than these seven contexts. Operations that are not documented here are not part of the Octopart API as described on this site:

- Design data (`des…` operations) is documented in the [Altium 365 API reference](https://altiumdeveloper.github.io/platform-api-docs/).
- Other domains served by the same gateway are outside the scope of this reference.

The downloadable [schema.graphql](https://altiumdeveloper.github.io/octopart-api-docs/schema.graphql) contains the documented scope only.
