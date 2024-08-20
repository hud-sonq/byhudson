<template>
    <div id="navContainerThin">
        <div class="nav-thirds-split">
            <div class="deco-area">
                <div class="deco-container" @click="$emit('infoClicked')">
                    <img src="/info.svg" class="info-itself">
                </div>
            </div>
            <div class="deco-area">
                <div class="lev">
                    <img src="/levitate.svg" class="levitate-itself">
                </div>
            </div>
            <div class="deco-area">
                <div class="btn-expand-container" @click="$emit('expandClicked')">
                    <img src="/std/expandFs.svg" class="btn-expand-itself">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['expandClicked', 'infoClicked', 'levitateClicked']);
</script>

<style scoped>

#navContainerThin {
    width: 96px;
    height: 20px;
    margin-inline: 4px;
    border-inline: 2px solid var(--accent-primary);
    border-bottom: 2px solid var(--accent-primary);
    background: var(--bg-primary);
    z-index: 5;
}

.nav-thirds-split {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: var(--bg-primary);
}

.deco-area {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
}

.btn-expand-container {
    height: 16px;
    width: 16px;
    cursor: pointer;
    margin-right: 4px;
}

.btn-expand-itself {
    height: 100%;
    width: 100%;
}

.levitate-itself {
    height: 21px;
    width: 16px;
    margin-left: 2px;
}

.deco-container {
    cursor: pointer;
    height: 22px;
    width: 20px;
}

.lev {
    height: 20px;
    width: 20px;
}

.info-itself {
    height: 23px;
    width: 23px;
    padding-right: 4px;
}
</style>