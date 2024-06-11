<template>
    <div id="mainBox" ref="mainBox">
        <div class="box-container">
            <div class="welcome-gif" ref="wg"><img class="gif-itself" src="/gifs/tload.gif"></div>
            <div class="welcome-text" ref="wc"><h4>WELCOME</h4></div>
        </div>
    </div>
</template>

<script setup lang="ts">
const mainBox = ref<HTMLElement | null>(null);
const wg = ref<HTMLElement | null>(null);
const wc = ref<HTMLElement | null>(null);

onMounted(() => {
    setTimeout(() => {
        wg.value?.classList.add('hide');
        wc.value?.classList.add('active');
    }, 1800);
    setTimeout(() => {
        mainBox.value?.classList.add('active');
    }, 100);
});

</script>

<style scoped>
.box-container {
    width: 324px;
    height: 405px;
    background-color: var(--bg-primary);
    border: 4px solid var(--accent-primary);
    position: absolute;
}

#mainBox {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: scale(0);
    transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
}

#mainBox.active {
    transform: scale(1);
}

.welcome-gif {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    object-fit: cover;
}

.welcome-text {
    font-size: 1.5rem;
    position: absolute;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: var(--text-primary);
    text-align: center;
    transition: all cubic-bezier(0.18, 0.82, 0.5, 1) .4s;
    transform: scale(0);
    opacity: 0;
}

.welcome-text.active {
    display: flex;
    opacity: 1;
    transform: scale(1);
}


.hide {
    display: none;
}



</style>