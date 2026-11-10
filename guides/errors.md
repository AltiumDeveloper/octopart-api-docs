---
title: "Errors"
url: "https://altiumdeveloper.github.io/octopart-api-docs/guides/errors"
bounded_context: "none"
kind: "guide"
experimental: false
deprecated: false
---

# Errors

The API reports errors in the standard GraphQL way, and mutations also return typed errors in their payloads.

## The errors array

The result of an operation is returned in `data`. If something goes wrong, the response also has a top-level `errors` array next to `data`; `errors` is present only when there is at least one error. A response can contain both: the fields that could be resolved are returned in `data`, and the ones that failed are `null` and described in `errors`, each with a `message` and the `path` of the failed field.

## Mutation payload errors

Mutations of solution templates, evaluation kits and software projects return a payload with an `errors` list. Its type is a union of the errors that the mutation can produce, so you can select the fields of each one:

```graphql
mutation DeleteTemplate($id: ID!) {
  supSolutionTemplateDeleteSolutionTemplate(input: { id: $id }) {
    errors {
      ... on SupSolutionTemplateNotFoundError {
        message
        errorCode
      }
      ... on SupSolutionTemplateOperationFailedError {
        message
        errorCode
      }
    }
  }
}
```

An empty or missing `errors` list means the mutation succeeded. Every error type implements [`Error`](https://altiumdeveloper.github.io/octopart-api-docs/reference/common/types/interfaces/error.md) and has a `message`. The errors of each domain also have an `errorCode` from that domain's enum, such as [`SupSolutionTemplateErrorCode`](https://altiumdeveloper.github.io/octopart-api-docs/reference/solution-template/types/enums/sup-solution-template-error-code.md).
