<template>
    <div id="ppPage">
        <div id="welcomeSequence" ref="welcomeSequence">
            <WelcomeSequence @sequenceDone="showMain()" @begun="playIntro()"/>
        </div>
        <div id="mainBox" class="" ref="mainBox" >
            <MainBox @soundClicked="toggleSound()"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import {Howl, Howler} from 'howler';
let welcomeSequence = ref<HTMLElement | null>(null);
let mainBox = ref<HTMLElement | null>(null);
const soundEnabled = ref(localStorage.getItem('soundEnabled') === 'true');
const introSound = new Howl({
    src: ['/intro-minor.mp3']
});
const loopSound = new Howl({
    src: ['/loop-major.mp3']
});
function playIntro() {
    if (soundEnabled.value) {
    introSound.play();
    }
}
function playLoop() {
    if (soundEnabled.value) {
    loopSound.loop(true);
    loopSound.play();
    }
}
const volume = ref(1); // Default volume is 1 (max)

const toggleSound = () => {
    localStorage.setItem('soundEnabled', soundEnabled.value ? 'false' : 'true');
    volume.value = volume.value === 1 ? 0 : 1;
    Howler.volume(volume.value);
};

function showMain() {
    mainBox.value?.classList.add('show');
    playLoop();
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