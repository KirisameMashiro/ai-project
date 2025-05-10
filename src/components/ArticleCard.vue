<template>
  <article class="article-card overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
           :class="isDarkMode ? 'bg-gray-800 text-white border border-gray-700' : 'bg-white text-dark border border-gray-100'">
    <div class="h-48 overflow-hidden">
      <router-link :to="`/article/${article.id}`" class="block h-full">
        <img 
          :src="article.image" 
          :alt="article.title" 
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        >
      </router-link>
    </div>
    <div class="p-6">
      <div class="flex items-center text-xs text-dark-gray mb-3 dark:text-gray-400">
        <span class="category-badge bg-opacity-20 dark:bg-opacity-30">{{ article.category }}</span>
        <span class="mx-2">•</span>
        <span>{{ article.date }}</span>
      </div>
      <h3 class="text-xl font-semibold mb-2">
        <router-link 
          :to="`/article/${article.id}`" 
          class="hover:text-primary transition-colors duration-300 group-hover:underline group-hover:underline-offset-2"
        >
          {{ article.title }}
        </router-link>
      </h3>
      <p class="text-dark-gray mb-4 line-clamp-3 dark:text-gray-300">
        {{ article.excerpt }}
      </p>
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <img :src="article.authorImage" :alt="article.author" class="w-8 h-8 rounded-full mr-2">
          <span class="text-sm text-dark-gray dark:text-gray-400">{{ article.author }}</span>
        </div>
        <router-link 
          :to="`/article/${article.id}`" 
          class="text-primary hover:text-primary/80 text-sm flex items-center group-hover:translate-x-1 transition-transform duration-300"
        >
          阅读更多 <i class="fa-solid fa-arrow-right ml-1"></i>
        </router-link>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true
  },
  isDarkMode: {
    type: Boolean,
    required: true
  }
})
</script>    