<script setup>
import{ref} from 'vue'
import {Get_gg} from '@/backend/api'
import {useCounterStore} from '@/stores/counter'
const Store=useCounterStore()


async function logo1 (){
   try {
    let res = await Get_gg()
    console.log(res.data)
   } catch (e) {
     console.log(e)
   }

}


</script>



<template>
  <div class="about">
    <h2>{{Store.count}}</h2>
    <h1>This is an about page</h1>
  </div>
  <button @click="logo1">登入</button>
</template>


