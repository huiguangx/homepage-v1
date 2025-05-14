<template>
  <div>
    <header :class="headerComputedClasses">
      <div class="mx-auto w-[90%] md:max-w-[1280px]">
        <div class="flex items-center justify-between pw-h-[44px] md:h-16">
          <div class="flex-shrink-0">
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
            <button
              @click="isMenuOpen = !isMenuOpen"
              class="focus:outline-none p-1"
              :aria-label="isMenuOpen ? $t('header.closeMenu') : $t('header.openMenu')"
            >
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
  if (isProductScrolled.value) {
    // 产品页面滚动后样式（黑底白字）
    return `${baseClasses} bg-black border-b border-[#161616] text-white`
  }
  if (isScrolled.value || !isTransparentRoute.value || isMenuOpen.value) {
    // 其他情况 (白底)
    return `${baseClasses} bg-white shadow-sm text-[#39414B] border-gray-200` // 原始是 border-gray-200
  }
  // 默认透明状态 (透明底白字)
  return `${baseClasses} bg-transparent text-white`
})

// Logo 相关计算属性 (为了精确还原原始的 v-if 逻辑)
const showLargeLogoOuterDiv = computed(() => !isProductScrolled.value)
const showLargeLogoInnerCondition = computed(() => {
  return (
    (isScrolled.value || !isTransparentRoute.value || isMenuOpen.value) && locale.value === 'zh'
  )
})
const showSmallLogoCondition = computed(() => {
  // 新增的优先判断：
  // 如果是产品页滚动后 (isProductScrolled is true) 且是中文模式 (locale is 'zh')，
  // 则明确不显示小 logo (返回 false)。
  if (isProductScrolled.value && locale.value === 'zh') {
    return false
  }

  // 对于其他所有情况，沿用之前的逻辑：
  // 在透明未滚动状态下显示，或者在英文模式下显示（除非被大 logo 覆盖）
  return (
    (!isScrolled.value && isTransparentRoute.value && !isMenuOpen.value) || locale.value === 'en'
  )
})

const showLogoProductScroll = computed(() => {
  // 新增的优先判断：
  // 如果是产品页滚动后 (isProductScrolled is true) 且是中文模式 (locale is 'zh')，
  // 则明确不显示小 logo (返回 false)。
  if (isProductScrolled.value && locale.value === 'zh') {
    return true
  } else {
    return false
  }
})

const showLogoTextCondition = computed(() => {
  return !isScrolled.value && isTransparentRoute.value && !isMenuOpen.value && locale.value !== 'en'
})
const logoTextComputedClasses = computed(() => {
  // 根据 showLogoTextCondition 的条件，此文本只在透明背景下显示，故为白色
  // 原始代码中此处 class 判断复杂，但实际效果因 v-if 限制，只会是 text-white
  return 'text-white'
})

// 移动端菜单打开/关闭图标的样式
const mobileMenuIconComputedClasses = computed(() => {
  // 原始逻辑: 当透明且未滚动时，图标反色变白
  // 在产品页滚动后 (isProductScrolled=true)，头部是黑色，此时 menu.svg 不应反色。
  // isTransparentRoute 在产品页通常为 false (除非产品页也被设为透明路由)
  // isMenuOpen 为 true 时显示 close.svg，不由这个 computed 控制
  if (!isScrolled.value && isTransparentRoute.value && !isProductScrolled.value) {
    // 添加 !isProductScrolled 确保黑底时不应用
    return 'filter invert brightness-100'
  }
  return ''
})

// 桌面端语言切换按钮的文字颜色
const langSwitchComputedClasses = computed(() => {
  if (isProductScrolled.value) return 'text-white' // 黑底时白色
  if (!isScrolled.value && isTransparentRoute.value && !isMenuOpen.value) return 'text-white' // 透明时白色
  return 'text-[#39414B]' // 白底时深色
})

// --- 导航项 ---
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

// --- 方法 ---

// 获取基础路径 (移除语言前缀，除非 keepLocalePrefix 为 true)
const getBasePath = (path, keepLocalePrefix = false) => {
  if (keepLocalePrefix) return path || '/'
  return path.replace(/^\/(zh|en)/, '') || '/'
}

// 动态计算桌面导航链接的 class
const getNavLinkClasses = (item) => {
  const currentRouteBasePath = getBasePath(route.path)
  const itemBasePath = getBasePath(item.path)
  // 判断是否为当前激活项 (考虑子路径，例如 /product/detail 应该高亮 /product)
  const isActive =
    currentRouteBasePath === itemBasePath ||
    (itemBasePath !== '/' && currentRouteBasePath.startsWith(itemBasePath + '/'))

  // 规则 1: Product 页面滚动后 (isProductScrolled)
  if (isProductScrolled.value) {
    return isActive ? 'text-white font-medium' : 'text-[#FFFFFFCC] hover:text-white font-normal'
  }

  // 规则 2: 非 Product 页面透明背景 + 未滚动 (!isProductRoute.value && !isScrolled.value && isTransparentRoute.value)
  // 或者更通用的：当头部是透明的时候 (!isScrolled.value && isTransparentRoute.value && !isMenuOpen.value)
  // 这个条件严格对应原始代码中 nav link 的透明状态下的样式
  if (!isScrolled.value && isTransparentRoute.value && !isMenuOpen.value && !isProductRoute.value) {
    return isActive
      ? 'text-white hover:text-white font-medium'
      : 'text-[#FFFFFFCC] hover:text-white font-normal'
  }
  // 原始代码针对 isProductRoute && isScrolled 有单独处理，这个已经包含在 isProductScrolled.value 里
  // 原始代码中还有针对 !isProductRoute 的透明情况，上面已覆盖。

  // 规则 3: 其他情况 (通常是白色背景的 header)
  // (isScrolled || !isTransparentRoute) && !(isProductRoute && isScrolled)
  // 简化为：当头部不是黑底（isProductScrolled=false）也不是透明白字时
  return isActive
    ? 'text-[#23233D] hover:text-[#23233D] font-medium'
    : 'text-[#39414B] hover:text-[#23233D] font-normal'
}

// 导航下划线样式 (原始代码中被注释)
// const getNavUnderlineClasses = (item) => {
//   const currentRouteBasePath = getBasePath(route.path)
//   const itemBasePath = getBasePath(item.path)
//   const isActive = currentRouteBasePath === itemBasePath || (itemBasePath !== '/' && currentRouteBasePath.startsWith(itemBasePath + '/'));

//   let bgColor = 'bg-gray-800' // 默认用于白色背景
//   if (isProductScrolled.value || (!isScrolled.value && isTransparentRoute.value && !isMenuOpen.value)) {
//     bgColor = 'bg-white' // 用于黑色或透明背景
//   }
//   // 原始逻辑：激活时显示，hover时显示
//   if (isActive) return `w-full ${bgColor}`
//   return `group-hover:w-full ${bgColor}`
// }

// 切换语言
const changeLanguage = (targetLocale) => {
  isMenuOpen.value = false
  setLocale(targetLocale)
  // 切换语言后，页面内容可能变化，可能需要重新计算滚动状态
  // Vue.nextTick(() => handleScroll()); // 如果需要更精确
  handleScroll() // 通常直接调用即可
}

// 滚动事件处理
const handleScroll = () => {
  const currentScrollY = window.scrollY

  // 优先处理产品页的特殊滚动逻辑
  if (isProductRoute.value) {
    isProductScrolled.value = currentScrollY > productPageScrollThreshold.value
    // 产品页本身也可能有普通滚动状态，例如从顶部到一屏高度之间
    isScrolled.value = currentScrollY > scrollThreshold // 或者 currentScrollY > 0 如果产品页顶部无透明过渡
  } else if (isTransparentRoute.value) {
    // 透明路由的滚动判断
    isScrolled.value = currentScrollY > scrollThreshold
    isProductScrolled.value = false // 非产品页，重置产品页滚动状态
  } else {
    // 其他非透明、非产品页面 (如 /careers, /about)
    // 这些页面通常初始就是白色背景，或者轻微滚动后变白
    isScrolled.value = currentScrollY > 10 // 轻微滚动即视为已滚动
    isProductScrolled.value = false // 重置产品页滚动状态
  }
  // console.log 语句用于调试，最终可以移除
  // console.log('scroll states:', {
  //   isScrolled: isScrolled.value,
  //   isProductScrolled: isProductScrolled.value,
  //   isTransparentRoute: isTransparentRoute.value,
  //   isProductRoute: isProductRoute.value,
  //   scrollY: currentScrollY
  // });
}

// 检查屏幕尺寸，用于响应式处理
const checkScreenSize = () => {
  const newIsMobile = window.innerWidth < 768 // Tailwind 'md' 断点
  if (isMobile.value && !newIsMobile && isMenuOpen.value) {
    // 从移动端视图切换到PC端视图时，如果菜单是打开的，则关闭它
    isMenuOpen.value = false
  }
  isMobile.value = newIsMobile
}

// --- 生命周期钩子 & 侦听器 ---
onMounted(() => {
  checkScreenSize() // 初始检查屏幕尺寸
  handleScroll() // 初始检查滚动位置以设置正确的头部状态

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
    // isMenuOpen.value = false // 路由切换时关闭移动端菜单 (原始代码无此逻辑，根据需要添加)

    // 确保在离开产品页时重置 isProductScrolled
    if (!getBasePath(newPath).startsWith('/product')) {
      isProductScrolled.value = false
    }
    // 路由变化后，重新计算滚动状态，因为新页面的初始状态可能不同
    // 使用 nextTick 确保DOM更新（如果有）完成后再执行 handleScroll
    import('vue').then(({ nextTick }) => {
      nextTick(() => {
        handleScroll()
      })
    })
  },
  // { immediate: true } // 如果需要在组件加载时就基于初始路由运行一次，但 onMounted 中的 handleScroll 通常已处理
)

// 为 i18n 准备的文本 (示例，实际翻译在语言文件中)
// const openMenuText = computed(() => t('header.openMenu', '打开菜单'));
// const closeMenuText = computed(() => t('header.closeMenu', '关闭菜单'));
// const switchToEnText = computed(() => t('header.switchToEn', 'Switch to English'));
// const switchToZhText = computed(() => t('header.switchToZh', '切换到中文'));
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

/* 确保 nav_product 等动态类名不会引起警告或预期外的行为 */
/* 如果这些 nav_ /product 等是用于特殊样式或JS选择器，请确保它们被正确处理 */
/* .nav_product { ... } */
/* .nav_home { ... } */
</style>
