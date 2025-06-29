<template>
  <section class="futur-inside">
    <div class="futur-inside-container">
      <h2 ref="titleRef" class="futur-inside-text">L'intérieur du futur</h2>
    </div>
    <div class="futur-inside-picture-container">
      <picture
        :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Interior-Desktop.jpg'"
        data-loaded="true"
      >
        <source
          :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Interior-Mobile.jpg'"
          media="(max-width: 599px) and (orientation: portrait)"
        />
        <source
          :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Interior-Desktop.jpg'"
          media="(max-width: 899px) and (orientation: landscape)"
        />
        <source
          :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Interior-Desktop.jpg'"
          media="(min-width: 900px) and (orientation: landscape)"
        />
        <source
          :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Interior-Desktop.jpg'"
          media="(min-width: 600px) and (orientation:portrait)"
        />
        <img
          src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Interior-Desktop.jpg"
          alt="Model S avec intérieur blanc vue depuis le siège passager centré sur l'écran tactile d'info divertissement"
        />
      </picture>
      <div class="futur-inside-gradient"></div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const titleRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!titleRef.value) return;

  gsap.fromTo(
    titleRef.value,
    {
      opacity: 0,
      y: 100,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: titleRef.value,
        start: "top bottom",
        toggleActions: "play none none reset",
        // ^^^^ (onEnter, onLeave, onEnterBack, onLeaveBack)
      },
    }
  );
});
</script>

<style>
.futur-inside {
  @apply bg-black pb-[68px];
}

.futur-inside-container {
  @apply flex justify-center py-[48px];
}

.futur-inside-text {
  @apply text-[28px] font-InterTight leading-[36px] pt-[32px] pb-[8px];
}

.futur-inside-picture-container {
  @apply relative h-screen;
}

.futur-inside-gradient {
  @apply absolute h-full w-full bottom-0 left-0 bg-gradient-to-b from-black from-0% to-transparent to-20%;
}
</style>
