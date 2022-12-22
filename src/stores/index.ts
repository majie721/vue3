import { createPinia } from 'pinia'
import { useExampleStore } from './example'
import { usePanesListStore } from './panes'
import piniaPersist from 'pinia-plugin-persist'



export const useStore =()=>{
    return {
        exampleStore:useExampleStore(),
        painesStore:usePanesListStore(),
    }
}

const store = createPinia()
store.use(piniaPersist)
export default store
