<template>
  <div id="#seqTest">
      <video class="video-itself" @canplaythrough="handleCanPlayThrough()" autoplay muted playsinline>
        <source src="/load.mp4" type="video/mp4" />
      </video>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['loaded']);

function handleCanPlayThrough() {
  console.log('can play through');
  emits('loaded');
}
</script>

<style scoped>
.video-itself {
  width: 324px;
  height: 405px;
}
</style>