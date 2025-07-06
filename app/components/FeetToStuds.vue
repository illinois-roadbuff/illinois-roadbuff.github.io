<template>

 <main class="font-math">
<div class="min-h-screen flex items-center justify-center p-4">
    <div
      class="p-6 max-w-md w-full space-y-8 text-center rounded-[16px]
             backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl text-white"
    >
      <h2 class="text-2xl mb-4 RG2014EEM">Studs Converter</h2>

      <!-- Custom Meters Per Stud Setting -->
<div>
  <label for="metersPerStud" class="block font-medium  RG2014E">
    CUSTOM METERS PER STUD <span class="text-yellow-400">(DEFAULT: 0.28)</span>
  </label>
  <input
    id="metersPerStud"
    v-model.number="customMetersPerStud"
    type="number"
    step="0.0001"
    class="w-full border p-2 rounded mb-2"
  />
  <p class="text-base text-gray-300">This value will be used in all metric and imperial conversions</p>
</div>

 <hr class=" border-t border-white/60" />
      <!-- Unit System Selector -->
      <div class="flex justify-center mb-6">
        <label for="unitSystem" class="mr-2 RG2014D">UNIT SYSTEM:</label>
        <select
          id="unitSystem"
          v-model="unitSystem"
          placeholder="0.28"
          class="p-1 rounded bg-white/20 text-white border border-white/30"
        >
          <option value="imperial" class="text-black">Imperial (ft, in)</option>
          <option value="metric" class="text-black">Metric (m, cm)</option>
        </select>
      </div>

      <!-- Imperial Inputs -->
      <div v-if="unitSystem === 'imperial'">
        <!-- Feet to Studs -->
        <div>
          <label for="feet" class="block font-medium mb-1 RG2014E">FEET → STUDS</label>
          <input
            id="feet"
            v-model.number="feet"
            type="number"
            placeholder="Enter feet"
            class="w-full border p-2 rounded mb-2"
          />
          <div class="flex flex-col items-center space-y-1">
            <div class="flex justify-center items-center space-x-2">
              <p v-if="!isNaN(feetToStuds)" class="font-mono text-lg select-text">
                ≈ <span class="font-math">{{ feetToStuds.toFixed(8) }}</span> studs
              </p>
              <button
                @click="copyToClipboard(feetToStuds.toFixed(8), 'feet')"
                class="px-2 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded"
              >
                Copy
              </button>
            </div>
            <p v-if="copyStatus.feet" class="text-green-500 text-xs select-none">Copied to clipboard</p>
          </div>
        </div>

        <!-- Inches to Studs -->
        <div>
          <label for="inches" class="block font-medium mb-1 RG2014E">INCHES → STUDS</label>
          <input
            id="inches"
            v-model.number="inches"
            type="number"
            placeholder="Enter inches"
            class="w-full border p-2 rounded mb-2"
          />
          <div class="flex flex-col items-center space-y-1">
            <div class="flex justify-center items-center space-x-2">
              <p v-if="!isNaN(inchesToStuds)" class="font-mono text-lg select-text">
                ≈ <span class="font-math">{{ inchesToStuds.toFixed(8) }}</span> studs
              </p>
              <button
                @click="copyToClipboard(inchesToStuds.toFixed(8), 'inches')"
                class="px-2 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded"
              >
                Copy
              </button>
            </div>
            <p v-if="copyStatus.inches" class="text-green-500 text-xs select-none">Copied to clipboard</p>
          </div>
        </div>

        <!-- Studs to Feet -->
        <div>
          <label for="studs" class="block font-medium mb-1 RG2014E">STUDS → FEET</label>
          <input
            id="studs"
            v-model.number="studs"
            type="number"
            placeholder="Enter studs"
            class="w-full border p-2 rounded mb-2"
          />
          <div class="flex flex-col items-center space-y-1">
            <div class="flex justify-center items-center space-x-2">
              <p v-if="!isNaN(studsToFeet)" class="font-mono text-lg select-text">
                ≈ <span class="font-math">{{ studsToFeet.toFixed(8) }}</span> feet
              </p>
              <button
                @click="copyToClipboard(studsToFeet.toFixed(8), 'studs')"
                class="px-2 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded"
              >
                Copy
              </button>
            </div>
            <p v-if="copyStatus.studs" class="text-green-500 text-xs select-none">Copied to clipboard</p>
          </div>
        </div>
      </div>

      <!-- Metric Inputs -->
       
      <div v-if="unitSystem === 'metric'">
        <!-- Meters to Studs -->
        <div>
          <label for="meters" class="block font-medium mb-1 RG2014E">METERS → STUDS</label>
          <input
            id="meters"
            v-model.number="meters"
            type="number"
            placeholder="Enter meters"
            class="w-full border p-2 rounded mb-2"
          />
          <div class="flex flex-col items-center space-y-1">
            <div class="flex justify-center items-center space-x-2">
              <p v-if="!isNaN(metersToStuds)" class="font-mono text-lg select-text">
                ≈ <span class="font-math">{{ metersToStuds.toFixed(8) }}</span> studs
              </p>
              <button
                @click="copyToClipboard(metersToStuds.toFixed(8), 'meters')"
                class="px-2 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded"
              >
                Copy
              </button>
            </div>
            <p v-if="copyStatus.meters" class="text-green-500 text-xs select-none">Copied to clipboard</p>
          </div>
        </div>

        <!-- Centimeters to Studs -->
        <div>
          <label for="centimeters" class="block font-medium mb-1 RG2014E">CENTIMETERS → STUDS</label>
          <input
            id="centimeters"
            v-model.number="centimeters"
            type="number"
            placeholder="Enter centimeters"
            class="w-full border p-2 rounded mb-2"
          />
          <div class="flex flex-col items-center space-y-1">
            <div class="flex justify-center items-center space-x-2">
              <p v-if="!isNaN(cmToStuds)" class="font-mono text-lg select-text">
                ≈ <span class="font-math">{{ cmToStuds.toFixed(8) }}</span> studs
              </p>
              <button
                @click="copyToClipboard(cmToStuds.toFixed(8), 'centimeters')"
                class="px-2 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded"
              >
                Copy
              </button>
            </div>
            <p v-if="copyStatus.centimeters" class="text-green-500 text-xs select-none">Copied to clipboard</p>
          </div>
        </div>

        <!-- Studs to Meters -->
        <div>
          <label for="studsMetric" class="block font-medium mb-1 RG2014E">STUDS → METERS</label>
          <input
            id="studsMetric"
            v-model.number="studsMetric"
            type="number"
            placeholder="Enter studs"
            class="w-full border p-2 rounded mb-2"
          />
          <div class="flex flex-col items-center space-y-1">
            <div class="flex justify-center items-center space-x-2">
              <p v-if="!isNaN(studsToMeters)" class="font-mono text-lg select-text">
                ≈ <span class="font-math">{{ studsToMeters.toFixed(8) }}</span> meters
              </p>
              <button
                @click="copyToClipboard(studsToMeters.toFixed(8), 'studsMetric')"
                class="px-2 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded"
              >
                Copy
              </button>
            </div>
            <p v-if="copyStatus.studsMetric" class="text-green-500 text-xs select-none">Copied to clipboard</p>
          </div>
        </div>
        <!-- Percent Slope to Degrees Converter -->
<hr class="mt-4 border-t border-white/60" />
<div>
  <label for="percentSlope" class="block font-medium mb-1 RG2014E">PERCENT SLOPE → DEGREES</label>
  <input
    id="percentSlope"
    v-model.number="percentSlope"
    type="number"
    placeholder="Enter percent slope"
    class="w-full border p-2 rounded mb-2"
  />
  <div class="flex flex-col items-center space-y-1">
    <div class="flex justify-center items-center space-x-2">
      <p v-if="!isNaN(slopeDegrees)" class="font-mono text-lg select-text">
        ≈ <span class="font-math">{{ slopeDegrees }}</span>°
      </p>
      <button
        @click="copyToClipboard(slopeDegrees.toString(), 'percentSlope')"
        class="px-2 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded"
      >
        Copy
      </button>
    </div>
    <p v-if="copyStatus.percentSlope" class="text-green-500 text-xs select-none">Copied to clipboard</p>
  </div>
</div>

      </div>
    </div>
  </div>
</main>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

const unitSystem = ref<'imperial' | 'metric'>('imperial')

const customMetersPerStud = ref(0.28)

const feet = ref(0)
const inches = ref(0)
const studs = ref(0)
const meters = ref(0)
const centimeters = ref(0)
const studsMetric = ref(0)

const copyStatus = reactive({
  feet: false,
  inches: false,
  studs: false,
  percentSlope: false,
  meters: false,
  centimeters: false,
  studsMetric: false,
  metersPerStud: false,
})

const metersPerFoot = 0.3048
const inchesPerFoot = 12

const feetPerStud = computed(() => customMetersPerStud.value / metersPerFoot)
const studsPerFoot = computed(() => 1 / feetPerStud.value)

const feetToStuds = computed(() => feet.value * studsPerFoot.value)
const inchesToStuds = computed(() => (inches.value / inchesPerFoot) * studsPerFoot.value)
const studsToFeet = computed(() => studs.value * feetPerStud.value)

const metersToStuds = computed(() => meters.value / customMetersPerStud.value)
const cmToStuds = computed(() => (centimeters.value / 100) / customMetersPerStud.value)
const studsToMeters = computed(() => studsMetric.value * customMetersPerStud.value)

const percentSlope = ref(0)

const slopeDegrees = computed(() => {
  return Math.atan(percentSlope.value / 100) * (180 / Math.PI)
})


function copyToClipboard(text: string, key: keyof typeof copyStatus) {
  navigator.clipboard.writeText(text).then(() => {
    copyStatus[key] = true
    setTimeout(() => {
      copyStatus[key] = false
    }, 2000)
  })
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Math&display=swap');

.font-math {
  font-family: 'Fira Math', serif;
  font-variant-numeric: tabular-nums;
}
</style>
