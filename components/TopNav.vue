<template>
    <div id="navContainer">
        <div class="nav-thirds-split">
            <div class="center-deco-area"></div>
            <div class="left-deco-area"></div>
            <div class="btn-area">
                <div class="btn-expand">
                    <img src="/closebox.svg">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

#navContainer {
    position: absolute;
    top: -24px;
    left: -6px;
    width: 100%;
    height: 20px;
    margin-inline: 4px;
    border: 2px solid white;
    background-color: var(--bg-primary);
}

.nav-thirds-split {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    padding-inline: 4px;
    gap: 4px;
}

.btn-area {
    height: 100%;
    width: 20%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 4px;
    margin-right: 8px;
}

.btn-expand {
    height: 16px;
    width: 16px;
    cursor: pointer;
}

</style>