<template>
    <div id="ppPage">
        <div id="welcomeSequence" ref="welcomeSequence">
            <WelcomeSequence v-i="showWelcome" @sequenceDone="hideWelcome()"/>
        </div>
        <div id="mainBox" class="" ref="mainBox" >
            <MainBox />
             <!-- <ContentSoon /> -->
        </div>
    </div>
</template>

<script setup lang="ts">
let welcomeSequence = ref<HTMLElement | null>(null);
let mainBox = ref<HTMLElement | null>(null);

let showWelcome = ref(true);

function hideWelcome() {
    showWelcome.value = false;
    mainBox.value?.classList.add('show');
}
</script>

<style scoped>
#mainBox {
    opacity: 0;
    transition: opacity ease-in-out .4s;
    display: flex;
    justify-content: center;
    align-items: center;
}

#mainBox.show {
    opacity: 1;
}

#welcomeSequence {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>