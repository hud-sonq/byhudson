<template>
  <div id="seqTest">
    <video class="video-itself" @canplaythrough="handleCanPlayThrough" autoplay muted playsinline>
      <source src="/load.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const emits = defineEmits(['loaded']);
const hasEmitted = ref(false);

function handleCanPlayThrough() {
  if (!hasEmitted.value) {
    console.log('can play through');
    emits('loaded');
    hasEmitted.value = true;
  }
}
</script>

<style scoped>
.video-itself {
  width: 324px;
  height: 405px;
}
</style>