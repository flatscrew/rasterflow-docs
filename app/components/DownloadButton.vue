<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

const props = defineProps<{
  version: string
  system?: 'windows' | 'macos' | 'linux' | 'other'
}>()

const os = ref<'windows' | 'macos' | 'linux' | 'other'>(props.system ?? 'other')
const ready = ref(false)

type Brand = { brand: string }

onMounted(() => {
  if (props.system) {
    ready.value = true
    return
  }

  const nav = navigator as Navigator & { userAgentData?: { brands: Brand[] } }

  try {
    if (nav.userAgentData) {
      const brands =
        nav.userAgentData.brands?.map(b => b.brand.toLowerCase()).join(' ') || ''
      if (brands.includes('windows')) os.value = 'windows'
      else if (brands.includes('mac')) os.value = 'macos'
      else if (brands.includes('linux')) os.value = 'linux'
      else os.value = 'other'
    } else {
      const ua = nav.userAgent.toLowerCase()
      if (ua.includes('win')) os.value = 'windows'
      else if (ua.includes('mac')) os.value = 'macos'
      else if (ua.includes('linux')) os.value = 'linux'
      else os.value = 'other'
    }
  } finally {
    ready.value = true
  }
})

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
    v-if="!ready || !downloadUrl"
    key="fallback"
    size="xl"
    color="neutral"
    variant="outline"
    icon="i-lucide-download"
    trailing-icon="i-lucide-arrow-right"
    to="#all-available-downloads"
  >
    View all downloads for {{ version }}
  </UButton>

  <UButton
    v-else
    key="download"
    icon="i-lucide-download"
    size="xl"
    :trailing-icon="displayIcon"
    :to="downloadUrl"
  >
    Download {{ version }} for {{ displayLabel }}
  </UButton>
</template>
