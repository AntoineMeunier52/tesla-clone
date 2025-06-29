<template>
  <div
    class="player-video-container"
    :class="visible ? 'opacity-100 z-10' : 'opacity-0 z-0'"
  >
    <div class="player-video-wrapper">
      <video
        ref="videoRef"
        class="w-full h-full object-cover mx-auto"
        preload="auto"
        playsinline
        autoplay
        muted
        :src="props.link"
      >
        <source
          :src="props.link"
          media="(min-width: 900px) and (orientation: landscape)"
        />
      </video>
      <button class="player-play-pause-container" @click="handlePlayPause">
        <SvgoPlay class="player-play-pause" v-if="inPause" />
        <SvgoPause class="player-play-pause" v-else />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SvgoPlay } from "#components";

const videoRef = ref<HTMLVideoElement | null>(null);
const inPause = ref(false);

const props = defineProps<{
  link: string | undefined;
  visible: boolean;
}>();

const emit = defineEmits(["nextVideo"]);

onMounted(() => {
  if (videoRef.value) {
    videoRef.value.addEventListener("ended", handleVideoEnd);
  }
});

onBeforeUnmount(() => {
  if (videoRef.value) {
    videoRef.value.removeEventListener("ended", handleVideoEnd);
  }
});

watch(
  () => props.visible,
  () => {
    if (props.visible && videoRef.value) {
      videoRef.value.currentTime = 0;
      videoRef.value?.play();
    }
  }
);

function handlePlayPause() {
  if (videoRef.value?.paused) {
    videoRef.value.play();
  } else {
    videoRef.value?.pause();
  }
  inPause.value = !inPause.value;
}

function handleVideoEnd() {
  emit("nextVideo", props.visible);
}
</script>

<style scoped>
.player-video-container {
  @apply absolute flex inset-0 transition-opacity duration-1000 bottom-0 left-0 right-0 top-0 w-full h-full;
}

.player-video-wrapper {
  @apply absolute h-full w-full max-w-[1440px] top-1/2 -translate-y-1/2;
}

.player-play-pause-container {
  @apply absolute w-[40px] h-[40px] bg-[#808080a6] bottom-[32px] left-[80px] rounded-[4px] flex justify-center items-center;
}

.player-play-pause {
  @apply size-[20px];
}
</style>
