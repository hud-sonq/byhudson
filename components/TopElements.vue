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
    height: fit-content;
    width: 100%;
}

.pfp {
    position: absolute;
    top: 8px;
    left: 12px;
    border: 2px solid var(--accent-primary);
    object-fit: contain;
    height: var(--pfp-sq);
    width: var(--pfp-sq);
    box-shadow: -4px 4px var(--accent-tertiary);
}

.pfp-itself {
    width: var(--pfp-sq);
    height: var(--pfp-sq);
}
</style>
