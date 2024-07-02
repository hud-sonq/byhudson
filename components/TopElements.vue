<template>
    <div id="topElements">
        <div class="pfp">
            <img class="pfp-itself" src="/pfp.png" alt="Profile Picture">
        </div>
    </div>
</template>

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
</style>
