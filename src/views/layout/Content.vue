<template>
  <a-layout-content class="content-container">
    <a-tabs v-model:activeKey="activeIndex" @edit="onEdit" type="editable-card" :tabBarGutter="5" class="panes"
      :hideAdd="true" size="small">
      <a-tab-pane v-for="(pane, index) in panesData" 
      :key="index" 
      :tab="pane.name" 
      :closable="panesData.length > 1"
      @click="onClickPane(pane,index)"
      >
      </a-tab-pane>
    </a-tabs>
    <router-view></router-view>
  </a-layout-content>
</template>

<script setup lang="ts">
import { ref, watch, watchEffect } from 'vue';
import { useStore } from '@/stores';
import { storeToRefs } from 'pinia';
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';



const { painesStore } = useStore()
const { activeIndex, panesData } = storeToRefs(painesStore)
const { remove } = painesStore;
const router = useRouter()
const route = useRoute()


/**
 * tab 关闭
 * @param targetKey 
 * @param action 
 */
const onEdit = (targetKey: number | MouseEvent, action: string) => {
  if (action === 'remove') {
    remove(targetKey as number);
  }
};

const onClickPane = (pane:System.PaneItem,index:number)=>{
  console.log('onClickPane')
  router.push(pane)
}







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