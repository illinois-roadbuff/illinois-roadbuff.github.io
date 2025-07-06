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
          <h3 class="text-3xl RG2014EM leading-none text-white/95">
            Illinois_Roadbuff — Jr
          </h3>

          <div class="space-y-2">
            <p class="text-1xl RG2014EM text-white/85 text-2xl">
              Welcome to Illinois_Roadbuff's Center!
            </p>
            <p class="text-1xl RG2014EM text-white/85 text-1xl">
              Use the top navigation bar to view different pages. P.S. deploying this on Github took me more than five hours to figure out and now I'm typing here 5 AM in the morning (F*** GitHub Actions).
            </p>
            <p class="text-base RG2014EEM">
              <NuxtLink 
                to="/math/studs"
               
                class="text-[#d98e55]/85 hover:text-[#e7a977] transition-colors duration-200"
              >
                View my Stud Converter ↗
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
