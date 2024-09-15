<template>
  <div id="languageSwitcher">
    <div class="language-img-container" @click="cycleLocale">
      <img src="/std/language.svg" class="icon-itself">
    </div>
    <img :src="`/std/${currentLocale.code}.svg`" :alt="currentLocale.name" class="flag-icon">
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();

const locales = [
  { code: 'en', name: 'English' },
  { code: 'ja', name: '日本語' },
  { code: 'kr', name: '한글' },
  { code: 'fr', name: 'Français' },
  { code: 'es', name: 'Español' },
  { code: 'de', name: 'Deutsch' },
];

const currentLocale = computed(() => locales.find(l => l.code === locale.value) || locales[0]);

function cycleLocale() {
  const currentIndex = locales.findIndex(l => l.code === locale.value);
  const nextIndex = (currentIndex + 1) % locales.length;
  locale.value = locales[nextIndex].code;
}
</script>

<style scoped>
#languageSwitcher {
  display: flex;
  align-items: center;
  cursor: pointer;
  background: none;
  padding-left: 6px;
  padding-top: 2px;
}

.language-img-container {
  width: var(--iconSmall-sq);
  height: var(--iconSmall-sq);
  margin-right: 10px;
}

.icon-itself {
  width: 100%;
  height: 100%;
}

.flag-icon {
  width: var(--iconSmall-sq);
  height: var(--iconSmall-sq);
  display: inline-block;
  cursor: default;
}
</style>
