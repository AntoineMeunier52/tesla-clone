<template>
  <div v-for="link in links">
    <picture
      class="traject-picture"
      alt="Groupe motopropulseur électrique et batterie d'une Model&nbsp;S Transmission intégrale Tri-Motor"
      :srcset="link.desktop"
    >
      <source
        :srcset="link.mobile"
        media="(max-width: 599px) and (orientation: portrait), (max-width: 899px) and (orientation: landscape)"
      />
      <source
        :srcset="link.desktop"
        media="(min-width: 900px) and (orientation: landscape)"
      />
      <source
        :srcset="link.desktop"
        media="(min-width: 600px) and (orientation:portrait)"
      />
      <img
        :src="link.desktop"
        :alt="link.alt"
        class="traject-image"
        :class="
          link.isSelected
            ? 'opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]'
            : 'opacity-100 transition-opacity duration-300 ease-out delay-100'
        "
      />
    </picture>
  </div>
</template>

<script lang="ts" setup>
import type { Target } from "~/assets/types/target";
const props = defineProps<{
  links: Target[];
}>();
</script>

<style></style>
