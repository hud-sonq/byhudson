<template>
    <div id="contentBoxBoi">
        <div class="centered-option"><MidMail /></div>
        <div class="expand-bracket">
            <div class="bracket tr-bracket" ref="trBracket" @click="$emit('fsClicked')"></div>
        </div>
        <TopElements />
        <Transition name="reveal">
            <TutPopups v-if="showTutorial" @closeTut="showTutorial = !showTutorial"/>
        </Transition>
        <GlobeDeco />
        <BottomElements @gallClicked="showGallery = !showGallery"/>
        <Transition name="reveal">
            <GraphicsGallery v-if="showGallery" @closeClicked="showGallery = !showGallery" v-bind="props"/>
        </Transition>
    </div>
</template>

<script setup lang="ts">
const showGallery = ref(false);
const showTutorial = ref(true);
const emits = defineEmits(['fsClicked']);
const props = {
    picz: [
        '/GRAVITRON_1.png', 
        '/GRAVITRON_2.png', 
        '/QUICKVIEW_1.png', 
        '/QUICKVIEW_2.png', 
        '/RESULTS_1.png', 
        '/RESULTS-2.png', 
        '/SPEEDWAY_1.png', 
        '/SPEEDWAY_2.png', 
        '/TESTING_1.png', 
        '/TESTING_2.png',
    ]
}
</script>

<style scoped>
#contentBoxBoi {
    position: absolute;
    width: 100%;
    height: 100%;
}

.centered-option {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
}

.reveal-enter-active,
.reveal-leave-active {
    animation: reveal 123ms linear;
}

.reveal-enter-from,
.reveal-leave-to {
    animation: reveal 123ms linear reverse;
}

.tr-bracket {
    position: absolute;
    border-right: 6px solid var(--accent-primary);
    border-top: 6px solid var(--accent-primary);
    min-height: 20px;
    min-width: 20px;
    right: -16px;
    top: -16px;
    cursor: pointer;
}
</style>