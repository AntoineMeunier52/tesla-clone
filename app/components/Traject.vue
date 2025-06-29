<template>
  <section class="traject-container">
    <OnScrollAnim class="text-start w-[1058px] no-anim">
      <h2 class="traject-title-h2">La liberté de voyager</h2>
      <p class="traject-title-content">
        Entrez une destination sur votre écran tactile et le planificateur de
        voyage calculera automatiquement votre itinéraire, en incluant les
        Superchargeurs sur votre chemin.
      </p>
    </OnScrollAnim>
    <section class="traject-carousel">
      <div class="traject-picture-container">
        <TrajectImg :links="data" />
      </div>
    </section>
    <section class="traject-switch">
      <CarouselCard :contents="data" @change-view="changeTarget" />
    </section>
  </section>
</template>

<script lang="ts" setup>
import type { Target } from "~/assets/types/target";

let isActive = 0;
let intervalId: any;
let firstRender = true;

function changeTarget(idx: number) {
  const curr = data.value[isActive];
  if (curr) curr.isSelected = false;

  const newTarget = data.value[idx];
  if (newTarget) newTarget.isSelected = true;
  isActive = idx;

  startInterval();
}

function startInterval() {
  clearIntervalSwitch();
  const temp = isActive + 1;
  const curr = data.value[isActive];
  if (curr) {
    intervalId = setInterval(
      () => changeTarget(temp % data.value.length),
      3000
    );
  }
}

function clearIntervalSwitch() {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

onMounted(() => {
  if (firstRender) {
    const curr = data.value[isActive];
    if (curr) {
      curr.isSelected = true;
    }
    firstRender = false;
  }

  startInterval();
});

onUnmounted(() => {
  clearIntervalSwitch();
});

const data = ref([
  {
    isSelected: false,
    title: "Munich - Zurich",
    content: "",
    desktop:
      "https://www.tesla.com/sites/default/files/model3-new/range-maps/fr/FR_munich-zurich_2451x1125.jpg",
    mobile:
      "https://www.tesla.com/sites/default/files/model3-new/range-maps/fr/FR_munich-zurich_2451x1125.jpg",
    alt: "Munich to Zurich",
    titleInfo1: {
      title: "311",
      unit: "km",
      info: "",
    },
    titleInfo2: {
      title: "",
      unit: "",
      info: "",
    },
  },
  {
    isSelected: false,
    title: "Amsterdam - Bruxelles",
    content: "",
    desktop:
      "https://www.tesla.com/sites/default/files/model3-new/range-maps/fr/FR_munich-zurich_2451x1125.jpg",
    mobile:
      "https://www.tesla.com/sites/default/files/model3-new/range-maps/fr/FR_munich-zurich_2451x1125.jpg",
    alt: "Munich to Zurich",
    titleInfo1: {
      title: "203",
      unit: "km",
      info: "",
    },
    titleInfo2: {
      title: "",
      unit: "",
      info: "",
    },
  },
  {
    isSelected: false,
    title: "Bruxelles - Paris",
    content: "",
    desktop:
      "https://www.tesla.com/sites/default/files/model3-new/range-maps/fr/FR_munich-zurich_2451x1125.jpg",
    mobile:
      "https://www.tesla.com/sites/default/files/model3-new/range-maps/fr/FR_munich-zurich_2451x1125.jpg",
    alt: "Munich to Zurich",
    titleInfo1: {
      title: "320",
      unit: "km",
      info: "",
    },
    titleInfo2: {
      title: "",
      unit: "",
      info: "",
    },
  },
  {
    isSelected: false,
    title: "Oslo - Göteborg",
    content: "",
    desktop:
      "https://www.tesla.com/sites/default/files/model3-new/range-maps/fr/FR_munich-zurich_2451x1125.jpg",
    mobile:
      "https://www.tesla.com/sites/default/files/model3-new/range-maps/fr/FR_munich-zurich_2451x1125.jpg",
    alt: "Munich to Zurich",
    titleInfo1: {
      title: "295",
      unit: "km",
      info: "",
    },
    titleInfo2: {
      title: "",
      unit: "",
      info: "",
    },
  },
]);
</script>

<style>
.traject-container {
  @apply pt-[136px] pb-[64px] text-[#393c39] flex flex-col justify-center items-center bg-[#f4f4f4];
}

.traject-title-container {
  @apply text-start;
}

.traject-title-h2 {
  @apply text-[28px] font-bold font-InterTight leading-[36px] pt-[16px] pb-[8px];
}

.traject-title-content {
  @apply w-[695px] pt-[16px] pb-[16px];
}

.traject-carousel {
  @apply relative flex grid-cols-1 w-full max-w-[1440px] aspect-[16/9] z-[1] overflow-hidden pt-[56px] px-[48px];
}

.traject-picture-container {
  @apply relative h-full w-full z-[2] row-start-1 col-start-[-1];
}

.traject-picture {
  @apply absolute block w-full h-full;
}

.traject-image {
  @apply absolute ml-0 mr-0 h-full w-full object-cover;
}

.traject-switch {
  @apply w-full max-w-[1440px] mx-auto px-[48px] flex justify-center text-start gap-[24px] pt-[40px] pb-[72px];
}

.traject-switch-content {
  @apply w-[546px] transition-all border-[#393c39] cursor-pointer;
}

.traject-switch-title {
  @apply text-[17px] font-InterTight font-extrabold leading-[36px] py-[16px];
}

.traject-switch-specs {
  @apply flex gap-[48px] pt-[22px];
}

.traject-switch-shadow {
  box-shadow: inset 0 4px 0 0 #393c39;
}

.traject-switch-little-shadow {
  box-shadow: inset 0 2px 0 0 #393c39;
}
</style>
