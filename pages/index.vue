<template>
    <div id="ppPage">
        <div id="welcomeSequence" ref="welcomeSequence">
            <WelcomeSequence @sequenceDone="hideWelcome()"/>
        </div>
        <div id="mainBox" class="" ref="mainBox" >
            <MainBox />
        </div>
     </div>
</template>

<script setup lang="ts">
let welcomeSequence = ref<HTMLElement | null>(null);
let mainBox = ref<HTMLElement | null>(null);

function hideWelcome() {
    console.log('hcase');
    welcomeSequence.value?.classList.add('hide');
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
    opacity: 1;
    transition: opacity ease-in-out .4s;
    display: flex;
    justify-content: center;
    align-items: center;
}

#welcomeSequence.hide {
    opacity: 0;
}
</style>