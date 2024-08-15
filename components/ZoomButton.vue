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

const isZoomed = ref(localStorage.getItem('isZoomed') === 'true');

const toggleZoom = () => {
  isZoomed.value = !isZoomed.value;
  localStorage.setItem('isZoomed', isZoomed.value.toString());
  if (isZoomed.value) {
    document.documentElement.style.setProperty('--sauceBox-width', '486px');
    document.documentElement.style.setProperty('--sauceBox-height', '580px');
    document.documentElement.style.setProperty('--pfp-sq', '81px');
    document.documentElement.style.setProperty('--mailZone-width', '324px');
    document.documentElement.style.setProperty('--mailZone-height', '81px');
    document.documentElement.style.setProperty('--spanSize', '20px');
    document.documentElement.style.setProperty('--iconLarge-sq', '50px');
  } else {
    document.documentElement.style.setProperty('--sauceBox-width', '324px');
    document.documentElement.style.setProperty('--sauceBox-height', '405px');
    document.documentElement.style.setProperty('--pfp-sq', '54px');
    document.documentElement.style.setProperty('--mailZone-width', '216px');
    document.documentElement.style.setProperty('--mailZone-height', '54px');
    document.documentElement.style.setProperty('--spanSize', '13px');
    document.documentElement.style.setProperty('--iconLarge-sq', '40px');
  }
};

watchEffect(() => {
  localStorage.setItem('isZoomed', isZoomed.value.toString());
});
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

/* @media (max-width: 1440px) {
  #zoomButton {
      display: none;
  }
} */
</style>
  