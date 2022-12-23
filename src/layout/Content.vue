<template>
  <a-layout-content class="content-container">
    <paine/>
    <router-view></router-view>
  </a-layout-content>
</template>

<script setup lang="ts">
import Paine from '@/components/layout/Paine.vue'
</script>

<style scoped lang="scss">
.content-container {
  margin: 24px;
  // padding: 24px;
  background: #fff;
}

.panes {
  background-color: $bodyBgColor;
}

:deep(.ant-tabs-top) {
  .ant-tabs-nav {
    margin: 0 !important;

    &::before {
      border-bottom: 0px !important;
    }
  }
}

:deep(.ant-tabs-tab) {
  border-radius: 2px 10px 0 0 !important;
  border: 0px !important;
}
</style>