<template>
  <header class="top-bar-container">
    <h1 class="top-bar-logo-container">
      <a class="top-bar-logo-link" href="https://www.tesla.com/"
        ><SvgoLogo class="top-bar-logo"
      /></a>
    </h1>
    <ol class="top-bar-center-container">
      <li class="top-bar-center-elem-center">
        <a class="top-bar-center-elem" href="notfound"><span>Véhicule</span></a>
      </li>
      <li class="top-bar-center-elem-center">
        <a class="top-bar-center-elem" href="/notfound"><span>Énergie</span></a>
      </li>
      <li class="top-bar-center-elem-center">
        <a class="top-bar-center-elem" href="/notfound"
          ><span>Recharge</span></a
        >
      </li>
      <li class="top-bar-center-elem-center">
        <a class="top-bar-center-elem" href="/notfound"
          ><span>Découvrir</span></a
        >
      </li>
      <li class="top-bar-center-elem-center">
        <a class="top-bar-center-elem" href="/notfound"><span>Shop</span></a>
      </li>
    </ol>
    <ol class="top-bar-end-container">
      <li class="top-bar-end-elem-container">
        <a class="top-bar-end-elem" href="/notfound">
          <SvgoQuestionMark class="top-bar-icon" />
        </a>
      </li>
      <li class="top-bar-end-elem-container">
        <a class="top-bar-end-elem" href="/notfound">
          <SvgoWorld class="top-bar-icon" />
        </a>
      </li>
      <li class="top-bar-end-elem-container">
        <a class="top-bar-end-elem top-bar-extra-margin" href="/notfound">
          <SvgoPeople class="top-bar-icon" />
        </a>
      </li>
    </ol>
  </header>
  <main class="main-content">
    <slot></slot>
  </main>
  <footer class="footer-container">
    <ol class="footer-container">
      <li class="footer-elem"><span>Meunco @ 2025</span></li>
      <li class="footer-elem"><a href="/notfound">Mentions légales</a></li>
      <li class="footer-elem"><a href="/notfound">Contact</a></li>
      <li class="footer-elem"><a href="/notfound">Actualités</a></li>
      <li class="footer-elem">
        <a href="/notfound">Recevoir nos actualités</a>
      </li>
      <li><a href="">Localisations</a></li>
    </ol>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
.top-bar-container {
  @apply flex flex-row w-full justify-between h-[56px] absolute select-none z-10;
}

.top-bar-logo-container {
  @apply h-[56px] pl-[32px] flex items-center;
}

.top-bar-logo-link {
  @apply px-[16px] cursor-pointer;
}

.top-bar-logo {
  @apply text-[120px] leading-[48px] m-0;
}

.top-bar-center-container {
  @apply flex flex-row items-center;
}

.top-bar-center-elem-container {
  @apply font-Roboto;
}

.top-bar-center-elem {
  @apply px-[16px] text-[14px] font-normal;
}

.top-bar-end-container {
  @apply pr-[32px] flex flex-row items-center;
}

.top-bar-end-elem-container {
  @apply text-[24px] flex items-center justify-center;
}

.top-bar-end-elem {
  @apply h-[32px] w-[32px] mr-[4px] flex items-center justify-center;
}

.top-bar-icon {
  @apply m-0;
}

.top-bar-extra-margin {
  @apply mr-[16px];
}

.footer-container {
  @apply flex flex-row w-full h-[70px] justify-center items-center text-[12px] bg-black text-white;
}

.footer-elem {
  @apply mr-[14px];
}

.main-content {
  @apply text-white text-[14px] leading-[20px] font-Roboto font-thin;
}
</style>
