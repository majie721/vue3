<template>
  <a-layout-content class="content-container">
    <a-tabs v-model:activeKey="activeKey" @edit="onEdit" type="editable-card" :tabBarGutter="5" class="panes"
      :hideAdd="true" size="small">
      <a-tab-pane v-for="(pane,index) in panesData" :key="index" :tab="pane.name" :closable="panesData.length > 1">
      </a-tab-pane>
    </a-tabs>
    <router-view></router-view>
  </a-layout-content>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from '@/stores';
import { storeToRefs } from 'pinia';

const activeKey = ref(0)

const {painesStore} = useStore()
const {panesData} = storeToRefs(painesStore)
const {remove} = painesStore;


const onEdit = (targetKey: number | MouseEvent, action: string) => {
  if (action === 'remove') {
    console.log('remove',targetKey);
    remove(targetKey as number);
  }
};

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