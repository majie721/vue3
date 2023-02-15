<template>
    <Header title="菜单列表"></Header>
    <SearchFrom :searchConfig="config"  @onSearch="onSearch"></SearchFrom>

</template>

<script setup lang="ts">
import Header from '@/components/header/PageHeader.vue'
import SearchFrom from '@/components/search/SearchFrom.vue'
import { number } from '@intlify/core-base';
import type { FormInstance } from 'ant-design-vue';
import { ref, reactive, type Ref,provide, type InjectionKey } from 'vue';




const queryForm: System.MenuParam = reactive({
    route_path: undefined,
    title: undefined,
    type:undefined,
    created_at: []
});


provide('_SearchFromKEY',queryForm)
const onSearch = function(){
    console.log('onSearch',queryForm)
}




 const config :System.SearchItem[]= [
    {
        type: 'input',
        keyName: 'route_path',
        label: '前端路由',
        placeholder: '前端路由',
        allowClear: true,
    },
    {
        type: 'input',
        keyName: 'title',
        label: '菜单名称',
        placeholder: '菜单名称',
    },
    {
        type: 'select',
        keyName: 'type',
        label: '类型',
        placeholder: '类型',
        selectData:{
            filter:true,
            mode:'multiple',
            options:[{
                value:1,
                text:"A1菜单" 
            },
            {
                value:2,
                text:"bASDF菜单" 
            },
            {
                value:3,
                text:"ASDA菜单" 
            },
            {
                value:4,
                text:"FGH菜单" 
            }
        ]
        }
    },
    {
        type: 'timerPicker',
        keyName: 'created_at',
        label: '创建时间',
        placeholder: ['开始时间', '结束时间'],
        valueFormat: 'YYYY-MM-DD',
        format: 'YYYY-MM-DD',
    }
]



</script>

<style lang="scss" scoped>

</style>

