<template>
  <div class="bg-white">
    <!-- Banner Section -->
    <section class="relative w-full h-screen overflow-hidden">
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

        <!-- <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div
            v-for="(image, index) in workImages"
            :key="index"
            class="rounded-2xl overflow-hidden h-80"
          >
            <img :src="image.src" :alt="image.alt" class="w-full h-full object-cover" />
          </div>
        </div> -->
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
          :slidesPerView="3"
        >
          <swiper-slide v-for="(image, index) in images" :key="index">
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
    <section class="py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-6">{{ $t('careers.openPositions') }}</h2>
        <p class="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          {{ $t('careers.openPositionsDesc') }}
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
          <!-- Social Recruitment -->
          <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div class="border-b border-blue-500 pb-4 mb-6">
              <h3 class="text-2xl font-semibold text-center">
                {{ $t('careers.socialRecruitment') }}
              </h3>
            </div>
            <div class="space-y-4">
              <div
                v-for="(position, index) in socialPositions"
                :key="index"
                class="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h4 class="font-medium">{{ position.title }}</h4>
                <span class="text-sm text-gray-500">{{ position.type }}</span>
              </div>
            </div>
            <a href="" class="text-[#5A46FF]">查看更多社招岗位</a>
          </div>

          <!-- Campus Recruitment -->
          <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div class="border-b border-blue-500 pb-4 mb-6">
              <h3 class="text-2xl font-semibold text-center">
                {{ $t('careers.campusRecruitment') }}
              </h3>
            </div>
            <div class="space-y-4">
              <div
                v-for="(position, index) in campusPositions"
                :key="index"
                class="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h4 class="font-medium">{{ position.title }}</h4>
                <span class="text-sm text-gray-500">{{ position.type }}</span>
              </div>
            </div>
            <a href="" class="text-[#5A46FF]">查看更多校招岗位</a>
          </div>

          <!-- Internship -->
          <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div class="border-b border-blue-500 pb-4 mb-6">
              <h3 class="text-2xl font-semibold text-center">{{ $t('careers.internship') }}</h3>
            </div>
            <div class="space-y-4">
              <div
                v-for="(position, index) in internPositions"
                :key="index"
                class="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h4 class="font-medium">{{ position.title }}</h4>
                <span class="text-sm text-gray-500">{{ position.type }}</span>
              </div>
            </div>
            <a href="" class="text-[#5A46FF]">查看更多实习岗位</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import hireImg6 from '~/assets/images/career/hire-s3-img6.jpg'
import hireImg7 from '~/assets/images/career/hire-s3-img7.jpg'
import hireImg8 from '~/assets/images/career/hire-s3-img8.jpg'
import hireImg9 from '~/assets/images/career/hire-s3-img9.jpg'
import hireImg10 from '~/assets/images/career/hire-s3-img10.jpg'
import { Swiper, SwiperSlide } from '@/lib/vue-swiper'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const { t } = useI18n()
const swiperModules = [Autoplay, Pagination, Navigation] // 引入模块
const workImages = [
  { src: '/images/careers-env-1.jpg', alt: t('careers.workEnv1Alt') },
  { src: '/images/careers-env-2.jpg', alt: t('careers.workEnv2Alt') },
  { src: '/images/careers-env-3.jpg', alt: t('careers.workEnv3Alt') },
]

const socialPositions = [
  {
    title: t('careers.positions.hardwareEngineer.title'),
    type: t('careers.positions.hardwareEngineer.type'),
  },
  {
    title: t('careers.positions.mechanicalEngineer.title'),
    type: t('careers.positions.mechanicalEngineer.type'),
  },
  {
    title: t('careers.positions.perceptionEngineer.title'),
    type: t('careers.positions.perceptionEngineer.type'),
  },
  {
    title: t('careers.positions.roboticsEngineer.title'),
    type: t('careers.positions.roboticsEngineer.type'),
  },
  {
    title: t('careers.positions.productManager.title'),
    type: t('careers.positions.productManager.type'),
  },
]

const campusPositions = [
  {
    title: t('careers.positions.hardwareEngineerPower.title'),
    type: t('careers.positions.hardwareEngineerPower.type'),
  },
  {
    title: t('careers.positions.projectManager.title'),
    type: t('careers.positions.projectManager.type'),
  },
  {
    title: t('careers.positions.productManager.title'),
    type: t('careers.positions.productManager.type'),
  },
  {
    title: t('careers.positions.marketingManager.title'),
    type: t('careers.positions.marketingManager.type'),
  },
  {
    title: t('careers.positions.adminAssistant.title'),
    type: t('careers.positions.adminAssistant.type'),
  },
]

const internPositions = [
  {
    title: t('careers.positions.perceptionIntern.title'),
    type: t('careers.positions.perceptionIntern.type'),
  },
  {
    title: t('careers.positions.embodiedAIIntern.title'),
    type: t('careers.positions.embodiedAIIntern.type'),
  },
  { title: t('careers.positions.llmIntern.title'), type: t('careers.positions.llmIntern.type') },
  {
    title: t('careers.positions.marketingIntern.title'),
    type: t('careers.positions.marketingIntern.type'),
  },
  { title: t('careers.positions.hrIntern.title'), type: t('careers.positions.hrIntern.type') },
]
const images = [
  { src: hireImg6, title: 'Image 6' },
  { src: hireImg7, title: 'Image 7' },
  { src: hireImg8, title: 'Image 8' },
  { src: hireImg9, title: 'Image 9' },
  { src: hireImg10, title: 'Image 10' },
]
useHead({
  title: t('menu.careers'),
})
</script>
<style scoped lang="scss">
.news-swiper .swiper-slide {
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
