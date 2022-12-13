import { createRouter, createWebHistory } from 'vue-router'
import systemRoutes from './modules/system'
import userRoutes from './modules/user'
import orderRoutes from './modules/order'

declare module 'vue-router' {
  interface RouteMeta {
    // 是可选的
    isAdmin?: boolean
    // 每个路由都必须声明
    requiresAuth: boolean
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    ...systemRoutes,
    ...orderRoutes,
    ...userRoutes,
  ]
})

//导航守卫
router.beforeEach((to,from)=>{
 
})

export default router
