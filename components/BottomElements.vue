<template>
    <div id="bottomElements">
        <div id="aboveElementsDecoContainer">
            <div class="above-elements-deco">
                <img src="/attempter.svg">
            </div>
        </div>
        <div class="app-widgets-container">
            <div class="widget" @click="$emit('gallClicked')">
                <img class="widget-img-itself" src="/gallNew.svg">
            </div>
            <div class="widget">
                <img class="widget-img-itself" src="/linktree.svg" @click="navigate(`https://linktr.ee/hudsonjq`)">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['gallClicked']);
const navigate = (url: any) => {
  window.open(url, '_blank')
}
</script>

<style scoped>

#bottomElements {
    position: absolute; 
    bottom: 0;
    left: 0;
    width: 100%;
    height: var(--bottomElementsHeight);
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 7;
}

.app-widgets-container {
    position: absolute;
    right: 0;
    height: 100%;
    width: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    gap: 16px;
}

#aboveElementsDecoContainer {
    position: absolute;
    right: 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
}

.above-elements-deco {
    position: absolute;
    bottom: 0;
    width: 128px;
}

.widget {
    height: var(--iconLarge-sq);
    width: var(--iconLarge-sq);
    cursor: pointer;
}

.widget-img-itself{
    height: 100%;
    width: 100%;
}
</style>