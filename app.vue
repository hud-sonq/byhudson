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
import { useSoundStore } from '@/stores/sound';
const soundStore = useSoundStore();
const showMain = ref(false);

function goWithSound() {
  soundStore.toggleSound();
  showMain.value = true;
}

function goWithoutSound() {
  showMain.value = true;
}
</script>