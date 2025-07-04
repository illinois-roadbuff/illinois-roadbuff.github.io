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
  <client-only>
    <div class="flex-1 relative overflow-auto">
      <LiquidGlass
        :displacement-scale="displacementScale"
        :blur-amount="blurAmount"
        :saturation="saturation"
        :aberration-intensity="aberrationIntensity"
        :elasticity="elasticity"
        :corner-radius="cornerRadius"
        :over-light="overLight"
        :mode="mode"
        :style="{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }"
      >
        <div class="flex justify-between items-start w-full text-shadow-lg relative z-10">
          <div class="flex-1 pr-7">
            <h3 class="text-3xl RG2014EM leading-none text-white/95">
              Illinois_Roadbuff — Jr
            </h3>

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

              <div class=" ">
                <p class="text-base RG2014EM text-[#efb680]/85 ">
                  Your local Illinoisan roadgeek.
                </p>
                <p class="text-[#efb680]/85 text-base">
                  <a class="RG2014E">Shoot me an email: </a>
                  <a
                    href="https://www.openstreetmap.org/relation/112927"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-[#d98e55]/85 hover:text-[#e7a977] transition-colors duration-200 RG2014D"
                  >
                    illinois_roadbuff@proton.me↗
                  </a>
                </p>
              </div>

              <hr class="my-3 border-t border-[#b87333]/60" />

              <p class="text-base RG2014EEM">
                <a
                  href="https://www.openstreetmap.org/relation/112927"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-[#d98e55]/85 hover:text-[#e7a977] transition-colors duration-200"
                >
                  View my portfolio ↗
                </a>
              </p>
            </div>
          </div>

          <div class="shrink-0">
            <img src="/profile.png" alt="Profile" class="w-11 h-11 block" />
          </div>
        </div>
      </LiquidGlass>
    </div>
  </client-only>
</template>
