---
title: "Getting started"
url: "https://altiumdeveloper.github.io/octopart-api-docs/guides/getting-started"
bounded_context: "none"
kind: "guide"
experimental: false
deprecated: false
---

# Getting started

The Octopart API is a GraphQL API for electronic component supply data. This page gets you from an access token to a first successful query. Creating an application, getting a client ID and secret and exchanging them for a token are covered in the [Altium Developer Center](https://www.altium.com/documentation/altium-developer-center/quick-starts/octopart-api).

## Endpoint

All operations go to one endpoint:

```text
https://api.nexar.com/graphql
```

## Authentication

Every request carries an access token in the `Authorization` header:

```text
Authorization: Bearer {access-token}
```

Tokens come from the OAuth 2.0 client credentials grant. See [Authorization](https://www.altium.com/documentation/altium-developer-center/octopart/api/authorization) in the Developer Center for the token request, token lifetime and renewal.

## A first query

Search parts by manufacturer part number and read the manufacturer, the Octopart page and the number of hits:

```graphql
query FirstSearch {
  supSearchMpn(q: "LM358", limit: 3) {
    hits
    results {
      part {
        mpn
        manufacturer {
          name
        }
        shortDescription
        octopartUrl
      }
    }
  }
}
```

With `curl`:

```bash
curl https://api.nexar.com/graphql \
  -H "Authorization: Bearer $OCTOPART_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"query":"query FirstSearch { supSearchMpn(q: \"LM358\", limit: 3) { hits results { part { mpn manufacturer { name } shortDescription octopartUrl } } } }"}'
```

The response is a JSON object with a `data` member (and an `errors` member if something went wrong, see [Errors](https://altiumdeveloper.github.io/octopart-api-docs/guides/errors.md)). Reference: [`supSearchMpn`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/operations/queries/sup-search-mpn.md).

Prices and stock are returned for a country and a currency: `supSearch`, `supSearchMpn`, `supParts` and `supMultiMatch` take `country` and `currency` arguments, which default to `"US"` and `"USD"`.

Some fields need a higher plan; their descriptions say so. See [Plans and limits](https://altiumdeveloper.github.io/octopart-api-docs/guides/plans-and-limits.md).

## Tools

- **Nitro**: an in-browser GraphQL IDE with schema-aware completion, at `https://api.nexar.com/graphql`.
- **Voyager**: an interactive graph of the schema, at `https://api.nexar.com/ui/voyager`.

## Next steps

- [Bounded contexts](https://altiumdeveloper.github.io/octopart-api-docs/guides/bounded-contexts.md): find the part of the API that owns your data.
- [Naming conventions](https://altiumdeveloper.github.io/octopart-api-docs/guides/naming-conventions.md), [Pagination](https://altiumdeveloper.github.io/octopart-api-docs/guides/pagination.md), [Errors](https://altiumdeveloper.github.io/octopart-api-docs/guides/errors.md) and [Plans and limits](https://altiumdeveloper.github.io/octopart-api-docs/guides/plans-and-limits.md).
- The [Developer Center example queries](https://www.altium.com/documentation/altium-developer-center/octopart/api/example-queries).

## For AI assistants

Point your coding assistant at [llms.txt](https://altiumdeveloper.github.io/octopart-api-docs/llms.txt). It lists every bounded context with its own `llms.txt` index and a compact `schema.graphql` slice, and every page of this site is also available as Markdown (append `.md` to the page URL).
