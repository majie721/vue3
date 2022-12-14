import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/account',
        name: '账号管理',
        meta: {
            requiresAuth: true,
            multiplePane:false,
        },
        children: [
            {
                path: "center",
                name: '个人中心',
                component: () => import('@/views/account/center.vue')
            },
            {
                path: "settings",
                name: '个人中心1',
                component: () => import('@/views/account/settings.vue')
            },
            {
                path: "settings1",
                name: '个人中心个人中心个人中心2',
                meta:{
                    requiresAuth: true,
                    multiplePane:true,
                },
                component: () => import('@/views/account/settings1.vue')
            },
        ]
    }
];

export default routes


