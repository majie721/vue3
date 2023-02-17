<template>
    <Header title="菜单列表"></Header>

    <SearchFrom :searchConfig="config" @onSearch="onSearch"></SearchFrom>
    <MTable :data-source="dataSource" :total="total" :columns="columns" @onPageChange="onSearch"></MTable>

    <!-- <div class="table-content">
        <a-table :dataSource="dataSource" :sticky="stickyData" bordered :pagination="false" :columns="columns"
            size="small" />
        <div class="table-pagination">
            <a-pagination v-model:current="queryForm.page" hideOnSinglePage showSizeChanger
                v-model:pageSize="queryForm.pageSize" :show-total="(total: number) => `共 ${total} 条`"
                :pageSizeOptions="['5', '20', '50', '100', '200']" :total="total" @change="onSearch" />
        </div>

    </div> -->
</template>

<script setup lang="ts">

import Header from '@/components/header/PageHeader.vue'
import SearchFrom from '@/components/search/SearchFrom.vue'
import { ref, reactive, type Ref, provide, type InjectionKey } from 'vue';
import MenuSearchFrom from '@/views/Composition/headers/menu'
import MTable from '@/components/table/MTable.vue'
import api from '@/api'

let dataSource: Ref<System.MenuItem[]> = ref([])
let total: Ref<number> = ref(0);

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





const onSearch = async () => {
    const { data } = await api.privilege.menuList(queryForm)
    dataSource.value = data!.list;
    total.value = data!.total


}



onSearch()
</script>

<style lang="scss" scoped>
.table-content {
    padding: 16px;
    max-height: 800px;
}

.table-pagination {
    margin-top: 16px;
    position: sticky;
    bottom: 0px;
}
</style>

