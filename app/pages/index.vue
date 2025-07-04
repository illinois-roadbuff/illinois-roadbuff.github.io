<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  if (import.meta.client) {
    window.location.href = '/home' 
  }
})
</script>

<template>
  <p>Redirecting to /home...</p>
</template>
