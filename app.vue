<template>
  <div id="root">
      <div id="startup" v-if="!showMain">
        <EnterBox @soundEnabled="goWithSound" @soundDisabled="goWithoutSound" @smaller="goSmaller" @larger="goLarger"/>
      </div>
      <div id="nxPage" v-if="showMain">
        <LazyNuxtPage />
      </div>
  </div>
</template>

<script setup lang="ts">
let showMain = ref(false);
let soundEnabled = ref(false);

function goWithSound() {
  soundEnabled.value = true;
  // showMain.value = true;
  localStorage.setItem('soundEnabled', 'true');
}

function goWithoutSound() {
  soundEnabled.value = false;
  // showMain.value = true;
  localStorage.setItem('soundEnabled', 'false');
}

function goSmaller() {
  showMain.value = true;
}

function goLarger() {
  document.documentElement.style.setProperty('--user-width', '405px');
  document.documentElement.style.setProperty('--user-height', '505px');
  showMain.value = true;
}
</script>