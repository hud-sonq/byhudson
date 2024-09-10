<template>
    <div id="navContainer">
        <div class="some-deco-areas">
            <div class="deco-area left">
                <div class="deco-container" @click="$emit('infoClicked')">
                    <img src="/std/info.svg" class="icon-itself">
                </div>
                <SoundButton />
            </div>
            <div class="deco-area middle">
                <div class="lev">
                    <img src="/std/levitate.svg" class="icon-itself">
                </div>
            </div>
            <div class="deco-area right">
                <ZoomButtonNew />
                <div class="deco-container" @click="$emit('expandClicked'), zoomStore.toggleZoom">
                    <img src="/std/expandFs.svg" class="icon-itself">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {useZoomStore} from '@/stores/zoomed';
import {useSoundStore} from '@/stores/sound';
const zoomStore = useZoomStore();
const soundStore = useSoundStore();
const emits = defineEmits(['expandClicked', 'infoClicked', 'levitateClicked', 'soundClicked']);
</script>

<style scoped>
#navContainer {
    position: absolute;
    left: -2px;
    top: -32px;
    width: var(--topNav-width);
    height: var(--topNav-height);
    border-left: 2px solid white;
    border-right: 2px solid white;
    border-top: 2px solid white;
    padding-block: 2px;
    background-color: var(--bg-primary);
}

.some-deco-areas {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}

.deco-area {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-right: 2px;
    margin-left: 2px;
}

.left {
    position: absolute;
    left: 0;
}

.right {
    position: absolute;
    right: 0;
    padding-right: 4px;
}

.lev {
    height: 21px;
    width: 20px;
}

.deco-container {
    cursor: pointer;
    width: var(--iconSmall-sq);
    height: var(--iconSmall-sq);
}

.icon-itself {
    height: 100%;
    width: 100%;
}
</style>
