<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const route = useRoute()
const { header } = useAppConfig()
const { value: colorModeValue } = useColorMode()
const desktopNavigation = computed(() => header.navigation.map(link => ({ ...link, active: route.path.startsWith(link.to) })))

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
</script>

<template>
  <UHeader
    :ui="{ left: 'min-w-0' }"
    class="flex flex-col"
  >
    <template #title>
      <div class="flex items-center gap-1.5">
        <AppLogo class="size-6" />
        <span
          v-if="header?.title"
          class="leading-none"
        >
          {{ header.title }}
        </span>
        <!-- <UBadge
          color="neutral"
          variant="outline"
        >
          0.1.0
        </UBadge> -->
      </div>
    </template>

    <div class="flex gap-3 items-center">
      <UNavigationMenu
        :items="desktopNavigation"
        variant="link"
      />
    </div>

    <template #right>
      <UTooltip
        text="Search"
        :kbds="['meta', 'K']"
      >
        <UContentSearchButton />
      </UTooltip>

      <UTooltip
        :text="`Switch to ${colorModeValue === 'dark' ? 'light' : 'dark'} mode`"
      >
        <!-- wrapper div just for correct tooltip positioning -->
        <div>
          <UColorModeButton v-if="header?.colorMode" />
        </div>
      </UTooltip>

      <template v-if="header?.links">
        <UTooltip
          v-for="(link, index) of header.links"
          :key="index"
          :text="link['aria-label']"
        >
          <UButton
            v-bind="{ color: 'neutral', variant: 'ghost', ...link }"
          />
        </UTooltip>
      </template>
    </template>

    <template #body>
      <UContentNavigation
        highlight
        :default-open="true"
        :navigation="navigation"
      />
    </template>
  </UHeader>
</template>
