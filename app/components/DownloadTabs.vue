<script setup lang="ts">
const items = [
  {
    label: 'Linux',
    icon: 'i-simple-icons-linux',
    value: 'linux',
    slot: 'linux'
  },
  {
    label: 'MacOS',
    icon: 'i-simple-icons-apple',
    value: 'macos',
    slot: 'macos'
  },
  {
    label: 'Windows',
    icon: 'i-simple-icons-windows',
    value: 'windows',
    slot: 'windows'
  }
]
const { $os } = useNuxtApp()
const model = ref('linux')

onMounted(() => model.value = $os)
</script>

<template>
  <UTabs
    v-model="model"
    :items="items"
    variant="pill"
    color="neutral"
    :ui="{ list: 'w-auto', label: 'px-4' }"
    class="text-left"
  >
    <template #linux>
      <slot name="linux" />
    </template>

    <template #macos>
      <slot name="macos" />
    </template>

    <template #windows>
      <slot name="windows" />
    </template>
  </UTabs>
</template>
