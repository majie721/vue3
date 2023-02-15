<template>
    <div>
        <h1>Home 页</h1>
        <div>exampleCounter:{{ counter }}</div>
        <button @click="increment">+1</button>
        <button @click="router.push({ 'path': '/account/settings' })">user center</button>
        <p></p>
        <p><button @click="handleRequest(1)">get1</button></p>
        <p><button @click="handleRequest(2)">get2</button></p>
        <p><button @click="handleRequest(3)">get3</button></p>
        <p><button @click="handleRequest(4)">post1</button></p>
        <p><button @click="handleRequest(5)">post2</button></p>
        <p><button @click="handleRequest(6)">post3</button></p>
        

    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useStore } from '@/stores/index'
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import api from '@/api'
const { exampleStore } = useStore();


const num = computed(() => exampleStore.counter)
const { counter } = storeToRefs(exampleStore)
const { increment, increment2 } = exampleStore
const router = useRouter()


const handleRequest = (type:number)=>{
    if(type === 1){
        api.demo.get1()
    }

    if(type === 2){
        api.demo.get2({a:1,b:2})
    }

    if(type === 3){
        api.demo.get3({a:1,b:2},{
            headers:{
              'tt-reqy':1  
            }
        })
    }

    if(type === 4){
        api.demo.post1({a:1,b:2},{
            id:1
        })
    }

    if(type === 4){
        api.demo.post2({a:1,b:2},{
            id:1
        })
    }

    if(type === 6){
        api.demo.post3({a:1,b:2},{
            id:1
        },{
            baseURL:'http://mock.com'
        })
    }


}



</script>

<style scoped>

</style>