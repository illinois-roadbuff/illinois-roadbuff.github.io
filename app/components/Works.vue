<script setup lang="ts">

</script>

<template>
  <main class="select-none flex items-center justify-center min-h-screen z-50 text-white/85">
    <div
      class="relative z-50 grid max-w-[800px] w-[800px] h-auto px-10 py-8 rounded-[16px]
             backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl"
    >
      <div class="flex justify-between items-start w-full text-shadow-lg relative z-10">
        <div class="flex-1 pr-7">
          <h3 class="text-3xl RG2014EM leading-none text-white/95">Illinois_Roadbuff — Jr</h3>

          <div class="space-y-2">
            <p class="text-1xl RG2014EM text-white/85 text-2xl">Works</p>
            <p class="text-base RG2014D text-[#e7a977]/60">PUBLISHED</p>
            <ul class="list-disc px-5 RG2014E text-white/70 text-base">
              <li class="text-[#efb680]/85">
                <a class="RG2014EM">Crossroads Universe</a> ➔
                <a
                  href="https://www.roblox.com/games/8233185144"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-[#d98e55]/85 hover:text-[#e7a977] transition-colors duration-200"
                >
                  Roblox ↗
                </a>
              </li>
              <li class="text-[#efb680]/85">
                <a class="RG2014EM">Open-road Classics</a> ➔
                <a
                  href="https://www.roblox.com/communities/16463203/Illinois-Roadbuffs-Development#!/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-[#d98e55]/85 hover:text-[#e7a977] transition-colors duration-200"
                >
                  Roblox ↗
                </a>
              </li>
              <li class="text-[#efb680]/85">
                <a class="RG2014EM">Writings</a> ➔
                <NuxtLink
                  to="/portfolio/works/writings"
                  class="text-[#d98e55]/85 hover:text-[#e7a977] transition-colors duration-200"
                >
                  Writings Gallery ↗
                </NuxtLink>
              </li>
              <li class="text-[#efb680]/85">
                <a class="RG2014EM">Photography</a> ➔
                <NuxtLink
                  to="/portfolio/works/photos"
                  class="text-[#d98e55]/85 hover:text-[#e7a977] transition-colors duration-200"
                >
                  Photo Gallery ↗
                </NuxtLink>
              </li>
              <li class="text-[#efb680]/85">
                <a class="RG2014EM">Civil Design</a> ➔
                <NuxtLink
                  to="/portfolio/works/design/civil"
                  class="text-[#d98e55]/85 hover:text-[#e7a977] transition-colors duration-200"
                >
                  Civil Gallery ↗
                </NuxtLink>
              </li>
            </ul>

            <p class="text-base RG2014D text-[#e7a977]/60">FUTURE</p>
            <ul class="list-disc px-5 RG2014E text-white/70 text-base">
              <li class="text-[#efb680]/85">
                <a class="RG2014EM">Reroute Universe</a> ➔
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-[#d98e55]/85 hover:text-[#e7a977] transition-colors duration-200"
                >
                  in-progress (soon) ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="shrink-0">
          <img src="/images/profile.png" alt="Profile" class="w-11 h-11 block" />
        </div>
      </div>
    </div>
  </main>
</template>
