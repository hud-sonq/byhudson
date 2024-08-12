<template>
    <div id="ppPage">
        <div id="welcomeSequence" ref="welcomeSequence">
            <WelcomeSequence @sequenceDone="showMain()" @begun="playIntro()"/>
        </div>
        <div id="mainBox" class="" ref="mainBox" >
            <MainBox @soundClicked="toggleSound()" @nextTutText="playAClickSound()"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import {Howl, Howler} from 'howler';

const clickSounds = ref<Howl[]>([]);
clickSounds.value = [
    new Howl({ src: ['/click1.mp3'] }),
    new Howl({ src: ['/click2.mp3'] }),
];

const playAClickSound = () => {
    if (soundEnabled.value === true) {
        const randomIndex = Math.floor(Math.random() * clickSounds.value.length);
        clickSounds.value[randomIndex].play();
    }
};

let welcomeSequence = ref<HTMLElement | null>(null);
let mainBox = ref<HTMLElement | null>(null);
const soundEnabled = ref(localStorage.getItem('soundEnabled') === 'true');

const introSound = new Howl({
    src: ['/intro-minor.mp3'],
    volume: 1
});
const loopSound = new Howl({
    src: ['/loop-major.mp3'],
    volume: 1
});

function playIntro() {
    Howler.mute(!soundEnabled.value);
    introSound.play();
}
function playLoop() {
    Howler.mute(!soundEnabled.value);
    loopSound.loop(true);
    loopSound.play();
}

const toggleSound = () => {
    soundEnabled.value = !soundEnabled.value;
    localStorage.setItem('soundEnabled', soundEnabled.value.toString());
    Howler.mute(!soundEnabled.value);
};

watch(soundEnabled, (newValue) => {
    Howler.mute(!newValue);
});

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