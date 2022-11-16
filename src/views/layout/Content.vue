<template>
  <a-layout-content class="content-container">
    <a-tabs v-model:activeKey="activeKey" @edit="onEdit" type="editable-card" :tabBarGutter="5" class="panes"
      :hideAdd="true" size="small">
      <a-tab-pane v-for="pane in panes" :key="pane.id" :tab="pane.name" :closable="panes.length > 1">
      </a-tab-pane>
    </a-tabs>
    <router-view></router-view>
  </a-layout-content>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const activeKey = ref<number>(1)


const remove = (targetKey: number) => {
  let lastIndex = 0;
  panes.value.forEach((pane, i) => {
    if (pane.id === targetKey) {
      lastIndex = i - 1;
    }
  });
  panes.value = panes.value.filter(pane => pane.id !== targetKey);
  if (panes.value.length && activeKey.value === targetKey) {
    if (lastIndex >= 0) {
      activeKey.value = panes.value[lastIndex].id;
    } else {
      activeKey.value = panes.value[0].id;
    }
  }
};

const panes = ref<System.MenuItem[]>(
  [
    {
      id: 1,
      pid: 0,
      name: "工作台",
      icon: 'BarChartOutlined',
      path: '/',
    },
    {
      id: 2,
      pid: 0,
      name: "仪表盘",
      icon: 'DashboardOutlined',
      path: '/',
    },
    {
      id: 4,
      pid: 3,
      name: "个人中心",
      path: '/account/center',
    }, {
      id: 5,
      pid: 3,
      name: "个人设置",
      path: '/account/settings',
    }
  ]
)


const onEdit = (targetKey: number | MouseEvent, action: string) => {
  if (action === 'remove') {
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