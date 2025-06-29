<template>
  <section class="motor-container">
    <OnScrollAnim class="text-start w-[1058px] no-anim">
      <h2 class="motor-title-h2">Groupe motopropulseur électrique</h2>
      <p class="motor-title-content">
        Les plateformes de la Model S unissent les technologies du groupe moteur
        et de la batterie pour des performances, une autonomie et une efficacité
        incomparables. Notre nouvelle architecture thermique des modules et du
        pack batterie assurent une recharge plus rapide et vous offrent plus de
        puissance et d'endurance quelles que soient les conditions.
      </p>
    </OnScrollAnim>
    <section class="motor-carousel">
      <div class="motor-picture-container">
        <picture
          class="motor-picture"
          alt="Groupe motopropulseur électrique et batterie d'une Model&nbsp;S Transmission intégrale Tri-Motor"
          :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1235,w_2880,c_fit,f_auto,q_auto:best/Model-S-Dual-Motor-Powertrain-Carousel-Desktop'"
        >
          <source
            :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/h_422,w_750,c_fit,f_auto,q_auto:best/Model-S-Dual-Motor-Powertrain-Carousel-Mobile'"
            media="(max-width: 599px) and (orientation: portrait), (max-width: 899px) and (orientation: landscape)"
          />
          <source
            :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1235,w_2880,c_fit,f_auto,q_auto:best/Model-S-Dual-Motor-Powertrain-Carousel-Desktop'"
            media="(min-width: 900px) and (orientation: landscape)"
          />
          <source
            :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1235,w_2880,c_fit,f_auto,q_auto:best/Model-S-Dual-Motor-Powertrain-Carousel-Desktop'"
            media="(min-width: 600px) and (orientation:portrait)"
          />
          <img
            :src="'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1235,w_2880,c_fit,f_auto,q_auto:best/Model-S-Dual-Motor-Powertrain-Carousel-Desktop'"
            alt="Groupe motopropulseur électrique et batterie d'une Model&nbsp;S Transmission intégrale Tri-Motor"
            class="motor-image"
            :class="
              isPlaid
                ? 'opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]'
                : 'opacity-100 transition-opacity duration-300 ease-out delay-100'
            "
          />
        </picture>
        <picture
          class="motor-picture"
          alt="Groupe motopropulseur électrique et batterie d'une Model&nbsp;S Transmission intégrale Tri-Motor"
          :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1235,w_2880,c_fit,f_auto,q_auto:best/Model-S-Plaid-Tri-Motor-Powertrain-Carousel-Desktop'"
        >
          <source
            :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/h_422,w_750,c_fit,f_auto,q_auto:best/Model-S-Plaid-Tri-Motor-Powertrain-Carousel-Mobile'"
            media="(max-width: 599px) and (orientation: portrait), (max-width: 899px) and (orientation: landscape)"
          />
          <source
            :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1235,w_2880,c_fit,f_auto,q_auto:best/Model-S-Plaid-Tri-Motor-Powertrain-Carousel-Desktop'"
            media="(min-width: 900px) and (orientation: landscape)"
          />
          <source
            :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1235,w_2880,c_fit,f_auto,q_auto:best/Model-S-Plaid-Tri-Motor-Powertrain-Carousel-Desktop'"
            media="(min-width: 600px) and (orientation:portrait)"
          />
          <img
            :src="'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1235,w_2880,c_fit,f_auto,q_auto:best/Model-S-Plaid-Tri-Motor-Powertrain-Carousel-Desktop'"
            alt="Groupe motopropulseur électrique et batterie d'une Model&nbsp;S Transmission intégrale Tri-Motor"
            class="motor-image"
            :class="
              isPlaid
                ? 'opacity-100 transition-opacity duration-300 ease-out delay-100'
                : 'opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]'
            "
          />
        </picture>
      </div>
    </section>
    <section class="motor-switch">
      <div
        class="motor-switch-content"
        :class="
          isPlaid
            ? 'opacity-50 motor-switch-little-shadow'
            : 'motor-switch-shadow'
        "
        @click="handleChangeView(false)"
      >
        <h3 class="motor-switch-title">Model S</h3>
        <p>
          La transmission intégrale Dual Motor offre une autonomie encore plus
          étendue que celle des autres véhicules de notre gamme actuelle,
          accompagnée d'une puissance inouïe et d'une tenue de route optimale.
        </p>
        <div class="motor-switch-specs">
          <TitleInfo title="3,2" unit="s" info="0 à 100 km/h" />
          <TitleInfo title="634" unit="km" info="Autonomie (WLTP)" />
        </div>
      </div>
      <div
        class="motor-switch-content"
        :class="
          isPlaid
            ? 'motor-switch-shadow'
            : 'opacity-50 motor-switch-little-shadow'
        "
        @click="handleChangeView(true)"
      >
        <h3 class="motor-switch-title">Model S Plaid</h3>
        <p>
          Maintient une puissance de plus de 1 000 chevaux jusqu'à 322 km/h
          grâce à la transmission intégrale Tri-Motor, dotée de la fonction de
          contrôle vectoriel du couple et de trois rotors indépendants à piste
          carbone.
        </p>
        <div class="motor-switch-specs">
          <TitleInfo title="2,1" unit="s" info="0 à 100 km/h" />
          <TitleInfo title="600" unit="km" info="Autonomie (WLTP)" />
        </div>
      </div>
    </section>
  </section>
</template>

<script lang="ts" setup>
const isPlaid = ref(false);
let intervalId: any;

function handleChangeView(bool: boolean) {
  isPlaid.value = bool;
  startInterval();
}

function startInterval() {
  clearIntervalSwitch();
  intervalId = setInterval(() => (isPlaid.value = !isPlaid.value), 3000);
}

function clearIntervalSwitch() {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

onMounted(() => {
  startInterval();
});

onUnmounted(() => {
  clearIntervalSwitch();
});
</script>

<style>
.motor-container {
  @apply pt-[136px] pb-[64px] text-[#393c39] flex flex-col justify-center items-center bg-[#f4f4f4];
}

.motor-title-container {
  @apply text-start;
}

.motor-title-h2 {
  @apply text-[28px] font-bold font-InterTight leading-[36px] pt-[16px] pb-[8px];
}

.motor-title-content {
  @apply w-[695px] pt-[16px] pb-[16px];
}

.motor-carousel {
  @apply relative flex grid-cols-1 w-full max-w-[1440px] aspect-[16/9] z-[1] overflow-hidden pt-[56px] px-[48px];
}

.motor-picture-container {
  @apply relative h-full w-full z-[2] row-start-1 col-start-[-1];
}

.motor-picture {
  @apply absolute block w-full h-full;
}

.motor-image {
  @apply absolute ml-0 mr-0 h-full w-full object-cover;
}

.motor-switch {
  @apply w-full max-w-[1440px] mx-auto px-[48px] flex justify-center text-start gap-[24px] pt-[40px] pb-[72px];
}

.motor-switch-content {
  @apply w-[546px] transition-all border-[#393c39] cursor-pointer;
}

.motor-switch-title {
  @apply text-[17px] font-InterTight font-extrabold leading-[36px] py-[16px];
}

.motor-switch-specs {
  @apply flex gap-[48px] pt-[22px];
}

.motor-switch-shadow {
  box-shadow: inset 0 4px 0 0 #393c39;
}

.motor-switch-little-shadow {
  box-shadow: inset 0 2px 0 0 #393c39;
}
</style>
