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



/* .nav-thirds-split {
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
} */

</style>