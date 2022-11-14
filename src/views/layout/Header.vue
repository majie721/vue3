<template>
    <a-layout-header class="header-container">
        <div class="header-container-left"></div>    
        <div class="header-container-right">
            
        </div>    
    </a-layout-header>    
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
    .header-container {
    display: flex;
    background-color: #fff;
    width: 100%;
    &-left{
        flex: 1 1 0%;
    }
    &-right{
       text-align: right;

    }
  }
</style>