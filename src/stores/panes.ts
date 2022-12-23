import { defineStore } from 'pinia';
import type { RouteLocationNormalized } from 'vue-router';

export const usePanesListStore = defineStore('panesListStore', {
    state: () => {
        return {
            activeIndex: 0,
            panesData: [{
                path: '/home',
                fullPath: '/home',
                hash: "",
                params: {},
                query: {},
                name: "Home"
            }] as System.PaneItem[]
        }
    },
    getters: {

    },
    actions: {
        /**
         * 添加tab
         * @param to 
         */
        addPaine(to: RouteLocationNormalized): void {
            //可以打开多个table
            if (!!to.meta?.multiplePane) {
                //相同的fullPath只能打开一个
                let sameIndex = this.panesData.findIndex((val) => val.fullPath === to.fullPath)
                if (sameIndex > -1) {
                    this.activeIndex = sameIndex
                    return
                }

            } else {

                let sameIndex = this.panesData.findIndex((val) => val.path === to.path)
                if (sameIndex > -1) {
                    this.activeIndex = sameIndex
                    return
                }
            }

            let temp: System.PaneItem = {
                path: to.path,
                fullPath: to.fullPath,
                hash: to.hash,
                params: to.params,
                query: to.query,
                name: !!to.name ? to.name.toString() : ''
            }
            this.panesData.push(temp)
            this.activeIndex = this.panesData.length - 1
        },
        /**
         * 关闭tab
         * @param targetKey 
         */
        remove(targetKey: number) {
            if (targetKey < this.activeIndex) {
                this.activeIndex -= 1;
            } else if (this.activeIndex === targetKey) {
                let index = this.activeIndex - 1;
                this.activeIndex = index > 0 ? index : 0;
            } else {
                this.activeIndex = this.activeIndex;
            }
            this.panesData.splice(targetKey, 1);
        },
        /**
         * 关闭多个tabs
         * @param index 
         * @param operate 
         */
        removeOperate(index: number, operate: string) {
            console.log(index,operate);
            
            if (operate === 'other') {
                this.removeOthers(index)
            }
            if (operate === 'left') {
                this.removeLeft(index)
            }
            if (operate === 'right') {
                this.removeRight(index)
            }
        },
        /**
         * 关闭左边tab
         * @param targetKey 
         */
        removeLeft(targetKey: number) {
            this.panesData =  this.panesData.filter((val,index)=>{
                return (index === 0  || index >=targetKey ) ? true :false; 
            })
            this.activeIndex = this.panesData.length -1
        },
        /**
         * 关闭右边tab
         * @param targetKey 
         */
        removeRight(targetKey: number) {
            this.panesData =  this.panesData.filter((val,index)=>{
                return (index === 0  || index <=targetKey ) ? true :false; 
            })
            this.activeIndex = this.panesData.length -1
        },
        /**
         * 关闭others tab
         * @param targetKey 
         */
        removeOthers(targetKey: number) {
            this.panesData =  this.panesData.filter((val,index)=>{
                return (index === 0  || index === targetKey ) ? true :false; 
            })
            this.activeIndex = this.panesData.length -1
        }
    },
    persist: { //开启缓存
        enabled: true,
        strategies: [
            { storage: localStorage }
        ]
    }
});
