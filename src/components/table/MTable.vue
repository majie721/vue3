<template>
    <div class="table-content">
        <a-table  v-bind="$attrs" :sticky="stickyData" bordered :pagination="false"
            size="small" />
        <div class="table-pagination">
            <a-pagination v-model:current="queryForm.page" hideOnSinglePage showSizeChanger
                v-model:pageSize="queryForm.pageSize" :show-total="(total: number) => `共 ${total} 条`"
                :pageSizeOptions="pageSizeOptions" :total="total" @change="onChange" />
        </div>

</div>
</template>

<script setup lang="ts">
import { inject, type PropType } from 'vue';
import { object } from 'vue-types';


const props = defineProps({
    total:{
        type:Number,
        require: true,
    },
    pageSizeOptions:{
        type:Array<string>,
        require: true,
        default:['5', '20', '50', '100', '200']
    },
})


const stickyData = {
    getContainer: () => {
        return document.getElementById('view-content-box')
    }
}

const queryForm = inject<any>('_SearchFromKEY')

const emits = defineEmits(['onPageChange'])

/**
 * 分页组件change事件
 * @param page 
 * @param pageSize 
 */
const onChange = (page :number, pageSize:number)=>{
    emits('onPageChange',page,pageSize)
}


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