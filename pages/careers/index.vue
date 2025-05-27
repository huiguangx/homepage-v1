<template>
  <div class="block md:h-16 h-[44px] w-full"></div>
  <div class="bg-white">
    <!-- Banner Section -->
    <section class="relative w-full overflow-hidden">
      <!-- 使用 Grid 布局替代绝对定位 -->
      <div class="grid grid-cols-1 pw-h-[208px] md:h-auto">
        <!-- 图片层 -->
        <picture class="row-start-1 col-start-1">
          <source
            media="(max-width: 767px)"
            srcset="~/assets/images/career/hire-s1-bg-h5.webp"
            type="image/webp"
          />
          <source
            media="(min-width: 768px)"
            srcset="~/assets/images/career/hire-s1-bg.webp"
            type="image/webp"
          />
          <!-- Fallback to the original JPG sources -->
          <source media="(max-width: 767px)" srcset="~/assets/images/career/hire-s1-bg-h5.jpg" />
          <source media="(min-width: 768px)" srcset="~/assets/images/career/hire-s1-bg.jpg" />
          <!-- Fallback image in case if browser does not support picture element or WebP -->
          <img
            src="~/assets/images/career/hire-s1-bg.jpg"
            class="w-full h-full object-cover zoom-in-out aspect-[750/416] md:aspect-[2880/1056]"
            alt=""
          />
        </picture>

        <!-- 文案层（居中靠左） -->
        <div class="row-start-1 col-start-1 z-20 flex items-center justify-center">
          <div class="w-full max-w-[90%] md:max-w-[1280px] md:mx-auto text-left mx-auto">
            <h1 class="pw-text-[18px] md:text-4xl text-white font-medium pw-pb-[8px] md:pb-6">
              {{ $t('careers.heroTitle') }}
            </h1>
            <p
              class="pw-text-[14px] md:text-2xl bg-gradient-to-r from-purple-300 via-blue-300 to-white bg-clip-text text-transparent"
            >
              {{ $t('careers.heroSubtitle') }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Work Environment -->
    <section class="pw-py-[32px] md:py-20 bg-white">
      <div class="mx-auto w-[90%] md:w-[98%]">
        <div class="text-center pw-pb-[14px] md:pb-6 md:max-w-[1280px] mx-auto">
          <h2 class="pw-text-[22px] md:text-4xl font-medium pw-pb-[8px] md:pb-4">
            {{ $t('careers.workEnvironment') }}
          </h2>
          <p class="pw-text-[14px] md:text-xl font-normal text-[#71798A]">
            {{ $t('careers.workEnvironmentDesc') }}
          </p>
        </div>
        <div class="md:max-w-[1920px] mx-auto">
          <ClientOnly>
            <swiper
              class="news-swiper text-white"
              :modules="swiperModules"
              :autoplay="{ delay: 5000, disableOnInteraction: false }"
              :pagination="{
                el: '.custom-pagination',
                clickable: true,
                bulletClass: 'custom-bullet',
                bulletActiveClass: 'custom-bullet-active',
              }"
              :navigation="{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
              }"
              :loop="true"
              :centeredSlides="true"
              :spaceBetween="20"
              :slidesPerView="1"
              :breakpoints="{
                768: {
                  slidesPerView: 3,
                  centeredSlides: true,
                  spaceBetween: 20,
                },
              }"
            >
              <swiper-slide v-for="(image, index) in workImages" :key="index">
                <img class="rounded-lg w-full aspect-[16/9]" :src="image.src" alt="" />
              </swiper-slide>
            </swiper>
          </ClientOnly>
        </div>
        <!-- Custom Paginator & navigation-->
        <div
          class="flex justify-center items-center pw-pt-[30px] md:pt-14 md:px-28 md:max-w-[1280px] mx-auto"
        >
          <!-- Custom Paginator -->
          <div class="custom-pagination flex justify-center md:justify-start"></div>
          <!-- Customize navigation buttons -->
          <div class="hidden md:flex gap-4 text-[#71798A]">
            <button
              class="group custom-prev w-9 h-9 bg-[#f9fafbee] md:hover:bg-[#5A46FF] rounded-lg flex items-center justify-center"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 15L7.5 10L12.5 5"
                  stroke="#71798A"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="group-hover:stroke-white"
                />
              </svg>
            </button>

            <button
              class="group custom-next w-9 h-9 bg-[#f9fafbee] md:hover:bg-[#5A46FF] rounded-lg flex items-center justify-center"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="#71798A"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="group-hover:stroke-white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Open Positions -->
    <section class="py-12 md:py-16 bg-[#F9FAFB]" id="joinus">
      <div class="w-[90%] md:max-w-[1280px] mx-auto">
        <!-- 标题区域 -->
        <div class="text-center">
          <h2 class="pw-text-[22px] md:text-4xl font-medium pw-mb-[8px] md:mb-4">
            {{ $t('careers.openPositions') }}
          </h2>
          <p class="pw-text-[14px] md:text-lg text-[#71798A] font-normal">
            {{ $t('careers.openPositionsDesc') }}
          </p>
        </div>

        <div
          v-if="locale === 'en'"
          class="pw-pt-[32px] md:pt-5 flex flex-col items-center justify-center"
        >
          <NuxtLinkLocale
            to="/contact"
            class="home_sky banner_button inline-block rounded border border-white md:border-none bg-transparent md:cursor-pointer md:bg-[#5A46FF] pw-text-[14px] md:text-lg font-normal pw-px-[12px] pw-py-[8px] md:px-4 md:py-[10px] text-white md:hover:bg-[#7463FF] transition-all duration-300 ease-out mx-auto md:mx-0"
          >
            {{ $t('home.contact.cta') }}
          </NuxtLinkLocale>
          <a
            href="mailto:join@astribot.com"
            class="pw-text-[14px] md:text-sm text-[#5A46FF] md:hover:text-[#7463FF] pw-m-[16px] md:m-4"
          >
            Email: join@astribot.com
          </a>
        </div>
        <!-- Three-column layout for desktop -->
        <div v-if="locale === 'zh'" class="hidden md:grid md:grid-cols-3 md:gap-8 mt-10 md:px-8">
          <!-- 社会招聘 -->
          <div>
            <h3
              class="inline-block text-xl font-medium pb-2 mb-6 border-b border-[#a096fa] mx-5 my-4"
            >
              社会招聘
            </h3>
            <div class="space-y-1">
              <div v-for="(job, index) in socialJobs" :key="index" class="relative group">
                <div
                  class="flex justify-between items-start rounded-lg px-5 py-4 hover:bg-[#F3F3F3]"
                >
                  <div>
                    <h4 class="text-base font-medium">{{ job.title }}</h4>
                    <p class="text-xs text-gray-500 mt-1">{{ job.category }}</p>
                  </div>
                  <a
                    :href="job.url"
                    target="_blank"
                    class="absolute right-4 top-1/2 -translate-y-1/2 font-normal bg-[#5A46FF] text-white px-5 py-3 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 hire_Social recruitment"
                  >
                    查看岗位
                  </a>
                </div>
              </div>
              <a
                href="https://dwz.cn/1Vq7rTKn"
                target="_blank"
                class="inline-block text-[#5A46FF] mx-5 my-4 text-sm font-medium md:hover:border-b md:hover:border-[#5A46FF] transition-colors duration-300 hire_Social recruitment"
              >
                查看更多社招岗位
              </a>
            </div>
          </div>

          <!-- 校园招聘 -->
          <div>
            <h3
              class="inline-block text-xl font-medium pb-2 mb-6 border-b border-[#a096fa] mx-5 my-4"
            >
              校园招聘
            </h3>
            <div class="space-y-1">
              <div v-for="(job, index) in campusJobs" :key="index" class="relative group">
                <div
                  class="flex justify-between items-start rounded-lg px-5 py-4 hover:bg-[#F3F3F3]"
                >
                  <div>
                    <h4 class="text-base font-medium">{{ job.title }}</h4>
                    <p class="text-xs text-gray-500 mt-1">{{ job.category }}</p>
                  </div>
                  <a
                    :href="job.url"
                    target="_blank"
                    class="absolute right-4 top-1/2 -translate-y-1/2 font-normal bg-[#5A46FF] text-white px-5 py-3 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 hire_campus recruitment"
                  >
                    查看岗位
                  </a>
                </div>
              </div>
              <a
                href="https://dwz.cn/ZPkmdxje"
                target="_blank"
                class="inline-block text-[#5A46FF] mx-5 my-4 text-sm font-medium md:hover:border-b md:hover:border-[#5A46FF] transition-colors duration-300 hire_campus recruitment"
              >
                查看更多校园岗位
              </a>
            </div>
          </div>

          <!-- 实习岗 -->
          <div>
            <h3
              class="inline-block text-xl font-medium pb-2 mb-6 border-b border-[#a096fa] mx-5 my-4"
            >
              实习岗
            </h3>
            <div class="space-y-1">
              <div v-for="(job, index) in internJobs" :key="index" class="relative group">
                <div
                  class="flex justify-between items-start rounded-lg px-5 py-4 hover:bg-[#F3F3F3]"
                >
                  <div>
                    <h4 class="text-base font-medium">{{ job.title }}</h4>
                    <p class="text-xs text-gray-500 mt-1">{{ job.category }}</p>
                  </div>
                  <a
                    :href="job.url"
                    target="_blank"
                    class="absolute right-4 top-1/2 -translate-y-1/2 font-normal bg-[#5A46FF] text-white px-5 py-3 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 hire_Internship"
                  >
                    查看岗位
                  </a>
                </div>
              </div>
              <a
                href="https://s.xinrenxinshi.com/recruitGate#/ey=0ebdb005864a706d8f15cdadc338584487c666"
                target="_blank"
                class="inline-block text-[#5A46FF] mx-5 my-4 text-sm font-medium md:hover:border-b md:hover:border-[#5A46FF] transition-colors duration-300 hire_Internship"
              >
                查看更多实习岗位
              </a>
            </div>
          </div>
        </div>
        <!-- Mobile tabs -->
        <div
          v-if="locale === 'zh'"
          class="md:hidden mt-[32px] pw-pb-[16px] relative overflow-x-auto"
        >
          <div
            ref="tabHeader"
            class="grid grid-cols-3"
            @touchstart="startSwipe"
            @touchmove="swiping"
            @touchend="endSwipe"
          >
            <button
              v-for="tab in tabs"
              :key="tab.id"
              @click="switchTab(tab.id)"
              class="flex-shrink-0 px-4 pt-2 text-center px-text-[16px] font-normal"
            >
              <span
                :class="{
                  'inline-block border-b border-[#5A46FF] font-medium text-[#000000]':
                    activeTab === tab.id,
                  'text-gray-500': activeTab !== tab.id,
                }"
              >
                {{ tab.name }}
              </span>
            </button>
          </div>
        </div>
        <!-- Mobile content area -->
        <div
          v-if="locale === 'zh'"
          ref="tabContent"
          class="md:hidden relative overflow-hidden"
          @touchstart.passive="startSwipe"
          @touchmove.passive="swiping"
          @touchend="endSwipe"
        >
          <div
            class="flex transition-transform duration-300 ease-out"
            :style="{ transform: `translateX(${contentPosition}%)` }"
          >
            <!-- 社会招聘 -->
            <div class="w-full flex-shrink-0">
              <div class="space-y-3">
                <div
                  v-for="(job, index) in socialJobs"
                  :key="index"
                  class="bg-[#F3F3F3] rounded-lg pw-px-[16px] pw-py-[12px] flex justify-between items-center shadow-sm"
                >
                  <div>
                    <h4 class="pw-text-[14px] font-normal">{{ job.title }}</h4>
                    <p class="pw-text-[12px] font-normal text-gray-500 mt-1">{{ job.category }}</p>
                  </div>
                  <a
                    :href="job.url"
                    target="_blank"
                    class="bg-[#5A46FF] text-white pw-px-[16px] pw-py-[8px] rounded pw-text-[12px] font-normal hire_Social recruitment"
                  >
                    查看岗位
                  </a>
                </div>
                <div class="text-center mt-6">
                  <a
                    href="https://dwz.cn/1Vq7rTKn"
                    target="_blank"
                    class="text-[#5A46FF] pw-text-[14px] font-medium hire_Social recruitment"
                  >
                    查看更多社招岗位
                  </a>
                </div>
              </div>
            </div>

            <!-- 校园招聘 -->
            <div class="w-full flex-shrink-0">
              <div class="space-y-3">
                <div
                  v-for="(job, index) in campusJobs"
                  :key="index"
                  class="bg-[#F3F3F3] rounded-lg pw-px-[16px] pw-py-[12px] flex justify-between items-center shadow-sm"
                >
                  <div>
                    <h4 class="pw-text-[14px] font-normal">{{ job.title }}</h4>
                    <p class="pw-text-[12px] font-normal text-gray-500 mt-1">{{ job.category }}</p>
                  </div>
                  <a
                    :href="job.url"
                    target="_blank"
                    class="bg-[#5A46FF] text-white pw-px-[16px] pw-py-[8px] rounded pw-text-[12px] font-normal hire_campus recruitment"
                  >
                    查看岗位
                  </a>
                </div>
                <div class="text-center mt-6">
                  <a
                    href="https://dwz.cn/ZPkmdxje"
                    target="_blank"
                    class="text-[#5A46FF] pw-text-[14px] font-medium hire_campus recruitment"
                  >
                    查看更多校园岗位
                  </a>
                </div>
              </div>
            </div>

            <!-- 实习岗 -->
            <div class="w-full flex-shrink-0">
              <div class="space-y-3">
                <div
                  v-for="(job, index) in internJobs"
                  :key="index"
                  class="bg-[#F3F3F3] rounded-lg pw-px-[16px] pw-py-[12px] flex justify-between items-center shadow-sm"
                >
                  <div>
                    <h4 class="pw-text-[14px] font-normal">{{ job.title }}</h4>
                    <p class="pw-text-[12px] font-normal text-gray-500 mt-1">{{ job.category }}</p>
                  </div>
                  <a
                    :href="job.url"
                    target="_blank"
                    class="bg-[#5A46FF] text-white pw-px-[16px] pw-py-[8px] rounded pw-text-[12px] font-normal hire_Internship"
                  >
                    查看岗位
                  </a>
                </div>
                <div class="text-center mt-6">
                  <a
                    href="https://s.xinrenxinshi.com/recruitGate#/ey=0ebdb005864a706d8f15cdadc338584487c666"
                    target="_blank"
                    class="text-[#5A46FF] pw-text-[14px] font-medium hire_Internship"
                  >
                    查看更多实习岗位
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from '@/lib/vue-swiper'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import hireImg6 from '~/assets/images/career/hire-s3-img6.jpg'
import hireImg7 from '~/assets/images/career/hire-s3-img7.jpg'
import hireImg8 from '~/assets/images/career/hire-s3-img8.jpg'
import hireImg9 from '~/assets/images/career/hire-s3-img9.jpg'
import hireImg10 from '~/assets/images/career/hire-s3-img10.jpg'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { useWindowSize } from '@vueuse/core'

const { t, locale } = useI18n()
const swiperModules = [Autoplay, Pagination, Navigation]
const { width: windowWidth } = useWindowSize()

useHead({
  title: locale.value === 'zh' ? '招贤纳士' : 'Careers',
  meta: [
    {
      name: 'description',
      content: '',
    },
    {
      name: 'keywords',
      content: '',
    },
  ],
})

// 锚点跳转
const goAnchor = (selector: string) => {
  setTimeout(() => {
    const anchor = document.querySelector(selector)
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth' })
    }
  }, 500)
}
onMounted(() => {
  if (window.location.hash) {
    goAnchor(window.location.hash)
  }
})

const workImages = [
  { src: hireImg6, alt: t('careers.workEnv1Alt') },
  { src: hireImg7, alt: t('careers.workEnv2Alt') },
  { src: hireImg8, alt: t('careers.workEnv3Alt') },
  { src: hireImg9, alt: t('careers.workEnv3Alt') },
  { src: hireImg10, alt: t('careers.workEnv3Alt') },
]
// 标签页配置
const tabs = [
  { id: 'social', name: '社会招聘' },
  { id: 'campus', name: '校园招聘' },
  { id: 'intern', name: '实习岗' },
]

// 当前激活的标签页
const activeTab = ref('social')
const tabHeader = ref(null)
const tabContent = ref(null)
const startX = ref(0)
const currentX = ref(0)
const isSwiping = ref(false)

// 计算内容位置百分比
const contentPosition = computed(() => {
  const index = tabs.findIndex((tab) => tab.id === activeTab.value)
  return windowWidth.value
    ? -index * 100 + (currentX.value / windowWidth.value) * 100
    : -index * 100 // 服务端回退
})

const startSwipe = (e: TouchEvent) => {
  isSwiping.value = true
  startX.value = e.touches[0].clientX
}

const swiping = (e: TouchEvent) => {
  if (!isSwiping.value) return
  e.preventDefault()
  const x = e.touches[0].clientX
  currentX.value = x - startX.value
}

const endSwipe = () => {
  if (!isSwiping.value) return
  isSwiping.value = false

  // 判断滑动方向
  if (Math.abs(currentX.value) > 50) {
    // 滑动阈值50px
    if (currentX.value > 0) {
      // 向右滑动，切换到上一个标签
      const currentIndex = tabs.findIndex((tab) => tab.id === activeTab.value)
      const prevIndex = Math.max(0, currentIndex - 1)
      activeTab.value = tabs[prevIndex].id
    } else {
      // 向左滑动，切换到下一个标签
      const currentIndex = tabs.findIndex((tab) => tab.id === activeTab.value)
      const nextIndex = Math.min(tabs.length - 1, currentIndex + 1)
      activeTab.value = tabs[nextIndex].id
    }
  }
  currentX.value = 0 // 复位
}

const switchTab = (tabId: string) => {
  activeTab.value = tabId
  currentX.value = 0
}

// 岗位数据（保持原有不变）
const socialJobs = [
  {
    title: '大模型算法研究员/工程师',
    category: '技术类',
    url: 'https://s.xinrenxinshi.com/recruitGate/detail#/ey=0ebdb005864a71648f15cdaac23c5e4385c567&jobId=6b4ce7e5eaeb469785bd86a0473bc329',
  },
  {
    title: '机器人交互算法研究员/工程师',
    category: '技术类',
    url: 'https://s.xinrenxinshi.com/recruitGate/detail#/ey=0ebdb005864a71648f15cdaac23c5e4386c262&jobId=e5ef0d6e2550403aa57f5cf285d079af',
  },
  {
    title: '机器人学习算法研究员/工程师',
    category: '技术类',
    url: 'https://s.xinrenxinshi.com/recruitGate/detail#/ey=0ebdb005864a71648f15cdaac23c5e4386c262&jobId=c4daf802437c4daa8879134ca87dea66',
  },

  // {
  //   title: '产品经理',
  //   category: '产品类',
  //   url: 'https://s.xinrenxinshi.com/recruitGate/detail#/ey=0ebdb005864a71648f15cdaac23c5e4386c262&jobId=b6d55db9ba3e47f6afa0f1cbec105fac',
  // },
]

const campusJobs = [
  {
    title: '大模型算法研究员/工程师',
    category: '技术类',
    url: 'https://s.xinrenxinshi.com/recruitGate/detail#/ey=0ebdb005864a706c8f15cdaac23c5e4389c865&jobId=601797781f4b42c5a6f43774b6dfcf53',
  },
  {
    title: '机器人交互算法研究员/工程师',
    category: '技术类',
    url: 'https://s.xinrenxinshi.com/recruitGate/detail#/ey=0ebdb005864a706c8f15cdaac23c5e4389c865&jobId=f12a95b387a14bd08a61db84b8c47f7b',
  },
  {
    title: '机器人学习算法研究员/工程师',
    category: '技术类',
    url: 'https://s.xinrenxinshi.com/recruitGate/detail#/ey=0ebdb005864a706c8f15cdaac23c5e4389c865&jobId=25479f2270dc4a539afd9c8a64705c60',
  },
]

const internJobs = [
  {
    title: '大模型算法实习生',
    category: '技术类',
    url: 'https://s.xinrenxinshi.com/recruitGate/detail#/ey=0ebdb005864a706d8f15cdaac23c5e4388c466&jobId=6ec9a92c4d834d8585f08bcee80a49da',
  },
  {
    title: '机器人交互算法实习生',
    category: '技术类',
    url: 'https://s.xinrenxinshi.com/recruitGate/detail#/ey=0ebdb005864a706d8f15cdaac23c5e4388c466&jobId=2e364e80878d401fbb5581d1c6f0555f',
  },
  {
    title: '机器人学习算法实习生',
    category: '技术类',
    url: 'https://s.xinrenxinshi.com/recruitGate/detail#/ey=0ebdb005864a706d8f15cdaac23c5e4388c466&jobId=5cdcb21ffdc940fb95a8d36413ad4779',
  },
]

useHead({
  title: t('menu.careers'),
})
</script>

<style scoped lang="scss">
/* 新增滑动样式 */
.flex {
  transition: transform 0.3s ease;
  will-change: transform;
}

:deep(.custom-pagination) {
  display: flex;
  height: 5px; /* px-to-viewport-ignore */
  gap: 8px; /* px-to-viewport-ignore */
}
@media (min-width: 768px) {
  .custom-pagination {
    display: none !important;
  }
}
.custom-prev,
.custom-next {
  cursor: pointer;
  transition: all 0.3s;
}

:deep(.custom-bullet) {
  width: 5px; /* px-to-viewport-ignore */
  height: 5px; /* px-to-viewport-ignore */
  background: #dcdcdc;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

:deep(.custom-bullet-active) {
  width: 30px; /* px-to-viewport-ignore */
  height: 5px; /* px-to-viewport-ignore */
  background: #dcdcdc;
  border-radius: 2px; /* px-to-viewport-ignore */
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    background: #5a46ff;
    border-radius: 2px; /* px-to-viewport-ignore */
    animation: vrProgressBar var(--swiper-autoplay-duration, 5s) linear forwards;
  }
}

@keyframes vrProgressBar {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
@keyframes zoomInOut {
  0% {
    transform: scale(1); /* 初始状态 */
  }
  50% {
    transform: scale(1.03); /* 中间状态，稍微放大一点 */
  }
  100% {
    transform: scale(1); /* 结束状态，回到原始大小 */
  }
}

/* 当屏幕宽度大于等于768px时应用动画 */
@media (min-width: 768px) {
  .zoom-in-out {
    animation: zoomInOut 5s ease-in-out infinite;
  }
}
</style>
