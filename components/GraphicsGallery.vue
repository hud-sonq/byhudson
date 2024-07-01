<template>
    <div id="gGalleryContainer">
        <div class="graphics-gallery-items">
            <div class="top-label-area">
                <div class="image-titel"><span>{{ currentImage }}</span></div>
                <div class="close-x">
                    <img src="/closebox.svg" alt="close" class="close-x-itself" @click="emit('closeClicked')"/>
                </div>
            </div>
            <div class="arrow left" @click="photoLeft()">
                <span>[</span>
            </div>
            <div class="arrow right" @click="photoRight()">
                <span>]</span>
            </div>
            <div class="gallery-picz-container">
                <img :src="currentImage" alt="gallery" class="gallery-pic-itself"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['closeClicked']);
const props = defineProps<{
  picz: any[];
}>()

const currentImage = ref(props.picz[0]);

const photoLeft = () => {
    const currentIndex = props.picz.indexOf(currentImage.value);
    if (currentIndex === 0) {
        currentImage.value = props.picz[props.picz.length - 1];
    } else {
        currentImage.value = props.picz[currentIndex - 1];
    }
}

const photoRight = () => {
    const currentIndex = props.picz.indexOf(currentImage.value);
    if (currentIndex === props.picz.length - 1) {
        currentImage.value = props.picz[0];
    } else {
        currentImage.value = props.picz[currentIndex + 1];
    }
}
</script>

<style scoped>

span {
    font-size: 10px;
}

#gGalleryContainer {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    pointer-events: none;
    z-index: 11;
}

.graphics-gallery-items {
    position: absolute;
    width: 166px;
    height: 218px;
    border: 2px solid var(--accent-primary);
    pointer-events: all;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--bg-primary);
    box-shadow: -4px 4px var(--accent-primary);
}

.top-label-area {
    background-color: var(--bg-primary);
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 18px;
    border-bottom: 2px solid var(--accent-primary);
    z-index: 7;
    padding-bottom: 2px;
    user-select: none;
}

.arrow {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    border: 2px solid var(--accent-primary);
    background-color: var(--bg-primary);
    cursor: pointer;
    user-select: none;
}

.right {right: -34px;}

.left {left: -38px;}

.arrow:active {
    background-color: var(--accent-tertiary);
}

.close-x {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 2px;
    right: 2px;
    width: 16px;
    height: 16px;
    cursor: pointer;
}

.gallery-picz-container {
    position: absolute;
    bottom: 0;
    left: 0;
    height: calc(100% - 18px);
    object-fit: cover;
}

.gallery-pic-itself {
    width: calc(100% + 6px);
    height: 100%;
}
</style>