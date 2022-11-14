<template>
   <a-layout-sider :collapsed="collapsed" collapsible @collapse="()=>collapsed=!collapsed">
      <div class="logo">
        <img src="@/assets/image/logo.png" alt="">
        <h1 v-if="!collapsed" >Admin Pro</h1>
      </div> 
      <div class="menu-container">
        <a-menu class="menu-container-body" theme="dark" collapsed="false" mode="inline">
        <a-menu-item key="1">
          <user-outlined />
          <span>Option 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <user-outlined />
          <span>Option 2</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <user-outlined />
              <span>User</span>
            </span>
          </template>
          <a-menu-item key="3">Tom</a-menu-item>
          <a-menu-item key="4">Bill</a-menu-item>
          <a-menu-item key="5">Alex</a-menu-item>
          <a-menu-item key="3">Tom</a-menu-item>
          <a-menu-item key="4">Bill</a-menu-item>
          <a-menu-item key="5">Alex</a-menu-item>
          <a-menu-item key="3">Tom</a-menu-item>
          <a-menu-item key="4">Bill</a-menu-item>
          <a-menu-item key="5">Alex</a-menu-item>
          <a-menu-item key="3">Tom</a-menu-item>
          <a-menu-item key="4">Bill</a-menu-item>
          <a-menu-item key="5">Alex</a-menu-item>
          <a-menu-item key="3">Tom</a-menu-item>
          <a-menu-item key="4">Bill</a-menu-item>
          <a-menu-item key="5">Alex</a-menu-item>
          <a-menu-item key="3">Tom</a-menu-item>
          <a-menu-item key="4">Bill</a-menu-item>
          <a-menu-item key="5">Alex</a-menu-item>
          <a-menu-item key="3">Tom</a-menu-item>
          <a-menu-item key="4">Bill</a-menu-item>
          <a-menu-item key="5">Alex</a-menu-item>
          <a-menu-item key="3">Tom</a-menu-item>
          <a-menu-item key="4">Bill</a-menu-item>
          <a-menu-item key="5">Alex</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <user-outlined />
              <span>Team</span>
            </span>
          </template>
          <a-menu-item key="6">Team 1</a-menu-item>
          <a-menu-item key="8">Team 2</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <user-outlined />
          <span>File</span>
        </a-menu-item>
        <a-menu-item key="9">
          <user-outlined />
          <span>File</span>
        </a-menu-item>
        <a-menu-item key="9">
          <user-outlined />
          <span>File</span>
        </a-menu-item>
        <a-menu-item key="9">
          <user-outlined />
          <span>File</span>
        </a-menu-item>
        <a-menu-item key="9">
          <user-outlined />
          <span>File</span>
        </a-menu-item>
        <a-menu-item key="9">
          <user-outlined />
          <span>File</span>
        </a-menu-item>
        <a-menu-item key="9">
          <user-outlined />
          <span>File</span>
        </a-menu-item>
        <a-menu-item key="9">
          <user-outlined />
          <span>File</span>
        </a-menu-item>
        <a-menu-item key="9">
          <user-outlined />
          <span>File</span>
        </a-menu-item>
        <a-menu-item key="9">
          <user-outlined />
          <span>File</span>
        </a-menu-item>
        <a-menu-item key="9">
          <user-outlined />
          <span>File</span>
        </a-menu-item>
        <a-menu-item key="9">
          <user-outlined />
          <span>File</span>
        </a-menu-item>
        <a-menu-item key="9">
          <user-outlined />
          <span>File</span>
        </a-menu-item>
        <a-menu-item key="9">
          <user-outlined />
          <span>File</span>
        </a-menu-item>
        <a-menu-item key="9">
          <user-outlined />
          <span>File</span>
        </a-menu-item>
        <a-menu-item key="9">
          <user-outlined />
          <span>File</span>
        </a-menu-item>
        <a-menu-item key="9">
          <user-outlined />
          <span>File</span>
        </a-menu-item>
        <a-menu-item key="9">
          <user-outlined />
          <span>File</span>
        </a-menu-item>
        <a-menu-item key="9">
          <user-outlined />
          <span>File</span>
        </a-menu-item>
        <a-menu-item key="9">
          <user-outlined />
          <span>File</span>
        </a-menu-item>
      </a-menu>
      </div> 
      
    </a-layout-sider> 
</template>

<script setup lang="ts">
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue';
    import {ref} from 'vue'
    const collapsed = ref(false)
</script>

<style scoped lang="scss">
    .logo {
    line-height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: 16px 16px;
    img {
        height: 32px;
        line-height: 32px;
    }
    h1{
        height: 32px;
        line-height: 32px;
        margin: 0 0 0 12px;
        color: #fff;
        overflow: hidden;
        display: inline-block;
        transition: 0.2;
    }    
}

.menu-container{
      overflow-y: auto;
      &-body{
        overflow-y: auto;
        height: calc(100vh - 112px);
      }
    }
</style>