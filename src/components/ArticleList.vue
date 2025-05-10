<template>
  <section id="articles" class="py-16 transition-colors duration-300" :class="isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-dark'">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center mb-12">
        <h2 class="text-2xl md:text-3xl font-bold">最新文章</h2>
        <div class="flex space-x-2">
          <button @click="filterArticles('全部')" class="category-filter px-4 py-2 rounded-lg transition-colors duration-200"
                  :class="activeCategory === '全部' ? 'bg-primary text-white' : isDarkMode ? 'bg-gray-700 text-white' : 'bg-light-gray'">
            全部
          </button>
          <button @click="filterArticles('前端开发')" class="category-filter px-4 py-2 rounded-lg transition-colors duration-200"
                  :class="activeCategory === '前端开发' ? 'bg-primary text-white' : isDarkMode ? 'bg-gray-700 text-white' : 'bg-light-gray'">
            前端开发
          </button>
          <button @click="filterArticles('性能优化')" class="category-filter px-4 py-2 rounded-lg transition-colors duration-200"
                  :class="activeCategory === '性能优化' ? 'bg-primary text-white' : isDarkMode ? 'bg-gray-700 text-white' : 'bg-light-gray'">
            性能优化
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ArticleCard v-for="article in paginatedArticles" :key="article.id" :article="article" :isDarkMode="isDarkMode" />
      </div>

      <!-- 分页 -->
      <Pagination 
        :total-items="filteredArticles.length" 
        :items-per-page="articlesPerPage" 
        :current-page="currentPage"
        @page-change="handlePageChange"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import ArticleCard from './ArticleCard.vue'
import Pagination from './Pagination.vue'
import { articles } from '../data/articles'

defineProps({
  isDarkMode: {
    type: Boolean,
    required: true
  }
})

const activeCategory = ref('全部')
const currentPage = ref(1)
const articlesPerPage = 6

const filteredArticles = computed(() => {
  if (activeCategory.value === '全部') {
    return articles
  }
  return articles.filter(article => article.category === activeCategory.value)
})

const paginatedArticles = computed(() => {
  const startIndex = (currentPage.value - 1) * articlesPerPage
  const endIndex = startIndex + articlesPerPage
  return filteredArticles.value.slice(startIndex, endIndex)
})

const filterArticles = (category) => {
  activeCategory.value = category
  currentPage.value = 1 // 重置页码
}

const handlePageChange = (page) => {
  currentPage.value = page
}
</script>    