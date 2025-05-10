<template>
  <section class="py-16 transition-colors duration-300" 
           :class="isDarkMode ? 'bg-gray-800 text-white' : 'bg-gradient-to-br from-primary/10 to-primary/5 text-dark'">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-bold mb-4">订阅我的博客</h2>
        <p class="text-dark-gray mb-8 dark:text-gray-300">
          获取最新的前端技术文章和教程，直接发送到您的邮箱。
        </p>
        <form @submit.prevent="handleSubscribe" class="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input 
            v-model="email" 
            type="email" 
            placeholder="输入您的邮箱地址" 
            class="flex-grow px-4 py-3 rounded-lg transition-colors duration-200 focus:outline-none"
            :class="isDarkMode ? 'bg-gray-700 text-white border-gray-600 focus:ring-2 focus:ring-primary/50' : 'bg-white border border-gray-300 focus:ring-2 focus:ring-primary/50'"
          >
          <button 
            type="submit" 
            class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-md hover:shadow-lg whitespace-nowrap"
          >
            立即订阅
          </button>
        </form>
        <p class="text-xs text-dark-gray mt-4 dark:text-gray-400">
          我们尊重您的隐私，绝不会分享您的邮箱地址。
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  isDarkMode: {
    type: Boolean,
    required: true
  }
})

const email = ref('')

const handleSubscribe = () => {
  if (!email.value.trim()) {
    alert('请输入有效的邮箱地址')
    return
  }
  
  // 这里可以添加实际的订阅逻辑
  console.log('订阅邮箱:', email.value)
  alert('订阅成功！感谢您的关注。')
  email.value = ''
}
</script>    