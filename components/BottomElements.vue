<template>
    <div id="bottomElements">
        <div class="aboveElementsDecoContainer">
            <div id="aboveElementsDeco">
                <img class="uiline-itself" src="/longer.svg">
            </div>
        </div>
        <div class="app-widgets">
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
    height: 48px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    z-index: 7;
}

.app-widgets {
    position: absolute;
    right: 0;
    height: 100%;
    width: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: auto;
}

.aboveElementsDecoContainer {
    position: absolute;
    top: -30px;
    right: 0;
    width: 113px;
    height: 32px;
}

#aboveElementsDeco {
    position: absolute;
    top: -30px;
    right: 0;
    max-height: 100%;
    width: 113px;
    max-width: 164px;
}

.widget {
    height: 38px;
    width: 50px;
    cursor: pointer;
}

.widget-img-itself{
    height: 100%;
    width: 100%;
}

.linktree-itself{
    height: 100%;
    width: 100%;
}

.uiline-itself {
    height: 100%;
    width: 100%;
}
</style>