<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const route = useRoute()
const { header } = useAppConfig()
const { value: colorModeValue } = useColorMode()
const desktopNavigation = computed(() => header.navigation.map(link => ({ ...link, active: route.path.startsWith(link.to) })))

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

const extendedNavigation = computed(() => desktopNavigation.value.filter(_ => _.to === '/pages/get-rasterflow'))

const mobileMenuProps = computed(() => route.path === '/'
  ? {
      type: 'single' as const,
      defaultOpen: undefined
    }
  : {
      type: undefined,
      defaultOpen: true
    })
</script>

<template>
  <UHeader
    :ui="{ left: 'min-w-0' }"
    class="flex flex-col"
  >
    <template #title>
      <div class="flex items-center gap-4">
        <AppLogo class="size-10" />
        <span
          v-if="header?.title"
          class="leading-none"
        >
          {{ header.title }}
        </span>
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
          <UColorModeButton>
            <template #fallback>
              <UButton
                icon="lucide:moon"
                variant="ghost"
                color="neutral"
                disabled
              />
            </template>
          </UColorModeButton>
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
        v-bind="mobileMenuProps"
        highlight
        :navigation="navigation"
      />
      <UNavigationMenu
        :ui="{ link: 'px-0' }"
        :items="extendedNavigation"
        variant="link"
        orientation="vertical"
      />
    </template>
  </UHeader>
</template>
