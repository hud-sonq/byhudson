<template>
    <div v-if="!videoLoaded">
        <h4>load...</h4>
    </div>
    <div id="welcomeBoxContainer" ref="wbc">
        <div id="brackets" ref="brackets" class="">
            <div class="bracket tl-bracket"></div>
            <div class="bracket br-bracket"></div>
        </div>
        <div id="cubeVideo" v-if="showCubeVideo">
            <div class="cubes-video-container" ref="cubesVideoContainer">
              <WelcomeVideo ref="cubeVideo" style="z-index: 10" @loaded="engageContent()"/>
            </div>
            <div class="welcome-text-container">
                <div id="wt" ref="wt" style="height: fit-content;"><h4>WELCOME</h4></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {Howl, Howler} from 'howler';
const emits = defineEmits(['sequenceDone']);
const videoLoaded = ref(false);
const showCubeVideo = ref(true);

const cubeVideo = ref<HTMLVideoElement | null>(null);
const wbc = ref<HTMLElement | null>(null);
const cubesVideoContainer = ref<HTMLElement | null>(null);
const wt = ref<HTMLElement | null>(null);
const brackets = ref<HTMLElement | null>(null);

const soundEnabled = ref(localStorage.getItem('soundEnabled') === 'true');

const introSound = new Howl({
  src: ['/intro-minor.mp3']
});
const loopSound = new Howl({
  src: ['/loop-minor.mp3']
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

function engageContent() {
  videoLoaded.value = true;
  setTimeout(() => {
      wbc.value?.classList.add('active');
      playIntro();
  }, 150);
  setTimeout(() => {
      wbc.value?.classList.add('glow');
  }, 500);
  setTimeout(() => {
      wbc.value?.classList.remove('glow');
      wt.value?.classList.add('blink');
      brackets.value?.classList.add('blink');
  }, 1500);
  setTimeout(() => {
      cubesVideoContainer.value?.classList.add('hide');
      wt.value?.classList.add('active');
      brackets.value?.classList.add('active');
  }, 2000);
  setTimeout(() => {
      wt.value?.classList.remove('active');
      brackets.value?.classList.remove('active');
  }, 3400);
  setTimeout(() => {
      showCubeVideo.value = false;
      emits('sequenceDone');
      playLoop();
  }, 4200);
}
</script>

<style scoped>

#welcomeBoxContainer {
  width: var(--user-width);
  height: var(--user-height);
  background-color: var(--bg-primary);
  border: 2px solid var(--accent-primary);
  position: absolute;
  box-shadow: none;
  -webkit-box-shadow: none; 
  -moz-box-shadow: none; 
  transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.4s;
  transform: scale(0);
}

#welcomeBoxContainer.active {
  transform: scale(1);
}

#welcomeBoxContainer.mini {
  height: 300px;
}

#welcomeBoxContainer.glow {
  -webkit-box-shadow:0 0 20px var(--accent-primary); 
  -moz-box-shadow: 0 0 20px var(--accent-primary); 
  box-shadow:0 0 20px var(--accent-primary);
}

.cubes-video-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  object-fit: cover;
}

.welcome-text-container {
  height: 401px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#wt {
  font-size: 1.5rem;
  color: var(--text-primary);
  transition: all cubic-bezier(0.18, 0.82, 0.5, 1) .4s;
  transform: scale(0);
  opacity: 0;
  height: fit-content;
}

#wt.active {
  display: flex;
  opacity: 1;
  transform: scale(1);
}


.hide {
  display: none;
}

#brackets {
  opacity: 0;
  transition: all cubic-bezier(0.18, 0.82, 0.5, 1) .4s;
  width: 100%;
  height: 100%;
  position: absolute;
  transform: scale(.8);
  z-index: -1;
}

#brackets.active {
  opacity: 1;
  transform: scale(1);
}

#brackets.blink {
  animation: bangblink 1s linear;
}

#wt.blink {
  animation: bangblink 1s linear;
}

.tl-bracket {
position: absolute;
border-left: 6px solid var(--accent-primary);
border-top: 6px solid var(--accent-primary);
min-height: 20px;
min-width: 20px;
left: -16px;
top: -16px;
}

.br-bracket {
position: absolute;
border-right: 6px solid var(--accent-primary);
border-bottom: 6px solid var(--accent-primary);
min-height: 20px;
min-width: 20px;
right: -16px;
bottom: -16px;
cursor: pointer;
}
</style>