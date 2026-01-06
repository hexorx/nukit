// https://nuxt.com/docs/api/configuration/nuxt-config
const modules: Array<string | [string, Record<string, unknown>]> = [
  '@nuxt/eslint',
  '@nuxt/ui',
  '@nuxt/content',
  '@nuxt/hints',
  '@nuxt/image',
  '@nuxt/scripts',
  '@nuxt/test-utils'
]

if (process.env.CONVEX_URL) {
  modules.push(['convex-nuxt', { url: process.env.CONVEX_URL }])
}

export default defineNuxtConfig({
  modules,

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  nitro: {
    prerender: {
      failOnError: false
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
