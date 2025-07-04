import { defineNuxtPlugin } from '#app'
import LiquidGlass from '@wxperia/liquid-glass-vue'

export default defineNuxtPlugin(async (nuxtApp) => {
  // Dynamically import only on client side
  if (import.meta.client) {
   
    nuxtApp.vueApp.use(LiquidGlass)
  }
})
