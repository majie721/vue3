import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/index.vue')
  },
  {
    path: '/system',
    name: '菜单',
    children: [
      {
        path: 'menu_list',
        name: '菜单列表',
        component: () => import('@/views/system/menu/list.vue')
      },
    ]

  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../../views/404.vue')
  }
];

export default routes  