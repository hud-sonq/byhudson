<template>
    <div id="contentBoxBoi">
        <TopNav @expandClicked="handleExpandClicked" @infoClicked="handleInfoClicked" @soundClicked="$emit('soundClicked')"/>
        <div ref="thinNavRoot" id="thinNavRoot" v-if="inFullscreen">
            <TopNavThin @expandClicked="handleExpandClicked" @infoClicked="handleInfoClicked"/>
        </div>
        <TopElements />
        <MidMail />
        <Transition name="reveal">
            <TutPopups v-if="showTutorial" @closeTut="showTutorial = !showTutorial"/>
        </Transition>
        <GlobeDeco />
        <BottomElements @gallClicked="showGallery = !showGallery"/>
        <Transition name="reveal">
            <GraphicsGallery v-if="showGallery" @closeClicked="showGallery = !showGallery" v-bind="props"/>
        </Transition>
        <Transition name="reveal">
            <div id="infoBoxRoot" v-if="showInfo">
                <InfoBox @closeInfo="handleInfoClicked"/>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
const showGallery = ref(false);
const showTutorial = ref(true);
const inFullscreen = ref(false);
const showInfo = ref(false);
const thinNavRoot = ref<HTMLElement | null>(null);
const emits = defineEmits(['fsClicked', 'soundClicked']);
function handleExpandClicked() {
    inFullscreen.value = !inFullscreen.value;
    emits('fsClicked');
    setTimeout(() => {
        thinNavRoot.value?.classList.toggle('active');
    }, 800);
}
function handleInfoClicked() {
    showInfo.value = !showInfo.value;
}

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
    top: 0;
    border-right: 6px solid var(--accent-primary);
    border-top: 6px solid var(--accent-primary);
    min-height: 20px;
    min-width: 20px;
    right: -16px;
    top: -16px;
    cursor: pointer;
}

#thinNavRoot {
    opacity: 0;
    position: absolute;
    top: -100vh;
    transition: top .4s cubic-bezier(0.18, 0.82, 0.5, 1);
    width: 100%;
    height: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 6;
}

#thinNavRoot.active {
    top: 0;
    opacity: 1;
}

#infoBoxRoot {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 6;
}
</style>