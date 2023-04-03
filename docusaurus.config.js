// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'DEVILISH WIKI',
	tagline: 'Devilish Info Hub',
	favicon: 'img/favicon.ico',

	// Set the production url of your site here
	url: 'https://wiki.devilish.wtf',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'professorsugoi', // Usually your GitHub org/user name.
	projectName: 'DEVILISH-WIKI', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

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
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				blog: {
					showReadingTime: false,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
			colorMode: {
				defaultMode: 'dark',
				disableSwitch: true,
				respectPrefersColorScheme: false,
			},

			// Replace with your project's social card
			image: 'img/logo.svg',
			navbar: {
				title: 'DEVILISH WIKI',
				logo: {
					alt: 'Devilish Logo',
					src: 'img/logo.svg',
				},
				items: [
					{
						type: 'docSidebar',
						sidebarId: 'wikiSidebar',
						position: 'left',
						label: 'Wiki',
					},
					{ to: '/blog', label: 'Blog', position: 'left' },
					{
						href: 'https://devilish.wtf',
						label: 'Devilish.wtf',
						position: 'right',
					},
				],
			},
			footer: {
				links: [
					{
						title: 'Community',
						items: [
							{
								label: 'Discord',
								href: 'https://discord.gg/WcxfnWNdUB',
							},
							{
								label: 'Twitter',
								href: 'https://twitter.com/666sugoi',
							},
						],
					},
					{
						title: 'More',
						items: [
							{
								label: 'Blog',
								to: '/blog',
							},
							{
								label: 'GitHub',
								href: 'https://github.com/professorsugoi/devilish-wiki',
							},
						],
					},
				],
				copyright: `© ${new Date().getFullYear()} DEVILISH. Built with ♥`,
			},
			prism: {
				theme: darkCodeTheme,
			},
		}),
};

module.exports = config;
