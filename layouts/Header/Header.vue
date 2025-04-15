<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      isScrolled || !isTransparentRoute
        ? 'bg-white shadow-sm text-gray-800 border-gray-200'
        : 'bg-transparent text-white',
    ]"
  >
    <div class="mx-auto px-6 flex items-center justify-between h-full">
      <!-- 左侧 Logo -->
      <div class="flex items-center">
        <AppLink to="/" class="flex items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="text-purple-600"
          >
            <path d="M12 2L2 20H22L12 2Z" fill="currentColor" />
          </svg>
        </AppLink>
      </div>

      <!-- 右侧导航菜单 -->
      <nav class="">
        <ul class="flex space-x-4">
          <li v-for="item in navItems" :key="item.path">
            <NuxtLinkLocale
              :to="item.path"
              class="group relative py-2 flex justify-center items-center text-[32px] transition-colors duration-300"
              :class="{
                'text-white hover:text-gray-200': !isScrolled && isTransparentRoute,
                'text-gray-800 hover:text-gray-600': isScrolled || !isTransparentRoute,
              }"
            >
              {{ item.name }}
              <div class="absolute bottom-0 left-0 w-full h-[3px] overflow-hidden">
                <span
                  class="absolute bottom-0 left-1/2 h-full w-0 transform -translate-x-1/2 transition-all duration-300 ease-out"
                  :class="{
                    'w-full bg-white':
                      $route.path === item.path && !isScrolled && isTransparentRoute,
                    'w-full bg-gray-800':
                      $route.path === item.path && (isScrolled || !isTransparentRoute),
                    'group-hover:w-full bg-white':
                      $route.path !== item.path && !isScrolled && isTransparentRoute,
                    'group-hover:w-full bg-gray-800':
                      $route.path !== item.path && (isScrolled || !isTransparentRoute),
                  }"
                  style="transform-origin: center"
                ></span>
              </div>
            </NuxtLinkLocale>
          </li>

          <!-- 语言切换按钮 -->
          <li>
            <button
              @click="changeLanguage(locale === 'zh' ? 'en' : 'zh')"
              class="text-xs"
              :class="{
                'text-gray-800 hover:text-gray-600': isScrolled || !isTransparentRoute,
                'text-white hover:text-gray-200': !isScrolled && isTransparentRoute,
              }"
            >
              {{ locale === 'zh' ? 'EN' : '中文' }}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

// 路由和滚动状态
const route = useRoute()
const isScrolled = ref(false)
const scrollThreshold = 150 // 滚动阈值，超过此值背景变为白色

// 导航项目
const { t } = useI18n()
const navItems = computed(() => [
  { name: t('menu.home'), path: '/' },
  { name: t('menu.products'), path: '/product' },
  { name: t('menu.careers'), path: '/careers' },
  { name: t('menu.about'), path: '/about' },
])

// 语言切换
const { locale, setLocale } = useI18n()
// const { switchLanguage } = useLanguageSwitch({ defaultLocale: 'zh', alwaysPrefix: false })

const changeLanguage = (locale) => {
  setLocale(locale)
}
// 监听滚动事件
const handleScroll = () => {
  isScrolled.value = window.scrollY > scrollThreshold
}

// 需要透明背景的路由路径列表（支持中英文）
const transparentRoutes = ref([
  '/',
  '/home',
  '/product',
  '/news',
  '/zh',
  '/zh/home',
  '/zh/product',
  '/zh/news',
  '/en',
  '/en/home',
  '/en/product',
  '/en/news',
])

const isTransparentRoute = computed(() => {
  const isTransparentPath = transparentRoutes.value.some((path) => route.path.startsWith(path))
  // 透明路径页面：滚动后变白色
  // 非透明路径页面：滚动后变透明
  return isTransparentPath ? !isScrolled.value : isScrolled.value
})

const currentRoutePath = computed(() => route.path)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // 初始检查滚动位置
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
