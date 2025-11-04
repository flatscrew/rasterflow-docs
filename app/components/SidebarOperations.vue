<script setup lang="ts">
const route = useRoute()
const config = useAppConfig()
const isInOperations = computed(() => route.path.startsWith('/operations'))

const navigation = [
  {
    title: 'Operations',
    icon: 'i-lucide-cpu',
    defaultOpen: isInOperations.value,
    path: '/operations',
    children: config.gegl.operations.map(op => ({
      title: op.title,
      path: `/operations/gegl/${op.id}`,
      icon: 'i-lucide-cpu'
    }))
  }
]
</script>

<template>
  <UContentNavigation
    :navigation="navigation"
    highlight
    class="border-t border-default pt-2"
  />
</template>
