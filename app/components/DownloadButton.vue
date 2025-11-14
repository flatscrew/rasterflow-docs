<script setup lang="ts">
const props = defineProps<{
  version: string
  system: 'windows' | 'linux'
}>()

const baseUrl = 'https://github.com/flatscrew/rasterflow/releases/download'

const urls = {
  windows: `${baseUrl}/v${props.version}/RasterFlow-${props.version}-Setup-win64.exe`,
  linux: `${baseUrl}/v${props.version}/RasterFlow-${props.version}.flatpak`
} as const

const labels = {
  windows: 'Windows',
  linux: 'Linux (Flatpak)'
} as const

const downloadUrl = urls[props.system]

const displayLabel = labels[props.system]
</script>

<template>
  <UButton
    key="download"
    icon="i-lucide-download"
    size="xl"
    :to="downloadUrl"
  >
    Download {{ version }} for {{ displayLabel }}
  </UButton>
</template>
