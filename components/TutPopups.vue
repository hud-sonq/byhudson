<template>
    <div id="tutPopups" :style="currentPositionStyle">
        <div class="text-content-container">
            <div class="text-with-ok">
                <div class="text-2"><span>{{ currentText }}</span></div>
                <div class="ok-button-container" @click="moveToNextPosition">
                    <div class="ok-button">
                        <span>OK</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const tutTexts = [
    `YO! I'M HUDSON, I DO VISUAL DESIGN.`,
    `I MOSTLY DO WEB DEVELOPMENT, SCI-FI ART, AND MOTION GRAPHICS.`,
    `CHECK OUT MY GRAPHICS HERE!`,
    `OR CHECK THE WEATHER HERE...`,
    `FINALLY, HERE'S MY SOCIALS!`,
];

let currentTextIndex = ref(0);
const currentText = computed(() => tutTexts[currentTextIndex.value]);

const positions = [
    { top: '100px', left: '8px', right: 'auto', bottom: 'auto' },
    { top: '100px', left: '8px', right: 'auto', bottom: 'auto' },
    { top: '64px', left: 'auto', right: '64px', bottom: 'auto' },
    { top: 'auto', left: '64px', right: 'auto', bottom: '64px' },
];

let currentPositionIndex = ref(0);

const currentPositionStyle = computed(() => ({
    ...positions[currentPositionIndex.value],
}));

function moveToNextPosition() {
    currentPositionIndex.value = (currentPositionIndex.value + 1) % positions.length;
    currentTextIndex.value = (currentTextIndex.value + 1) % tutTexts.length;
}

</script>

<style scoped>

#tutPopups {
    position: absolute;
}

.text-content-container {
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.text-with-ok {
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 8px;
    border: 2px solid var(--accent-primary);
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