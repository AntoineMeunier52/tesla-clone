<template>
  <section ref="sectionRef" v-bind="$attrs">
    <slot></slot>
  </section>
</template>

<script lang="ts" setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref<HTMLElement | null>(null);

onMounted(async () => {
  await nextTick();

  const children = sectionRef.value?.children || [];

  Array.from(children).forEach((el, index) => {
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          toggleActions: "play reset play reset",
          // ^^^^ (onEnter, onLeave, onEnterBack, onLeaveBack)
        },
      }
    );
  });
});

defineOptions({
  inheritAttrs: false,
});
</script>

<style></style>
