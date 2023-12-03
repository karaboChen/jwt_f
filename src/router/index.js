import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {useCounterStore} from '@/stores/counter'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/login',
      name: '登入',
      component: () => import('../views/login.vue'),
    },
  ]
})

router.beforeEach((to,from)=>{
  console.log(4)
  const Store=useCounterStore() 
  console.log(to.name)
  console.log(from.name)
})

export default router
