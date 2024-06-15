<template>
    <div class="globe-deco">
        <video autoplay loop muted class="globe-itself">
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
    width: 50%;
    height: 100%;
}
</style>