<template>
  <div class="mt-12 flex justify-center">
    <nav class="inline-flex rounded-md shadow-sm">
      <a 
        href="#" 
        @click.prevent="handlePageChange(currentPage - 1)"
        :class="['page-btn px-3 py-2 rounded-l-md border border-gray-300', currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-sm font-medium text-gray-500 hover:bg-gray-50']"
      >
        <i class="fa-solid fa-chevron-left"></i>
      </a>
      
      <template v-if="totalPages <= 7">
        <!-- 总页数少于等于7，显示全部页码 -->
        <a 
          href="#" 
          v-for="page in totalPages" 
          :key="page"
          @click.prevent="handlePageChange(page)"
          :class="['page-btn px-3 py-2 border border-gray-300', page === currentPage ? 'bg-primary text-white' : 'bg-white text-sm font-medium text-gray-700 hover:bg-gray-50']"
        >
          {{ page }}
        </a>
      </template>
      
      <template v-else>
        <!-- 总页数大于7，显示部分页码 -->
        <a 
          href="#" 
          @click.prevent="handlePageChange(1)"
          :class="['page-btn px-3 py-2 border border-gray-300', 1 === currentPage ? 'bg-primary text-white' : 'bg-white text-sm font-medium text-gray-700 hover:bg-gray-50']"
        >
          1
        </a>
        
        <span v-if="currentPage > 4" class="px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">...</span>
        
        <a 
          href="#" 
          v-for="page in getDisplayedPages" 
          :key="page"
          @click.prevent="handlePageChange(page)"
          :class="['page-btn px-3 py-2 border border-gray-300', page === currentPage ? 'bg-primary text-white' : 'bg-white text-sm font-medium text-gray-700 hover:bg-gray-50']"
        >
          {{ page }}
        </a>
        
        <span v-if="currentPage < totalPages - 3" class="px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">...</span>
        
        <a 
          href="#" 
          @click.prevent="handlePageChange(totalPages)"
          :class="['page-btn px-3 py-2 border border-gray-300', totalPages === currentPage ? 'bg-primary text-white' : 'bg-white text-sm font-medium text-gray-700 hover:bg-gray-50']"
        >
          {{ totalPages }}
        </a>
      </template>
      
      <a 
        href="#" 
        @click.prevent="handlePageChange(currentPage + 1)"
        :class="['page-btn px-3 py-2 rounded-r-md border border-gray-300', currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-sm font-medium text-gray-500 hover:bg-gray-50']"
      >
        <i class="fa-solid fa-chevron-right"></i>
      </a>
    </nav>
  </div>
</template>

<script setup>
import { computed, defineProps, defineEmits } from 'vue'

const props = defineProps({
  totalItems: {
    type: Number,
    required: true
  },
  itemsPerPage: {
    type: Number,
    default: 10
  },
  currentPage: {
    type: Number,
    default: 1
  }
})

const emits = defineEmits(['page-change'])

const totalPages = computed(() => {
  return Math.ceil(props.totalItems / props.itemsPerPage)
})

const getDisplayedPages = computed(() => {
  let startPage, endPage
  
  if (totalPages.value <= 7) {
    // 总页数少于等于7，显示全部页码
    startPage = 2
    endPage = totalPages.value - 1
  } else {
    // 总页数大于7，显示当前页附近的页码
    if (props.currentPage <= 4) {
      startPage = 2
      endPage = 6
    } else if (props.currentPage >= totalPages.value - 3) {
      startPage = totalPages.value - 5
      endPage = totalPages.value - 1
    } else {
      startPage = props.currentPage - 2
      endPage = props.currentPage + 2
    }
  }
  
  return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)
})

const handlePageChange = (page) => {
  if (page < 1 || page > totalPages.value || page === props.currentPage) {
    return
  }
  
  emits('page-change', page)
}
</script>    