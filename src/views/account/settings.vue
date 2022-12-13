<template>
    <div>
        <h1>user settings</h1>
        <div>exampleCounter:{{counter}}</div>
        <div>num:{{num}}</div>
        <button @click="increment">+1</button>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from 'pinia';
   import { useExampleStore } from '@/stores/example';
import { computed } from 'vue';
   
    const exampleStore  = useExampleStore()
    const {counter} = storeToRefs(exampleStore)
    const {increment} = exampleStore

    const num = computed(()=>exampleStore.counter)


    

</script>

<style scoped>

</style>