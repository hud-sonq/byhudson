<template>
  <div id="midMail">
    <div class="mid-mail-container">
      <div class="mid-mail-img-container">
        <img src="/midmail2.svg" alt="midmail" class="mid-mail-img-itself">
      </div>
      <div class="mid-mail-text">
        <span>work@byhudson.dev</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
#midMail {
  position: absolute;
  width: fit-content;
  height: fit-content;
  z-index: 6;
  pointer-events: none;
}

.mid-mail-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border: 2px solid var(--accent-primary);
  box-shadow: -4px 4px var(--accent-tertiary);
}

.mid-mail-img-container {
  height: fit-content;
  width: fit-content;
}

.mid-mail-img-itself {
  height: 28px;
  width: 28px;
}
</style>