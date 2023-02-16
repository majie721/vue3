<template>
    <Header title="菜单列表"></Header>

    <SearchFrom :searchConfig="config" @onSearch="onSearch"></SearchFrom>
    <div class="table-contet">
        <a-table :dataSource="dataSource" :sticky="stickyData" bordered :pagination="paginate" :columns="columns" size="small" />
    </div>

</template>

<script setup lang="ts">






import Header from '@/components/header/PageHeader.vue'
import SearchFrom from '@/components/search/SearchFrom.vue'
import { ref, reactive, type Ref, provide, type InjectionKey } from 'vue';
import MenuSearchFrom from '@/views/Composition/headers/menu'
import api from '@/api'

let dataSource: Ref<System.MenuItem[]> = ref([])

const { queryForm, config } = MenuSearchFrom()

const columns = [
    {
        title: 'id',
        dataIndex: 'id',
    },
    {
        title: '父级菜单',
        dataIndex: 'pid',
    },
    {
        title: '路由名称',
        dataIndex: 'route_name',
    },
    {
        title: '路由path',
        dataIndex: 'route_path',
    },
    {
        title: '菜单名称',
        dataIndex: 'title',
    },
    {
        title: '是否缓存',
        dataIndex: 'cache',
    },
    {
        title: '备注',
        dataIndex: 'remarks',
    },
    {
        title: '排序',
        dataIndex: 'sort',
    },
    {
        title: '时间',
        dataIndex: 'created_at',
    },
    {
        title: '操作',
        key: 'action',
    },
];

const paginate  = reactive({
    current:1,
    pageSize:1,
    total:0,
    defaultPageSize:20,
    hideOnSinglePage:true,
    showSizeChanger:true,
    pageSizeOptions:['20','50','100','200']

}) 


const onSearch = async () => {
    const { data } = await api.privilege.menuList(queryForm)
    dataSource.value = data!.list;
    paginate.current = data!.current;
    paginate.pageSize = data!.pageSize
    paginate.total = data!.total
    console.log(paginate);
    
}



onSearch()
</script>

<style lang="scss" scoped>
    .table-contet{
        padding: 16px;
        max-height: 800px;
        overflow-y: scroll;
    }
</style>

