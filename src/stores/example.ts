import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useExampleStore = defineStore('exampleCounter',()=>{
    const counter = ref(0);
    function increment() {
        counter.value++
    }
    function increment2() {
        counter.value+=10
    }
    return {counter,increment,increment2}
},{
    persist:{
        enabled:true,
        strategies:[
            {storage:localStorage}
        ]
    }
});
