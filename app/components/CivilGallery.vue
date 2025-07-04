<script setup>
import { ref, computed, onMounted } from 'vue'

const writings = ref([])
const selectedWriting = ref(null)
const searchQuery = ref('')

onMounted(async () => {
  try {
    const res = await fetch('/lists/civil-list.json')
    if (!res.ok) throw new Error('Failed to load writings list')
    writings.value = await res.json()
  } catch (e) {
    console.error(e)
  }
})

// Computed filtered writings by search query
const filteredWritings = computed(() => {
  if (!searchQuery.value.trim()) return writings.value
  const q = searchQuery.value.toLowerCase()
  return writings.value.filter(writing =>
    writing.title.toLowerCase().includes(q) ||
    writing.author.toLowerCase().includes(q) ||
    (writing.snippet && writing.snippet.toLowerCase().includes(q))
  )
})
</script>

<template>
  
  <div class="search-bar RG2014EEM">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search by title, author..."
      aria-label="Search"
    />
  </div>

  <div class="writing-grid">
    <div
  class="writing-card"
  v-for="writing in filteredWritings"
  :key="writing.id"
  @click="selectedWriting = writing"
>
  <img :src="writing.thumbnail" :alt="writing.title" class="thumbnail" />
  <div class="writing-meta RG2014EM">
    <h3>{{ writing.title }}</h3>
    <p class="author RG2014EEM">— {{ writing.author }}</p>
    <p class="snippet RG2014EEM">{{ writing.snippet }}</p>
  </div>
</div>

  </div>

  <div v-if="selectedWriting" class="modal" @click.self="selectedWriting = null">
    <button class="close-btn" @click="selectedWriting = null">×</button>
    <h2>{{ selectedWriting.title }}</h2>
    <p class="author RG2014EEM">— {{ selectedWriting.author }}</p>
  
    <embed
      :src="selectedWriting.pdfUrl"
      type="application/pdf"
      width="90%"
      height="600px"
    />
  </div>
</template>


