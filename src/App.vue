<template>
  <div :class="{'dark': isDarkMode}" class="font-inter antialiased bg-light-gray text-dark">
    <Header :isDarkMode="isDarkMode" :toggleDarkMode="toggleDarkMode" />
    <HeroSection :isDarkMode="isDarkMode" />
    <ArticleList :isDarkMode="isDarkMode" />
    <CategorySection :isDarkMode="isDarkMode" />
    <SubscribeSection :isDarkMode="isDarkMode" />
    <Footer :isDarkMode="isDarkMode" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Header from './components/Header.vue'
import HeroSection from './components/HeroSection.vue'
import ArticleList from './components/ArticleList.vue'
import CategorySection from './components/CategorySection.vue'
import SubscribeSection from './components/SubscribeSection.vue'
import Footer from './components/Footer.vue'

const isDarkMode = ref(false)

onMounted(() => {
  // 检查本地存储的主题偏好
  const savedTheme = localStorage.getItem('appleblog-theme')
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'dark'
  } else {
    // 默认使用系统主题
    isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  
  // 应用主题到HTML元素
  document.documentElement.classList.toggle('dark', isDarkMode.value)
})

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('appleblog-theme', isDarkMode.value ? 'dark' : 'light')
  document.documentElement.classList.toggle('dark', isDarkMode.value)
}
</script>    