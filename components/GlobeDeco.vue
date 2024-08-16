<template>
    <div class="globe-deco">
        <video autoplay muted playsinline loop class="globe-itself">
            <source src="/globevid_180.mp4" type="video/mp4">
        </video>
    </div>
</template>

<style scoped>
.globe-deco {
    position: absolute;
    bottom: -4px;
    left: 0;
}

.globe-itself {
    width: var(--globe-itself-sq);
    height: var(--globe-itself-sq);
}
</style>