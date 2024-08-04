<template>
    <div id="bottomElements">
        <div id="bottomDeco"><img class="uiline-itself" src="/uiline.svg"></div>
        <div class="app-widgets">
            <div class="widget" @click="$emit('gallClicked')">
                <img class="widget-img-itself" src="/gallNew.svg">
            </div>
            <div class="widget">
                <img class="linktree-itself" src="/linktree.svg" @click="navigate(`https://linktr.ee/hudsonjq`)">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['gallClicked']);
const navigate = (url: any) => {
  window.open(url, '_blank')
}
</script>

<style scoped>

#bottomElements {
    position: absolute; 
    bottom: 0;
    left: 0;
    height: 48px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    z-index: 7;
}

.app-widgets {
    position: absolute;
    right: 0;
    height: 100%;
    width: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: auto;
}

#bottomDeco {
    position: absolute;
    top: -16px;;
    right: 0;
    height: 24px;
    min-width: 113px;
}

.widget {
    height: 38px;
    width: 50px;
    cursor: pointer;
}

.widget-img-itself{
    height: 100%;
    width: 100%;
    object-fit: contain;
}

.linktree-itself{
    height: 100%;
    width: 100%;
    object-fit: contain;
}

.uiline-itself {
    height: 100%;
    width: 100%;
    object-fit: contain;
}
</style>