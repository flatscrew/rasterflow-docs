<template>
  <figure
  class="
  card-grid 
  block 
  rounded-xl 
  dark:bg-neutral-700 
  bg-neutral-100 
  shadow-lg 
  shadow-primary/30 
  overflow-hidden 
  justify-center 
  mb-8"
>
    <img
      :src="src"
      :alt="alt"
      :style="style"
      class="rounded-lg block"
    />
    <figcaption
      v-if="caption"
      class="text-sm text-muted italic text-center mb-5"
    >
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
defineProps<{
  src: string
  alt?: string
  caption?: string
  style?: string
}>()
</script>

<style scoped>
.card-grid {
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
  background-size: 64px 64px;
}
</style>
