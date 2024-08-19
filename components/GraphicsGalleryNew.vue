<template>
    <div id="gGalleryContainer">
        <div v-if="loading" class="loading-icon">Loading...</div>
            <!-- Image display -->
            <div v-if="!loading" class="gallery">
                <img
                    :src="picz[currentIndex]"
                    :alt="`Image ${currentIndex + 1}`"
                    @load="onImageLoad"
                />
                <button @click="photoLeft">[</button>
                <button @click="photoRight">]</button>
            </div>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['closeClicked']);
const props = defineProps<{
  picz: any[];
}>()
const loading = ref(false);
const currentImage = ref(props.picz[0]);
const currentIndex = ref(0);

function loadImage(index: number) {
  loading.value = true;
  const img = new Image();
  img.src = props.picz[index];
  img.onload = () => {
    loading.value = false;
  };
}

function onImageLoad() {
  // Ensure loading is hidden when the image is fully loaded
  loading.value = false;
}

function nextImage() {
  if (currentIndex.value < props.picz.length - 1) {
    currentIndex.value++;
    loadImage(currentIndex.value);
  }
}

function prevImage() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
    loadImage(currentIndex.value);
  }
}

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
    z-index: 15;
}
</style>