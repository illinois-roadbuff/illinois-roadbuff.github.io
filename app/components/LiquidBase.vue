<script setup lang="ts">
import { defineEmits } from 'vue'
import LiquidGlass from '@wxperia/liquid-glass-vue'

const emit = defineEmits(['click'])

const props = {
  displacementScale: 70,
  blurAmount: 0.1,
  saturation: 140,
  aberrationIntensity: 2,
  elasticity: 0.15,
  cornerRadius: 32,
  mode: 'standard',
  overLight: false,
  padding: '24px 32px',
}

function handleClick(event: MouseEvent) {
  emit('click', event)
}
</script>

<template>
  <div
    style="width: 300px; height: 200px; position: relative;"
  >
    <LiquidGlass
      :displacement-scale="props.displacementScale"
      :blur-amount="props.blurAmount"
      :saturation="props.saturation"
      :aberration-intensity="props.aberrationIntensity"
      :elasticity="props.elasticity"
      :corner-radius="props.cornerRadius"
      :mode="props.mode"
      :over-light="props.overLight"
      :padding="props.padding"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
      @click="handleClick"
    >
      <div class="text-white p-4">
        Your content goes here
      </div>
    </LiquidGlass>
  </div>
</template>


