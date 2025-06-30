<template>
  <section class="demo-carousel-container">
    <div class="demo-carousel-video-wrapper">
      <Player
        v-for="(video, index) in videos"
        :key="index"
        :link="video.link"
        :visible="selected - 1 === index"
        @nextVideo="changeVideo"
      />
    </div>
    <div class="demo-carousel-selector-content-container">
      <div class="demo-carousel-selector-container">
        <div
          v-for="n in 5"
          @click="handleClick(n)"
          :class="selected === n ? 'bg-white' : 'bg-[#5c5e62]'"
          class="demo-carousel-selector"
        ></div>
      </div>
      <div class="demo-carousel-contents-container">
        <h3 class="demo-carousel-title">{{ currentContent?.title }}</h3>
        <p class="demo-carousel-content">{{ currentContent?.content }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const videos = ref([
  {
    link: "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-S-Interior-Carousel-1-Cinematic-Display-Desktop-Global.mp4",
    title: "Une expérience cinématographique",
    content:
      "Un écran tactile 17\" avec inclinaison gauche/droite offre une résolution de 2 200 x 1 300, des couleurs authentiques et une réactivité exceptionnelle pour l'affichage de jeux, de films et bien plus encore.",
  },
  {
    link: "https://digitalassets.tesla.com/tesla-contents/video/upload/Model-S-Interior-Carousel-2-Yoke-Steering-Desktop.mp4",
    title: "Volant Yoke",
    content:
      "Une nouvelle approche audacieuse vous donne une véritable connexion avec la Model S, offrant une meilleure sensation de maîtrise et une vue dégagée sur votre tableau de bord et sur la route. Appuyez sur le frein : la Model S sélectionne automatiquement la bonne direction pour commencer votre voyage.",
  },
  {
    link: "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-S-Interior-Carousel-3-Perfect-Environment-Desktop.mp4",

    title: "Environnement parfait",
    content:
      "Les ouïes de ventilation sont dissimulées dans tout l'habitacle, tandis que le contrôle de la température tri-zone, les sièges ventilés et le système de filtration HEPA offrent un environnement idéal.",
  },
  {
    link: "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Model-S-Interior-Carousel-4-Second-Row-Desktop.mp4",

    title: "Deuxième rangée redessinée",
    content:
      "De la place pour trois adultes, avec de l'espace supplémentaire aux jambes, en hauteur ainsi qu'un accoudoir escamotable intégrant un espace de rangement et un système de recharge par induction.",
  },
  {
    link: "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/MS-Interior-Carousel-5-Gaming-Mobile.mp4",

    title: "Arcade Tesla",
    content: "Jouez à différents jeux sur l'écran tactile de votre véhicule.",
  },
]);

const selected = ref(1);

function handleClick(n: number) {
  selected.value = n;
}

function changeVideo(isVisible: boolean) {
  if (isVisible) {
    if (selected.value === videos.value.length) {
      selected.value = 1;
      return;
    }
    selected.value++;
  }
}

const currentContent = computed(() => videos.value[selected.value - 1]);
</script>

<style scoped>
.demo-carousel-container {
  @apply relative bg-black max-h-[998px] w-full py-[50px] flex flex-col items-center justify-end px-[48px];
}

.demo-carousel-video-wrapper {
  @apply relative inline-block w-full max-w-[1440px] aspect-[21/9] rounded-[8px] mx-auto overflow-hidden;
}

.demo-carousel-selector-content-container {
  @apply w-[660px] pt-[40px] pb-[72px];
}

.demo-carousel-selector-container {
  @apply flex flex-row justify-start gap-[8px] w-full;
}

.demo-carousel-selector {
  @apply w-[12px] h-[12px] rounded-[50%] cursor-pointer;
}

.demo-carousel-title {
  @apply pt-[16px] pb-[4px] text-[20px] h-[48px] flex items-center font-InterTight;
}

.demo-carousel-content {
  @apply pb-[14px] h-[94px] leading-[20px];
}
</style>
