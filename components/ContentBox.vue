<template>
    <div id="contentBoxBoi">
        <TopElements />
        <TutPopups v-if="showTutorial" @closeTut="showTutorial = !showTutorial"/>
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

.reveal-enter-active,
.reveal-leave-active {
    animation: reveal 50ms linear;
}

.reveal-enter-from,
.reveal-leave-to {
    animation: reveal 50ms linear reverse;
}


</style>