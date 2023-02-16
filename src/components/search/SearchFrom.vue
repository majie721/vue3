<template>
    <div style="padding:16px;border-bottom: 1px solid rgb(235, 237, 240);">
        <a-form ref="formRef" name="advanced_search" class="ant-advanced-search-form" :model="queryForm">
            <a-row :gutter="24">
                <a-col v-for="(item, key) in searchConfig" :key="key" :span="6">
                    <a-form-item v-if="item.type === 'input'" :name="item.keyName" :label="item.label">
                        <a-input v-model:value="queryForm[item.keyName]" :placeholder="item?.placeholder || '请输入'"
                            :allowClear="item.allowClear || true" autocomplete="off"></a-input>
                    </a-form-item>

                    <a-form-item v-if="item.type === 'timerPicker'" :name="item.keyName" :label="item.label">
                        <a-range-picker v-model:value="queryForm[item.keyName]" :placeholder="item?.placeholder || ['开始时间','结束时间']"
                            :valueFormat="item.valueFormat || 'YYYY-MM-DD'" :format="item.format || 'YYYY-MM-DD'"
                            :allowClear="item.allowClear || true" />
                    </a-form-item>

                    <a-form-item v-if="item.type === 'select'" :name="item.keyName" :label="item.label">
                        <a-select :placeholder="item?.placeholder || '请选择'" :show-search="item.selectData?.filter === true"
                        :allowClear="item.allowClear || true" :mode="item.selectData?.mode || 'combobox'"
                            v-model:value="queryForm[item.keyName]" :filter-option="selectFilterOption">
                            <a-select-option v-for="option, oIndex in item.selectData!.options" :key="oIndex"
                                :value="option.value" :text="option.text">{{ option.text }}</a-select-option>
                        </a-select>
                    </a-form-item>
                </a-col>
            </a-row>


            <a-row>
                <a-col :span="24">
                    <a-button type="primary" @click="$emit('onSearch')" html-type="submit">查询</a-button>
                    <a-button style="margin: 0 8px" @click="() => formRef!.resetFields()">重置</a-button>
                </a-col>
            </a-row>
        </a-form>
</div>
</template>

<script setup lang="ts">


import type { FormInstance } from 'ant-design-vue';
import { ref, reactive, defineProps, type PropType, inject } from 'vue';

const props = defineProps({
    searchConfig: {
        type: Object as PropType<System.SearchItem[]>,
        require: true
    }
})

const formRef = ref<FormInstance>();
const queryForm = inject<any>('_SearchFromKEY')


const selectFilterOption = (input: string, option: any) => {
    console.log(option);

    return option.text.toLowerCase().indexOf(input.toLowerCase()) >= 0;
}

</script>

<style lang="scss" scoped></style>