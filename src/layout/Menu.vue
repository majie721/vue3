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
                  <span>{{ item.title }}</span>
                </span>
              </template>
              <a-menu-item   v-for="subItem in item.children" :key="subItem.id" @click="clickHandle(subItem)">
                <span>{{ subItem.title }}</span>
              </a-menu-item>
            </a-sub-menu>
          </template>
          <template v-else>
            <a-menu-item :key="item.id" @click="clickHandle(item)">
              <component v-if="item.icon" :is='item.icon'></component>
              <span>{{ item.title }}</span>
            </a-menu-item>
          </template>
        </template>
      </a-menu>
    </div>
  </a-layout-sider>
</template>

<script setup lang="ts">
import { useStore } from '@/stores';
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue';
import { ref,reactive,onMounted, type Ref  } from 'vue'
import { useRouter } from 'vue-router';
import api from '@/api'

const collapsed = ref(false)
let menuList:Ref<System.MenuItem[]> = ref([])

const router =  useRouter()
const {painesStore} =  useStore()
const {addPaine} = painesStore

const loadMenu =async () =>{
  const {data} = await api.privilege.userMenus();
  menuList.value = data!
}

const clickHandle = (item:System.MenuItem)=>{
  router.push(item.route_path)
}

loadMenu()
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