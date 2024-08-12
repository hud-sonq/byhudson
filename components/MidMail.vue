<template>
  <div id="midMail">
    <div class="mid-mail-container">
      <div class="mid-mail-img-container">
        <a href="mailto:work@byhudson.dev">
          <img src="/midmail2.svg" alt="midmail" class="mid-mail-img-itself">
        </a>
      </div>
      <div class="mid-mail-text">
        <span>work@byhudson.dev</span>
      </div>
    </div>
  </div>
</template>


<style scoped>
#midMail {
  position: absolute;
  right: 0;
  width: fit-content;
  height: fit-content;
  z-index: 4;
  top: 8px;
  right: 10px;
  height: 54px;
}

.mid-mail-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 8px;
  padding-inline: 4px;
  border: 2px solid var(--accent-primary);
  box-shadow: -4px 4px var(--accent-tertiary);
}

.mid-mail-img-container {
  height: fit-content;
  width: fit-content;
  cursor: pointer;
}

.mid-mail-img-itself {
  height: 28px;
  width: 28px;
}
</style>