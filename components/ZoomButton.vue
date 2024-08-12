<template>
  <div id="zoomButton">
      <div class="zoom-button-img-container">
          <img src="/phZoomIn.svg" v-if="!isZoomed" alt="zoom in" class="zoom-button-img-itself" @click="toggleZoom">
          <img src="/phZoomOut.svg" v-else alt="zoom out" class="zoom-button-img-itself" @click="toggleZoom">
      </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isZoomed = ref(false);

const toggleZoom = () => {
  isZoomed.value = !isZoomed.value;
  if (isZoomed.value) {
    document.documentElement.style.setProperty('--sauceBox-width', '486px'); // 324px * 1.5
    document.documentElement.style.setProperty('--sauceBox-height', '607.5px'); // 405px * 1.5
  } else {
    document.documentElement.style.setProperty('--sauceBox-width', '324px');
    document.documentElement.style.setProperty('--sauceBox-height', '405px');
  }
};
</script>
  
<style scoped>
#zoomButton {
  width: 20px;
  height: 20px;
  margin-inline: 4px;      
  cursor: pointer;
  background: none;
}

.zoom-button-img-itself {
  width: 100%;
  height: 100%;
}

@media (max-width: 768px) {
  #zoomButton {
      display: none;
  }
}
</style>
  