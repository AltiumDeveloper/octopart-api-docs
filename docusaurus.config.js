// @ts-check
const { existsSync, readFileSync } = require('node:fs');
const { pathToFileURL } = require('node:url');
const { GlobExcludeDefault } = require('@docusaurus/utils');
const { themes } = require('prism-react-renderer');
const altiumTheme = require('@altium-developer/docusaurus-theme');
const { buildDecorators } = require('./scripts/apidocs/decorators.cjs');
const { sidebarItemsGenerator } = require('./scripts/apidocs/sidebar.cjs');

const readJson = (path, fallback) => (existsSync(path) ? JSON.parse(readFileSync(path, 'utf8')) : fallback);
const cdmIndex = readJson('./.schema/cdm-index.json', {});
const redirects = readJson('./.schema/redirects.json', []);

// Local-only planning notes live in docs/superpowers; exclude them only when present so CI builds don't embed the name.
const docsExclude = existsSync('./docs/superpowers') ? [...GlobExcludeDefault, 'superpowers/**'] : GlobExcludeDefault;

const DEVELOPER_CENTER = 'https://developer.altium.com/';
const DEVELOPER_CENTER_DOCS = 'https://www.altium.com/documentation/altium-developer-center/octopart/api';
const ALTIUM_365_API_DOCS = 'https://altiumdeveloper.github.io/platform-api-docs/';
const CDM_DOCS = 'https://altiumdeveloper.github.io/cdm/';
const REPO = 'https://github.com/AltiumDeveloper/octopart-api-docs';

// Fixture builds (smoke test) only contain some BCs, so landing-page links to the others are expected to break there.
const brokenLinks = process.env.APIDOCS_SCHEMA_FILE ? 'warn' : 'throw';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Octopart API',
  tagline: 'GraphQL reference for the Octopart API, organised by bounded context',
  url: 'https://altiumdeveloper.github.io',
  baseUrl: '/octopart-api-docs/',
  organizationName: 'AltiumDeveloper',
  projectName: 'octopart-api-docs',
  favicon: 'img/favicon.svg',
  staticDirectories: ['static', altiumTheme.staticDir],
  onBrokenLinks: brokenLinks,
  markdown: {
    hooks: { onBrokenMarkdownLinks: brokenLinks },
  },
  plugins: [
    [
      '@graphql-markdown/docusaurus',
      {
        schema: './.schema/annotated.graphql',
        rootPath: './docs',
        baseURL: 'reference',
        homepage: false,
        loaders: { GraphQLFileLoader: '@graphql-tools/graphql-file-loader' },
        groupByDirective: { directive: 'doc', field: 'category', fallback: 'Common' },
        docOptions: {
          index: false,
          frontMatter: { hide_table_of_contents: true, pagination_next: null, pagination_prev: null },
        },
        printTypeOptions: {
          deprecated: 'group',
          parentTypePrefix: false,
          typeBadges: true,
          relatedTypeSection: true,
        },
        decorators: buildDecorators({ cdmIndex }),
        // Stock Docusaurus formatter plus beforeComposePageTypeHook (type-page section order).
        formatter: pathToFileURL(require.resolve('./scripts/apidocs/mdx.cjs')).href,
      },
    ],
    ['@docusaurus/plugin-client-redirects', { redirects }],
  ],
  // Shared look of the Altium developer sites (CSS, fonts, logo, Markdown-twin links) and the search UI over
  // static/search-index.json (npm run search:index), ranked by src/search/engine.mjs. The API-specific result rows and
  // filters are swizzled: src/theme/SearchResult and src/theme/SearchFilters.
  themes: [
    [
      '@altium-developer/docusaurus-theme',
      {
        search: {
          engine: 'src/search/engine.mjs',
          recentKey: 'octopart-api-search-recent',
          label: 'Search the Octopart API reference',
          placeholder: 'Search operations, types, fields and guides',
          intro: 'Type a name or a few words. Exact names come first, then operations and types, then fields.',
          examples: [
            { query: 'supSearchMpn', text: 'an exact operation or type name' },
            { query: 'part family search', text: 'the words of a name, in any case' },
            { query: 'SupPart.mpn', text: 'a field of a type' },
            { query: 'pagination', text: 'guides and bounded contexts' },
          ],
        },
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: false,
        docs: { routeBasePath: '/', sidebarPath: './sidebars.js', sidebarItemsGenerator, exclude: docsExclude },
        theme: { customCss: './src/css/custom.css' },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: { respectPrefersColorScheme: true },
      navbar: {
        title: 'Octopart API - Reference Documentation',
        logo: { alt: 'Altium', src: 'img/altium-logo.svg', width: 90, height: 20 },
        items: [
          // The CDM sibling site first. The Altium 365 API (where the Design API now lives) is linked from the footer
          // and the bounded-contexts guide only, to keep the navbar short.
          { href: CDM_DOCS, label: 'Common Data Model', position: 'right' },
          { href: DEVELOPER_CENTER, label: 'Developer Center', position: 'right' },
          { href: REPO, label: 'GitHub', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Altium',
            items: [
              { label: 'Developer Center', href: DEVELOPER_CENTER },
              { label: 'Octopart API documentation', href: DEVELOPER_CENTER_DOCS },
              { label: 'Altium 365 API', href: ALTIUM_365_API_DOCS },
              { label: 'Common Data Model', href: CDM_DOCS },
            ],
          },
          {
            title: 'This site',
            items: [
              { label: 'Schema (SDL)', href: 'pathname:///schema.graphql' },
              { label: 'For AI assistants (llms.txt)', href: 'pathname:///llms.txt' },
              { label: 'Source on GitHub', href: REPO },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Altium.`,
      },
      prism: { theme: themes.github, darkTheme: themes.oneDark },
    }),
};

module.exports = config;
