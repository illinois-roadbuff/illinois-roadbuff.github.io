// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  compatibilityDate: '2025-07-04',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss'
  ],

  css: [
    '~/assets/css/tailwind.css',
    '@/assets/css/main.css'
  ],

  plugins: [
    { src: '~/plugins/liquid-glass.client.ts', mode: 'client' }
  ],

  icon: {
    customCollections: [{
      prefix: 'custom',
      dir: '~~/assets/icons'
    }]
  },
  


  experimental: {
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,
    defaults: {
      useAsyncData: {
        deep: true,
      },
    },
  },

  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false,
    },
  },

  app: {
        baseURL: '/home',
    head: {
      title: 'Illinois_Roadbuff', 
      meta: [
        { name: 'description', content: 'Illinois_Roadbuffs Center.' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/profile.png' } 
      ]
    }
  }
})
