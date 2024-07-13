<template>
    <div id="ppPage">
        <div id="welcomeSequence" ref="welcomeSequence" v-if="siteEntered">
            <WelcomeSequence @sequenceDone="showMain()"/>
        </div>
        <div id="mainBox" class="" ref="mainBox" >
            <MainBox />
        </div>
    </div>
</template>

<script setup lang="ts">
let welcomeSequence = ref<HTMLElement | null>(null);
let mainBox = ref<HTMLElement | null>(null);
let siteEntered = ref(false);
function showMain() {
    mainBox.value?.classList.add('show');
}
</script>

<style scoped>
#mainBox {
    opacity: 0;
    transition: opacity ease-in-out .4s;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
}

#mainBox.show {
    opacity: 1;
    pointer-events: all;
}

#welcomeSequence {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>