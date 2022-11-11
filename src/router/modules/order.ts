import type { RouteRecordRaw } from 'vue-router'

const routes:RouteRecordRaw[] = [
    {
      path: '/order',
      name:'order',
      redirect:'/order/list',
      meta:{
        requiresAuth:true
      },
      children:[
        {
            path: 'detail',
            name: 'detail',
            meta:{
                requiresAuth:false
            },
            component:()=>import('@/views/order/detail.vue')
        },
        {
            path: 'list',
            name: 'list',
            component:()=>import('@/views/order/list.vue')
        },
        {
            path: 'save',
            name: 'save',
            component:()=>import('@/views/order/save.vue')
        }
      ]  
    }
  ];

export default routes  