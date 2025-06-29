<template>
  <section class="splaid-container">
    <div class="splaid-picture-container">
      <picture
        class="splaid-picture"
        :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Performance-Desktop.jpg'"
      >
        <source
          :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Performance-Mobile.jpg'"
          media="(max-width: 599px) and (orientation: portrait), (max-width: 899px) and (orientation: landscape)"
        />
        <source
          :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Performance-Desktop.jpg'"
          media="(min-width: 900px) and (orientation: landscape)"
        />
        <source
          :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Performance-Desktop.jpg'"
          media="(min-width: 600px) and (orientation:portrait)"
        />
        <img
          class="splaid-image"
          :src="'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Performance-Desktop.jpg'"
          alt="Une Model S Bleu Outremer Métallisé roulant sur l'autoroute"
        />
      </picture>
    </div>
    <div class="splaid-text-container">
      <div ref="sectionRef" class="splaid-text-wrapper">
        <TitleInfo
          class="w-[150px]"
          title="1020"
          unit="ch"
          info="Puissance du véhicule"
        />
        <TitleInfo
          class="w-[150px]"
          title="9,23"
          unit="s"
          info="@250 km/h 1/4 mile"
        />
        <TitleInfo class="w-[150px]" title="2,1" unit="s" info="0 à 100 km/h" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref<HTMLElement | null>();

onMounted(async () => {
  await nextTick();

  const children = sectionRef.value?.children || [];

  Array.from(children).forEach((el, index) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          toggleActions: "play none none reset",
        },
      }
    );
  });
});
</script>

<style>
.splaid-container {
  @apply relative flex grid-cols-1 w-full max-h-[1098px] aspect-video z-[1] overflow-hidden;
}

.splaid-picture-container {
  @apply relative h-full w-full z-[2] row-start-1 col-start-[-1];
}

.splaid-picture {
  @apply block w-full h-full;
}

.splaid-image {
  @apply ml-0 mr-0 h-full w-full object-cover;
}

.splaid-text-container {
  @apply absolute top-0 left-0 h-full w-full z-[3] flex justify-center items-end;
}

.splaid-text-wrapper {
  @apply flex flex-row w-[864px] justify-around pb-[64px];
}
</style>
