<template>
  <OnScrollAnim class="bg-black flex flex-col items-center py-[16px]">
    <div class="tesla-pros-content-container">
      <div class="tesla-pros-text-content">
        <h3 class="tesla-pros-text-title">Des performances continues</h3>
        <p>
          Les jantes et pneus Performance plus larges à l'arrière maintiennent
          le véhicule stable et permettent de transmettre une puissance maximale
          à la route.
        </p>
      </div>
      <div class="tesla-pros-picture-container">
        <picture
          class="tesla-pros-picture"
          alt="Prise de vue intérieure depuis le siège passager de la console montrant deux smartphones en cours de recharge sans fil"
          :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1620,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Grid-A-Desktop-Global'"
        >
          <source
            :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/h_750,w_750,c_fit,f_auto,q_auto:best/Model-S-Exterior-Grid-A-Mobile-Global'"
            media="(max-width: 599px) and (orientation: portrait), (max-width: 899px) and (orientation: landscape)"
          />
          <source
            :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1620,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Grid-A-Desktop-Global'"
            media="(min-width: 900px) and (orientation: landscape)"
          />
          <source
            :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1620,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Grid-A-Desktop-Global'"
            media="(min-width: 600px) and (orientation:portrait)"
          />
          <img
            :src="'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1620,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Grid-A-Desktop-Global'"
            alt="Prise de vue intérieure depuis le siège passager de la console montrant deux smartphones en cours de recharge sans fil"
          />
        </picture>
      </div>
    </div>
    <div class="tesla-pros-content-container">
      <div class="tesla-pros-picture-container">
        <picture
          class="tesla-pros-picture"
          src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1620,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Grid-B-Desktop-Global"
        >
          <source
            :src="'https://digitalassets.tesla.com/tesla-contents/image/upload/h_750,w_750,c_fit,f_auto,q_auto:best/Model-S-Exterior-Grid-B-Mobile-Global'"
            media="(max-width: 599px) and (orientation: portrait), (max-width: 899px) and (orientation: landscape)"
          />
          <source
            :src="'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1620,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Grid-B-Desktop-Global'"
            media="(min-width: 900px) and (orientation: landscape)"
          />
          <source
            :src="'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1620,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Grid-B-Desktop-Global'"
            media="(min-width: 600px) and (orientation:portrait)"
          />

          <img
            :src="'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1620,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Grid-B-Desktop-Global'"
          />
        </picture>
      </div>
      <div class="tesla-pros-text-content">
        <h3 class="tesla-pros-text-title">Aérodynamique optimisée</h3>
        <p>
          Une attention du détail portée sur l'ensemble des lignes extérieures
          fait de la Model S le véhicule de production le plus aérodynamique au
          monde.
        </p>
      </div>
    </div>
    <div class="tesla-pros-content-container">
      <div class="tesla-pros-text-content">
        <h3 class="tesla-pros-text-title">Style élégant</h3>
        <p>
          Une ligne emblématique combinées à d'élégantes proportions
          modernisées.
        </p>
      </div>
      <div class="tesla-pros-picture-container">
        <picture
          class="tesla-pros-picture"
          alt="Prise de vue de l'intérieur du coffre arrière d'une Model&nbsp;S rouge contenant un vélo blanc et un casque"
          :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1620,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Grid-C-Desktop-Global'"
        >
          <source
            :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/h_750,w_750,c_fit,f_auto,q_auto:best/Model-S-Exterior-Grid-C-Mobile-Global'"
            media="(max-width: 599px) and (orientation: portrait), (max-width: 899px) and (orientation: landscape)"
          />
          <source
            :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1620,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Grid-C-Desktop-Global'"
            media="(min-width: 900px) and (orientation: landscape)"
          />
          <source
            :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1620,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Grid-C-Desktop-Global'"
            media="(min-width: 600px) and (orientation:portrait)"
          />
          <img
            :src="'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1620,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Grid-C-Desktop-Global'"
            alt="Prise de vue de l'intérieur du coffre arrière d'une Model S rouge contenant un vélo blanc et un casque"
          />
        </picture>
      </div>
    </div>
  </OnScrollAnim>
  <div class="tesla-pros-spacing"></div>
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

.tesla-pros-spacing {
  @apply h-[68px] bg-black;
}
</style>
