export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'P2V Blog',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Problem2Value is an innovation Training, Facilitation and Staffing agency. We offer a 1-day Innovation Bootcamp training, Research, Concept and MVP Packages as well as UX and IT Staffing. This our space to share our opinion and ideas around innovation as well as distributed and remote work.',
      },
      // Social sharing content
      { property: 'og:site_name', content: 'P2V Blog' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://blog.problem2value.com',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'P2V Blog',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Problem2Value is an innovation Training, Facilitation and Staffing agency. We offer a 1-day Innovation Bootcamp training, Research, Concept and MVP Packages as well as UX and IT Staffing. This our space to share our opinion and ideas around innovation as well as distributed and remote work.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/p2vblog-card.png',
      },
      { name: 'twitter:site', content: '@geertwlclaes' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://blog.problem2value.com',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Problem2Value',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'The Problem2Value space to share our opinion and ideas around innovation as well as distributed and remote work.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/p2vblog-card.png',
      },
    ],

    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main'],

  colorMode: {
    preference: 'dark', // default value of $colorMode.preference
    fallback: 'system', // fallback value if not system preference found
    classSuffix: '',
  },

  router: {
    linkExactActiveClass: 'text-primary',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/svg',
  ],

  // Tailwind Just-In-Time
  tailwindcss: {
    jit: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/gtm',
  ],

  // Google Tag Manager
  gtm: {
    id: 'GTM-K246Q8J',
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
