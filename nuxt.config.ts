export default defineNuxtConfig({
  devtools: { enabled: false },
  // css: ['/global.css'],
  ssr: false,
  nitro: {
    serveStatic: true,
  }
})