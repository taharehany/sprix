import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'


export default defineNuxtConfig({
  ssr: true,
  css: [
    '~/assets/style/main.scss',
  ],
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config?.plugins?.push(vuetify({ autoImport: true }))
      })
    },
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss"
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  devtools: { enabled: false },
  runtimeConfig: {
    API_URL: process.env.API_URL,

    public: {
      BASE_URL: process.env.BASE_URL,
    },
  },
})