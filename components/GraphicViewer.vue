<template>
    <div id="graphicViewer">
        <div class="close-area">
            <img src="/closebox.svg" alt="close" class="close-x-itself" @click="$emit('closeClicked')"/>
        </div>
        <div class="graphic-img-container">
            <img :src="bigGraphicImg.src" :alt="bigGraphicImg.alt" class="graphic-itself">
        </div>
    </div>
</template>

<script setup lang="ts">
const bigGraphicImg = defineProps<{
    src: string;
    alt: string;
}>();
</script>

<style scoped>
#graphicViewer {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 12;
}

.graphic-img-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.graphic-itself {
    min-width: 100%;
    min-height: 100%;
}

.close-area {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    z-index: 13;
}

.close-x-itself {
    position: absolute;
    top: 0;
    right: 0;
    width: 28px;
    height: 28px;
    background-color: black;
    padding: 2px;
    border-left: 2px solid white;
    border-bottom: 2px solid white;
}

</style>