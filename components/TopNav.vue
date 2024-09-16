<template>
    <div id="navContainer">
        <div class="some-deco-areas">
            <div class="deco-area left">
                <div class="deco-container expand-fs" @click="$emit('expandClicked'), zoomStore.toggleZoom">
                    <img src="/std/expandFs.svg" class="icon-itself">
                </div>
                <img src="/std/levitate.svg" class="lev">
                <ZoomButtonNew />
            </div>
            <div class="deco-area right">
                <div class="deco-container" @click="$emit('infoClicked')">
                    <img src="/std/info.svg" class="icon-itself">
                </div>
                <SoundButton />
                <LanguageSwitcher />
            </div> 
        </div>
    </div>
</template>

<script setup lang="ts">
import {useZoomStore} from '@/stores/zoomed';
const zoomStore = useZoomStore();
const emits = defineEmits(['expandClicked', 'infoClicked', 'levitateClicked', 'soundClicked']);
</script>

<style scoped>
#navContainer {
    position: absolute;
    left: -2px;
    top: -44px;
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
    margin-right: 4px;
    margin-left: 4px;
}

.left {
    position: absolute;
    left: 0;
    gap: 8px;
    padding-left: 4px;
}

.right {
    position: absolute;
    right: 0;
    padding-right: 4px;
    gap: 6px;
}

.lev {
    display: none;
    height: var(--iconSmall-sq);
    width: var(--iconSmall-sq);
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

@media (max-width: 750px) {
    #navContainer {
        top: auto;
        bottom: -44px;
        border-bottom: 2px solid white;
        border-top: none;
    }
    .expand-fs {
        display: none;
    }
    .lev {
        display: block;
    }
}
</style>
