<template>
    <div class="enter-box-main-container">
        <div class="buttons-and-text-container">
            <div class="text">
                <p>SOUND ENABLED?</p>
            </div>
            <div class="buttons-container">
                <div class="button"><p>NO</p></div>
                <div class="button"><p>YES</p></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['gallClicked']);
</script>

<style scoped>

.enter-box-main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
}

.buttons-and-text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 300px;
    background-color: var(--bg-primary);
    border: 2px solid white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.buttons-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    width: 100%;
}

.button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 100px;
    border: 2px solid white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
}

.button:hover {
    background-color: var(--accent-tertiary);
}

</style>