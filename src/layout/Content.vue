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


</style>