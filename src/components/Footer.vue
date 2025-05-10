<template>
  <footer class="py-12 md:py-16 transition-colors duration-300" :class="isDarkMode ? 'bg-gray-900 text-white' : 'bg-dark text-white'">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">AppleBlog</h3>
          <p class="text-gray-400 mb-6">
            探索前端技术的无限可能，分享创意与实践的个人博客。
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">快速链接</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">首页</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">文章</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">分类</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">关于</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">联系</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">分类</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">前端开发</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">UI/UX设计</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">性能优化</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">JavaScript</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">CSS框架</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">联系方式</h3>
          <ul class="space-y-2">
            <li class="flex items-center text-gray-400">
              <i class="fa-solid fa-envelope mr-2"></i>
              <a href="mailto:contact@appleblog.com" class="hover:text-white transition-colors duration-200">contact@appleblog.com</a>
            </li>
            <li class="flex items-center text-gray-400">
              <i class="fa-solid fa-map-marker-alt mr-2"></i>
              <span>北京市海淀区</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="border-t transition-colors duration-300 mt-12 pt-8 text-center text-gray-500 text-sm"
           :class="isDarkMode ? 'border-gray-800' : 'border-gray-800'">
        <p>&copy; 2023 AppleBlog. 保留所有权利。</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
defineProps({
  isDarkMode: {
    type: Boolean,
    required: true
  }
})
</script>    