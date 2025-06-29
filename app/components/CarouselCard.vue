<template>
  <section class="carousel-card-switch">
    <div
      v-for="(content, index) in contents"
      class="carousel-card-switch-content"
      :class="
        content.isSelected
          ? 'carousel-card-switch-shadow'
          : 'opacity-50 carousel-card-switch-little-shadow'
      "
      @click="emit('change-view', index)"
    >
      <h3 class="carousel-card-switch-title">{{ content.title }}</h3>
      <div class="carousel-card-switch-specs">
        <TitleInfo
          :title="content.titleInfo1.title"
          :unit="content.titleInfo1.unit"
          :info="content.titleInfo1.info"
        />
        <TitleInfo
          :title="content.titleInfo2.title"
          :unit="content.titleInfo2.unit"
          :info="content.titleInfo2.info"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { Target } from "~/app/assets/types/target";
const props = defineProps<{
  contents: Target[];
}>();

const emit = defineEmits(["change-view"]);
</script>

<style>
.carousel-card-switch {
  @apply w-full max-w-[1440px] mx-auto flex justify-center text-start gap-[24px] pt-[40px] pb-[72px];
}

.carousel-card-switch-content {
  @apply w-[546px] transition-all border-[#393c39] cursor-pointer;
}

.carousel-card-switch-title {
  @apply text-[17px] font-InterTight font-extrabold leading-[36px] py-[16px];
}

.carousel-card-switch-specs {
  @apply flex gap-[48px];
}

.carousel-card-switch-shadow {
  box-shadow: inset 0 4px 0 0 #393c39;
}

.carousel-card-switch-little-shadow {
  box-shadow: inset 0 2px 0 0 #393c39;
}
</style>
