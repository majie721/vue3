import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../../views/HomeView.vue'

const routes:RouteRecordRaw[] = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/:pathMatch(.*)*',
      component: () => import('../../views/404.vue')
    }
  ];

export default routes  