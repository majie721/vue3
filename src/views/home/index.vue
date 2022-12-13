<template>
    <div>
        <h1>Home 页</h1>
        <div>exampleCounter:{{counter}}</div>
        <button @click="increment">+1</button>
    </div>
</template>

<script setup lang="ts">
    import { useExampleStore } from '@/stores/example';
    const {counter,increment}  = useExampleStore()
</script>

<style scoped>

</style>