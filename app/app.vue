<script setup>
import { ref, onMounted } from 'vue'

const images = ref([])
const currentImage = ref(null)
const nextImage = ref(null)
const showingCurrent = ref(true)

function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(src)
    img.onerror = reject
    img.src = src
  })
}

async function switchToRandomImage() {
  if (
    !images.value.length || 
    (!currentImage.value && !nextImage.value)
  ) return

  let next
  do {
    next = Math.floor(Math.random() * images.value.length)
  } while (
    images.value.length > 1 &&
    images.value[next] === (showingCurrent.value ? currentImage.value : nextImage.value)
  )

  const imageSrc = images.value[next]
  try {
    await preloadImage(imageSrc)
    if (showingCurrent.value) {
      nextImage.value = imageSrc
    } else {
      currentImage.value = imageSrc
    }
    setTimeout(() => {
      showingCurrent.value = !showingCurrent.value
    }, 50)
  } catch (e) {
    console.error('Image failed to load:', imageSrc, e)
  }
}


onMounted(async () => {
  try {
    const res = await fetch('/lists/backgrounds-list.json')
    if (!res.ok) {
      console.error('Failed to fetch backgrounds list:', res.status)
      return
    }
    images.value = await res.json()
 
    const initialIndex = Math.floor(Math.random() * images.value.length)
    currentImage.value = images.value[initialIndex]
    nextImage.value = images.value[initialIndex]

    setTimeout(() => {
      switchToRandomImage()
      setInterval(switchToRandomImage, 15000)
    }, 100) 
  } catch (e) {
    console.error('Error loading backgrounds-list.json:', e)
  }
})
</script>

<template>
  <client-only>

    <TopNav />
    <div class="background-container">
      <div class="background-overlay"></div>

      <div
        class="background-layer"
        :class="{ visible: showingCurrent }"
        v-show="currentImage"
        :style="{ backgroundImage: `url(${currentImage})` }"
      ></div>
      <div
        class="background-layer"
        :class="{ visible: !showingCurrent }"
        v-show="nextImage"
        :style="{ backgroundImage: `url(${nextImage})` }"
      ></div>
    </div>

   
    <div class="page-content">
      <<NuxtLayout >
        <NuxtPage :key="$route.fullPath" />
      </NuxtLayout>
    
    </div>

 
    <footer class="footer RG2014EEM text-base">
      <p>
        © 2025 Illinois_Roadbuff. Source code licensed under 
        <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank" class="underline hover:text-white">
          Apache License 2.0
        </a>. 
        All images, content, or other media are copyrighted and may not be redistributed, reused, or copied in any form without explicit written approval from Illinois_Roadbuff. illinois_roadbuff/center@0.1.0-alpha.1
      </p>
    </footer>
  </client-only>
</template>







<style scoped>
.background-container {
  position: fixed;
  inset: 0;
  z-index: -2; 
  overflow: hidden;
  pointer-events: none;
  background-color: black; 
}

.background-layer {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0;

  transition: opacity 1.5s ease;
  animation: camera-pan 15s linear infinite;
}

.background-layer.visible {
  opacity: 1;
  z-index: -1;
}

.page-content {
  position: relative;
  flex: 1 1 auto;
  padding: 1rem; 
  overflow-y: auto;
  box-sizing: border-box; 
}


.overflowing-auto {
  overflow: auto;
}

html, body, #__nuxt {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow-x: hidden;
}

#__nuxt {
  display: flex;
  flex-direction: column;
  height: 100%;
}


</style>
