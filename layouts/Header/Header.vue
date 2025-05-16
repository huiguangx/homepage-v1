<template>
  <div>
    <header :class="headerComputedClasses">
      <div class="mx-auto w-[90%] md:max-w-[1280px]">
        <div class="flex items-center justify-between pw-h-[44px] md:h-16">
          <div class="flex-shrink-0 pw-w-[120px] md:w-36">
            <NuxtLinkLocale to="/" class="flex items-center">
              <div v-if="showLargeLogoOuterDiv">
                <img
                  v-if="showLargeLogoInnerCondition"
                  src="~/assets/images/header/logo-header.png"
                  alt="Logo"
                  class="pw-w-[112px] md:w-[127px] h-auto"
                />
              </div>
              <img
                v-if="showSmallLogoCondition"
                src="~/assets/images/header/logo.png"
                alt="Logo"
                class="pw-w-[27px] md:w-[31px] h-auto"
              />
              <img
                v-if="showLogoProductScroll"
                src="~/assets/images/header/logo-move.png"
                alt="Logo"
                class="pw-w-[112px] md:w-[127px] h-auto"
              />
              <p
                v-if="showLogoTextCondition"
                class="ml-1 pw-text-[20px] md:text-2xl font-normal"
                :class="logoTextComputedClasses"
              >
                星尘智能
              </p>
            </NuxtLinkLocale>
          </div>

          <nav class="hidden md:block h-full mx-auto">
            <ul class="flex h-full items-center">
              <li v-for="item in navItems" :key="item.path" class="h-full">
                <NuxtLinkLocale
                  :to="item.path"
                  class="group px-6 relative nav_product h-full flex justify-center items-center text-4 transition-colors duration-300"
                  :class="[getNavLinkClasses(item), `nav_${getBasePath(item.path)}`]"
                >
                  {{ item.name }}
                </NuxtLinkLocale>
              </li>
            </ul>
          </nav>

          <div class="ml-4 hidden md:block">
            <div class="flex items-center justify-end">
              <div
                @click="changeLanguage(locale === 'zh' ? 'en' : 'zh')"
                class="mx-6 text-sm font-medium cursor-pointer text-center hover:opacity-80 transition-opacity"
                :class="langSwitchComputedClasses"
              >
                {{ locale === 'zh' ? 'En' : '中文' }}
              </div>
              <NuxtLinkLocale
                to="/contact"
                class="px-4 py-2 text-white rounded font-normal bg-[#5A46FF] text-sm md:hover:bg-[#7463FF] transition-all duration-300 ease-out whitespace-nowrap"
              >
                {{ $t('home.contact.title') }}
              </NuxtLinkLocale>
            </div>
          </div>

          <div class="md:hidden relative z-[60]">
            <button @click="isMenuOpen = !isMenuOpen" class="focus:outline-none" aria-label="">
              <transition name="fade-icon" mode="out-in">
                <img
                  v-if="!isMenuOpen"
                  key="menu-icon"
                  class="block pw-w-[24px] h-auto transition-all duration-300 ease-in-out"
                  src="~/assets/images/header/menu.svg"
                  alt="Menu"
                  :class="mobileMenuIconComputedClasses"
                />
                <img
                  v-else
                  key="close-icon"
                  class="block pw-w-[24px] h-auto transition-all duration-300 ease-in-out"
                  src="~/assets/images/header/close.svg"
                  alt="Close"
                  :class="{ 'filter invert brightness-100': isProductScrolled && isMenuOpen }"
                />
              </transition>
            </button>
          </div>
        </div>
      </div>

      <div
        class="block md:hidden fixed pw-top-[44px] left-0 right-0 h-full bg-[#0000004D] transform-gpu transition-all duration-300 ease-in-out overflow-hidden"
        :class="isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'"
        @click="isMenuOpen = false"
      >
        <div
          class="flex flex-col w-full h-auto bg-white pw-pb-[12px] pw-px-[16px] rounded-bl-2xl rounded-br-2xl shadow-lg"
          @click.stop
        >
          <div class="flex-1 overflow-y-auto pw-pt-[12px]">
            <nav>
              <ul>
                <li v-for="(item, index) in mobileNavItems" :key="index">
                  <NuxtLinkLocale
                    :to="item.path"
                    class="flex items-center justify-between pw-py-[12px]"
                    @click="isMenuOpen = false"
                  >
                    <span class="pw-text-[16px] text-[#23233D] font-medium">{{ item.name }}</span>
                    <img src="~/assets/images/header/goto-arrow.svg" alt="Arrow" />
                  </NuxtLinkLocale>
                </li>
              </ul>
            </nav>
          </div>
          <div class="pw-pt-[12px] border-t border-[#47546733]">
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
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { locale, setLocale, t } = useI18n()
const route = useRoute()

// --- 响应式状态定义 ---
const isMenuOpen = ref(false) // 移动端菜单是否打开
const isScrolled = ref(false) // 页面是否已滚动（通用判断，超过阈值 scrollThreshold）
const isProductScrolled = ref(false) // 产品页面是否已滚动超过特定阈值（通常是一屏高度）
const isMobile = ref(false) // 是否为移动端视图

const scrollThreshold = 150 // 滚动阈值 (px)，首页/透明路由超过此值背景变化
const productPageScrollThreshold = computed(() => window.innerHeight) // 产品页滚动阈值，超过一屏高度

// --- 计算属性 ---

// 判断当前路由是否为产品页
const isProductRoute = computed(() => getBasePath(route.path).startsWith('/product'))

// 需要透明背景的路由路径列表 (支持中英文)
// 注意：这里使用 getBasePath(route.path, true) 来获取带语言前缀的路径进行精确匹配
const transparentRoutes = new Set(['/', '/home', '/zh', '/zh/home', '/en', '/en/home'])
const isTransparentRoute = computed(() => transparentRoutes.has(getBasePath(route.path, true)))

// 头部 <header> 的动态 class
const headerComputedClasses = computed(() => {
  const baseClasses = 'fixed top-0 left-0 w-full z-50 transition-all duration-300'

  // 仅在PC端且产品页滚动后应用黑色背景
  if (!isMobile.value && isProductScrolled.value) {
    return `${baseClasses} bg-black/80 backdrop-blur-sm  text-white`
  }

  if (isScrolled.value || !isTransparentRoute.value || isMenuOpen.value) {
    return `${baseClasses} bg-white shadow-sm text-[#39414B] border-gray-200`
  }

  return `${baseClasses} bg-transparent text-white`
})

// Logo 相关计算属性
const showLargeLogoOuterDiv = computed(() => !isProductScrolled.value)

const showLargeLogoInnerCondition = computed(() => {
  return (
    (isScrolled.value || !isTransparentRoute.value || isMenuOpen.value) && locale.value === 'zh'
  )
})

const showSmallLogoCondition = computed(() => {
  // 移动端不受产品页滚动影响
  if (isMobile.value) {
    return (
      (!isScrolled.value && isTransparentRoute.value && !isMenuOpen.value) || locale.value === 'en'
    )
  }

  // PC端逻辑
  if (isProductScrolled.value && locale.value === 'zh') {
    return false
  }
  return (
    (!isScrolled.value && isTransparentRoute.value && !isMenuOpen.value) || locale.value === 'en'
  )
})

const showLogoProductScroll = computed(() => {
  return !isMobile.value && isProductScrolled.value && locale.value === 'zh'
})

const showLogoTextCondition = computed(() => {
  return !isScrolled.value && isTransparentRoute.value && !isMenuOpen.value && locale.value !== 'en'
})

const logoTextComputedClasses = computed(() => {
  return 'text-white'
})

// 移动端菜单打开/关闭图标的样式
const mobileMenuIconComputedClasses = computed(() => {
  if (!isScrolled.value && isTransparentRoute.value && !isProductScrolled.value) {
    return 'filter invert brightness-100'
  }
  return ''
})

// 桌面端语言切换按钮的文字颜色
const langSwitchComputedClasses = computed(() => {
  if (!isMobile.value && isProductScrolled.value) return 'text-white' // 仅PC端产品页滚动后白色
  if (!isScrolled.value && isTransparentRoute.value && !isMenuOpen.value) return 'text-white' // 透明时白色
  return 'text-[#39414B]' // 白底时深色
})

const navItems = computed(() => [
  { name: t('menu.home'), path: '/' },
  { name: t('menu.products'), path: '/product' },
  { name: t('menu.careers'), path: '/careers' },
  { name: t('menu.news'), path: '/news' },
  { name: t('menu.about'), path: '/about' },
])
const mobileNavItems = computed(() => [
  ...navItems.value,
  { name: t('menu.contact'), path: '/contact' },
])

// 获取基础路径 (移除语言前缀，除非 keepLocalePrefix 为 true)
const getBasePath = (path, keepLocalePrefix = false) => {
  if (keepLocalePrefix) return path || '/'
  return path.replace(/^\/(zh|en)/, '') || '/'
}

const getNavLinkClasses = (item) => {
  const currentRouteBasePath = getBasePath(route.path)
  const itemBasePath = getBasePath(item.path)
  const isActive =
    currentRouteBasePath === itemBasePath ||
    (itemBasePath !== '/' && currentRouteBasePath.startsWith(itemBasePath + '/'))

  // 规则 1: PC端且Product页面滚动后
  if (!isMobile.value && isProductScrolled.value) {
    return isActive ? 'text-white font-medium' : 'text-[#FFFFFFCC] hover:text-white font-normal'
  }

  // 规则 2: 透明背景 + 未滚动
  if (!isScrolled.value && isTransparentRoute.value && !isMenuOpen.value && !isProductRoute.value) {
    return isActive
      ? 'text-white hover:text-white font-medium'
      : 'text-[#FFFFFFCC] hover:text-white font-normal'
  }

  // 规则 3: 其他情况 (通常是白色背景的 header)
  return isActive
    ? 'text-[#23233D] hover:text-[#23233D] font-medium'
    : 'text-[#39414B] hover:text-[#23233D] font-normal'
}

// 切换语言
const changeLanguage = (targetLocale) => {
  isMenuOpen.value = false
  setLocale(targetLocale)
  handleScroll()
}

// 滚动事件处理
const handleScroll = () => {
  const currentScrollY = window.scrollY

  // 只在PC端且产品页时才判断滚动阈值
  if (!isMobile.value && isProductRoute.value) {
    isProductScrolled.value = currentScrollY > productPageScrollThreshold.value
  } else {
    isProductScrolled.value = false
  }

  // 通用滚动判断
  if (isTransparentRoute.value) {
    isScrolled.value = currentScrollY > scrollThreshold
  } else {
    isScrolled.value = currentScrollY > 10
  }
}

// 检查屏幕尺寸，用于响应式处理
const checkScreenSize = () => {
  const newIsMobile = window.innerWidth < 768 // Tailwind 'md' 断点
  if (isMobile.value && !newIsMobile && isMenuOpen.value) {
    isMenuOpen.value = false
  }
  isMobile.value = newIsMobile
}

onMounted(() => {
  checkScreenSize()
  handleScroll()

  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', checkScreenSize, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', checkScreenSize)
})

// 侦听路由变化
watch(
  () => route.path,
  (newPath, oldPath) => {
    if (!getBasePath(newPath).startsWith('/product')) {
      isProductScrolled.value = false
    }
    import('vue').then(({ nextTick }) => {
      nextTick(() => {
        handleScroll()
      })
    })
  },
)
</script>

<style scoped lang="scss">
// 移动端菜单图标切换的淡入淡出效果
.fade-icon-enter-active,
.fade-icon-leave-active {
  transition: opacity 0.2s ease-in-out;
}
.fade-icon-enter-from,
.fade-icon-leave-to {
  opacity: 0;
}
</style>
