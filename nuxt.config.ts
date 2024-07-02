export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['@/assets/css/global.css'],
  ssr: false,
  nitro: {
    serveStatic: true,
  }
})