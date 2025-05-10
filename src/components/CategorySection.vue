<template>
  <section id="categories" class="py-16 transition-colors duration-300" :class="isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-dark'">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl md:text-3xl font-bold mb-12">文章分类</h2>
      
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <a href="#" class="category-card transition-all duration-200 hover:translate-y-[-1px] hover:shadow-lg"
           :class="isDarkMode ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' : 'bg-white hover:bg-primary/5 border border-gray-100'">
          <div class="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
               :class="isDarkMode ? 'bg-primary/20' : 'bg-primary/10'">
            <i class="fa-solid fa-code text-primary text-2xl"></i>
          </div>
          <h3 class="text-lg font-semibold mb-1">前端开发</h3>
          <p class="text-sm text-dark-gray dark:text-gray-400 text-center">24 篇文章</p>
        </a>
        
        <!-- 其他分类卡片保持类似结构 -->
        <a href="#" class="category-card transition-all duration-200 hover:translate-y-[-1px] hover:shadow-lg"
           :class="isDarkMode ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' : 'bg-white hover:bg-primary/5 border border-gray-100'">
          <div class="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
               :class="isDarkMode ? 'bg-primary/20' : 'bg-primary/10'">
            <i class="fa-solid fa-paint-brush text-primary text-2xl"></i>
          </div>
          <h3 class="text-lg font-semibold mb-1">UI/UX设计</h3>
          <p class="text-sm text-dark-gray dark:text-gray-400 text-center">18 篇文章</p>
        </a>
        
        <!-- 其他卡片... -->
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  isDarkMode: {
    type: Boolean,
    required: true
  }
})
</script>    