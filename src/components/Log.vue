<template>
    <div class="bb">
        <!-- <p>info <button @click="$emit('LogAdd')"> emit</button> </p> -->
        <p>info <button @click="()=>{logNum++}"> emit</button> </p>
        <P>子节点logNum: {{logNum}}</P>    
        <div>
            <p>
                <slot :count="1" :message="'qwere'">default header</slot>
            </p>
            <!-- <p>
                <slot>default body</slot>
            </p>
            <p>
                <slot name="footer">default footer</slot>
            </p> -->
        </div>
    </div>
</template>

<script setup lang="ts">
    import {inject} from 'vue'
    const logNum :number =  inject('logNum') as number
</script>

<style lang="scss" scoped>

</style>