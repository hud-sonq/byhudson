<template>
  <div id="gGalleryContainer">
      <div class="graphics-gallery-items">
          <div class="top-label-area">
              <div class="image-titel"><span>{{ currentImage }}</span></div>
              <div class="inspector" @click="handleViewClicked">
                  <img src="/std/zoomIn.svg" alt="inspect" class="icon-itself">
              </div>
              <div class="close-x">
                  <img src="/closebox.svg" alt="close" class="close-x-itself" @click="emit('closeClicked')"/>
              </div>
          </div>
          <div class="arrow left" @click="prevImage" ref="arrowLeft">
              <img src="/std/doubleArrow.svg" style="transform: scaleX(-1)">
          </div>
          <div class="arrow right" @click="nextImage" ref="arrowRight">
            <img src="/std/doubleArrow.svg">
          </div>
          <div class="gallery-picz-container">
              <div v-if="loading" class="loading-icon">Loading...</div>
              <div v-if="!loading">
                <img :src="picz[currentIndex]" @load="onImageLoad" class="gallery-pic-itself"/>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
const arrowLeft = ref<HTMLElement | null>(null);
const arrowRight = ref<HTMLElement | null>(null);
const emit = defineEmits(['closeClicked', 'viewClicked']);
const galleryProps = defineProps<{
  picz: any[];
}>()
const loading = ref(false);
const currentIndex = ref(0);
const currentImage = ref(galleryProps.picz[0]);
const handleViewClicked = () => emit('viewClicked', currentImage.value);
// if currentIndex is at start, hide left arrow
watch(currentIndex, (newIndex) => {
  if (newIndex === 0) {
    arrowLeft.value?.classList.add('hidden');
  } else {
    arrowLeft.value?.classList.remove('hidden');
  }
});
// if currentIndex is at end, hide right arrow
watch(currentIndex, (newIndex) => {
  if (newIndex === galleryProps.picz.length - 1) {
    arrowRight.value?.classList.add('hidden');
  } else {
    arrowRight.value?.classList.remove('hidden');
  }
});

function loadImage(index: number) {
  loading.value = true;
  const img = new Image();
  img.src = galleryProps.picz[index];
  img.onload = () => {
    loading.value = false;
  };
}

function onImageLoad() {
  loading.value = false;
}

function nextImage() {
  if (currentIndex.value < galleryProps.picz.length - 1) {
    currentIndex.value++;
    currentImage.value = galleryProps.picz[currentIndex.value];
    loadImage(currentIndex.value);
  }
}

function prevImage() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
    currentImage.value = galleryProps.picz[currentIndex.value];
    loadImage(currentIndex.value);
  }
}
</script>

<style scoped>
.hidden {
    display: none;
}
span {
    font-size: 10px;
}

.inspector {
    position: absolute;
    right: 22px;
    top: 2px;
    width: 16px;
    height: 16px;
    cursor: pointer;
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
    width: 32px;
    height: 32px;
    padding: 4px;
    border: 2px solid var(--accent-primary);
    background-color: var(--bg-primary);
    cursor: pointer;
    user-select: none;
}

.right {right: -54px;}

.left {left: -58px;}

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
  height: calc(100% - 12px);
  object-fit: cover;
}

.gallery-pic-itself {
  width: calc(100%);
  height: 100%;
}

@media (max-width: 768px) {
  .gallery-pic-itself {
      width: 100%;
  }
}
</style>