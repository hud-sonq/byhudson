import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useZoomStore = defineStore('zoom', () => {
const isZoomed = ref(false);

const toggleZoom = () => {
    isZoomed.value = !isZoomed.value;
    if (isZoomed.value) {
        document.documentElement.style.setProperty('--sauceBox-width', '486px');
        document.documentElement.style.setProperty('--sauceBox-height', '580px');
        document.documentElement.style.setProperty('--pfp-sq', '81px');
        document.documentElement.style.setProperty('--mailZone-width', '324px');
        document.documentElement.style.setProperty('--mailZone-height', '81px');
        document.documentElement.style.setProperty('--spanSize', '20px');
        document.documentElement.style.setProperty('--iconLarge-sq', '64px');
        document.documentElement.style.setProperty('--globe-itself-sq', '145px');
        document.documentElement.style.setProperty('--bottomDecoAndElements-width', '195px');
        document.documentElement.style.setProperty('--bottomDecoAndElements-height', '117px');
        document.documentElement.style.setProperty('--bottomElementsContainer-width', '132px');
        document.documentElement.style.setProperty('--bottomElementsContainer-height', '87px');
        document.documentElement.style.setProperty('--bottomElementIcon-sq', '60px');

        } else {
        document.documentElement.style.setProperty('--sauceBox-width', '324px');
        document.documentElement.style.setProperty('--sauceBox-height', '405px');
        document.documentElement.style.setProperty('--pfp-sq', '54px');
        document.documentElement.style.setProperty('--mailZone-width', '216px');
        document.documentElement.style.setProperty('--mailZone-height', '54px');
        document.documentElement.style.setProperty('--spanSize', '13px');
        document.documentElement.style.setProperty('--iconLarge-sq', '40px');
        document.documentElement.style.setProperty('--globe-itself-sq', '90px');
        document.documentElement.style.setProperty('--bottomDecoAndElements-width', '130px');
        document.documentElement.style.setProperty('--bottomDecoAndElements-height', '78px');
        document.documentElement.style.setProperty('--bottomElementsContainer-width', '88px');
        document.documentElement.style.setProperty('--bottomElementsContainer-height', '58px');
        document.documentElement.style.setProperty('--bottomElementIcon-sq', '40px');
        }
    };
    return { isZoomed, toggleZoom };
});