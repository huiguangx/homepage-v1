<template>
  <div class="relative overflow-hidden">
    <header
      :class="[
        'fixed top-0 left-0 w-full z-50 transition-all duration-300  ',
        isScrolled || !isTransparentRoute
          ? 'bg-white shadow-sm text-gray-800 border-gray-200'
          : 'bg-transparent text-white',
      ]"
    >
      <div class="mx-auto w-[90%]">
        <div class="flex items-center justify-between pw-h-[44px] md:h-16">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <NuxtLinkLocale to="/" class="flex items-center">
              <img
                v-if="isScrolled || !isTransparentRoute"
                src="~/assets/images/header/logo.svg"
                alt="Logo"
                class="pw-w-[27px] md:w-8 h-auto"
              />
              <img
                v-if="!isScrolled && isTransparentRoute"
                src="~/assets/images/header/logo-white.svg"
                alt="Logo"
                class="pw-w-[27px] md:w-8 h-auto"
              />
              <p
                class="ml-1 pw-text-[20px] md:text-xl font-medium"
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
              <li v-for="item in navItems" :key="item.path" class="h-full">
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
                          getBasePath($route.path) === item.path &&
                          !isScrolled &&
                          isTransparentRoute,
                        'w-full bg-gray-800':
                          getBasePath($route.path) === item.path &&
                          (isScrolled || !isTransparentRoute),
                        'group-hover:w-full bg-white':
                          getBasePath($route.path) !== item.path &&
                          !isScrolled &&
                          isTransparentRoute,
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
            <div class="flex items-center justify-end">
              <div
                @click="changeLanguage(locale === 'zh' ? 'en' : 'zh')"
                class="mx-6 text-sm font-medium cursor-pointer text-center"
              >
                {{ locale === 'zh' ? 'En' : '中文' }}
              </div>
              <NuxtLinkLocale
                to="/contact"
                class="px-4 py-2 text-white rounded font-thin bg-[#5A46FF] text-3.5 md:hover:bg-[#7463FF] transition-all duration-300 ease-out whitespace-nowrap"
              >
                {{ $t('home.contact.title') }}
              </NuxtLinkLocale>
            </div>
          </div>
          <!-- Mobile menu button (hidden for now) -->
          <div class="md:hidden">
            <div @click="isMenuOpen = true">
              <img
                class="block pw-w-[24px]"
                src="~/assets/images/header/menu.svg"
                alt="Menu"
                :class="{
                  'invert brightness-100': !isScrolled && isTransparentRoute,
                }"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- sidebar -->
      <div
        class="block md:hidden fixed top-0 right-0 w-full h-auto bg-white z-50 transform transition-transform duration-300 ease-in-out overflow-hidden pw-pb-[12px] pw-px-[16px] rounded-bl-2xl rounded-br-2xl"
        :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'"
      >
        <div class="flex flex-col w-full h-full">
          <div class="flex items-center justify-between pw-h-[44px]">
            <div class="flex items-center">
              <img src="~/assets/images/header/logo.svg" alt="Logo" class="pw-w-[27px] h-auto" />
              <span class="ml-2 text-black pw-text-[20px] font-medium">星尘智能</span>
            </div>
            <button
              @click="isMenuOpen = false"
              class="p-2 text-gray-500 focus:outline-none"
              aria-label="关闭菜单"
            >
              <img src="~/assets/images/header/close.svg" alt="Close" />
            </button>
          </div>

          <div class="flex-1 overflow-y-auto">
            <nav>
              <ul>
                <li v-for="(item, index) in navItems" :key="index">
                  <NuxtLinkLocale
                    :to="item.path"
                    class="flex items-center justify-between pw-py-[12px]"
                    @click="isMenuOpen = false"
                  >
                    <span class="pw-text-[16px] text-black">{{ item.name }}</span>
                    <img src="~/assets/images/header/goto-arrow.svg" alt="Arrow" />
                  </NuxtLinkLocale>
                </li>
              </ul>
            </nav>
          </div>
          <div class="pw-pt-[12px] border-t border-gray-200">
            <button
              @click="changeLanguage(locale === 'zh' ? 'en' : 'zh')"
              class="pw-text-[14px] text-[#475467]"
            >
              {{ locale === 'zh' ? 'Switch to English' : '切换到中文' }}
            </button>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { locale, setLocale } = useI18n()
const isMobileMenuOpen = ref(false)
const isMenuOpen = ref(false)
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

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

const changeLanguage = (locale) => {
  isMenuOpen.value = false
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
