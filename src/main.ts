import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import FamilyTree from './views/FamilyTree.vue'
import Stories from './views/Stories.vue'
import './style.css'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
      { path: '/', name: 'Home', component: Home },
      { path: '/family-tree', name: 'FamilyTree', component: FamilyTree },
      { path: '/stories', name: 'Stories', component: Stories }
        ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
