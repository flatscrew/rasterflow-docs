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
      <img v-if="src != null" :src="src" :alt="alt" :style="style" class="rounded-lg block" />
      <img v-if="src == null" src="/images/operations/_none.png" :alt="alt" :style="style" class="rounded-lg block" />
      
      <figcaption
        v-if="caption && src != null"
        class="text-sm text-muted italic text-center mb-5"
      >
        {{ caption }}
      </figcaption>

      <figcaption
        v-else-if="src == null"
        class="absolute inset-0 flex items-center justify-center gap-2 text-white text-sm italic"
      >
        <UIcon name="i-heroicons-photo" class="w-5 h-5 text-white/80" />
        Picture not available yet
      </figcaption>

    </figure>
  </div>
</template>


<script setup lang="ts">
defineProps<{
  src?: string
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
