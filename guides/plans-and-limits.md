---
title: "Plans and limits"
url: "https://altiumdeveloper.github.io/octopart-api-docs/guides/plans-and-limits"
bounded_context: "none"
kind: "guide"
experimental: false
deprecated: false
---

# Plans and limits

Some fields and arguments are available only on certain plans, and some arguments have limits. The reference shows this in the description of the field or argument, as one or more notes:

| Note | Meaning |
| - | - |
| Requires plan tier: `PRO` | The field needs a plan of at least the named tier. |
| Requires plan feature: `TECH_SPECS` | The field needs a plan that includes the named feature. |
| Constraint: `max=2000` | The argument value must meet the constraint. |

For example, [`SupPart.specs`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part.md) needs the `PRO` tier and the `TECH_SPECS` feature, and the `q` argument of [`supSearch`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/operations/queries/sup-search.md) has the constraint `max=2000`. A query that selects `specs` therefore needs a plan with that tier and feature:

```graphql
query PartSpecs {
  supSearchMpn(q: "LM358", limit: 1) {
    results {
      part {
        mpn
        specs {
          attribute {
            name
          }
          displayValue
        }
      }
    }
  }
}
```

Plans, the features they include and their request limits are described in [Plans and subscriptions](https://www.altium.com/documentation/altium-developer-center/octopart/api/plans-subscriptions) in the Developer Center.
