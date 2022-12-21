import type { RouteRecordRaw } from 'vue-router'

const routes:RouteRecordRaw[] = [
  {
    path: '/',
    redirect:'/account/center'
  },  
  {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/index.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard/index.vue')
    },
    {
      path:'/:pathMatch(.*)*',
      component: () => import('../../views/404.vue')
    }
  ];

export default routes  