<script setup lang="ts">
import { onMounted, ref } from 'vue'

const flashRed = ref(false)
const showScare = ref(false)
const show404 = ref(false)

onMounted(() => {
  const query = new URLSearchParams(window.location.search)
  if (query.has('knockknock')) {
    showScare.value = true  

    let flashCount = 0
    const maxFlashes = 200
    const interval = setInterval(() => {
      flashRed.value = !flashRed.value
      flashCount++
      if (flashCount >= maxFlashes) {
        clearInterval(interval)
        flashRed.value = false
        window.location.href = 'https://youtu.be/dQw4w9WgXcQ'
      }
    }, 10)
  } else {
    show404.value = true
  }
})
</script>


<template>
  <div
    class="min-h-screen flex items-center justify-center transition-colors duration-100 text-white"
    :class="{
      'bg-red-900': flashRed,
      'bg-black': !flashRed
    }"
  >
    <div v-if="show404" class="text-center">
      <h1 class="text-6xl font-bold">404</h1>
      <p class="text-xl mt-2">This page could not be found.</p>
    </div>

    <div v-else-if="showScare" class="text-center">
      <h1 class="text-5xl font-bold">
        ASDIWDHSDWSkADHSKHDKSASJAFIUAWYHEWIR7r7786DS^&ATD^ASDASyuagdkSADSABDHAYWDSUAKBSABDCHJKDADSGDAWDADAWDadihsa2fskJKJADSABDJASDSADSAJDKABDkSABDSAKDASBKDSABADSBAD
      </h1>
      <p class="mt-4">
        YOU WILL NOW SUFFER | YOU WILL NOW SUFFER | YOU WILL NOW SUFFER | YOU WILL NOW SUFFER | YOU WILL NOW SUFFER | YOU WILL NOW SUFFER | YOU WILL NOW SUFFER | YOU WILL NOW SUFFER | YOU WILL NOW SUFFER | YOU WILL NOW SUFFER | YOU WILL NOW SUFFER |
      </p>
      <p class="mt-4">
       HAAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHA
      </p>
      <p class="mt-4">
        YOU WILL NOW SUFFER | YOU WILL NOW SUFFER | YOU WILL NOW SUFFER | YOU WILL NOW SUFFER | YOU WILL NOW SUFFER | YOU WILL NOW SUFFER | YOU WILL NOW SUFFER | YOU WILL NOW SUFFER | YOU WILL NOW SUFFER | YOU WILL NOW SUFFER | YOU WILL NOW SUFFER |
      </p>
      <p class="mt-4">
       HAAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHA
      </p>
      <p class="mt-4">
        YOU WILL NOW SUFFER | YOU WILL NOW SUFFER | YOU WILL NOW SUFFER | YOU WILL NOW SUFFER | YOU WILL NOW SUFFER | YOU WILL NOW SUFFER | YOU WILL NOW SUFFER | YOU WILL NOW SUFFER | YOU WILL NOW SUFFER | YOU WILL NOW SUFFER | YOU WILL NOW SUFFER |
      </p>
      <p class="mt-4">
       HAAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHAHAAHAHAHAHAHAHAHA
      </p>
    </div>
  </div>
</template>
