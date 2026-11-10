---
title: "Octopart API"
url: "https://altiumdeveloper.github.io/octopart-api-docs/"
bounded_context: "none"
kind: "overview"
experimental: false
deprecated: false
---

# Octopart API

The **Octopart API** is a GraphQL API for electronic component supply data: parts, offers, pricing and stock, part families, reference designs, solution templates, software projects and BOM analysis. This site is the reference for every query, mutation and type it exposes, generated nightly from the production schema.

[Quick start](https://www.altium.com/documentation/altium-developer-center/quick-starts/octopart-api) [Browse the reference](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/overview.md) [Download schema.graphql](https://altiumdeveloper.github.io/octopart-api-docs/schema.graphql)

## Get started

Creating an application, obtaining an access token and calling the API for the first time are covered in the Altium Developer Center:

- [Quick start](https://www.altium.com/documentation/altium-developer-center/quick-starts/octopart-api)
- [Octopart API overview](https://www.altium.com/documentation/altium-developer-center/octopart/api)
- [Authorization](https://www.altium.com/documentation/altium-developer-center/octopart/api/authorization)
- [Plans and subscriptions](https://www.altium.com/documentation/altium-developer-center/octopart/api/plans-subscriptions)
- [Example queries](https://www.altium.com/documentation/altium-developer-center/octopart/api/example-queries)

The endpoint, a first query and the Nitro and Voyager tools are in [Getting started](https://altiumdeveloper.github.io/octopart-api-docs/guides/getting-started.md).

## How this reference is organised

The API is grouped by **bounded context**: a business area with its own entities and vocabulary. Each context lists its queries, mutations and types. Where an API type represents an entity of the [Common Data Model (CDM)](https://altiumdeveloper.github.io/cdm/), its page links to the entity definition.

[__**Supply** Parts, offers, sellers, manufacturers, categories, part search and matching](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/overview.md)

[__**Part Family** Part families and part groups, their parameters and search](https://altiumdeveloper.github.io/octopart-api-docs/reference/part-family/overview.md)

[__**Reference Design** Reference designs, their files, parts and resources](https://altiumdeveloper.github.io/octopart-api-docs/reference/reference-design/overview.md)

[__**Solution Template** Solution templates, applications, parameters and compatible evaluation kits](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/overview.md)

[__**Eval Kit** Evaluation kits, their devices, parameters and compatible designs and projects](https://altiumdeveloper.github.io/octopart-api-docs/reference/eval-kit/overview.md)

[__**Supply Software Project** Software projects and their compatibility with kits and templates](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply-software-project/overview.md)

[__**Procurement** Part matching and analysis for bills of materials](https://altiumdeveloper.github.io/octopart-api-docs/reference/procurement/overview.md)

[__**Common** Shared scalars, paging and error types](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/overview.md)

## Guides

[Bounded contexts](https://altiumdeveloper.github.io/octopart-api-docs/guides/bounded-contexts.md), [Naming conventions](https://altiumdeveloper.github.io/octopart-api-docs/guides/naming-conventions.md), [Pagination](https://altiumdeveloper.github.io/octopart-api-docs/guides/pagination.md), [Errors](https://altiumdeveloper.github.io/octopart-api-docs/guides/errors.md) and [Plans and limits](https://altiumdeveloper.github.io/octopart-api-docs/guides/plans-and-limits.md) explain how the API is shaped and how to use it.

## For AI assistants and code generators

Start at [llms.txt](https://altiumdeveloper.github.io/octopart-api-docs/llms.txt): an index of the bounded contexts, each with its own `llms.txt` and a compact `schema.graphql` slice. Every page is also available as Markdown (`.md`). The schema of everything documented here, in SDL form, is [schema.graphql](https://altiumdeveloper.github.io/octopart-api-docs/schema.graphql), regenerated together with this site; each bounded context also publishes a smaller slice at `/reference/<context>/schema.graphql`.
