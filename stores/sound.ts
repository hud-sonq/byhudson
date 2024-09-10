import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSoundStore = defineStore('sound', () => {
    const soundOn = ref(false);
    const toggleSound = () => {
        soundOn.value = !soundOn.value;
        Howler.mute(!soundOn.value);
        console.log('in store just toggled sound', soundOn.value);
    };
    return { soundOn, toggleSound };
});