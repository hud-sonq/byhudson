<template>
  <div id="seqTest">
    <video class="video-itself" ref="video" @canplaythrough="handleCanPlayThrough" muted playsinline>
      <source src="/load.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['loaded']);
const hasEmitted = ref(false);
const video = ref<HTMLVideoElement | null>(null);

function handleCanPlayThrough() {
  if (!hasEmitted.value) {
    setTimeout(() => {
      video.value?.play();
      emits('loaded');
      hasEmitted.value = true;
    }, 500);
  }
}
</script>

<style scoped>
.video-itself {
  width: var(--sauceBox-width);
  height: var(--sauceBox-height);
}
</style>