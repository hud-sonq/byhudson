<template>
  <div id="zoomButton">
      <div class="zoom-button-img-container">
          <img src="/std/zoomIn.svg" v-if="!isZoomed" alt="zoom in" class="icon-itself" @click="toggleZoom">
          <img src="/std/zoomOut.svg" v-else alt="zoom out" class="icon-itself" @click="toggleZoom">
      </div>
  </div>
</template>

<script setup lang="ts">
const isZoomed = ref(localStorage.getItem('isZoomed') === 'true');

// I WILL REFACTOR THE HORROR BELOW SOON
const toggleZoom = () => {
  isZoomed.value = !isZoomed.value;
  localStorage.setItem('isZoomed', isZoomed.value.toString());
  // if (isZoomed.value) {
  //   document.documentElement.style.setProperty('--sauceBox-width', '486px');
  //   document.documentElement.style.setProperty('--sauceBox-height', '580px');
  //   document.documentElement.style.setProperty('--pfp-sq', '81px');
  //   document.documentElement.style.setProperty('--mailZone-width', '324px');
  //   document.documentElement.style.setProperty('--mailZone-height', '81px');
  //   document.documentElement.style.setProperty('--spanSize', '20px');
  //   document.documentElement.style.setProperty('--iconLarge-sq', '64px');
  //   document.documentElement.style.setProperty('--globe-itself-sq', '145px');
  //   document.documentElement.style.setProperty('--bottomDecoAndElements-width', '195px');
  //   document.documentElement.style.setProperty('--bottomDecoAndElements-height', '117px');
  //   document.documentElement.style.setProperty('--bottomElementsContainer-width', '132px');
  //   document.documentElement.style.setProperty('--bottomElementsContainer-height', '87px');
  //   document.documentElement.style.setProperty('--bottomElementIcon-sq', '60px');

  // } else {
  //   document.documentElement.style.setProperty('--sauceBox-width', '324px');
  //   document.documentElement.style.setProperty('--sauceBox-height', '405px');
  //   document.documentElement.style.setProperty('--pfp-sq', '54px');
  //   document.documentElement.style.setProperty('--mailZone-width', '216px');
  //   document.documentElement.style.setProperty('--mailZone-height', '54px');
  //   document.documentElement.style.setProperty('--spanSize', '13px');
  //   document.documentElement.style.setProperty('--iconLarge-sq', '40px');
  //   document.documentElement.style.setProperty('--globe-itself-sq', '90px');
  //   document.documentElement.style.setProperty('--bottomDecoAndElements-width', '130px');
  //   document.documentElement.style.setProperty('--bottomDecoAndElements-height', '78px');
  //   document.documentElement.style.setProperty('--bottomElementsContainer-width', '88px');
  //   document.documentElement.style.setProperty('--bottomElementsContainer-height', '58px');
  //   document.documentElement.style.setProperty('--bottomElementIcon-sq', '40px');
  // }
};

watchEffect(() => {
  localStorage.setItem('isZoomed', isZoomed.value.toString());
});
</script>
  
<style scoped>
#zoomButton {
  width: var(--iconSmall-sq);
  height: var(--iconSmall-sq);     
  cursor: pointer;
  background: none;
  padding-right: 6px;
}

.icon-itself {
  width: 100%;
  height: 100%;
}

/* @media (max-width: 1440px) {
  #zoomButton {
      display: none;
  }
} */
</style>
  