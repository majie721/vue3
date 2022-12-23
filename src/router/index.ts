import { createRouter, createWebHistory, onBeforeRouteUpdate } from 'vue-router'
import systemRoutes from './modules/system'
import userRoutes from './modules/user'
import orderRoutes from './modules/order'
import { usePanesListStore } from '@/stores/panes'

declare module 'vue-router' {
  interface RouteMeta {
    // 是可选的
    isAdmin?: boolean
    // 每个路由都必须声明
    requiresAuth: boolean,
    //Pane是否打开多个
    multiplePane?:boolean,
  }
}



const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...systemRoutes,
    ...orderRoutes,
    ...userRoutes,
  ]
})




//导航守卫
router.beforeEach((to,from)=>{
  if(to.fullPath !== from.fullPath && from.fullPath !=='/'){
    console.log('beforeEach',to.fullPath,from.fullPath);
    const {addPaine} = usePanesListStore()
    addPaine(to)
  }

})

export default router
