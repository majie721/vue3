<template>
  <a-layout-content class="content-container">
    <paine/>
    <div id="page-content-box"></div>
    <div  style="height:calc(100vh - 154px); overflow: scroll;">
      <router-view></router-view>
    </div>
    <FooterSide></FooterSide>
  </a-layout-content>
</template>

<script setup lang="ts">
import FooterSide from "@/layout/Footer.vue"
import Paine from '@/components/layout/Paine.vue'
</script>

<style scoped lang="scss">
.content-container {
  margin:12px 12px 0 12px;
  background: #fff;
 
}


</style>