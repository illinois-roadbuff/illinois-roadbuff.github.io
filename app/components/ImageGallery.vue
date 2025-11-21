<script setup>
import { ref, onMounted } from 'vue'

const images = ref([])
const selectedImage = ref(null)

onMounted(async () => {
  try {
    const res = await fetch('/lists/backgrounds-list.json')
    if (!res.ok) throw new Error('Failed to load image list')
    images.value = await res.json()
  } catch (e) {
    console.error(e)
  }
})
</script>

<template>
  <div class="image-grid">
    <div
      class="image-card"
      v-for="(img, i) in images"
      :key="i"
      @click="selectedImage = img"
    >
      <img :src="img" :alt="'Image ' + (i + 1)" />
    </div>
  </div>


<div
  v-if="selectedImage"
  class="modal"
  @click.self="selectedImage = null"
>
 
  <button class="close-btn" @click="selectedImage = null">×</button>

  <img :src="selectedImage" alt="Zoomed image" />
</div>

</template>


