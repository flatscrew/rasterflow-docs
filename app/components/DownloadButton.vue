<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface DownloadLinks {
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

onMounted(() => {
  const nav = navigator as Navigator & { userAgentData?: any }

  try {
    if (nav.userAgentData) {
      const brands = nav.userAgentData.brands
        ?.map((b: any) => b.brand.toLowerCase())
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
}

const labelMap = {
  windows: 'Download for Windows',
  macos: 'Download for macOS',
  linux: 'Download for Linux (Flatpak)',
  other: 'View all downloads'
}
</script>

<template>
  <UButton
    v-if="ready && props.downloads[os]"
    icon="i-lucide-download"
    :size="'xl'"
    :trailing-icon="iconMap[os]"
    :to="props.downloads[os]"
  >
    {{ labelMap[os] }}
  </UButton>

  <UButton
    v-else-if="ready"
    size="xl"
    color="neutral"
    variant="outline"
    icon="i-lucide-download"
    trailing-icon="i-lucide-arrow-right"
    to="/downloads"
  >
    View all downloads for {{ version }}
  </UButton>
</template>
