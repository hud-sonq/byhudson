<template>
    <div id="emphasisBehindContainer" ref="eb" class="">
        <div id="bracketsContainer">
            <div v-for="n in 4" :key="n" :class="['bracket', `bracket-${n}`]" :style="{ opacity: opacities[n - 1] }"></div>
        </div>
        <div id="rainbowsContainer" class=""></div>
    </div>
</template>

<script setup lang="ts">
const eb = ref<HTMLElement | null>(null);
const opacities = ref([0, 0, 0, 0]);

function loopOpacityShift() {
    const brackets = document.querySelectorAll('.bracket');
    brackets.forEach((bracket, i) => {
        setTimeout(() => {
            opacities.value[i] = 1; 
        }, i * 100);
        setTimeout(() => {
            opacities.value[i] = 0;
        }, 500 + i * 100);
    });
    setTimeout(loopOpacityShift, 100 + brackets.length * 400);
}
onMounted(() => {
    loopOpacityShift(); 
});

onNuxtReady(() => {
    if (eb.value) {
        eb.value.classList.add('active');
    } else {
        console.log('emphasis behind not found');
    }
});
</script>


<style scoped>
#emphasisBehindContainer {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
}

#rainbowsContainer {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(80deg, var(--accent-tertiary) 0%, var(--accent-tertiary) 40%, #ff54ff 60%, #00ffe5 70%, #ffffff 90%, #008000 100%);
    background-size: 120% 100%;
    mask-image: radial-gradient(farthest-side, rgba(0,0,0,1), rgba(0,0,0,0) 100%);
    /* animation: pulse 2s ease-in-out infinite; */
}

#bracketsContainer {
    position: absolute;
    width: 100%;
    height: 100%;
}

.bracket {
    position: absolute;
    width: 20px;
    height: 20px;
    border-left: 4px solid white;
    border-top: 4px solid white;
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
}

.bracket-1 {
    top: calc(-20px - var(--topNav-height));
    left: -18px; 
}

.bracket-2 {
    top: calc(-28px - var(--topNav-height));
    left: -26px;
}

.bracket-3 {
    top: calc(-36px - var(--topNav-height)); 
    left: -34px;
}

.bracket-4 {
    top: calc(-44px - var(--topNav-height)); 
    left: -42px; 
}

#emphasisBehindContainer.active > #rainbowsContainer {
    animation: pulse 8s ease-in-out infinite;
}

@keyframes pulse {
    0% {
        padding: 0;   
    }
    50% {
        padding: 20%;
        padding-bottom: 120px;
    }
    100% {
        padding: 0;
    }
}

@media (max-width: 750px) {
    .bracket {
        margin-top: 36px;
    }
}
</style>