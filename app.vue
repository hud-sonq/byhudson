<template>
  <div id="root">
      <div id="startup" v-if="!showMain">
        <EnterBox @soundEnabled="goWithSound" @soundDisabled="goWithoutSound"/>
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
  showMain.value = true;
  localStorage.setItem('soundEnabled', 'true');
}

function goWithoutSound() {
  soundEnabled.value = false;
  showMain.value = true;
  localStorage.setItem('soundEnabled', 'false');
}
</script>