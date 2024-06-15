<template>
    <div id="gGallery">
        <div class="graphics-gallery">
            <div class="left-arrow">
                <span>-</span>
            </div>

        </div>
    </div>
</template>

<style scoped>

#gGallery {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    pointer-events: none;
}

.graphics-gallery {
    position: absolute;
    width: 50%;
    height: 50%;
    border: 2px solid var(--accent-primary);
    pointer-events: all;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--bg-primary);
    box-shadow: -4px 4px var(--accent-primary);
    z-index: 1;
}

.left-arrow {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    left: -24px;
    width: 24px;
    height: 24px;
    border: 2px solid var(--accent-primary);
}

</style>