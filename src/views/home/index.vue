<template>
    <div>
        <h1>Home 页</h1>
        <div>exampleCounter:{{ counter }}</div>
        <button @click="increment">+1</button>
        <button @click="router.push({ 'path': '/account/settings' })">user center</button>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useStore } from '@/stores/index'
import { computed } from 'vue';
import { useRouter } from 'vue-router';
const { exampleStore } = useStore();

const num = computed(() => exampleStore.counter)
const { counter } = storeToRefs(exampleStore)
const { increment, increment2 } = exampleStore
const router = useRouter()

console.log('router11',router.getRoutes());


</script>

<style scoped>

</style>