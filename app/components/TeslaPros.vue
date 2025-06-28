<template>
  <OnScrollAnim class="bg-black flex flex-col items-center">
    <div class="tesla-pros-content-container">
      <div class="tesla-pros-picture-container">
        <picture
          class="tesla-pros-picture"
          alt="Prise de vue intérieure depuis le siège passager de la console montrant deux smartphones en cours de recharge sans fil"
          :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Interior-Grid-A-DMT.jpg'"
        >
          <source
            :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Interior-Grid-A-DMT.jpg'"
            media="(max-width: 599px) and (orientation: portrait), (max-width: 899px) and (orientation: landscape)"
          />
          <source
            :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Interior-Grid-A-DMT.jpg'"
            media="(min-width: 900px) and (orientation: landscape)"
          />
          <source
            :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Interior-Grid-A-DMT.jpg'"
            media="(min-width: 600px) and (orientation:portrait)"
          />
          <img
            :src="'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Interior-Grid-A-DMT.jpg'"
            alt="Prise de vue intérieure depuis le siège passager de la console montrant deux smartphones en cours de recharge sans fil"
          />
        </picture>
      </div>
      <div class="tesla-pros-text-content">
        <h3 class="tesla-pros-text-title">Restez connecté</h3>
        <p>
          Connectez vos appareils instantanément grâce au Bluetooth permettant
          plusieurs connexions simultanées, ou rechargez rapidement vos
          appareils en tirant parti de la recharge <br />sans fil et USB-C 36 W.
        </p>
      </div>
    </div>
    <div class="tesla-pros-content-container">
      <div class="tesla-pros-text-content">
        <h3 class="tesla-pros-text-title">Son immersif</h3>
        <p>
          Un système audio de 960 watts à 22 haut-parleurs avec Réduction active
          du bruit de la route offre une écoute immersive et un son de qualité
          studio.
        </p>
      </div>
      <div class="tesla-pros-picture-container">
        <video
          class="tesla-pros-picture"
          preload="auto"
          playsinline
          autoplay
          muted
          loop
          src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/MS-Interior-Grid-2-Audio-Desktop.mp4"
        >
          <source
            :src="'https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/MS-Interior-Grid-2-Audio-Mobile.mp4'"
            media="(max-width: 599px) and (orientation: portrait), (max-width: 899px) and (orientation: landscape)"
          />
          <source
            :src="'https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/MS-Interior-Grid-2-Audio-Desktop.mp4'"
            media="(min-width: 900px) and (orientation: landscape)"
          />
          <source
            :src="'https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/MS-Interior-Grid-2-Audio-Desktop.mp4'"
            media="(min-width: 600px) and (orientation:portrait)"
          />

          <track
            :src="'https://digitalassets.tesla.com/tesla-contents/raw/upload/f_auto,q_auto:best/MS-Interior-Grid-2-Audio-Desktop.en-US.vtt'"
          />
        </video>
      </div>
    </div>
    <div class="tesla-pros-content-container">
      <div class="tesla-pros-picture-container">
        <picture
          class="tesla-pros-picture"
          alt="Prise de vue de l'intérieur du coffre arrière d'une Model&nbsp;S rouge contenant un vélo blanc et un casque"
          :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/h_584,w_1040,c_fit,f_auto,q_auto:best/MS-Interior-Grid-D-Desktop'"
        >
          <source
            :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/h_584,w_1040,c_fit,f_auto,q_auto:best/MS-Interior-Grid-D-Desktop'"
            media="(max-width: 599px) and (orientation: portrait), (max-width: 899px) and (orientation: landscape)"
          />
          <source
            :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/h_584,w_1040,c_fit,f_auto,q_auto:best/MS-Interior-Grid-D-Desktop'"
            media="(min-width: 900px) and (orientation: landscape)"
          />
          <source
            :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/h_584,w_1040,c_fit,f_auto,q_auto:best/MS-Interior-Grid-D-Desktop'"
            media="(min-width: 600px) and (orientation:portrait)"
          />
          <img
            :src="'https://digitalassets.tesla.com/tesla-contents/image/upload/h_584,w_1040,c_fit,f_auto,q_auto:best/MS-Interior-Grid-D-Desktop'"
            :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/h_584,w_1040,c_fit,f_auto,q_auto:best/MS-Interior-Grid-D-Desktop'"
            alt="Prise de vue de l'intérieur du coffre arrière d'une Model S rouge contenant un vélo blanc et un casque"
          />
        </picture>
      </div>
      <div class="tesla-pros-text-content">
        <h3 class="tesla-pros-text-title">De l'espace pour tous vos objets</h3>
        <p>
          Grâce à des coffres avant et arrière ainsi qu'à des sièges rabattables
          à plat, vous pouvez embarquer vos bagages ou votre vélo sans avoir à
          retirer une roue.
        </p>
      </div>
    </div>
  </OnScrollAnim>
</template>

<script lang="ts" setup>
import OnScrollAnim from "./OnScrollAnim.vue";
</script>

<style>
.tesla-pros-content-container {
  @apply flex flex-nowrap flex-row justify-between h-[314px] w-[1120px];
}

.tesla-pros-picture-container {
  @apply w-1/2 overflow-hidden;
}

.tesla-pros-picture {
  @apply object-cover;
}

.tesla-pros-text-content {
  @apply w-[432px] flex flex-col justify-center;
}

.tesla-pros-text-title {
  @apply font-bold pb-[14px];
}
</style>
