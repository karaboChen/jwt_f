import { ref } from 'vue'
import { defineStore } from 'pinia'
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const key = ref('')
  function increment() {
    count.value++
  }

  return { count,  increment ,key}
})
