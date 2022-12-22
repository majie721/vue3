import { defineStore } from 'pinia';
import type { RouteLocationNormalized } from 'vue-router';

export const usePanesListStore = defineStore('panesListStore', {
    state: () => {
        return {
            activeIndex: 0,
            panesData: [] as System.PaneItem[]
        }
    },
    getters: {

    },
    actions: {
        /**
         * 添加tab
         * @param to 
         */
        addPaine(to: RouteLocationNormalized) :void{    
            //可以打开多个table
            if(!!to.meta?.multiplePane){
                let temp:System.PaneItem = {
                    path:to.path,
                    fullPath:to.fullPath,
                    hash:to.hash,
                    params:to.params,
                    query:to.query,
                    name:!!to.name?to.name.toString():''
                }
                this.panesData.push(temp)
                this.activeIndex = this.panesData.length-1
            }else{
                this.activeIndex = this.panesData.findIndex((val)=>val.path === to.path)
            }
        },
        /**
         * 关闭tab
         * @param targetKey 
         */
        remove(targetKey: number) {           
            if(targetKey<this.activeIndex){
                this.activeIndex -=1;
            }else if(this.activeIndex === targetKey){
                let index =  this.activeIndex - 1;
                this.activeIndex =  index > 0  ? index : 0;
            }else{
                this.activeIndex = this.activeIndex;
            }
            this.panesData.splice(targetKey, 1);
        }
    },
    persist: { //开启缓存
        enabled: true,
        strategies: [
            { storage: localStorage }
        ]
    }
});
