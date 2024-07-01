<template>
    <div id="tutPopups" :style="currentPositionStyle" v-if="!tutComplete">
        <div class="text-content-container">
            <div class="text-with-ok">
                <div class="close-x">
                    <img src="/closebox.svg" alt="close" class="close-x-itself" @click="emit('closeTut')"/>
                </div>
                <div class="text-2"><span>{{ currentText }}</span></div>
                <div class="ok-button-container" @click="moveToNextPosition">
                    <div class="ok-button">
                        <span>{{ okText }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const emit = defineEmits(['closeTut']);

const tutComplete = ref(false);

const tutTexts = [
    `YO! I'M HUDSON, I DO STUFF...`,
    `WEB DEV, SCI-FI ART, MOTION GRAPHICS...`,
    `CONTACT ME FOR BUSINESS HERE!`,
    `CHECK OUT MY GRAPHICS HERE!`,
    `OR CHECK THE WEATHER HERE...`,
    `AND HERE'S MY SOCIALS!`,
];

let currentTextIndex = ref(0);

const currentText = computed(() => tutTexts[currentTextIndex.value]);
const okText = computed(() => currentTextIndex.value === tutTexts.length - 1 ? 'FINISH' : 'NEXT');
const positions = [
    { top: '80px', left: '8px', right: 'auto', bottom: 'auto' },
    { top: '80px', left: '8px', right: 'auto', bottom: 'auto' },
    { top: '80px', left: 'auto', right: '24px', bottom: 'auto' },
    { top: 'auto', left: 'auto', right: '8px', bottom: '90px' },
    { top: 'auto', left: 'auto', right: '24px', bottom: '90px' },
    { top: '80px', left: 'auto', right: '8px', bottom: 'auto' },
];
let currentPositionIndex = ref(0);

const currentPositionStyle = computed(() => ({
    ...positions[currentPositionIndex.value],
}));

function moveToNextPosition() {
    if (currentTextIndex.value === tutTexts.length - 1) {
        tutComplete.value = true;
    } else {
        currentPositionIndex.value = (currentPositionIndex.value + 1) % positions.length;
        currentTextIndex.value = (currentTextIndex.value + 1) % tutTexts.length;
    }
}
</script>

<style scoped>

#tutPopups {
    position: absolute;
    z-index: 9;
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
    width: 200px;
    padding-top: 18px;
    border: 2px solid var(--accent-primary);
    animation: slideUpDown .8s infinite ease-in-out;
    background-color: var(--bg-primary);
}

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
    width: 64px;
    height: 20px;
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