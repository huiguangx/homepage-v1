<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-300 ',
      isScrolled || !isTransparentRoute
        ? 'bg-white shadow-sm text-gray-800 border-gray-200'
        : 'bg-transparent text-white',
    ]"
  >
    <div class="mx-auto w-[90%]">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <NuxtLinkLocale to="/" class="flex items-center">
            <img src="~/assets/images/header/logo.svg" alt="Logo" class="w-8 h-auto" />
            <p
              class="ml-[5px] font-bold"
              :class="{
                'text-white': !isScrolled && isTransparentRoute,
                'text-black': isScrolled || !isTransparentRoute,
              }"
            >
              星尘智能
            </p>
          </NuxtLinkLocale>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:block h-full mx-auto">
          <ul class="flex h-full items-center">
            <!-- 关键：h-full + items-center -->
            <li v-for="item in navItems" :key="item.path" class="h-full">
              <!-- li 也占满高度 -->
              <NuxtLinkLocale
                :to="item.path"
                class="group px-6 relative h-full flex justify-center items-center text-4 transition-colors duration-300"
                :class="{
                  'text-white hover:text-gray-200': !isScrolled && isTransparentRoute,
                  'text-black': isScrolled || !isTransparentRoute, // 这里确保非透明路由永远是黑色
                }"
              >
                {{ item.name }}
                <div class="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden">
                  <span
                    class="absolute bottom-0 left-1/2 h-full w-0 transform -translate-x-1/2 transition-all duration-300 ease-in-out"
                    :class="{
                      'w-full bg-white':
                        getBasePath($route.path) === item.path && !isScrolled && isTransparentRoute,
                      'w-full bg-gray-800':
                        getBasePath($route.path) === item.path &&
                        (isScrolled || !isTransparentRoute),
                      'group-hover:w-full bg-white':
                        getBasePath($route.path) !== item.path && !isScrolled && isTransparentRoute,
                      'group-hover:w-full bg-gray-800':
                        getBasePath($route.path) !== item.path &&
                        (isScrolled || !isTransparentRoute),
                    }"
                    style="transform-origin: center"
                  ></span>
                </div>
              </NuxtLinkLocale>
            </li>
          </ul>
        </nav>
        <div class="ml-4 hidden md:block">
          <div class="flex items-center">
            <div
              @click="changeLanguage(locale === 'zh' ? 'en' : 'zh')"
              class="mx-6 text-sm font-medium cursor-pointer"
            >
              {{ locale === 'zh' ? 'En' : '中文' }}
            </div>
            <NuxtLinkLocale
              class="px-4 py-2 text-white rounded font-thin bg-[#5A46FF] text-3.5 hover:bg-[#7463FF] transition-all duration-300 ease-out"
            >
              {{ $t('home.contact.title') }}
            </NuxtLinkLocale>
          </div>
        </div>
        <!-- Mobile menu button (hidden for now) -->
        <div class="md:hidden">
          <button class="inline-flex items-center justify-center p-2 rounded-md">
            <img src="~/assets/images/header/menu.svg" alt="" />
          </button>
        </div>
      </div>
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
  { name: t('menu.news'), path: '/news' },
  { name: t('menu.about'), path: '/about' },
])
const getBasePath = (path) => {
  // 匹配以 /zh 或 /en 开头的路径，并去掉语言前缀
  return path.replace(/^\/(zh|en)/, '') || '/'
}

// 语言切换
const { locale, setLocale } = useI18n()

const changeLanguage = (locale) => {
  setLocale(locale)
}

// 监听滚动事件
const handleScroll = () => {
  isScrolled.value = window.scrollY > scrollThreshold
}

// 需要透明背景的路由路径列表（支持中英文）
const transparentRoutes = new Set(['/', '/home', '/zh', '/zh/home', '/en', '/en/home'])

// 判断当前路由是否需要透明背景
const isTransparentRoute = computed(() => {
  return transparentRoutes.has(route.path)
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // 初始检查滚动位置
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
