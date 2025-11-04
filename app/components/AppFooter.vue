<script setup lang="ts">
const { footer } = useAppConfig()
</script>

<template>
  <UFooter>
    <template #left>
      {{ footer.credits }}
    </template>

    <template #right>
      <div class="flex gap-2 items-center">
        <UButton
          v-for="(link, index) in footer.links"
          :key="index"
          color="neutral"
          variant="ghost"
          :to="link.to"
          :target="link.target"
          class="p-2"
        >
          <img
            :src="link.icon"
            alt=""
            class="h-6  opacity-80 hover:opacity-100 transition-opacity"
          />
        </UButton>
      </div>
    </template>
  </UFooter>
</template>
