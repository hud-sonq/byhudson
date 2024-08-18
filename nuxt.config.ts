export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/global.css'],
  ssr: false,
  modules: ['@pinia/nuxt'],

  compatibilityDate: '2024-07-14'
})