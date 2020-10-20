
export default {
  mode: 'universal',
  server: {
    host: '0.0.0.0',
    port: '3000'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Moviepark',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-js-modal.js', mode: 'client' },
    '~/plugins/vee-validate.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/device',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/auth'
  ],

  /*
  ** Runtime Env variables
  */
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.API_BROWSER_URL
    }
  },
  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.API_URL
    }
  },

  svgSprite: {},

  auth: {
    cookie: {
      prefix: 'moviepark-auth.',
      options: {
        path: '/',
        domain: process.env.COOKIE_DOMAIN,
        secure: true
      }
    },
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/login', method: 'post' },
          logout: { url: '/logout', method: 'post' },
          user: { url: '/check', method: 'get', propertyName: 'user' }
        },
        tokenRequired: false,
        tokenType: false
      }
    }
  },

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    credentials: true
  },
  /*
  ** Build configuration
  */
  pwa: {
    meta: {
      name: 'Moviepark',
      author: 'Lazar Pavicevic',
      description: 'Moviepark is an open-source application for searching movies.',
      theme_color: '#02182B'
    },
    manifest: {
      name: 'Moviepark',
      short_name: 'Moviepark',
      description: 'Moviepark is an open-source application for searching movies.',
      categories: ['movies'],
      orientation: 'portrait',
      theme_color: '#02182B',
      background_color: '#02182B',
      display: 'standalone'
    }
  },
  build: {
    /*
    ** You can extend webpack config here
    */
    transpile: ['vee-validate/dist/rules'],
    extend (config, ctx) {
    }
  }
}
