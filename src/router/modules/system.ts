import type { RouteRecordRaw } from 'vue-router'

const routes:RouteRecordRaw[] = [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/index.vue')
    },
    {
      path:'/:pathMatch(.*)*',
      component: () => import('../../views/404.vue')
    }
  ];

export default routes  