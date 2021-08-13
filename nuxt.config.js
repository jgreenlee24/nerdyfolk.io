export default {
	// Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
	ssr: false,

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		titleTemplate: 'NERDYFOLK Modern Dashboard',
		title: 'NERDYFOLK Modern Dashboard',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: "title", content: "NERDYFOLK Modern Dashboard" },
			{ hid: 'description', name: "description", content: "NERDYFOLK Modern Dashboard - is a powerful & lightweight dashboard template based on Vue, Nuxt and Vuetify. It has a huge collection of reusable UI components, each designed with pixel-perfect precision that allows you to customize your dashboard. The theme also includes over 11 amazing built-in pages which are perfect for all of your dashboard needs!" },
			{ property: "og:type", content: "website" },
			{ property: "og:url", content: "https://nerdyfolk.netlify.app/" },
			{ property: "og:title", content: "NERDYFOLK Modern Dashboard" },
			{ hid: 'og:description', property: "og:description", content: "NERDYFOLK Modern Dashboard - is a powerful & lightweight dashboard template based on Vue, Nuxt and Vuetify. It has a huge collection of reusable UI components, each designed with pixel-perfect precision that allows you to customize your dashboard. The theme also includes over 11 amazing built-in pages which are perfect for all of your dashboard needs!" },
			{ property: "og:image", content: "https://i.imgur.com/ZlOOJa5.png" },
			{ property: "twitter:card", content: "summary_large_image" },
			{ property: "twitter:url", content: "https://nerdyfolk.netlify.app/" },
			{ property: "twitter:title", content: "NERDYFOLK Modern Dashboard" },
			{ hid: 'twitter:description', property: "twitter:description", content: "NERDYFOLK Modern Dashboard - is a powerful & lightweight dashboard template based on Vue, Nuxt and Vuetify. It has a huge collection of reusable UI components, each designed with pixel-perfect precision that allows you to customize your dashboard. The theme also includes over 11 amazing built-in pages which are perfect for all of your dashboard needs!" },
			{ property: "twitter:image", content: "https://i.imgur.com/ZlOOJa5.png" },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: 'stylesheet',
				href:
					'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap',
			},
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'~/assets/main.scss'
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		{
			src: '@/plugins/aos',
			mode: 'client',
		},
		{
			src: '@/plugins/apex-charts.js',
			mode: 'client',
		},
		{
			src: '~/plugins/persistedState.js',
			mode: 'client',
		}
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/vuetify
		'@nuxtjs/vuetify',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
	],

	// Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
	vuetify: {
		customVariables: ['~/assets/variables.scss'],
		optionsPath: 'vuetify.options.js',
		defaultAssets: false,
		treeShake: true,
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		babel: {
			plugins: [
				[
					'@babel/plugin-proposal-private-methods', { loose: true },
				],
			]
		},
		extractCSS: {
			ignoreOrder: true
		},
		optimization: {
			splitChunks: {
				cacheGroups: {
					styles: {
						name: 'styles',
						test: /\.(css|vue)$/,
						chunks: 'all',
						enforce: true
					}
				}
			}
		}
	}
}

