export default defineNuxtConfig({
  ssr: true,
  css: [
    '~/assets/style/main.scss',
  ],
  modules: ['@nuxt/ui', "@nuxt/eslint"],
  colorMode: {
    preference: 'light'
  },
  ui: {
    global: true,
  },
  devtools: { enabled: false },
  runtimeConfig: {
    API_URL: process.env.API_URL,

    public: {
      BASE_URL: process.env.BASE_URL,
    },
  },
})