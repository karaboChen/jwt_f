
import { createApp } from 'vue'
import { createPinia } from "pinia";
import App from './App.vue'
import router from './router'
const app = createApp(App)

const pinia = createPinia();
pinia.use(({ store }) => {
  const initialState = JSON.parse(JSON.stringify(store.$state));
  store.$reset = () => {
    store.$patch(initialState);
  };
});

app.use(pinia)
app.use(router)
app.mount('#app')



