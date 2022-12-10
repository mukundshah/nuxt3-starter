const APP_META = {
  title: 'myApp',
  description: 'myApp',
  favicon: '/favicon.ico',
  url: 'https://myapp.com',
};

export default defineNuxtConfig({
  // app config
  app: {
    rootId: APP_META.title,
    rootTag: 'body',
    head: {
      title: APP_META.title,
      titleTemplate: `%s - ${APP_META.title}`,
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: APP_META.description },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: APP_META.favicon }],
    },
  },

  // server side rendering
  ssr: true,

  // source directory
  srcDir: 'src',

  // alias
  alias: {
    modules: '~/modules',
  },

  // runtime config
  runtimeConfig: {
    public: {},
  },

  // typescript
  typescript: {
    typeCheck: true,
    tsConfig: {
      compilerOptions: {
        forceConsistentCasingInFileNames: true,
      },
    },
  },

  // components
  components: {
    dirs: [
      {
        path: '~/components',
        pathPrefix: false,
      },
    ],
  },

  // imports
  imports: {
    dirs: ['stores'],
  },

  // modules
  modules: [
    '@formkit/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@unlighthouse/nuxt',
    '@vueuse/nuxt',
    'nuxt-headlessui',
    // 'nuxt-icons',
    'modules/eslint',
  ],

  // module options
  // google fonts
  googleFonts: {
    families: {
      Roboto: true,
      Nunito: [500],
      Raleway: [400, 500, 600, 700],
      Montserrat: [400, 500, 600, 700],
      'Open Sans': [400, 500, 600, 700],
    },
  },

  // headlessui
  headlessui: {
    prefix: 'H',
  },

  // pinia
  pinia: {
    autoImports: ['defineStore'],
  },

  // unlighthouse
  unlighthouse: {},
});
