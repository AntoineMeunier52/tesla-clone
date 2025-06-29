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

  const section = sectionRef.value;
  if (!section) return;

  const elements = section.querySelectorAll(":scope *:not(.no-anim)");
  const children = sectionRef.value?.children || [];

  elements.forEach((el, index) => {
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          toggleActions: "play none none reset",
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
