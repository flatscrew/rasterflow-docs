<template>
  <ClientOnly>
    <Splide
      :options="{
        type: 'loop',
        autoplay: true,
        interval: 4000,
        arrows: true,
        pagination: false,
        pauseOnHover: true,
      }"
      class="rounded-xl overflow-hidden shadow-xl"
    >
      <SplideSlide v-for="(img, i) in images" :key="i" class="">
        <img :src="img" alt="" class="w-full h-auto object-cover" />
      </SplideSlide>
    </Splide>
  </ClientOnly>
</template>

<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/splide.min.css'

const images = [
  '/images/screenshots/rasterflow1.png',
  '/images/screenshots/rasterflow2.png',
]
</script>
