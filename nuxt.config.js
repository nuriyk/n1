import { metaConfig } from './core/meta.config'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  ssr: true,

  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Cortex',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, user-scalable=0'
      },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      {
        hid: 'description',
        name: 'description',
        content: metaConfig.description
      },
      { hid: 'keywords', name: 'keywords', content: metaConfig.keywords },
      { hid: 'author', name: 'author', content: 'Cortex' },
      {
        hid: 'og:image',
        name: 'og:image',
        content: metaConfig.rootDomain + metaConfig.ogImage
      },
      { hid: 'og:image:type', name: 'og:image:type', content: 'image/png' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Cortex'
      },
      { hid: 'og:locale', name: 'og:locale', content: 'en_US' },
      {
        hid: 'msapplication-TileColor',
        name: 'msapplication-TileColor',
        content: '#39C9E0'
      },
      { hid: 'theme-color', name: 'theme-color', content: '#39C9E0' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/images/favicon/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/images/favicon/favicon-16x16.png'
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        sizes: '180x180',
        href: '/images/favicon/apple-touch-icon.png'
      },
      { rel: 'manifest', href: '/images/favicon/site.webmanifest' },
      {
        rel: 'mask-icon',
        href: '/images/favicon/safari-pinned-tab.svg',
        color: '#5bbad5'
      }
    ]
  },

  // ustomize the progress-bar color //
  loading: { color: '#fff' },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8'
  ],

  devServerHandlers: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/tailwindcss'
  ],

  generate: {},

  env: {
    rootDomain: metaConfig.rootDomain
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  extend (config, ctx) {
    // Run ESLint on save
    if (ctx.isDev && ctx.isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/
      })
    }
  },

  // You will need to add this:
  server: {
    host: '0',
    port: '3000' // optional
  }
}
