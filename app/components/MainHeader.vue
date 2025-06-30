<template>
  <section class="hero-container">
    <div class="hero-picture-container">
      <picture
        class="hero-picture"
        :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Main-Hero-Desktop-v3.jpg'"
      >
        <source
          :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Main-Hero-Mobile-v3.jpg'"
          media="(max-width: 599px) and (orientation: portrait)"
        />
        <source
          :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Main-Hero-Desktop-v3.jpg'"
          media="(max-width: 899px) and (orientation: landscape)"
        />
        <source
          :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Main-Hero-Desktop-v3.jpg'"
          media="(min-width: 900px) and (orientation: landscape)"
        />
        <source
          :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Main-Hero-Tablet-v3.jpg'"
          media="(min-width: 600px) and (orientation:portrait)"
        />
        <img
          src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Main-Hero-Desktop-v3.jpg"
          class="hero-image"
        />
      </picture>
      <div class="hero-picture-gradient"></div>
    </div>
    <div class="hero-content-container">
      <h1 class="hero-title">Model S</h1>
      <h3 class="hero-subtitle">Plaid</h3>
      <div class="hero-infos-container">
        <div class="hero-specs">
          <div class="hero-specs-section">
            <TitleInfo title="600" unit="km" info="Antonomie" />
            <span class="hero-specs-info"
              >(
              <a href="/notfound" class="hero-specs-info-link">WLTP</a>
              )</span
            >
          </div>
          <TitleInfo
            class="w-[150px]"
            title="2.1"
            unit="s"
            info="0 à 100 km/h"
          />
          <TitleInfo
            class="w-[150px]"
            title="322"
            unit="km/h"
            info="Vitesse maximale"
          />
          <TitleInfo
            class="w-[150px]"
            title="1020"
            unit="ch"
            info="Puissance du véhicule"
          />
          <a class="hero-specs-button" href="/notfound"
            ><span> Véhicules disponibles </span>
          </a>
        </div>
        <div class="hero-disclaimer-containers">
          <p>
            Les caractéristiques affichées correspondent à la Model S Plaid.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.hero-container {
  @apply grid grid-cols-1 h-screen w-full z-[1] overflow-hidden;
}

.hero-picture-container {
  @apply relative h-screen w-screen z-[2] row-start-1 col-start-[-1];
}

.hero-picture {
  @apply block h-full w-full;
}

.hero-picture-gradient {
  @apply absolute h-screen w-screen bottom-0 left-0 bg-gradient-to-t from-black from-0% to-transparent to-20%;
}

.hero-image {
  @apply h-full w-full ml-0 mr-0 object-cover;
}

.hero-content-container {
  @apply row-start-1 col-start-[-1] z-[3] flex flex-col items-center text-center w-full h-screen;
}

.hero-title {
  @apply mt-[16vh] text-[40px] font-bold text-[#171a20] font-InterTight leading-[48px];
}

.hero-subtitle {
  @apply mt-[4px] text-[24px] font-bold text-[#171a20] font-InterTight leading-[28px];
}

.hero-infos-container {
  @apply flex flex-auto flex-col justify-end items-center w-full p-[32px];
}

.hero-specs {
  @apply flex flex-row gap-[24px] justify-items-center text-white font-InterTight font-bold text-[24px] leading-[28px];
}

.hero-specs-section {
  @apply w-[150px];
}

.hero-specs-value {
  @apply text-[20px] font-normal leading-[20px] p-[4px] w-[150px];
}

.hero-specs-info {
  @apply pt-[8px] text-[14px] font-normal leading-[14px];
}

.hero-specs-info-link {
  @apply underline text-[14px] font-normal leading-[14px];
}

.hero-specs-button {
  @apply bg-[#3e6ae1] text-[14px] px-[24px] py-[4px] w-[204px] h-[40px] rounded-[4px] border-[3px] border-[#3e6ae1];
}

.hero-disclaimer-containers {
  @apply text-white text-[12px] leading-[14px] mt-[32px];
}
</style>
