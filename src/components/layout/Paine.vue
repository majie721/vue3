<template>
  <a-tabs class="pane-continer panes" v-model:activeKey="activeIndex" @change="onCahnge" @edit="onEdit"
    type="editable-card" :tabBarGutter="5" :hideAdd="true" size="small">
    <a-tab-pane :closable="pane.path != '/home'" v-for="(pane, index) in panesData" :key="index">
      <template #tab>
        <a-dropdown :trigger="['contextmenu']">
          <span class="tab-title" :title="pane.name">{{ pane.name }}</span>
          <template #overlay>
            <a-menu>
              <a-menu-item @click="onClose(index,'other')">
                关闭其他
              </a-menu-item>
              <a-menu-item v-if="pane.path != '/home'" @click="onClose(index,'left')">
                关闭左边
              </a-menu-item>
              <a-menu-item v-if="pane.path != '/home'" @click="onClose(index,'right')">
                关闭右边
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>

        <!-- <span class="tab-icon"><reload-outlined /></span>  -->
        <!-- <span v-if="pane.path != '/home'" @click="onClose(index)" class="tab-icon"><close-circle-outlined /></span>  -->
      </template>
    </a-tab-pane>
  </a-tabs>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/index';
import { storeToRefs } from 'pinia';
import { watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const { painesStore } = useStore()
const { activeIndex, panesData } = storeToRefs(painesStore)
const { remove,removeOperate } = painesStore;
const router = useRouter()
const route = useRoute()



/**
 * tab eidt
 * @param targetKey 
 * @param action 
 */
const onEdit = (targetKey: number, action: string) => {
  if ('remove' === action) {
    remove(targetKey);
  }
};

/**
 * 右键关闭tab 
 * @param targetKey 
 * @param action 
 */
const onClose = (targetKey: number,op:string) => {
  removeOperate(targetKey,op)
};

/**
 * 切换面板的回调
 * @param targetKey 
 */
const onCahnge = (targetKey: number) => {
 
}

watchEffect(()=>{
  
  if(panesData){
    router.push(panesData.value[activeIndex.value])
  }
 
})

</script>

<style scoped lang="scss">
.pane-continer {
  .tab-title {
    max-width: 100px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 16px;
    line-height: 16px;
    position: relative;
    top: 3px;
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

  .tab-icon {
    :deep(.anticon) {
      margin-left: 5px;
      margin-right: 5px;
    }
  }

}

.panes {
  background-color: $bodyBgColor;
}
</style>