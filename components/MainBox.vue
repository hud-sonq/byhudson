<template>
    <div class="content-box-container" ref="wbc">
        <TheEmphasisBehind :isWelcome="false" :isHome="true"/>
        <ContentBox @fsClicked="handleFullScreen()" @soundClicked="$emit('soundClicked')" @nextTutText="$emit('nextTutText')"/>
    </div>
</template>

<script setup lang="ts">
import {useZoomStore} from '@/stores/zoomed';
const zoomStore = useZoomStore();
const emits = defineEmits(['soundClicked', 'nextTutText']);
let wbc = ref<HTMLElement | null>(null);
function handleFullScreen() {
    if (!zoomStore.isZoomed) {
        zoomStore.toggleZoom();
    }
    if (wbc.value) {
        wbc.value.classList.toggle('fullscreen');
    }
}
</script>   

<style scoped>
.content-box-container {
    width: var(--sauceBox-width);
    height: var(--sauceBox-height);
    background-color: var(--bg-primary);
    border: 2px solid var(--accent-primary);
    position: absolute;
    -webkit-box-shadow:0 0 20px var(--accent-primary); 
    -moz-box-shadow: 0 0 20px var(--accent-primary); 
    box-shadow:0 0 20px var(--accent-primary);
    transition: all ease-in-out 0.5s;
}

.content-box-container.fullscreen {
    width: 100%;
    height: 100%;
    border: none;
    box-shadow: none;
}
</style>