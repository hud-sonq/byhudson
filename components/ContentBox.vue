<template>
    <div id="contentBoxBoi">
        <TopElements />
        <!-- <TutPopups /> -->
        <GlobeDeco />
        <BottomElements />
        <GraphicsGallery v-if="showGallery" />
    </div>
</template>

<script setup lang="ts">

const showGallery = ref(true);

</script>

<style scoped>
#contentBoxBoi {
    position: absolute;
    width: 100%;
    height: 100%;
}

.text-content-container {
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.text-with-ok {
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 8px;
    border: 2px solid var(--accent-primary);
}

.ok-button-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
}

.ok-button {
    width: 64px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 2px solid var(--accent-primary);
}

.ok-button:hover {
    background-color: var(--accent-tertiary);
}

.top-decos {
    width: 100%;
    height: 64px;
    position: absolute;
    top: 0;
    left: 0;
}

.tr-deco {
    position: absolute;
    top: 6px;
    right: -2px;
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: flex-end;
    align-items: flex-start;
}
.globe-deco {
    position: absolute;
    bottom: -4px;
    left: 0;
}

.globe-itself {
    width: 50%;
    height: 100%;
}
</style>