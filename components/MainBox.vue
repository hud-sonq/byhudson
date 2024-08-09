<template>
    <div class="content-box-container" ref="wbc">
        <ContentBox @fsClicked="handleFullScreen()" @soundClicked="$emit('soundClicked')"/>
    </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['soundClicked']);
let wbc = ref<HTMLElement | null>(null);
function handleFullScreen() {
    if (wbc.value) {
        wbc.value.classList.toggle('fullscreen');
    }
}
</script>   

<style scoped>

.content-box-container {
    width: var(--sauceBox-width);
    height: var(--sauceBox-height);
    background-color: var(--bg-primary);
    border: 2px solid var(--accent-primary);
    position: absolute;
    -webkit-box-shadow:0 0 20px var(--accent-primary); 
    -moz-box-shadow: 0 0 20px var(--accent-primary); 
    box-shadow:0 0 20px var(--accent-primary);
    transition: all ease-in-out 0.5s;
}

.content-box-container.fullscreen {
    width: 100%;
    height: 100%;
    border: none;
    box-shadow: none;
}

</style>