import { defineStore } from 'pinia';
import { useRoute, useRouter } from 'vue-router';

export const usePanesListStore = defineStore('panesListStore', {
    state: () => {
        return {
            activeIndex: 0,
            panesData: [] as System.MenuItem[]
        }
    },
    getters: {

    },
    actions: {
        addPaine(item: System.MenuItem) {
            this.panesData.push(item)
        },
        remove(targetKey: number) {
            this.panesData.splice(targetKey, 1);
        }
    },
    persist: {
        enabled: true,
        strategies: [
            { storage: localStorage }
        ]
    }
});
