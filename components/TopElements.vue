<template>
    <div id="topElements">
        <div class="pfp">
            <img class="pfp-itself" src="/pfp.png" alt="Profile Picture">
        </div>
        <div class="links">
            <div class="linktree"><img class="linktree-itself" src="/linktree.svg"></div>
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
    width: 100%;
}

.pfp {
    position: absolute;
    top: 8px;
    left: 12px;
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

.links {
    position: absolute; 
    top: 8px;
    right: 8px;
    border: 2px solid var(--accent-primary);
    object-fit: contain;
    height: 54px;
    width: fit-content;
    box-shadow: -4px 4px var(--accent-primary);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-inline: 8px;
    gap: 8px;
}

.linktree {
    height: 44px;
    width: 44px;
    cursor: pointer;
}

.linktree-itself{
    height: 100%;
    width: 100%;
    object-fit: contain;
}

.message {
    height: 44px;
    width: 44px;
    cursor: pointer;
}

.message-icon-itself{
    height: 100%;
    width: 100%;
    object-fit: contain;
}


</style>
