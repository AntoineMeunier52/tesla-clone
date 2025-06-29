<template>
  <OnScrollAnim
    class="px-[48px] pt-[48px] pb-[64] mx-auto h-[220px] text-[#393c41] flex justify-center bg-black"
  >
    <div class="ludicrous-content-container no-anim">
      <span class="ludicrous-subtitle">Extérieur</span>
      <span class="ludicrous-title">Conçu pour l'efficience</span>
      <a class="ludicrous-button" href="">Véhicule disponibles</a>
    </div>
    <p class="ludicrous-content">
      Avec un coefficient de traînée aérodynamique de seulement 0,208 Cd, le
      plus bas au monde, la Model S est conçue pour la vitesse, l'endurance et
      l'autonomie. Un aérodynamisme amélioré et un châssis plus large assurent
      des performances disponibles en permanence, afin que vous puissiez
      enchainer les courbes plus rapidement et avec plus de confiance.
    </p>
  </OnScrollAnim>
</template>

<script lang="ts" setup></script>

<style>
.ludicrous-content-container {
  @apply flex flex-col text-[17px] leading-[24px] w-[398px] font-InterTight text-white;
}

.ludicrous-subtitle {
  @apply text-[17px] leading-[24px] pt-[16px];
}

.ludicrous-title {
  @apply text-[28px] leading-[36px] pb-[8px] font-bold;
}

.ludicrous-button {
  @apply border-[3px] border-white flex justify-center items-center w-[204px] text-[14px] leading-[34px] rounded-[4px];
  @apply transition-all hover:bg-white hover:text-black;
}

.ludicrous-content {
  @apply py-[16px] text-start w-[660px] text-white;
}
</style>
