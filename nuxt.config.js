const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Yin&Yang Calendar',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { property: 'og:url', content: 'https://yinyang-calendar.com/' },
      { property: 'og:title', content: 'Yin&Yang Calendar' },
      {
        property: 'og:description',
        content:
          '今日が和暦で何月何日なのかが簡単にわかるカレンダー「Yin&Yang Calendar」'
      },
      {
        property: 'og:image',
        content: 'http://yinyang-calendar.com/og.png'
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@tukiyomichan' },
      { name: 'twitter:title', content: 'Yin&Yang Calendar' },
      {
        name: 'twitter:description',
        content:
          '今日が和暦で何月何日なのかが簡単にわかるカレンダー「Yin&Yang Calendar」'
      },
      {
        name: 'twitter:image',
        content: 'https://yinyang-calendar.com/og.png'
      }
    ],
    link: [
      { rel: 'icon', href: '/favicon.png' },
      { rel: 'canonical', href: 'https://yinyang-calendar.com/' },
      {
        rel: 'stylesheet',
        href:
          'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{ src: '~plugins/ga.js', ssr: false }],

  /*
  ** Nuxt.js modules
  */
  modules: [],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  generate: {
    dir: 'docs'
  }
}
