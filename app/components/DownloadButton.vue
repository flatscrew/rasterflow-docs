<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

const props = defineProps<{
  version: string
}>()

const os = ref<'windows' | 'macos' | 'linux' | 'other'>('other')
const ready = ref(false)

type Brand = { brand: string }

onMounted(() => {
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

const urls = computed<Record<'windows' | 'macos' | 'linux' | 'other', string | undefined>>(() => ({
  windows: `${baseUrl}/v${props.version}/RasterFlow-${props.version}-Setup.exe`,
  macos: `${baseUrl}/v${props.version}/RasterFlow-${props.version}.dmg`,
  linux: `${baseUrl}/v${props.version}/RasterFlow-${props.version}.flatpak`,
  other: undefined
}))

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
</script>

<template>
  <UButton
    v-if="ready && urls[os]"
    icon="i-lucide-download"
    size="xl"
    :trailing-icon="iconMap[os]"
    :to="urls[os]"
  >
    Download {{ version }} for {{ labelMap[os] }}
  </UButton>

  <UButton
    v-else-if="ready"
    size="xl"
    color="neutral"
    variant="outline"
    icon="i-lucide-download"
    trailing-icon="i-lucide-arrow-right"
    to="#All_available_downloads"
  >
    View all downloads for {{ version }}
  </UButton>
</template>
