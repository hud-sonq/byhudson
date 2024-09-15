<template>
    <div id="navContainerThin">
        <div class="nav-mini">
            <div class="deco-area" @click="$emit('infoClicked')">
                <img src="/std/info.svg" class="deco-itself">
            </div>
            <SoundButton />
            <div class="deco-area">
                <img src="/std/levitate.svg" class="deco-itself">
            </div>
            <div class="deco-area" @click="$emit('expandClicked')">
                <img src="/std/expandFs.svg" class="deco-itself">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['expandClicked', 'infoClicked', 'levitateClicked']);
</script>

<style scoped>
#navContainerThin {
    width: var(--topNavMini-width);
    height: var(--topNavMini-height);
    margin-inline: 4px;
    border-inline: 2px solid var(--accent-primary);
    border-bottom: 2px solid var(--accent-primary);
    background: var(--bg-primary);
    z-index: 5;
    padding-right: 4px;
}

.nav-mini {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.deco-area {
    height: 26px;
    width: 26px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.deco-itself {
    width: 100%;
    height: 100%;
}
</style>