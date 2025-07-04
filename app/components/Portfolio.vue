<script setup lang="ts">
import { ref, computed } from 'vue'
import { LiquidGlass, GlassMode } from '@wxperia/liquid-glass-vue'

const displacementScale = ref(100)
const blurAmount = ref(0.5)
const saturation = ref(140)
const aberrationIntensity = ref(2)
const elasticity = ref(0.1)
const cornerRadius = ref(15)
const overLight = ref(false)
const mode = ref<GlassMode>(GlassMode.standard)

function getChicagoTimeInfo() {
  const date = new Date()

  const dtf = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Chicago',
    timeZoneName: 'short'
  })
  const parts = dtf.formatToParts(date)
  const tzAbbr = parts.find(part => part.type === 'timeZoneName')?.value ?? 'CST'

  const tzFullNameMap = {
    CST: 'Central Standard Time',
    CDT: 'Central Daylight Time'
  } as const

  type TZAbbr = keyof typeof tzFullNameMap

  const tzFullName =
    tzAbbr in tzFullNameMap ? tzFullNameMap[tzAbbr as TZAbbr] : 'Central Time'

  const utcDate = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }))
  const chicagoDate = new Date(date.toLocaleString('en-US', { timeZone: 'America/Chicago' }))
  const offsetMs = chicagoDate.getTime() - utcDate.getTime()
  const offsetHours = offsetMs / (1000 * 60 * 60)
  const offsetSign = offsetHours <= 0 ? '-' : '+'
  const offsetFormatted = `UTC${offsetSign}${Math.abs(offsetHours)}`

  const timeString = chicagoDate.toLocaleTimeString('en-US', { hour12: false })

  return {
    offsetFormatted,
    tzAbbr,
    tzFullName,
    timeString
  }
}

const chicagoInfo = computed(() => getChicagoTimeInfo())
</script>

<template>
  <main class="select-none flex items-center justify-center min-h-screen z-50 text-white/85 overflowing-auto">
    <div
      class="relative z-50 grid max-w-[800px] w-[800px] h-auto px-10 py-8 rounded-[16px]
             backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl"
    >
      <div class="flex justify-between items-start w-full text-shadow-lg relative z-10">
        <div class="flex-1 pr-7">
          <h3 class="text-3xl RG2014EM leading-none text-white/95">Illinois_Roadbuff — Jr</h3>

          <div class="space-y-2">
            <div>
              <p class="text-base text-white/70 RG2014EEM">
                <code><b>{{ chicagoInfo.offsetFormatted }}</b></code> — {{ chicagoInfo.tzFullName }}
              </p>
              <p class="text-base RG2014EEM">
                <a
                  href="https://www.openstreetmap.org/relation/112927"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-[#d98e55]/85 hover:text-[#e7a977] transition-colors duration-200"
                >
                  Greater Chicago Area, Illinois ↗
                </a>
              </p>
            </div>

            <div class="flex items-center gap-4">
              <a
                class="transform transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 group"
                href="/to?github"
                target="_blank"
              >
                <Icon
                  class="size-5 text-white/70 group-hover:text-[#e7a977] transition-colors duration-300"
                  name="simple-icons:github"
                  mode="svg"
                />
              </a>
              <a
                class="transform transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 group"
                href="/to?codeberg"
                target="_blank"
              >
                <Icon
                  class="size-5 text-white/70 group-hover:text-[#e7a977] transition-colors duration-300"
                  name="simple-icons:codeberg"
                  mode="svg"
                />
              </a>
              <a
                class="transform transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 group"
                href="/to?guilded"
                target="_blank"
              >
                <Icon
                  class="size-5 text-white/70 group-hover:text-[#e7a977] transition-colors duration-300"
                  name="simple-icons:guilded"
                  mode="svg"
                />
              </a>
              <a
                class="transform transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 group"
                href="/to?discord"
                target="_blank"
              >
                <Icon
                  class="size-5 text-white/70 group-hover:text-[#e7a977] transition-colors duration-300"
                  name="simple-icons:discord"
                  mode="svg"
                />
              </a>
              <a
                class="transform transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 group"
                href="/to?youtube"
                target="_blank"
              >
                <Icon
                  class="size-5 text-white/70 group-hover:text-[#e7a977] transition-colors duration-300"
                  name="simple-icons:youtube"
                  mode="svg"
                />
              </a>
              <a
                class="transform transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 group"
                href="/to?apple"
                target="_blank"
              >
                <Icon
                  class="size-5 text-white/70 group-hover:text-[#e7a977] transition-colors duration-300"
                  name="simple-icons:apple"
                  mode="svg"
                />
              </a>
              <a
                class="transform transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 group"
                href="/to?robloxdev"
                target="_blank"
              >
                <Icon
                  class="size-5 text-white/70 group-hover:text-[#e7a977] transition-colors duration-300"
                  name="simple-icons:robloxstudio"
                  mode="svg"
                />
              </a>
              <a
                class="transform transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 group"
                href="/to?wikipedia"
                target="_blank"
              >
                <Icon
                  class="size-5 text-white/70 group-hover:text-[#e7a977] transition-colors duration-300"
                  name="simple-icons:wikipedia"
                  mode="svg"
                />
              </a>
              <a
                class="transform transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 group"
                href="/to?bandcamp"
                target="_blank"
              >
                <Icon
                  class="size-5 text-white/70 group-hover:text-[#e7a977] transition-colors duration-300"
                  name="simple-icons:bandcamp"
                  mode="svg"
                />
              </a>
            </div>

            <p class="text-1xl RG2014EM text-white/85">Primary Interests</p>
            <ul class="list-disc px-5 RG2014E text-white/70 text-base">
              <li class="text-[#efb680]/85"><a class="RG2014EM">Roadgeeking</a></li>
              <li class="text-[#efb680]/85">
                <a class="RG2014EM">Developing</a> ➔ <a class="text-white/70">full-stack</a> ➔ <a class="text-white/70">.luau</a>
              </li>
              <li class="text-[#efb680]/85">
                <a class="RG2014EM">Conceptual</a> ➔ <a class="text-white/70">technology, civil engineering</a>
              </li>
              <li class="text-[#efb680]/85">
                <a class="RG2014EM">Designing</a> ➔ <a class="text-white/70">signage, icon, thumbnail, presentation</a>
              </li>
            </ul>

            <p class="text-1xl RG2014EM text-white/85">Other Interests</p>
            <ul class="list-disc px-5 RG2014E text-white/70 text-base">
              <li class="text-[#efb680]/85"><a class="RG2014EM">Heavy Thinking</a></li>
              <li class="text-[#efb680]/85">
                <a class="RG2014EM">Media</a> ➔ <a class="text-white/70">taking photos, recording videos (rare)</a>
              </li>
              <li class="text-[#efb680]/85">
                <a class="RG2014EM">Teaching</a> <a class="text-white/70">(very rare)</a>
              </li>
              <li class="text-[#efb680]/85">
                <a class="RG2014EM">Culinary</a> ➔ <a class="text-white/70">primarily experimenting</a>
              </li>
              <li class="text-[#efb680]/85">
                <a class="RG2014EM">Constructing</a> ➔ <a class="text-white/70">assessments</a>
              </li>
              <li class="text-[#efb680]/85">
                <a class="RG2014EM">Writing</a> <a class="text-white/70">(lesiure activity; I do favor vocabulary however)</a>
              </li>
            </ul>

            <hr class="my-4 border-t border-[#b87333]/60" />
            <p class="text-1xl RG2014EM text-white/85">Positions</p>
            <p class="text-base RG2014D text-[#e7a977]/60">CURRENT</p>
            <ul class="list-disc px-5 RG2014E text-white/70 text-base">
              <li class="text-[#efb680]/85">
                <a class="RG2014EM">Self-employed</a> ➔
                <a
                  href="https://www.openstreetmap.org/relation/112927"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-[#d98e55]/85 hover:text-[#e7a977] transition-colors duration-200"
                >Organizations ↷</a>
              </li>
            </ul>
            <p class="text-base RG2014D text-[#e7a977]/60">FORMER</p>
            <ul class="list-disc px-5 RG2014E text-white/70 text-base">
              <li class="text-[#efb680]/85">
                <a class="RG2014EM">Executive + Universe Builder</a> ➔
                <a
                  href="https://www.roblox.com/communities/34040858/RLDXL-Corporation#!/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-[#d98e55]/85 hover:text-[#e7a977] transition-colors duration-200"
                >RLDXL ↗</a>
              </li>
            </ul>

            <hr class="my-4 border-t border-[#b87333]/60" />
            <p class="text-1xl RG2014EM text-white/85">Works</p>
            <p class="text-base RG2014EEM">
              <<NuxtLink 
                to="/portfolio/works"
               
                class="text-[#d98e55]/85 hover:text-[#e7a977] transition-colors duration-200"
              >
                View my works ↗
              </NuxtLink>
            </p>
          </div>
        </div>

        <div class="shrink-0">
          <img src="/images/profile.png" alt="Profile" class="w-11 h-11 block" />
        </div>
      </div>
    </div>
  </main>
</template>
