<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

const props = defineProps<{
  version: string
  system?: 'windows' | 'macos' | 'linux' | 'other'
}>()

const os = ref<'windows' | 'macos' | 'linux' | 'other'>(props.system ?? 'other')

const baseUrl = 'https://github.com/flatscrew/rasterflow/releases/download'

const urls = computed(() =>
  ({
    windows: `${baseUrl}/v${props.version}/RasterFlow-${props.version}-Setup-win64.exe`,
    macos: `https://github.com/flatscrew/rasterflow/archive/refs/tags/v${props.version}.tar.gz`,
    linux: `${baseUrl}/v${props.version}/RasterFlow-${props.version}.flatpak`
  } as const)
)

const iconMap = {
  windows: 'i-simple-icons-windows',
  macos: 'i-simple-icons-apple',
  linux: 'i-simple-icons-linux',
  other: 'i-lucide-arrow-right'
} as const

const labelMap = {
  windows: 'Windows',
  macos: 'macOS',
  linux: 'Linux (Flatpak)',
  other: 'All platforms'
} as const

const downloadUrl = computed<string | undefined>(() => {
  const pick = props.system ?? os.value
  return pick === 'other' ? undefined : urls.value[pick]
})

const displayLabel = computed(() => labelMap[props.system ?? os.value])
const displayIcon = computed(() => iconMap[props.system ?? os.value])
</script>

<template>
  <UButton
    key="download"
    icon="i-lucide-download"
    size="xl"
    :trailing-icon="displayIcon"
    :to="downloadUrl"
  >
    Download {{ version }} for {{ displayLabel }}
  </UButton>
</template>
