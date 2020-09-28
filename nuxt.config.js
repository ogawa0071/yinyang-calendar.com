const title = 'Yin&Yang Calendar'
const description =
  '今日が和暦で何月何日なのかが簡単にわかるカレンダー「Yin&Yang Calendar」'
const url = 'https://yinyang-calendar.com/'
const ogImage = 'https://yinyang-calendar.com/og.png'

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: description,
      },
      { property: 'og:url', content: url },
      { property: 'og:title', content: title },
      {
        property: 'og:description',
        content: description,
      },
      {
        property: 'og:image',
        content: ogImage,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:site_name',
        content: title,
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@tukiyomichan' },
      { name: 'twitter:title', content: title },
      {
        name: 'twitter:description',
        content: description,
      },
      {
        name: 'twitter:image',
        content: ogImage,
      },
    ],
    link: [
      { rel: 'icon', href: '/favicon.png' },
      { rel: 'canonical', href: url },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'bootstrap/dist/css/bootstrap.css',
    '@fortawesome/fontawesome-free/css/all.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-55732049-2',
      },
    ],
    [
      '@nuxtjs/google-fonts',
      {
        Montserrat: true,
      },
    ],
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  generate: {
    dir: 'docs',
  },

  styleResources: {
    scss: ['~/assets/_variables.scss'],
  },
}
