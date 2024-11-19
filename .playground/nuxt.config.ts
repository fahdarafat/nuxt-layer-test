export default defineNuxtConfig({
  extends: ['..'],
  modules: ['@nuxt/eslint'],
  compatibilityDate: '2024-11-01',
  nitro: { minify: false },
  vite: {
    build: {
      minify: false
    }
  }

})
