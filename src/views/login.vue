

<script setup>
import { useRouter,useRoute } from 'vue-router'
import {ref} from'vue'
const ans =ref(123)
const vv = ref(123)
const  router  =useRouter()
const  route  =useRoute()
const  confirm =()=>{
  if(vv.value === ans.value)
  {  
    router.replace(route.query.redirect)

  }
}

</script>


<template>
  <div>
    <label for="">密碼</label>
    <input type="text" v-model="vv">
    <button @click="confirm">++</button>
  </div>
</template>

<style lang="scss" scoped>

</style>