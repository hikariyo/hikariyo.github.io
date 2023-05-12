<script setup lang="ts">
defineProps<{
  href?: string
  title: string
}>()

const emit = defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <NuxtLink :title="title" :href="href" class="p-3 shadow-lg bg-zinc-100 hover:bg-zinc-200 active:bg-zinc-300 rounded-full" @click="emit('click')">
    <slot />
  </NuxtLink>
</template>
