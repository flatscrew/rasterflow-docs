<script setup lang="ts">
const { src, alt } = defineProps<{
  src?: string
  alt?: string
  caption?: string
}>()
</script>

<template>
  <div class="relative inline-block mb-8">
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
      "
    >
      <ProseImg
        v-if="src"
        :src="src"
        :alt="alt ?? ''"
        sizes="100vw md:1000px"
      />

      <img
        v-else
        src="/images/operations/_none.png"
      >

      <figcaption
        v-if="!src"
        class="absolute inset-0 flex items-center justify-center gap-2 text-black dark:text-white text-sm italic"
      >
        <UIcon
          name="i-heroicons-photo"
          class="w-5 h-5 text-black/80 dark:text-white/80"
        />
        Picture not available yet
      </figcaption>
    </figure>
  </div>
</template>

<style scoped>
.card-grid {
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
  background-size: 64px 64px;
}
</style>
