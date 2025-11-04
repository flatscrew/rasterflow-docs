<template>
  <div class="relative inline-block mb-8">
    <div
      v-if="hasInput"
      :class="[
        'absolute -left-8 text-white cursor-help',
        hasAux ? 'top-1/3' : 'top-1/2'
      ]"
    >
      <UTooltip text="Main input pad — accepts an image or buffer.">
        <UBadge color="info" size="xl">Input</UBadge>
      </UTooltip>
    </div>

    <div v-if="hasAux" class="absolute -left-8 top-2/3 text-white cursor-help">
      <UTooltip text="Auxiliary pad — can provide an additional input or mask.">
        <UBadge color="info" size="xl">Aux</UBadge>
      </UTooltip>
    </div>

    <div v-if="hasOutput" class="absolute -right-8 top-1/2 text-white cursor-help">
      <UTooltip text="Output pad — emits the processed result.">
        <UBadge color="success" size="xl">Output</UBadge>
      </UTooltip>
    </div>

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
      <img :src="src" :alt="alt" :style="style" class="rounded-lg block" />
      <figcaption
        v-if="caption"
        class="text-sm text-muted italic text-center mb-5"
      >
        {{ caption }}
      </figcaption>
    </figure>
  </div>
</template>


<script setup lang="ts">
defineProps<{
  src: string
  alt?: string
  caption?: string
  style?: string
  hasInput?: boolean
  hasAux?: boolean
  hasOutput?: boolean
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
