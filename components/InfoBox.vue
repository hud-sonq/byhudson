<template>
    <div id="infoBox">
        <div class="close-x-container" @click="$emit('closeInfo')">
            <img src="/closebox.svg" class="close-x-itself">
        </div>
        <div class="text">
            <span v-if="currentTextIndex === infoTextsLength - 2" v-html="currentText"></span>
            <span v-else>{{ currentText }}</span>
        </div>
        <div class="next" @click="nextText">
            <img v-if="currentTextIndex < infoTextsLength - 1" src="/std/doubleArrow.svg" class="arrow">
            <span v-else class="finish" @click="$emit('closeInfo')">{{ t('finish') }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const emits = defineEmits(['closeInfo']);
const infoTextsLength = 5;
const currentTextIndex = ref(0);
const currentText = computed(() => t(`infoTexts.${currentTextIndex.value}`));
function nextText() {
    if (currentTextIndex.value === infoTextsLength - 1) {
        currentTextIndex.value = 0;
    } else {
        currentTextIndex.value++;
    }
}
</script>

<style scoped>
#infoBox {
    width: 80%;
    background-color: var(--bg-primary);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    text-align: center;
    border: 2px solid var(--accent-primary);
    position: absolute;
}

.close-x-container {
    margin-top: 4px;
    margin-right: 4px;
    width: 100%;
    width: var(--iconSmall-sq);
    height: var(--iconSmall-sq);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
}

.close-x-itself {
    width: 100%;
    height: 100%;
}

.text {
    padding-top: 6px;
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: calc(var(--iconSmall-sq)/2);
}

.next {
    width: 100%;
    cursor: pointer;
    padding-top: 3px;
    background-color: transparent;
    display: flex;
    justify-content: flex-end;
}

.arrow {
    width: var(--iconSmall-sq);
    height: var(--iconSmall-sq);
    padding: 0px;
    padding-left: 4px;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-right: 4px;
    border-left: 2px solid white;
    border-top: 2px solid white;
    cursor: pointer;
}

.finish {
    padding: 0px;
    padding-left: 4px;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-right: 4px;
    border-left: 2px solid white;
    border-top: 2px solid white;
    cursor: pointer;
}
</style>