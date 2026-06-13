import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import FamilyTree from './views/FamilyTree.vue'
import Stories from './views/Stories.vue'
import './style.css'

// 路由配置
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/family-tree',
      name: 'FamilyTree',
      component: FamilyTree
    },
    {
      path: '/stories',
      name: 'Stories',
      component: Stories
    }
  ]
})

// 创建应用
const app = createApp(App)
app.use(router)
app.mount('#app')