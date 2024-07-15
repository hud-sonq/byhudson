export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/public/global.css'],
  ssr: false,

  nitro: {
    serveStatic: true,
  },

  compatibilityDate: '2024-07-14'
})