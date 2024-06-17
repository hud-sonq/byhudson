<template>
    <div id="mainBox" ref="mainBox">
        <div class="content-box-container" ref="wbc">
            <div id="myContentBox active" ref="mcb">
                <ContentBox />
            </div>
        </div>
    </div>
</template>

<style scoped>
#mainBox {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.4s;
}

.content-box-container {
    width: 324px;
    height: 405px;
    background-color: var(--bg-primary);
    border: 4px solid var(--accent-primary);
    position: absolute;
    -webkit-box-shadow:0 0 20px var(--accent-primary); 
    -moz-box-shadow: 0 0 20px var(--accent-primary); 
    box-shadow:0 0 20px var(--accent-primary);
    transition: all ease-in-out 0.5s;
}


#myContentBox {
    opacity: 0;
    transition: all cubic-bezier(0.18, 0.82, 0.5, 1) .4s;
}

#myContentBox.active {
    opacity: 1;
}
</style>