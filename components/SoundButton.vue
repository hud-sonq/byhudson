<template>
<div id="soundButton" @click="soundStore.toggleSound">
    <img v-if="soundStore.soundOn" src="/std/soundOn.svg" class="icon-itself">
    <img v-else src="/std/soundOff.svg" class="icon-itself">
</div>
</template>

<script setup lang="ts">
import {useSoundStore} from '@/stores/sound';
const soundStore = useSoundStore();
</script>

<style scoped>
#soundButton {
    width: var(--iconSmall-sq);
    height: var(--iconSmall-sq);     
    cursor: pointer;
}

.icon-itself {
    height: 100%;
    width: 100%;
}
</style>