<script setup>
import{ref} from 'vue'
import { useRouter } from 'vue-router'
import {useCounterStore} from '@/stores/counter'
import {Get_key,Get_gg} from '@/backend/api'
const Store=useCounterStore()
const    router = useRouter ()
const cc = ref('')
const ss  = ()=>{
  cc.value =Store.count
}
const aa=()=>{
  Store.increment()
}
const dd=()=>{
  Store.$reset()
}

async function logo (){
  let res = await Get_key()
  Store.key =res.data
  localStorage.setItem("token",res.data )
}

async function logo1 (){
   try {
    let res = await Get_gg()
    console.log(res.data)
   } catch (e) {
     console.log(e)
   }

}

function vv(){
  router.push({name:'about'})
}


</script>

<template>
  <main>
    <button @click="logo">獲得要使</button>
    <button @click="logo1">登入</button>
    <button @click="ss">顯示</button>
    <h1>{{cc}}</h1>
    <button @click="aa">+++</button>
    <button @click="dd">重製</button>
    <button @click="vv">跳</button>
  </main>
</template>
