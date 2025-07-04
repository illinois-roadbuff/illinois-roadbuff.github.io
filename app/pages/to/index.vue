<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

// Define valid keys as a union type
type SocialKey = 'discord' | 'github' | 'youtube' | 'codeberg' | 'guilded' | 'apple' | 'robloxdev' | 'roblox' | 'wikipedia' | 'bandcamp' | 'orcid'

const socials: Record<SocialKey, string> = {
    github: 'https://github.com/illinois-roadbuff',
    codeberg: 'https://codeberg.org/Illinois_Roadbuff',
    guilded: 'https://www.guilded.gg/u/jrnoob',
    
  discord: 'https://discord.gg/sd4XfAqNF9',
   youtube: 'https://youtube.com/channel/UC4m6UbZf3cXzD16KONdX3aw/',
   apple: 'https://developer.apple.com/forums/profile/Illinois_Roadbuff',
   robloxdev: 'https://devforum.roblox.com/u/illinois_roadbuff/',
   wikipedia: 'https://en.wikipedia.org/w/index.php?title=User:Illinois-Roadbuff',
   bandcamp: 'https://illinois-roadbuff.bandcamp.com/',
   orcid: 'https://orcid.org/0009-0009-6250-0821',
   roblox: 'https://www.roblox.com/users/2653606809/profile',
 
  
 
}

const route = useRoute()

onMounted(() => {
  const queryKeys = Object.keys(route.query)

  for (const key of queryKeys) {
    if (key in socials) {
      // Use type assertion to tell TypeScript this is a SocialKey
      const socialKey = key as SocialKey
      window.location.href = socials[socialKey]
      break
    }
  }
})
</script>


<template>
  <main class="flex flex-col items-center justify-center min-h-screen text-white bg-gray-900 p-8">
    <h1 class="text-4xl mb-6">Social Redirector</h1>
    <p>Use query params like <code>?discord</code> to be redirected.</p>

    <table class="mt-8 border-collapse border border-white/30 w-full max-w-md text-left">
      <thead>
        <tr>
          <th class="border border-white/30 px-4 py-2">Social</th>
          <th class="border border-white/30 px-4 py-2">URL</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(url, name) in socials" :key="name" class="hover:bg-white/10">
          <td class="border border-white/30 px-4 py-2 capitalize">{{ name }}</td>
          <td class="border border-white/30 px-4 py-2">
            <a :href="url" target="_blank" rel="noopener noreferrer" class="text-blue-400 underline">
              {{ url }}
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
