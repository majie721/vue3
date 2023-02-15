<template>
    <div>
        <h1>dashbord页</h1>
         <SearchFrom :searchConfig="config"  @onSearch="onSearch"></SearchFrom> 
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useStore } from '@/stores/index'
import { computed } from 'vue';
import { ref, reactive, type Ref,provide, type InjectionKey } from 'vue';

const { exampleStore } = useStore();

const num = computed(() => exampleStore.counter)
const { counter } = storeToRefs(exampleStore)
const { increment, increment2 } = exampleStore



const queryForm: System.OrderDemoParam = reactive({
    order_id: undefined,
    updated_at:[]
});


provide('_SearchFromKEY',queryForm)
const onSearch = function(){
    console.log('onSearch2',queryForm)
}

const config :System.SearchItem[]= [
    {
        type: 'input',
        keyName: 'order_id',
        label: '订单ID',
        placeholder: '订单ID',
        allowClear: true,
    },
    {
        type: 'timerPicker',
        keyName: 'updated_at',
        label: '更新时间',
        placeholder: ['开始时间', '结束时间'],
        valueFormat: 'YYYY-MM-DD',
        format: 'YYYY-MM-DD',
    }
]

</script>

<style scoped>

</style>