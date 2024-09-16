<template>
  <div id="tutPopups" :class="{ zoomed: zoomStore.isZoomed, [`position-${currentPositionIndex}`]: true }" v-if="!tutComplete">
    <div class="text-content-container">
      <div class="text-with-ok">
        <div class="arrow-container" :class="arrowStyle" ref="arrowContainer">
          <img src="/tut-arrow.svg" alt="arrow">
        </div>
        <div class="close-x">
          <img src="/closebox.svg" alt="close" class="close-x-itself" @click="emitCloseTut" />
        </div>
        <div class="text-2">
          <span>{{ currentText }}</span>
        </div>
        <div class="ok-button-container" @click="nextText">
          <div class="ok-button">
              <span>{{ okText }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useZoomStore } from '@/stores/zoomed';
import { useI18n } from 'vue-i18n';

const zoomStore = useZoomStore();
const emits = defineEmits(['closeTut', 'nextText']);
const tutComplete = ref(false);
const arrowContainer = ref<HTMLElement | null>(null);
const { t } = useI18n();  // Access to i18n

const tutTextsLength = 4;  // Length of tutorial steps
const currentTextIndex = ref(0);
const currentPositionIndex = ref(0);

// Get the current tutorial text
const currentText = computed(() => t(`tutTexts.${currentTextIndex.value}`));

// Determine if it's the last step and display the correct button text ("NEXT" or "FINISH")
const okText = computed(() => {
  return currentTextIndex.value === tutTextsLength - 1 ? t('finish') : t('next');
});

// Emit close event
const emitCloseTut = () => emits('closeTut');

// Determine the style of the arrow based on the current position
const arrowStyle = computed(() => {
  return currentPositionIndex.value < 3 ? 'tleft' : 'bright';
});

// Handle moving to the next text
function nextText() {
  emits('nextText');
  if (currentTextIndex.value === tutTextsLength - 1) {
    tutComplete.value = true;  // Tutorial is complete
  } else {
    currentPositionIndex.value = (currentPositionIndex.value + 1) % 4;  // Cycle through positions
    currentTextIndex.value = (currentTextIndex.value + 1) % tutTextsLength;  // Cycle through texts
  }
}
</script>

<style scoped>
/* Your existing styles */
</style>


<style scoped>
#tutPopups {
  position: absolute;
  z-index: 9;
  width: var(--tutPopups-width);
  min-width: var(--tutPopups-width);
  transition: all 0.3s ease;
}

.text-content-container {
  width: 100%;
  height: 100%;
  z-index: 8;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: var(--bg-primary);
}

.text-with-ok {
  width: 100%;
  padding-top: 18px;
  border: 2px solid var(--accent-primary);
  animation: slideUpDown .8s infinite ease-in-out;
  background-color: var(--bg-primary);
}

.arrow-container {
  position: absolute;
  width: 16px;
  height: 16px;
}

.tleft {
  transform: rotate(0deg);
  top: -16px;
  left: -2px;
}

.bright {
  transform: rotate(180deg);
  bottom: -16px;
  right: -2px;
}

.zoomed.position-0 { top: 125px; left: 10px; }
.zoomed.position-1 { top: 115px; left: 10px; }
.zoomed.position-2 { top: 115px; right: 86px; }
.zoomed.position-3 { bottom: 115px; right: 10px; }

.position-0 { top: 80px; left: 8px; }
.position-1 { top: 80px; left: 8px; }
.position-2 { top: 80px; right: 24px; }
.position-3 { bottom: 90px; right: 8px; }

@keyframes slideUpDown {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(5px);
  }
}

.close-x {
  position: absolute;
  top: 0;
  width: 100%;
  height: 16px;
  padding-top: 2px;
  padding-bottom: 2px;
}

.close-x-itself {
  width: 16px;
  height: 16px;
  position: absolute;
  right: 2px;
  cursor: pointer;
}

.ok-button-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
}

.ok-button {
  width: 84px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 2px solid var(--accent-primary);
}

.ok-button:hover {
  background-color: var(--accent-tertiary);
}
</style>
