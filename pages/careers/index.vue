<template>
  <div class="bg-white">
    <!-- Banner Section -->
    <section class="relative w-full h-[70vh] md:h-screen overflow-hidden">
      <div class="mx-auto w-[90%]">
        <!-- 背景图 -->
        <img
          src="~/assets/images/career/hire-s1-bg.jpg"
          class="w-full h-full object-cover absolute inset-0 z-10"
        />

        <!-- 文字容器（绝对定位居中） -->
        <div class="absolute inset-y-0 flex items-center justify-center z-20">
          <div class="">
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
      <div class="mx-auto w-[90%]">
        <div class="text-center pw-pb-[14px] md:pb-6">
          <h2 class="pw-text-[22px] md:text-4xl font-medium pw-pb-[8px] md:pb-4">
            {{ $t('careers.workEnvironment') }}
          </h2>
          <p class="pw-text-[14px] md:text-xl text-[#71798A]">
            {{ $t('careers.workEnvironmentDesc') }}
          </p>
        </div>

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
              slidesPerView: 2.5,
              // centeredSlides: true,
              initialSlide: 1,
            },
          }"
        >
          <swiper-slide v-for="(image, index) in workImages" :key="index">
            <img class="rounded-lg" :src="image.src" alt="" />
          </swiper-slide>
        </swiper>
        <!-- 自定义分页器 -->
        <div
          class="flex justify-center md:justify-between items-center pw-pt-[30px] md:pt-14 md:px-28"
        >
          <!-- 自定义分页器 -->
          <div class="custom-pagination"></div>
          <!-- 自定义导航按钮 -->
          <div class="hidden md:flex gap-4 text-[#71798A]">
            <button class="custom-prev w-9 h-9 bg-[#f9fafbee] rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
              </svg>
            </button>
            <button class="custom-next w-9 h-9 bg-[#f9fafbee] rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Open Positions -->
    <section class="py-12 md:py-16 bg-[#F9FAFB]" id="join-us">
      <div class="w-[90%] mx-auto">
        <!-- 标题区域 -->
        <div class="text-center">
          <h2 class="pw-text-[22px] md:text-4xl font-medium pw-mb-[8px] md:mb-4">
            {{ $t('careers.openPositions') }}
          </h2>
          <p class="pw-text-[14px] md:text-lg text-gray-600">
            {{ $t('careers.openPositionsDesc') }}
          </p>
        </div>

        <!-- 移动端标签页 -->
        <div class="md:hidden mt-[32px] pw-pb-[24px] relative overflow-x-auto">
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
              class="flex-shrink-0 px-4 py-2 text-center px-text-[16px] font-medium"
              :class="{
                'text-[#5A46FF]  border-b-2 border-[#5A46FF]': activeTab === tab.id,
                'text-gray-500': activeTab !== tab.id,
              }"
            >
              {{ tab.name }}
            </button>
          </div>
        </div>

        <!-- 桌面端三列布局 -->
        <div class="hidden md:grid md:grid-cols-3 md:gap-8 mt-10">
          <!-- 社会招聘 -->
          <div>
            <h3
              class="inline-block text-xl font-medium pb-2 mb-6 border-b border-[#a096fa] mx-5 my-4"
            >
              社会招聘
            </h3>
            <div class="space-y-4">
              <div v-for="(job, index) in socialJobs" :key="index" class="relative group">
                <div
                  class="flex justify-between items-start rounded-lg px-5 py-4 hover:bg-[#F3F3F3]"
                >
                  <div>
                    <h4 class="text-base font-medium">{{ job.title }}</h4>
                    <p class="text-xs text-gray-500 mt-1">{{ job.category }}</p>
                  </div>
                  <button
                    class="absolute right-4 top-1/2 -translate-y-1/2 bg-[#5A46FF] text-white px-5 py-3 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    查看岗位
                  </button>
                </div>
              </div>
              <a
                href="https://dwz.cn/1Vq7rTKn"
                target="_blank"
                class="inline-block text-[#5A46FF] md:hover:text-[#796af8] mx-5 my-4 text-sm font-medium md:hover:border-b md:hover:border-[#5A46FF] transition-colors duration-300"
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
            <div class="space-y-4">
              <div v-for="(job, index) in campusJobs" :key="index" class="relative group">
                <div
                  class="flex justify-between items-start rounded-lg px-5 py-4 hover:bg-[#F3F3F3]"
                >
                  <div>
                    <h4 class="text-base font-medium">{{ job.title }}</h4>
                    <p class="text-xs text-gray-500 mt-1">{{ job.category }}</p>
                  </div>
                  <button
                    class="absolute right-4 top-1/2 -translate-y-1/2 bg-[#5A46FF] text-white px-5 py-3 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    查看岗位
                  </button>
                </div>
              </div>
              <a
                href="https://dwz.cn/ZPkmdxje"
                target="_blank"
                class="inline-block text-[#5A46FF] md:hover:text-[#796af8] mx-5 my-4 text-sm font-medium md:hover:border-b md:hover:border-[#5A46FF] transition-colors duration-300"
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
            <div class="space-y-4">
              <div v-for="(job, index) in internJobs" :key="index" class="relative group">
                <div
                  class="flex justify-between items-start rounded-lg px-5 py-4 hover:bg-[#F3F3F3]"
                >
                  <div>
                    <h4 class="text-base font-medium">{{ job.title }}</h4>
                    <p class="text-xs text-gray-500 mt-1">{{ job.category }}</p>
                  </div>
                  <button
                    class="absolute right-4 top-1/2 -translate-y-1/2 bg-[#5A46FF] text-white px-5 py-3 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    查看岗位
                  </button>
                </div>
              </div>
              <a
                href="https://s.xinrenxinshi.com/recruitGate#/ey=0ebdb005864a706d8f15cdadc338584487c666"
                target="_blank"
                class="inline-block text-[#5A46FF] md:hover:text-[#796af8] mx-5 my-4 text-sm font-medium md:hover:border-b md:hover:border-[#5A46FF] transition-colors duration-300"
              >
                查看更多实习岗位
              </a>
            </div>
          </div>
        </div>

        <!-- 移动端内容区域 -->
        <div
          ref="tabContent"
          class="md:hidden relative overflow-hidden"
          @touchstart="startSwipe"
          @touchmove="swiping"
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
                  <button
                    class="bg-[#5A46FF] text-white pw-px-[16px] pw-py-[8px] rounded pw-text-[12px] font-normal"
                  >
                    查看岗位
                  </button>
                </div>
                <div class="text-center mt-6">
                  <a
                    href="https://dwz.cn/1Vq7rTKn"
                    target="_blank"
                    class="text-[#5A46FF] pw-text-[12px] font-normal"
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
                  <button
                    class="bg-[#5A46FF] text-white pw-px-[16px] pw-py-[8px] rounded pw-text-[12px] font-normal"
                  >
                    查看岗位
                  </button>
                </div>
                <div class="text-center mt-6">
                  <a
                    href="https://dwz.cn/ZPkmdxje"
                    target="_blank"
                    class="text-[#5A46FF] pw-text-[12px] font-normal"
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
                  <button
                    class="bg-[#5A46FF] text-white pw-px-[16px] pw-py-[8px] rounded pw-text-[12px] font-normal"
                  >
                    查看岗位
                  </button>
                </div>
                <div class="text-center mt-6">
                  <a
                    href="https://s.xinrenxinshi.com/recruitGate#/ey=0ebdb005864a706d8f15cdadc338584487c666"
                    target="_blank"
                    class="text-[#5A46FF] pw-text-[12px] font-normal"
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

<script setup>
import { ref, computed } from 'vue'
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

const { t } = useI18n()
const swiperModules = [Autoplay, Pagination, Navigation]
const { width: windowWidth } = useWindowSize()

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

const startSwipe = (e) => {
  isSwiping.value = true
  startX.value = e.touches[0].clientX
}

const swiping = (e) => {
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

const switchTab = (tabId) => {
  activeTab.value = tabId
  currentX.value = 0
}

// 岗位数据（保持原有不变）
const socialJobs = [
  { title: '感知算法工程师', category: '技术类' },
  { title: '硬件工程师（电源）', category: '技术类' },
  { title: '产品经理', category: '产品类' },
  { title: '销售经理', category: '市场类' },
  { title: '薪酬绩效专家', category: '职能类' },
]

const campusJobs = [
  { title: '硬件工程师（电源）', category: '技术类' },
  { title: '项目经理（软机/软件）', category: '项目支持类' },
  { title: '产品经理', category: '产品类' },
  { title: '市场经理', category: '市场类' },
  { title: '行政管理', category: '职能类' },
]

const internJobs = [
  { title: '感知算法实习生', category: '技术类' },
  { title: '具身智能算法实习生', category: '技术类' },
  { title: '大模型算法实习生', category: '技术类' },
  { title: '市场实习生', category: '市场类' },
  { title: '招聘管理', category: '职能类' },
]

useHead({
  title: t('menu.careers'),
})
</script>

<style scoped lang="scss">
/* 原有样式保持不变... */

/* 新增滑动样式 */
.flex {
  transition: transform 0.3s ease;
  will-change: transform;
}
wiper .swiper-slide {
  // width: 50% !important; /* 中间幻灯片占50% */
  transition: transform 0.3s;
}
:deep(.custom-pagination) {
  display: flex;
  height: 5px; /* px-to-viewport-ignore */
  gap: 8px; /* px-to-viewport-ignore */
  // background-color: transparent; /* 确保背景透明 */
}
// 纯样式覆盖
// .swiper-pagination-fraction,
// .swiper-pagination-custom,
// .swiper-horizontal > .swiper-pagination-bullets,
// .swiper-pagination-bullets.swiper-pagination-horizontal {
//   width: auto !important; /* 移除宽度设置 */
// }

.custom-prev,
.custom-next {
  cursor: pointer;
  transition: all 0.3s;
}

.custom-prev:hover,
.custom-next:hover {
  // background: red;
}
:deep(.custom-bullet) {
  width: 5px; /* px-to-viewport-ignore */
  height: 5px; /* px-to-viewport-ignore */
  background: #dcdcdc;
  border-radius: 50%;
  cursor: pointer;
  transition:
    width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1),
    /* 使用弹性曲线 */ background 0.3s ease;
  transform: translateZ(0); /* 开启GPU加速 */
  backface-visibility: hidden; /* 隐藏背面 */
}

:deep(.custom-bullet-active) {
  width: 30px; /* px-to-viewport-ignore */
  background: #5a46ff;
  border-radius: 2px; /* px-to-viewport-ignore */
}
</style>
