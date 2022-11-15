import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/account',
        name: '账号管理',
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: "/center",
                name: '个人中心',
                component: () => import('@/views/account/center.vue')
            },
            {
                path: "/settings",
                name: '个人中心',
                component: () => import('@/views/account/settings.vue')
            },
        ]
    }
];

export default routes


