import type { RouteRecordRaw } from 'vue-router'

const routes:RouteRecordRaw[] = [
    {
        path: '/about/:id',
        name: 'about',
        meta:{
            requiresAuth:true
        },
        component: () => import('../../views/AboutView.vue')
    }
  ];

export default routes  


  