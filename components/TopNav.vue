<template>
    <div id="navContainer">
        <div class="nav-split">
            <div class="deco-area">
                <div class="deco-container" @click="$emit('infoClicked')">
                    <img src="/info.svg" class="info-itself">
                </div>
                <div class="deco-container" @click="toggleSound">
                    <img v-if="soundEnabled" src="/sound-on.svg" class="sound-itself">
                    <img v-else src="/sound-off.svg" class="sound-itself">
                </div>
            </div>
            <div class="deco-area">
                <div class="lev">
                    <img src="/levitate.svg" class="levitate-itself">
                </div>
            </div>
            <div class="deco-area">
                <div class="btn-expand-container" @click="$emit('expandClicked')">
                    <img src="/expandFs.svg" class="btn-expand-itself">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const emits = defineEmits(['expandClicked', 'infoClicked', 'levitateClicked', 'soundClicked']);
const soundEnabled = ref(localStorage.getItem('soundEnabled') === 'true');

function toggleSound() {
    soundEnabled.value = !soundEnabled.value;
    localStorage.setItem('soundEnabled', soundEnabled.value.toString());
    emits('soundClicked', soundEnabled.value);
}

// Watch for changes in soundEnabled and update the local storage
watch(soundEnabled, (newValue) => {
    localStorage.setItem('soundEnabled', newValue.toString());
});
</script>

<style scoped>
#navContainer {
    position: absolute;
    top: -24px;
    left: -6px;
    width: 100%;
    height: 20px;
    margin-inline: 4px;
    border: 2px solid white;
    background-color: var(--bg-primary);
}

.nav-split {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
}

.deco-area {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-right: 2px;
    margin-left: 2px;
}

.btn-expand-container {
    height: 16px;
    width: 16px;
    cursor: pointer;
}

.btn-expand-itself {
    height: 100%;
    width: 100%;
}

.lev {
    height: 21px;
    width: 20px;
}

.levitate-itself {
    height: 21px;
    width: 16px;
}

.deco-container {
    cursor: pointer;
    height: 22px;
    width: 20px;
}

.info-itself {
    height: 23px;
    width: 23px;
}

.sound-itself {
    height: 23px;
    width: 20px;
}

</style>
