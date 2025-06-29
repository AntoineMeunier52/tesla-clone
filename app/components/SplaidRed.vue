<template>
  <section class="splaid-container">
    <div class="splaid-picture-container">
      <picture
        class="splaid-picture"
        :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Hero-Desktop-Global'"
      >
        <source
          :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_1800,c_fit,f_auto,q_auto:best/Model-S-Exterior-Hero-Mobile-Global'"
          media="(max-width: 599px) and (orientation: portrait), (max-width: 899px) and (orientation: landscape)"
        />
        <source
          :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Hero-Desktop-Global'"
          media="(min-width: 900px) and (orientation: landscape)"
        />
        <source
          :srcset="'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Hero-Desktop-Global'"
          media="(min-width: 600px) and (orientation:portrait)"
        />
        <img
          class="splaid-image"
          :src="'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Model-S-Exterior-Hero-Desktop-Global'"
          alt="Une Model S Bleu Outremer Métallisé roulant sur l'autoroute"
        />
      </picture>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style></style>
