<template>
  <div class="flex items-center justify-center gap-8 relative my-6">
    <!-- Left: Input + Aux -->
    <div class="flex flex-row items-center justify-end gap-4 self-center">
      <div
        v-if="hasInput"
        class="text-white cursor-help"
      >
        <UTooltip text="Main input pad — accepts an image or buffer.">
          <UBadge
            color="info"
            size="xl"
          >
            Input
          </UBadge>
        </UTooltip>
      </div>

      <div
        v-if="hasAux"
        class="text-white cursor-help"
      >
        <UTooltip text="Auxiliary pad — can provide an additional input or mask.">
          <UBadge
            color="info"
            size="xl"
          >
            Aux
          </UBadge>
        </UTooltip>
      </div>
    </div>

    <!-- Middle separator -->
    <USeparator
      orientation="vertical"
      icon="i-lucide-arrow-right"
      class="h-20 self-center"
    />

    <!-- Right: Output -->
    <div class="flex items-center justify-start self-center">
      <div
        v-if="hasOutput"
        class="text-white cursor-help"
      >
        <UTooltip text="Output pad — emits the processed result.">
          <UBadge
            color="success"
            size="xl"
          >
            Output
          </UBadge>
        </UTooltip>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  hasInput?: boolean
  hasAux?: boolean
  hasOutput?: boolean
}>()
</script>
