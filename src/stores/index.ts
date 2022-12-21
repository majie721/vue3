import { createPinia } from 'pinia'
import { useExampleStore } from './example'
import { usePanesListStore } from './panes'
import piniaPersist from 'pinia-plugin-persist'

const store = createPinia()
store.use(piniaPersist)
export default store

export const useStore =()=>{
    return {
        exampleStore:useExampleStore(),
        painesStore:usePanesListStore(),
    }
}

