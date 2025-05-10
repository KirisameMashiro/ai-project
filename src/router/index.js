import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import ArticlePage from '../components/ArticlePage.vue'

const routes = [
  {
    path: '/',
    name: 'App',
    component: App
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: ArticlePage,
    props: true  // 将路由参数作为props传递给组件
  },
]

const router = createRouter({
  history: createWebHistory('/ai-project/'),
  routes
})

export default router    