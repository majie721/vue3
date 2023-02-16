<template>
    <a-page-header class="header-line" v-bind="$attrs"/>
</template>

<script setup lang="ts">

</script>
<style scoped lang="scss">
.header-line {
    border-bottom: 1px solid rgb(235, 237, 240) !important;
    padding: 8px 12px;
    :deep(.ant-page-header-heading-title){
        font-size:16px;
        line-height: 22px;
    }
}
</style>
