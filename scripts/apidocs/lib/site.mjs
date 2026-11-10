// Site identity used by the generated text surfaces (llms.txt and friends). Everything else that names the site is in
// docusaurus.config.js and docs/index.mdx. Facts here must be public: they are published verbatim.
const DC = 'https://www.altium.com/documentation/altium-developer-center';

export const SITE = {
  name: 'Octopart API',
  summary: 'GraphQL API for electronic component supply data from Octopart (parts, offers, part families, reference designs, solution templates, software projects and BOM analysis), organised into bounded contexts.',
  conventions: 'Conventions: one endpoint, `https://api.nexar.com/graphql`; auth is a Bearer token from the OAuth 2.0 client credentials grant (see Developer Center); operation and type names carry a domain prefix (`sup` supply, `dat` data products, then the area: `supPartFamily`, `supRefDesign`, `supSolutionTemplate`, `supEvalKit`, `supSoftwareProject`, `datBom`); most mutations take `input: XInput!` and return `XPayload!` with a typed `errors` union; search and list operations page by offset (`start`/`limit`, total in `hits`), and the `…Search` operations of solution templates, evaluation kits and software projects are Relay connections (`first`/`after`); some fields need a plan tier or plan feature, noted in their description.',
};

export const DEVELOPER_CENTER_LINKS = [
  ['Quick start (Octopart API)', `${DC}/quick-starts/octopart-api`],
  ['Octopart API overview', `${DC}/octopart/api`],
  ['Authorization', `${DC}/octopart/api/authorization`],
  ['Plans and subscriptions', `${DC}/octopart/api/plans-subscriptions`],
  ['Search', `${DC}/octopart/api/search`],
  ['Pagination', `${DC}/octopart/api/pagination`],
  ['Example queries', `${DC}/octopart/api/example-queries`],
];
