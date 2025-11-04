<template>
  <UDropdownMenu
    v-slot="{ open }"
    :modal="false"
    :items="[{
      label: 'User Interface guide',
      to: '/user-interface'
    }, {
      label: 'Available operations',
      to: '/operations'
    }, {
      label: 'Docs',
      to: 'https://docs-template.nuxt.dev/',
      color: 'primary',
      checked: true,
      type: 'checkbox'
    }]"
    :content="{ align: 'start' }"
    :ui="{ content: 'min-w-fit' }"
  >
    <UButton
      label="Docs"
      variant="subtle"
      trailing-icon="i-lucide-chevron-down"
      class="font-semibold rounded-full truncate"
      :class="[open && 'bg-primary/15']"
      :ui="{
        trailingIcon: ['transition-transform duration-200', open ? 'rotate-180' : undefined].filter(Boolean).join(' ')
      }"
    />
  </UDropdownMenu>
</template>
