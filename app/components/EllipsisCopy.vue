<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const props = defineProps<{
  text: string
  maxWidth?: string
}>()

const toast = useToast()
const { copy, copied } = useClipboard()

async function handleCopy() {
  await copy(props.text)
  toast.add({
    title: 'Copied to clipboard',
    icon: 'i-lucide-check-circle',
    progress: false,
    duration: 1500
  })
}
</script>

<template>
  <div class="flex items-center gap-2">
    <span
      class="truncate block"
      :style="{ maxWidth: props.maxWidth || '200px' }"
      :title="props.text"
    >
      {{ props.text }}
    </span>
    <UButton
      :icon="copied ? 'i-lucide-copy-check' : 'i-lucide-copy'"
      color="neutral"
      variant="outline"
      size="xs"
      :ui="{
        leadingIcon: [copied ? 'text-primary' : 'text-neutral', 'size-3.5']
      }"
      @click="handleCopy"
    />
  </div>
</template>
