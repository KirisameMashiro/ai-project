<template>
  <header 
    class="fixed w-full top-0 z-50 transition-all duration-300" 
    :class="[
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-dark shadow-md',
      scrolled ? 'header-scrolled' : ''
    ]"
  >
    <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16 md:h-20">
        <div class="flex items-center">
          <a href="#" class="text-2xl font-bold" :class="isDarkMode ? 'text-white' : 'text-primary'">
            <span :class="isDarkMode ? 'text-white' : 'text-dark'">Mashiro</span>Blog
          </a>
        </div>
        <div class="hidden md:flex items-center space-x-8">
          <a href="../../index.html" :class="navLinkClass">首页</a>
          <a href="#" :class="navLinkClass">文章</a>
          <a href="#" :class="navLinkClass">分类</a>
          <a href="#" :class="navLinkClass">关于</a>
          <a href="#" :class="navLinkClass">联系</a>
        </div>
        <div class="flex items-center space-x-4">
          <button @click="toggleDarkMode" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                  :class="isDarkMode ? 'bg-gray-800' : 'bg-gray-100'">
            <i class="fa-solid" :class="isDarkMode ? 'fa-sun text-yellow-400' : 'fa-moon text-gray-600'"></i>
          </button>
          <button @click="toggleMobileMenu" class="p-2 rounded-full focus:outline-none md:hidden transition-transform duration-300"
                  :class="isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-dark'"
                  :style="{ transform: mobileMenuOpen ? 'rotate(90deg)' : 'rotate(0)' }">
            <i class="fa-solid fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </nav>
    
    <!-- 移动端菜单 -->
    <div 
      class="md:hidden overflow-hidden transition-all duration-300 max-h-0"
      :class="[
        { 'mobile-menu-open': mobileMenuOpen },
        isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      ]"
    >
      <div class="container mx-auto px-4 py-2 space-y-1">
        <a href="../../index.html" :class="mobileNavLinkClass" @click="navigateAndClose">首页</a>
        <a href="#" :class="mobileNavLinkClass" @click="navigateAndClose">文章</a>
        <a href="#" :class="mobileNavLinkClass" @click="navigateAndClose">分类</a>
        <a href="#" :class="mobileNavLinkClass" @click="navigateAndClose">关于</a>
        <a href="#" :class="mobileNavLinkClass" @click="navigateAndClose">联系</a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  isDarkMode: {
    type: Boolean,
    required: true
  },
  toggleDarkMode: {
    type: Function,
    required: true
  }
})

const mobileMenuOpen = ref(false)
const scrolled = ref(false)

const navLinkClass = computed(() => {
  return props.isDarkMode 
    ? 'text-gray-300 hover:text-white transition-colors duration-200 font-medium'
    : 'text-dark hover:text-primary transition-colors duration-200 font-medium'
})

const mobileNavLinkClass = computed(() => {
  return props.isDarkMode 
    ? 'block py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium'
    : 'block py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium'
})

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const navigateAndClose = () => {
  mobileMenuOpen.value = false
}

// 监听滚动事件
const handleScroll = () => {
  scrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.mobile-menu-open {
  max-height: 500px !important;
}

.header-scrolled {
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* 增强导航链接悬停效果 */
.md\\:flex a {
  position: relative;
  transition: all 0.3s ease;
}

.md\\:flex a:not(.text-primary):hover {
  color: #165DFF !important;
}

.md\\:flex a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -2px;
  left: 0;
  background-color: #165DFF;
  transition: width 0.3s ease;
}

.md\\:flex a:hover::after {
  width: 100%;
}

/* 移动端菜单链接增强 */
.mobileNavLinkClass {
  @apply block py-3 px-4 rounded-lg transition-colors duration-200 font-medium;
}
</style>    