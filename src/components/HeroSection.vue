<template>
  <section class="pt-32 pb-20 md:pt-40 md:pb-32 transition-colors duration-300" 
           :class="isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-primary/5 to-primary/10 text-dark'">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <h1 class="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-6 text-shadow">
          探索前端技术的无限可能
        </h1>
        <p class="text-lg text-dark-gray mb-8 text-balance dark:text-gray-300">
          分享Web开发的最新趋势、技术和最佳实践，助你成为更优秀的前端工程师。
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#articles" class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-md hover:shadow-lg">
            浏览文章
          </a>
          <a href="#categories" class="px-6 py-3 border rounded-lg hover:bg-primary/5 transition-colors duration-200"
             :class="isDarkMode ? 'border-gray-700 text-white hover:bg-gray-800' : 'border-primary text-primary'">
            探索分类
          </a>
        </div>
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