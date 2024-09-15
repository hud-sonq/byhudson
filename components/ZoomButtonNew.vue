<template>
    <div id="zoomButton">
        <div class="zoom-button-img-container">
            <img src="/std/zoomIn.svg" v-if="!zoomStore.isZoomed" alt="zoom in" class="icon-itself" @click="zoomStore.toggleZoom"/>
            <img src="/std/zoomOut.svg" v-else alt="zoom out" class="icon-itself" @click="zoomStore.toggleZoom"/>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import {useZoomStore} from '@/stores/zoomed';
const zoomStore = useZoomStore();
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

@media (max-width: 750px) {
    #zoomButton {
        display: none;
    }
}
</style>
  