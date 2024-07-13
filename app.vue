<template>
  <div id="startup">
    <EnterBox @siteEntered="showMain = !showMain" />
  </div>
  <div id="nxPage" v-if="showMain">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
let showMain = ref(false);
</script>