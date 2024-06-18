<template>
    <div v-if="!videoLoaded">
        <h1>load</h1>
    </div>
    <div id="welcomeBoxContainer" ref="wbc">
        <div class="brackets">
            <div class="bracket tl-bracket" ref="tlBracket"></div>
            <div class="bracket br-bracket" ref="brBracket"></div>
        </div>
        <div id="cubeVideo" v-if="showCubeVideo">
            <div class="cubes-video-container" ref="cubesVideoContainer">
              <WelcomeVideo ref="cubeVideo" style="z-index: 3" @loaded="engageContent()"/>
            </div>
            <div class="welcome-text-container">
                <div id="wt" ref="wt" style="height: fit-content;"><h4>WELCOME</h4></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['sequenceDone']);

const videoLoaded = ref(false);
const showCubeVideo = ref(true);

const cubeVideo = ref<HTMLVideoElement | null>(null);
const wbc = ref<HTMLElement | null>(null);
const cubesVideoContainer = ref<HTMLElement | null>(null);
const wt = ref<HTMLElement | null>(null);
const tlBracket = ref<HTMLElement | null>(null);
const brBracket = ref<HTMLElement | null>(null);

function engageContent() {
  videoLoaded.value = true;
  console.log('engaging');
  setTimeout(() => {
      wbc.value?.classList.add('active');
  }, 150);
  setTimeout(() => {
      wbc.value?.classList.add('glow');
      tlBracket.value?.classList.add('active');
      brBracket.value?.classList.add('active');
  }, 400);
  setTimeout(() => {
      wbc.value?.classList.remove('glow');
      tlBracket.value?.classList.add('blink');
      brBracket.value?.classList.add('blink');
      wt.value?.classList.add('blink');
  }, 1500);
  setTimeout(() => {
      cubesVideoContainer.value?.classList.add('hide');
      wt.value?.classList.add('active');
  }, 2000);
  setTimeout(() => {
      wt.value?.classList.remove('active');
      tlBracket.value?.classList.remove('active');
  }, 3400);
  setTimeout(() => {
      showCubeVideo.value = false;
      console.log('engaged');
      emits('sequenceDone');
  }, 4200);
}
</script>

<style scoped>

#welcomeBoxContainer {
  width: 324px;
  height: 405px;
  background-color: var(--bg-primary);
  border: 4px solid var(--accent-primary);
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

.bracket {
  opacity: 0;
  transition: all cubic-bezier(0.18, 0.82, 0.5, 1) .4s;
}

.bracket.active {
  opacity: 1;
}

.bracket.blink {
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