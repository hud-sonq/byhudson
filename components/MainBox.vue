<template>
    <div class="content-box-container" ref="wbc">
        <ContentBox @fsClicked="enterFullScreen()"/>
    </div>
</template>

<script setup lang="ts">

let wbc = ref<HTMLElement | null>(null);

function enterFullScreen() {
    wbc.value?.classList.add('fullscreen');
}

</script>   

<style scoped>

.content-box-container {
    width: 324px;
    height: 405px;
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