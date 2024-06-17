<template>
  <div id="mainBox" ref="mainBox">
      <div class="welcome-box-container" ref="wbc">
          <div class="brackets">
              <div class="bracket tl-bracket" ref="tlBracket"></div>
              <div class="bracket br-bracket" ref="brBracket"></div>
          </div>
          <div id="cubesAndWelcome" v-if="showCubesAndWelcome">
              <div class="cubes-video-container" ref="cubesVideoContainer">
                <div v-if="!videoLoaded" class="loading-icon">Loading...</div>
                <video v-else @canplaythrough="videoLoaded = true" autoplay loop muted class="gif-itself" ref="cubeVideo">
                  <source src="/load.mp4" type="video/mp4">
                </video>
              </div>
              <div class="welcome-text-container">
                  <div id="wt" ref="wt" style="height: fit-content;"><h4>WELCOME</h4></div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
const showCubesAndWelcome = ref(false);
const videoLoaded = ref(false);
const cubeVideo = ref<HTMLVideoElement | null>(null);

const mainBox = ref<HTMLElement | null>(null);
const wbc = ref<HTMLElement | null>(null);
const cubesVideoContainer = ref<HTMLElement | null>(null);
const wt = ref<HTMLElement | null>(null);
const tlBracket = ref<HTMLElement | null>(null);
const brBracket = ref<HTMLElement | null>(null);

function engageContent() {
  console.log('engaging');
  showCubesAndWelcome.value = true;
  setTimeout(() => {
      mainBox.value?.classList.add('active');
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
      showCubesAndWelcome.value = false;
      console.log('engaged');
  }, 4200);
}

onMounted(() => {
  engageContent();
});
</script>

<style scoped>
.welcome-box-container {
  width: 324px;
  height: 405px;
  background-color: var(--bg-primary);
  border: 4px solid var(--accent-primary);
  position: absolute;
  box-shadow: none;
  -webkit-box-shadow: none; 
  -moz-box-shadow: none; 
  transition: all ease-in-out 0.5s;
}

.welcome-box-container.glow {
  -webkit-box-shadow:0 0 20px var(--accent-primary); 
  -moz-box-shadow: 0 0 20px var(--accent-primary); 
  box-shadow:0 0 20px var(--accent-primary);
}

#mainBox {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: scale(0);
  transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.4s;
}

#mainBox.active {
  transform: scale(1);
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

.gif-itself {
  width: 324px;
  height: 405px;
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