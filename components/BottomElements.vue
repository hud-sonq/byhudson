<template>
    <div id="topElements">
        <div class="app-widgets">
            <div class="widget">
                <img class="widget-img-itself" src="/photos.svg">
            </div>
            <div class="widget">
                <img class="widget-img-itself" src="/weather.svg">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

#topElements {
    position: absolute; 
    bottom: 0;
    left: 0;
    height: 72px;
    margin-bottom: 8px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}

.app-widgets {
    height: 54px;
    width: fit-content;
    display: flex;
    gap: 8px;
    padding-left: 8px;
    padding-right: 8px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: 8px;
    border: 2px solid var(--accent-primary);
    box-shadow: -4px 4px var(--accent-primary); 
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


</style>
