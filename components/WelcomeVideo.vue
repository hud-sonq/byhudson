<template>
  <div id="seqTest">
    <video class="video-itself" ref="video" @canplaythrough="handleCanPlayThrough" autoplay muted playsinline>
      <source src="/load.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['loaded']);
const hasEmitted = ref(false);
function handleCanPlayThrough() {
  // emits('loaded');
  if (!hasEmitted.value) {
    emits('loaded');
    hasEmitted.value = true;
  }
}
</script>

<style scoped>
.video-itself {
  width: var(--sauceBox-width);
  height: var(--sauceBox-height);
}
</style>