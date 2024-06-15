<template>
    <div id="topElements">
        <div class="pfp">
            <img class="pfp-itself" src="/pfp.png" alt="Profile Picture">
        </div>
        <div class="socials-widgets">
            <div class="social">
                <img class="social-itself" src="/gh_white.svg">
            </div>
            <div class="social"><img class="social-itself" src="/ig.svg"></div>
            <div class="social"><img class="social-itself" src="/linktree.png"></div>
        </div>
    </div>

</template>

<script setup lang="ts">
</script>

<style scoped>

#topElements {
    position: absolute; 
    top: 0;
    left: 0;
    height: 72px;
    margin-top: 8px;
    margin-left: 12px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}

.pfp {
    border: 2px solid var(--accent-primary);
    object-fit: contain;
    height: 54px;
    width: 54px;
    box-shadow: -4px 4px var(--accent-primary);
}

.pfp-itself {
    width: 54px;
    height: 54px;
}

.socials-widgets {
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
    margin-right: 20px;
    border: 2px solid var(--accent-primary);
    box-shadow: -4px 4px var(--accent-primary); 
}

.social {
    height: 40px;
    width: 50px;
    padding-bottom: 4px;
    cursor: pointer;
}

.social-itself {
    height: 100%;
    width: 100%;
    object-fit: contain;
}


</style>
