<template>
    <div>
        <h2>detail</h2>
        requiresAuth :{{$route.meta.requiresAuth}}
        <div>
            
            {{foo + 1}}
            <p>num:{{num}}</p>
            <p>double:{{double}}</p>
            <p>double:{{funcValue()}}</p>
        </div>
        <button @click="()=>foo++" >foo +1</button>
        <button @click="()=>num++" >num +1</button>
        <button @click="()=>x++" >x +1</button>
        <button @click="()=>y++" >y +2</button>
    </div>
</template>

<script setup lang="ts">


    import {ref,computed,watch} from 'vue'
    const object = { foo: ref(1),num : ref(0) }
    const {foo,num} = object;
    const x = ref(0)
    const y = ref(0)

    const double = computed(()=>{
        return foo.value*2
    })

   function funcValue(){
    console.log(22)
    return  foo.value*3
   }

   watch(
        () => x.value + y.value,
        (sum) => {
            console.log(`sum of x + y is: ${sum}`)
        }
    )

    watch(
        [foo,num],
        ([newFoo,newNum]) => {
            console.log(`newFoo is: ${newFoo},newFoo is: ${newNum}`)
        }
    )
        

</script>

<style scoped>

</style>