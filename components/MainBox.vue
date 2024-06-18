<template>
    <div class="content-box-container" ref="wbc">
        <ContentBox />
    </div>
</template>

<style scoped>

.content-box-container {
    width: 324px;
    height: 405px;
    background-color: var(--bg-primary);
    border: 4px solid var(--accent-primary);
    position: absolute;
    -webkit-box-shadow:0 0 20px var(--accent-primary); 
    -moz-box-shadow: 0 0 20px var(--accent-primary); 
    box-shadow:0 0 20px var(--accent-primary);
    transition: all ease-in-out 0.5s;
}

</style>