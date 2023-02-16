<template>
  <a-layout style="min-height: 100vh">
    <a-layout>
      <MenuSide></MenuSide>
      <a-layout class="my-ant-layout">
        <HeaderSide></HeaderSide>
        <a-config-provider :locale="zhCN">
          <ContentSide></ContentSide>
        </a-config-provider> 
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
  import MenuSide from "@/layout/Menu.vue"
  import ContentSide from "@/layout/Content.vue"
  import HeaderSide from "@/layout/Header.vue"
  import zhCN from 'ant-design-vue/es/locale/zh_CN';
  import 'dayjs/locale/zh-cn';
  import dayjs from 'dayjs';
  dayjs.locale(zhCN.locale);


</script>
<style lang="scss" scoped>
  .layout-header {
    display: block;
    background-color: #fff;
    width: 100%;
  }
  .my-ant-layout{
    min-height: 100vh;
  }
</style>