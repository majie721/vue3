<template>
    <div>
        <h2>list</h2>
        requiresAuth :{{$route.meta.requiresAuth}}

        <div>
            <Log class="aa" @LogAdd="()=>logNum++" v-slot="slotProps">
                <template >body111 </template>
               <p>作用域插槽:  {{ slotProps.message }} {{ slotProps.count }}</p> 
            </Log>
           <p>logNum: {{logNum}}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
    import Log from "@/components/Log.vue"
    import {ref,provide, readonly} from 'vue'
    const logNum = ref(0)
    const item = ref({
        num:1,
        name:'appale'
    })
    provide("logNum", readonly(logNum))

</script>

<style lang="scss" scoped>

</style>