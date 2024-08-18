<template>
    <div id="gGalleryContainer">
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
</style>