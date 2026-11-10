---
title: "Supply"
url: "https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/overview"
bounded_context: "Supply"
kind: "overview"
experimental: false
deprecated: false
---

# Supply

Parts, offers, sellers, manufacturers, categories, attributes, part search and part matching.

For AI assistants: [llms.txt](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/llms.txt) · [schema slice](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/schema.graphql) · [all types](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types.txt)

## Entities

API types in this bounded context that represent Common Data Model (CDM) entities. The IRI is the entity's stable identifier in the CDM.

| API type | CDM entity |
| - | - |
| [`SupCompany`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-company.md) | [Company](https://w3id.org/altium/cdm/supply/Company) [`https://w3id.org/altium/cdm/supply/Company`](https://w3id.org/altium/cdm/supply/Company) |
| [`SupOffer`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-offer.md) | [Offer](https://w3id.org/altium/cdm/supply/Offer) [`https://w3id.org/altium/cdm/supply/Offer`](https://w3id.org/altium/cdm/supply/Offer) |
| [`SupPart`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/types/objects/sup-part.md) | [Part](https://w3id.org/altium/cdm/supply/Part) [`https://w3id.org/altium/cdm/supply/Part`](https://w3id.org/altium/cdm/supply/Part) |

## Entry points

Look up entities by identifier:

- [`supCategoriesByIds`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/operations/queries/sup-categories-by-ids.md)
- [`supCategoryById`](https://altiumdeveloper.github.io/octopart-api-docs/reference/supply/operations/queries/sup-category-by-id.md)

## Contents

| Kind | Items | Experimental |
| - | - | - |
| Queries | 13 | 0 |
| Objects | 37 | 0 |
| Inputs | 3 | 0 |
| Enums | 8 | 0 |
