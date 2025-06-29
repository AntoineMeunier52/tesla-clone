<template>
  <OnScrollAnim
    class="px-[48px] py-[24px] mt-[24px] mb-[40px] mx-auto h-[156px] text-[#393c41] flex justify-center"
  >
    <div class="ludicrous-content-container no-anim">
      <span class="ludicrous-subtitle">Plaid</span>
      <span class="ludicrous-title">Au-delà de Ludicrous</span>
      <a class="ludicrous-button" href="">Véhicule disponibles</a>
    </div>
    <p class="ludicrous-content">
      La Model S Plaid offre l'accélération la plus rapide de tous les véhicules
      en production. Une architecture de batterie revue sur toutes les versions
      de la Model S permet des lancements répétés sans dégradation des
      performances.
    </p>
  </OnScrollAnim>
</template>

<script lang="ts" setup></script>

<style>
.ludicrous-content-container {
  @apply flex flex-col text-[17px] leading-[24px] w-[398px] font-InterTight;
}

.ludicrous-subtitle {
  @apply text-[17px] leading-[24px] pt-[16px];
}

.ludicrous-title {
  @apply text-[28px] leading-[36px] pb-[8px] font-bold;
}

.ludicrous-button {
  @apply border-[3px] border-[#393c41] flex justify-center items-center w-[204px] text-[14px] leading-[34px] rounded-[4px];
  @apply transition-all hover:bg-[#393c41] hover:text-white;
}

.ludicrous-content {
  @apply py-[16px] text-start w-[660px];
}
</style>
