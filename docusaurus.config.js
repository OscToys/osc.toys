// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OscGoesBrrr',
  tagline: 'Make haptics, lovense, and other toys in real life go BRRR from VRChat',
  favicon: 'img/ogb.png',

  // Set the production url of your site here
  url: 'https://osc.toys',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/OscToys/osc.toys/blob/main/',
        },
        theme: {
          customCss: require.resolve('./custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: 'OscGoesBrrr',
        logo: {
          alt: 'OGB Logo',
          src: 'img/ogb.png',
          style: {
            borderRadius: '5px',
          }
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            label: 'Docs',
          },
          {
            href: 'https://github.com/OscToys/OscGoesBrrr',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} OscToys Devs`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
