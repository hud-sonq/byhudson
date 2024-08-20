<template>
    <div id="bottomDecoAndElements">
        <div class="deco-container">
            <img class="deco-itself" src="/attempter.svg">
        </div>
        <div id="bottomElementsContainer">
            <div class="element" @click="$emit('gallClicked')">
                <img class="element-itself" src="/gallNew.svg">
            </div>
            <div class="element" @click="navigate(`https://linktr.ee/hudsonjq`)">
                <img class="element-itself" src="/linktree.svg">
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
#bottomDecoAndElements {
    position: absolute; 
    bottom: 4px;
    right: 0;
    width: var(--bottomDecoAndElements-width);
    height: var(--bottomDecoAndElements-height);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    z-index: 7;
}

.deco-container {
    position: relative;
    top: 22px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.deco-itself {
    width: 100%;
}

#bottomElementsContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 16px;
    width: var(--bottomElementsContainer-width);
    height: var(--bottomElementsContainer-height);
    margin-right: 6px;
    z-index: 8;
}

.element {
    width: var(--bottomElementIcon-sq);
    height: var(--bottomElementIcon-sq);
}

.element:hover {
    cursor: pointer;
}

.element-itself {
    width: 100%;
    height: 100%;
}
</style>