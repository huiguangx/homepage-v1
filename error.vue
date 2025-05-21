<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-12">
    <!-- 404 图形 -->
    <div class="relative mb-8">
      <div class="text-9xl font-bold text-gray-200 select-none">404</div>
      <!-- <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg
          class="w-24 h-24 text-[#5A46FF]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </div> -->
    </div>

    <!-- 错误信息 -->
    <h1 class="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">页面未找到</h1>
    <p class="text-lg text-gray-600 text-center max-w-md mb-8">
      抱歉，您访问的页面不存在或已被移除。
    </p>

    <!-- 中间的返回链接 -->
    <a
      href="/"
      class="inline-flex items-center justify-center px-8 py-3 bg-[#5A46FF] text-white font-medium rounded-lg shadow-md hover:bg-[#7463FF] transition-colors duration-300 mb-8 focus:outline-none focus:ring-2 focus:ring-[#5A46FF] focus:ring-offset-2"
    >
      <svg
        class="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        ></path>
      </svg>
      返回首页
    </a>

    <!-- 建议选项 -->
    <div class="max-w-md w-full">
      <h2 class="text-lg font-medium text-gray-700 mb-3 text-center">您可能想要访问：</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <a
          href="/products"
          class="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:border-[#5A46FF] hover:shadow-sm transition-all duration-200"
        >
          <div class="bg-blue-100 p-2 rounded-full mr-3">
            <svg
              class="w-5 h-5 text-[#5A46FF]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              ></path>
            </svg>
          </div>
          <div>
            <div class="font-medium">产品介绍</div>
            <div class="text-sm text-gray-500">了解我们的产品和服务</div>
          </div>
        </a>
        <a
          href="/careers"
          class="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:border-[#5A46FF] hover:shadow-sm transition-all duration-200"
        >
          <div class="bg-blue-100 p-2 rounded-full mr-3">
            <svg
              class="w-5 h-5 text-[#5A46FF]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
          <div>
            <div class="font-medium">招贤纳士</div>
            <div class="text-sm text-gray-500">加入我们的团队</div>
          </div>
        </a>

        <a
          href="/contact"
          class="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:border-[#5A46FF] hover:shadow-sm transition-all duration-200"
        >
          <div class="bg-blue-100 p-2 rounded-full mr-3">
            <svg
              class="w-5 h-5 text-[#5A46FF]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
          <div>
            <div class="font-medium">联系我们</div>
            <div class="text-sm text-gray-500">期待与您的合作</div>
          </div>
        </a>
        <a
          href="/news"
          class="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:border-[#5A46FF] hover:shadow-sm transition-all duration-200"
        >
          <div class="bg-blue-100 p-2 rounded-full mr-3">
            <svg
              class="w-5 h-5 text-[#5A46FF]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              ></path>
            </svg>
          </div>
          <div>
            <div class="font-medium">新闻动态</div>
            <div class="text-sm text-gray-500">了解最新公司动态</div>
          </div>
        </a>
      </div>
      <div class="mt-3">
        <a
          href="/about"
          class="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:border-[#5A46FF] hover:shadow-sm transition-all duration-200"
        >
          <div class="bg-blue-100 p-2 rounded-full mr-3">
            <svg
              class="w-5 h-5 text-[#5A46FF]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div>
            <div class="font-medium">关于我们</div>
            <div class="text-sm text-gray-500">了解公司的使命和愿景</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// 可以添加一些额外的逻辑，比如记录404错误或提供搜索功能
import { onMounted } from 'vue'

onMounted(() => {
  // 可以在这里添加分析代码，记录404错误
  console.log('404页面被访问，路径:', window.location.pathname)

  // 也可以在这里添加自动重定向逻辑，例如：
  // 如果URL中包含特定的旧路径模式，可以重定向到新路径
})
</script>
