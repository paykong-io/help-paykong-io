// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'PayKong Help Center',
    tagline: 'Payment system at the peak of opportunities',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://help.paykong.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'paykong-io', // Usually your GitHub org/user name.
    projectName: 'help-paykong-io', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'ru'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/paykong-io/help-paykong-io/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/paykong-io/help-paykong-io/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                title: 'PayKong Help Center',
                logo: {
                    alt: 'PayKong Logo',
                    src: 'https://paykong.io/wp-content/themes/paykong/img/logo.svg',
                },
                items: [
                    {
                        to: '/docs',
                        type: 'doc',
                        docId: 'docs/index',
                        sidebarId: 'docsSidebar',
                        label: 'Docs',
                        position: 'left',
                    },
                    {
                        to: '/api',
                        type: 'doc',
                        docId: 'api/index',
                        sidebarId: 'apiSidebar',
                        label: 'API',
                        position: 'left',
                    },
                    {
                        to: '/blog',
                        label: 'Blog',
                        position: 'left',
                    },
                    {
                        type: 'localeDropdown',
                        position: 'right',
                    },
                    {
                        href: 'https://apidocs.paykong.io',
                        label: 'Swagger',
                        position: 'right',
                    },
                    {
                        href: 'https://github.com/paykong-io/help-paykong-io',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Contribute',
                        items: [
                            {
                                type: 'doc',
                                docId: 'tutorial/index',
                                sidebarId: 'tutorialSidebar',
                                label: 'Tutorial',
                                to: '/docs/tutorial',
                            },
                            {
                                label: 'Request a New Feature',
                                to: 'https://github.com/paykong-io/help-paykong-io/issues',
                            },
                            {
                                label: 'Report a Bug',
                                to: 'https://github.com/paykong-io/help-paykong-io/issues',
                            },
                            {
                                label: 'Ask a Question',
                                to: 'https://github.com/paykong-io/help-paykong-io/issues',
                            },
                            {
                                label: 'Help with Documentation',
                                to: 'https://github.com/paykong-io/help-paykong-io/blob/main/CONTRIBUTING.md',
                            },
                        ],
                    },
                    {
                        title: 'About',
                        items: [
                            {
                                label: 'PayKong.io',
                                href: 'https://paykong.io',
                            },
                        ],
                    },
                ],
                copyright: `© PayKong.io`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
