// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  compatibilityDate: '2025-07-04',
  devtools: { enabled: true },

  app: {
    baseURL: '/',
   head: {
     title: 'Illinois_Roadbuff', 
     meta: [
       { name: 'description', content: 'Illinois_Roadbuffs Center.' }
     ],
     link: [
       { rel: 'icon', type: 'image/ico', href: '/icons/profile.ico' } 
     ]
   },
  
 },

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
    '~/assets/css/main.css'
  ],
  plugins: [
    { src: '~/plugins/liquid-glass.client.ts', mode: 'client' }
  ],

  

  ssr: false,

  nitro: {
    preset: 'github_pages',
  }
})
