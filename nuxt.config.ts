// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/mdc',
    '@nuxt/content',
    'nuxt-og-image',
    'nuxt-llms'
  ],

  devtools: {
    enabled: true
  },
  css: ['~/assets/css/main.css'],

  site: { url: 'https://rasterflow-docs.emrts.xyz', name: 'RasterFlow' },

  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 1
        }
      }
    }
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true,
      autoSubfolderIndex: false
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  icon: {
    provider: 'iconify'
  },

  ogImage: {
    fonts: [
      'Roboto Condensed:400',
      'Roboto Condensed:700'
    ]
  }

  // llms: {
  //   domain: 'https://rasterflow.io/',
  //   title: 'RasterFlow',
  //   description: 'A template for building documentation with Nuxt UI and Nuxt Content.',
  //   full: {
  //     title: 'Nuxt Docs Template - Full Documentation',
  //     description: 'This is the full documentation for the Nuxt Docs Template.'
  //   },
  //   sections: [
  //     {
  //       title: 'Getting Started',
  //       contentCollection: 'docs',
  //       contentFilters: [
  //         { field: 'path', operator: 'LIKE', value: '/getting-started%' }
  //       ]
  //     },
  //     {
  //       title: 'Essentials',
  //       contentCollection: 'docs',
  //       contentFilters: [
  //         { field: 'path', operator: 'LIKE', value: '/essentials%' }
  //       ]
  //     }
  //   ]
  // }

})
