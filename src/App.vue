<template>
  <a-layout style="min-height: 100vh">
    
    <a-layout>
      <MenuSide></MenuSide>
      <a-layout>
        <HeaderSide></HeaderSide>
        <ContentSide></ContentSide>
        <FooterSide></FooterSide>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
  import MenuSide from "@/layout/Menu.vue"
  import ContentSide from "@/layout/Content.vue"
  import HeaderSide from "@/layout/Header.vue"
  import FooterSide from "@/layout/Footer.vue"

  
</script>
<style lang="scss" scoped>
  .layout-header {
    display: block;
    background-color: #fff;
    width: 100%;
  }
</style>