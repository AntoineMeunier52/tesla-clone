<template>
  <div
    class="player-video-container"
    :class="visible ? 'opacity-100 z-10' : 'opacity-0 z-0'"
  >
    <video
      ref="videoRef"
      class="mx-auto my-auto"
      preload="auto"
      loop
      playsinline
      autoplay
      muted
      :src-desktop="props.link"
    >
      <source
        :src="props.link"
        media="(min-width: 900px) and (orientation: landscape)"
      />
    </video>
    <button class="play-play-pause" @click="handlePlayPause"></button>
  </div>
</template>

<script setup lang="ts">
const videoRef = ref<HTMLVideoElement | null>(null);

const props = defineProps<{
  link: string | undefined;
  visible: boolean;
}>();

function handlePlayPause() {
  if (videoRef.value?.paused) {
    videoRef.value.play();
  } else {
    videoRef.value?.pause();
  }
}
</script>

<style scoped>
.player-video-container {
  @apply absolute inset-0 transition-opacity duration-700;
}

.player-play-pause {
  @apply w-[40px] h-[40px] bg-red-500;
}
</style>
