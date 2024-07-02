<template>
    <div id="infoBox">
        <div class="info-box-container">
            <div class="close-x-container" @click="$emit('closeInfo')"><img src="/closebox.svg" class="close-x-itself"></div>
            <div class="text1"><h4>MAKING THE WEB COOL</h4></div>
        </div>
    </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['closeInfo']);
</script>

<style scoped>
#infoBox {
    width: 128px;
    height: 96px;
    background-color: var(--bg-primary);
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--accent-primary);
    padding: 16px;
    position: absolute;
}

.close-x-container {
    position: absolute;
    padding: 4px;
    top: 0;
    right: 0;
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

</style>