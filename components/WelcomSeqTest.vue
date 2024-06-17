<template>
  <div id="#seqTest">
    <video ref="videoElement" @canplaythrough="handleCanPlayThrough()" v-if="!isLoading" muted loop>
      <source src="/load.mp4" type="video/mp4" />
    </video>
    <div v-else><span>Loading...</span></div>
  </div>
</template>

<script setup lang="ts">

const isLoading = ref(true);
const videoElement = ref<HTMLVideoElement | null>(null);

function handleCanPlayThrough() {
  isLoading.value = false;
  videoElement.value.play();
}

</script>