<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import { useRoute } from 'vue-router'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
const route = useRoute()
</script>

<template>
  <UContainer>
    <UPage>
      <template #left>
        <UPageAside>
          <UContentNavigation
            :key="route.path"
            highlight
            :navigation="navigation"
            :default-open="true"
          />
        </UPageAside>
      </template>

      <slot />
    </UPage>
  </UContainer>
</template>
