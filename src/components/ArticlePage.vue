<template>
  <div class="article-page container mx-auto px-4 py-8">
    <!-- 文章头部 -->
    <header class="mb-8">
      <h1 class="text-[clamp(1.8rem,4vw,3rem)] font-bold text-gray-900 dark:text-white mb-3">
        {{ article.title }}
      </h1>
      <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
        <span class="flex items-center mr-4">
          <i class="fa-regular fa-calendar mr-1"></i> {{ article.date }}
        </span>
        <span class="flex items-center mr-4">
          <i class="fa-regular fa-user mr-1"></i> {{ article.author }}
        </span>
        <span class="flex items-center">
          <i class="fa-regular fa-clock mr-1"></i> {{ article.readTime }} 分钟阅读
        </span>
      </div>
      <div class="relative rounded-xl overflow-hidden mb-8">
        <img :src="article.image" alt="文章配图" class="w-full h-auto object-cover rounded-xl">
      </div>
    </header>

    <!-- 文章内容 -->
    <article class="prose prose-lg max-w-none mb-12 dark:prose-invert">
      <div v-html="article.content"></div>
    </article>

    <!-- 标签 -->
    <div class="flex flex-wrap gap-2 mb-12">
      <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm" 
            v-for="tag in article.tags" :key="tag">
        #{{ tag }}
      </span>
    </div>

    <!-- 作者信息 -->
    <div class="flex items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl mb-12">
      <img :src="article.authorImage" alt="作者头像" class="w-16 h-16 rounded-full mr-4">
      <div>
        <h3 class="font-bold text-lg mb-1">{{ article.author }}</h3>
        <p class="text-gray-600 dark:text-gray-300 text-sm">
          {{ article.authorBio }}
        </p>
      </div>
    </div>

    <!-- 评论区 -->
    <div class="mb-12">
      <h3 class="text-xl font-bold mb-6">评论 ({{ article.comments.length }})</h3>
      
      <!-- 评论输入框 -->
      <div class="mb-8">
        <textarea 
          v-model="newComment" 
          placeholder="写下你的评论..." 
          class="w-full p-4 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
          rows="3"
        ></textarea>
        <button 
          @click="postComment" 
          class="mt-3 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          发表评论
        </button>
      </div>
      
      <!-- 评论列表 -->
      <div class="space-y-6" v-for="comment in article.comments" :key="comment.id">
        <div class="flex">
          <img :src="comment.avatar" alt="评论者头像" class="w-10 h-10 rounded-full mr-3">
          <div class="flex-1">
            <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <div class="flex items-center justify-between mb-2">
                <h4 class="font-medium">{{ comment.name }}</h4>
                <span class="text-xs text-gray-500 dark:text-gray-400">{{ comment.date }}</span>
              </div>
              <p class="text-gray-700 dark:text-gray-300">{{ comment.content }}</p>
            </div>
            <div class="flex mt-2 text-sm">
              <button class="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors mr-4">
                <i class="fa-regular fa-heart mr-1"></i> 喜欢
              </button>
              <button class="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
                <i class="fa-regular fa-comment mr-1"></i> 回复
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 相关文章 -->
    <div>
      <h3 class="text-xl font-bold mb-6">相关文章</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-lg transition-shadow" 
             v-for="related in relatedArticles" :key="related.id">
          <img :src="related.image" alt="相关文章图片" class="w-full h-48 object-cover">
          <div class="p-4">
            <h4 class="font-medium mb-2 line-clamp-2">
              <router-link :to="`/article/${related.id}`" class="hover:text-primary transition-colors">
                {{ related.title }}
              </router-link>
            </h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
              {{ related.excerpt }}
            </p>
            <div class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>{{ related.date }}</span>
              <span>{{ related.readTime }} 分钟阅读</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { articles } from '../data/articles'; // 假设数据在data目录下

const route = useRoute();
const articleId = computed(() => parseInt(route.params.id));
const article = computed(() => articles.find(a => a.id === articleId.value) || articles[0]);

onMounted(() => {
  if (!article.value) {
    console.log('文章数据未找到');
  }
});

// 相关文章（基于分类）
const relatedArticles = computed(() => {
  return articles
    .filter(a => a.id !== articleId.value && a.category === article.value.category)
    .slice(0, 2);
});

// 评论功能
const newComment = ref('');

const postComment = () => {
  if (newComment.value.trim()) {
    // 实际项目中这里应该发送API请求
    console.log('发布评论:', newComment.value);
    newComment.value = '';
  }
};
</script>

<style scoped>
.prose h2 {
  margin-top: 2rem !important;
}

.prose p {
  margin-bottom: 1rem !important;
}
</style>  