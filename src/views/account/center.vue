<template>
    <div>
        <h1>user center</h1>
        <div>exampleCounter:{{ counter }}</div>
        <div>num:{{ num }}</div>
        <button @click="increment">+1</button>
        <button @click="increment2">+10</button>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useStore } from '@/stores/index'
import { computed } from 'vue';
const { exampleStore } = useStore();

const num = computed(() => exampleStore.counter)
const { counter } = storeToRefs(exampleStore)
const { increment, increment2 } = exampleStore







</script>

<style scoped>

</style>