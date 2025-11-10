<script setup lang="ts">
import { ref, onMounted } from 'vue'

type DownloadLinks = {
  windows?: string
  macos?: string
  linux?: string
  other?: string
}

const props = defineProps<{
  version: string
  downloads: DownloadLinks
}>()

const os = ref<'windows' | 'macos' | 'linux' | 'other'>('other')
const ready = ref(false)

type Brand = { brand: string }

onMounted(() => {
  const nav = navigator as Navigator & { userAgentData?: { brands: Brand[] } }

  try {
    if (nav.userAgentData) {
      const brands = nav.userAgentData.brands
        ?.map((b: Brand) => b.brand.toLowerCase())
        .join(' ') || ''

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
    v-if="ready && props.downloads[os]"
    icon="i-lucide-download"
    size="xl"
    :trailing-icon="iconMap[os]"
    :to="props.downloads[os]"
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
    to="/pages/download"
  >
    View all downloads for {{ version }}
  </UButton>
</template>
