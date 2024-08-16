<template>
    <div id="bottomElementsDoubleContainer">
        <div class="above-items">
            <div class="above-elements-container">
                <img class="above-element-itself" src="/attempter.svg">
            </div>
        </div>
        <div class="elements-container">
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

#bottomElementsDoubleContainer {
    position: absolute; 
    bottom: 0;
    right: 0;
    width: var(--bottomElementsDoubleContainer-width);
    height: var(--bottomElementsDoubleContainer-height);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    z-index: 7;
}

.above-items {
    position: absolute;
    top: 0;
    right: 0;
    height: fit-content;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.above-elements-container {
    width: var(--bottomAbove-width);
    height: var(--bottomAbove-height);
}

.above-element-itself {
    width: 100%;
    height: 100%;
}

.elements-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 16px;
    width: var(--bottomElementsDoubleContainer-width);
    height: var(--bottomElementsDoubleContainer-height);
}

.element-itself {
    width: var(--bottomElement-height-sq);
    height: var(--bottomElement-height-sq);
}


</style>