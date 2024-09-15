export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/global.css'],
  ssr: false,
  modules: ['@pinia/nuxt', '@nuxtjs/i18n'],
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', name: 'English' },
      { code: 'fr', iso: 'fr-FR', name: 'Français' },
      { code: 'es', iso: 'es-ES', name: 'Español' },
      { code: 'de', iso: 'de-DE', name: 'Deutsch' },
      { code: 'ja', iso: 'ja-JP', name: '日本語' }
    ],
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts'
  },
  compatibilityDate: '2024-07-14'
})