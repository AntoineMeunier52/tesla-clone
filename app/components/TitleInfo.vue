<template>
  <div class="title-info-container">
    <div class="title-info-title">
      {{ props.title }} <span class="title-info-unit">{{ props.unit }}</span>
    </div>
    <p class="title-info-info">{{ props.info }}</p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
  unit: string;
  info: string;
}>();
</script>

<style>
.title-info-container {
  @apply flex flex-col items-center font-InterTight select-none;
}
.title-info-title {
  @apply text-[24px] leading-[24px];
}

.title-info-unit {
  @apply text-[20px] pl-[4px] leading-[24px];
}

.title-info-info {
  @apply pt-[8px] text-[14px] leading-[20px];
}
</style>
