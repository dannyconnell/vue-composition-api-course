import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

const router = createRouter({
  history: createWebHashHistory,
  routes: []
})

createApp(App)
  .use(router)
  .mount('#app')
