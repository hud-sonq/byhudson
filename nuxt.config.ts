export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['@/assets/global.css'],
  ssr: false,
  nitro: {
    serveStatic: true,
  }
})