<template>
  <div v-for="link in links" :key="link.title">
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
            ? 'opacity-100 transition-opacity duration-300 ease-out delay-100'
            : 'opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]'
        "
      />
    </picture>
    <div
      v-show="link.isSelected"
      :key="link.svg + '-' + Date.now()"
      class="absolute top-0 left-0 w-full h-full pointer-events-none animate-stroke"
      v-html="svgComponents[link.svg]"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import type { Target } from "~/assets/types/target";
const svgComponents = ref<Record<string, any>>({});

const props = defineProps<{
  links: Target[];
}>();

onMounted(async () => {
  for (const link of props.links) {
    const raw = await fetch(`/assets/path/${link.svg}.svg`).then((res) =>
      res.text()
    );
    svgComponents.value[link.svg] = raw;
  }
});
</script>

<style>
.animate-stroke path {
  stroke: #007bff; /* couleur personnalisable */
  stroke-width: 5;
  fill: none;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: stroke 2s ease forwards;
}
.animate-stroke svg {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover; /* si tu veux le crop */
  position: absolute;
  top: 0;
  left: 0;
}
</style>
