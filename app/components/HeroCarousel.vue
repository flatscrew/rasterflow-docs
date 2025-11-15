<script setup lang="ts">
const images = [
  '/images/screenshots/rasterflow1.png',
  '/images/screenshots/rasterflow2.png',
  '/images/screenshots/rasterflow3.png'
]
</script>

<template>
  <UCarousel
    v-slot="{ item }"
    :items="images"
    indicators
    arrows
    loop
    :autoplay="{
      stopOnMouseEnter: true,
      stopOnInteraction: false
    }"
    :autoplay-interval="4000"
    class="w-full max-w-5xl mx-auto rounded shadow-lg overflow-hidden hover:scale-[1.1] hover:shadow-2xl hover:shadow-primary/20 bg-neutral-900 transition-all duration-500 flex items-center justify-center"
  >
    <NuxtImg
      :src="item"
      alt=""
      class="w-full h-auto object-contain"
    />
  </UCarousel>
</template>
