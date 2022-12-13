<template>
  <a-layout-sider :collapsed="collapsed" collapsible @collapse="() => collapsed = !collapsed">
    <div class="logo">
      <img src="@/assets/image/logo.png" alt="">
      <h1 v-if="!collapsed">Admin Pro</h1>
    </div>
    <div class="menu-container">
      <a-menu class="menu-container-body" theme="dark" collapsed="false" mode="inline">
        <template v-for="item in menuList" :key="item.id">
          <template v-if="item.children?.length">
            <a-sub-menu :key="item.id">
              <template #title>
                <span>
                  <component v-if="item.icon" :is='item.icon'></component>
                  <span>{{ item.name }}</span>
                </span>
              </template>
              <a-menu-item   v-for="subItem in item.children" :key="subItem.id" @click="()=>{$router.push(subItem.path)}">
                <span>{{ subItem.name }}</span>
              </a-menu-item>
            </a-sub-menu>
          </template>
          <template v-else>
            <a-menu-item :key="item.id" @click="()=>{$router.push(item.path)}">
              <component v-if="item.icon" :is='item.icon'></component>
              <span>{{ item.name }}</span>
            </a-menu-item>
          </template>
        </template>
      </a-menu>
    </div>
  </a-layout-sider>
</template>

<script setup lang="ts">
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue'
const collapsed = ref(false)

const menuList: System.MenuItem[] = [
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
    id: 3,
    pid: 0,
    name: "个人页",
    icon: 'IdcardOutlined',
    path: '/account/center',
    children: [
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
    ],
  }

];


</script>

<style scoped lang="scss">
.logo {
  line-height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 16px 16px;
  transition: 0.3;

  img {
    height: 32px;
    line-height: 32px;
  }

  h1 {
    height: 32px;
    line-height: 32px;
    margin: 0 0 0 12px;
    color: #fff;
    overflow: hidden;
    display: inline-block;
    transition: 0.2;
  }
}

.menu-container {
  overflow-y: auto;

  &-body {
    overflow-y: auto;
    height: calc(100vh - 112px);
  }
}
</style>