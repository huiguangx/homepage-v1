<template>
  <div class="w-full">
    <!-- Hero Banner -->
    <section class="relative h-screen w-full bg-black">
      <!-- <div class="absolute inset-0 bg-black/60"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div> -->

      <div class="h-full w-full">
        <swiper
          class="h-full swiper-container"
          :modules="swiperModules"
          :autoplay="{ delay: 100000, disableOnInteraction: false }"
          :pagination="{
            // el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
            // bulletClass: 'my-bullet',
            // bulletActiveClass: 'my-bullet-active',
          }"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
          direction="horizontal"
          :slides-offset-after="200"
          :resistance-ratio="0"
          :loop="true"
          @slideChange="onSlideChange"
        >
          <swiper-slide>
            <div class="relative h-full w-full">
              <video
                class="absolute inset-0 w-full h-full object-cover md:hidden"
                muted
                autoplay
                loop
              >
                <source src="@/assets/media/video/banner-h5.mp4" type="video/mp4" />
              </video>
              <video
                class="absolute inset-0 w-full h-full object-cover hidden md:block"
                muted
                autoplay
                loop
              >
                <source src="@/assets/media/video/banner.mp4" type="video/mp4" />
              </video>
              <div
                class="container absolute inset-0 z-10 mx-auto flex h-full flex-col justify-center px-4"
              >
                <div class="slide-content space-y-2">
                  <h1
                    class="text-[32px] font-medium leading-[1.172em] tracking-[0.04em] text-white"
                  >
                    {{ $t('home.hero.title') }}
                  </h1>
                  <h2
                    class="text-[48px] font-medium leading-[1.172em] tracking-[0.04em] text-white"
                  >
                    {{ $t('home.hero.subtitle') }}
                  </h2>
                  <p class="text-[32px] font-medium text-[#D2D0FB]">{{ $t('home.hero.slogan') }}</p>
                  <button
                    class="flex items-center gap-[6px] rounded bg-[#5A46FF] px-4 py-3 text-[18px] text-white hover:bg-[#7463FF] transition-all duration-300 ease-out"
                  >
                    {{ $t('home.hero.cta') }}
                  </button>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="relative h-full w-full">
              <img
                src="~/assets/images/index/index-s1-bg.jpg"
                class="absolute inset-0 w-full h-full object-cover hidden md:block"
              />
              <img
                src="~/assets/images/index/index-s1-bg-h5.jpg"
                class="absolute inset-0 w-full h-full object-cover md:hidden"
              />
              <div
                class="container absolute inset-0 z-10 mx-auto flex h-full flex-col justify-center px-4"
              >
                <div class="slide-content space-y-8">
                  <h1
                    class="text-[32px] font-medium leading-[1.172em] tracking-[0.04em] text-white"
                  >
                    {{ $t('home.hero.title') }}
                  </h1>
                  <h2
                    class="text-[48px] font-medium leading-[1.172em] tracking-[0.04em] text-white"
                  >
                    {{ $t('home.hero.subtitle') }}
                  </h2>
                  <p class="text-[32px] font-medium text-[#D2D0FB]">{{ $t('home.hero.slogan') }}</p>
                  <button
                    class="flex items-center gap-[6px] rounded bg-[#5A46FF] px-4 py-3 text-[18px] text-white"
                  >
                    {{ $t('home.hero.cta') }}
                  </button>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <!-- 导航按钮 - 完全使用Tailwind自定义 -->
        <div class="swiper-button-prev"></div>

        <div class="swiper-button-next"></div>
        <div class="swiper-pagination"></div>
      </div>
    </section>

    <!-- Product Showcase -->
    <section class="w-full bg-white py-16">
      <!-- 其他内容保持不变 -->
      <div class="mx-auto flex flex-col items-center gap-6 px-4">
        <div class="flex flex-col items-center gap-4">
          <h3 class="text-3xl md:text-4xl font-medium leading-snug tracking-tight text-[#020014]">
            {{ $t('home.product.title') }}
          </h3>
          <p class="text-lg leading-relaxed text-[#71798A]">
            {{ $t('home.product.tagline') }}
          </p>
        </div>

        <div
          class="w-full lg:w-5/6 xl:w-3/4 2xl:w-2/3 aspect-video rounded-2xl bg-gray-100 overflow-hidden"
        >
          <video class="w-full h-full object-cover" poster="" controls>
            <source src="~/assets/media/test.mp4" type="video/mp4" />
            您的浏览器不支持视频播放
          </video>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="w-full bg-[#F9FAFB] py-20 md:py-32">
      <!-- 使用Tailwind标准单位 py-20=80px -->
      <div
        class="mx-auto flex flex-col items-center gap-10 px-4 md:flex-row md:items-center md:justify-center"
      >
        <!-- 图片部分 - 支持WebP -->
        <div class="w-full overflow-hidden rounded-2xl bg-gray-200 md:w-1/2">
          <picture>
            <!-- 优先加载WebP格式 -->
            <!-- <source srcset="~/assets/images/index/index-s5-img.webp" type="image/webp" /> -->
            <!-- 兼容旧浏览器的JPEG/PNG回退 -->
            <img
              src="~/assets/images/index/index-s5-img.jpg"
              alt="{{ $t('home.about.title') }}"
              class="h-auto w-full object-contain"
              loading="lazy"
              style="aspect-ratio: auto"
            />
          </picture>
        </div>

        <!-- 文字部分 -->
        <div class="w-full max-w-xl md:w-1/2">
          <h3
            class="mb-6 text-3xl md:text-4xl font-medium leading-snug tracking-tight text-[#020014]"
          >
            {{ $t('home.about.title') }}
          </h3>
          <p class="mb-8 text-lg leading-relaxed text-[#71798A]">
            {{ $t('home.about.content') }}
          </p>
          <button
            class="flex items-center gap-1.5 text-base font-medium text-[#475467] hover:text-[#1D2939]"
          >
            {{ $t('home.hero.cta') }}
            <!-- 可添加箭头图标（示例使用Heroicons） -->
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- News Section -->
    <section class="w-full bg-white py-20">
      <!-- 使用Tailwind标准单位 py-20=80px -->
      <div class="mx-auto flex flex-col items-center gap-6 px-20">
        <!-- gap-8=32px -->
        <h3 class="text-3xl md:text-4xl font-medium leading-snug tracking-tight text-[#020014]">
          {{ $t('home.news.title') }}
        </h3>

        <!-- 网格布局（4列） -->
        <div class="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(news, index) in newsList.slice(0, 4)"
            :key="index"
            class="rounded-2xl bg-[#F9FAFB] transition-all hover:shadow-md"
          >
            <div class="aspect-video w-full rounded-t-2xl bg-gray-200">
              <NuxtImg
                :src="news.imageJpg"
                :alt="news.title"
                class="h-full w-full object-cover"
                loading="lazy"
                placeholder
              />
              <NuxtImg src="/public/index-s3-img-1.jpg"></NuxtImg>
            </div>

            <div class="p-4">
              <h4 class="mb-2 text-base font-medium leading-[1.375] text-[#020014]">
                {{ news.title }}
              </h4>
              <p class="mb-4 text-sm leading-[1.429] text-[#71798A]">
                {{ news.description }}
              </p>
              <div class="flex items-center justify-between text-xs leading-[1.333] text-[#71798A]">
                <span>{{ news.date }}</span>
                <div class="h-4 w-4"></div>
                <!-- 图标占位 -->
              </div>
            </div>
          </div>
        </div>

        <button
          class="mt-6 flex items-center gap-1.5 rounded border border-[#E4E4E4] px-5 py-3 text-base text-[#475467] hover:bg-gray-50"
        >
          {{ $t('home.news.cta') }}
          <!-- 可添加箭头图标 -->
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>

    <!-- Join & Business Sections -->
    <section class="w-full bg-white py-[80px]">
      <div
        class="container mx-auto flex flex-col items-center gap-[80px] px-4 md:flex-row md:justify-center"
      >
        <div class="w-full max-w-[412px] rounded-2xl bg-[#F9FAFB] p-[40px] text-center">
          <div class="flex flex-col items-center gap-[24px]">
            <h3 class="text-[28px] font-medium leading-[1.143em] tracking-[0.04em] text-[#020014]">
              {{ $t('home.careers.title') }}
            </h3>
            <p class="text-[16px] leading-[1.375em] tracking-[0.04em] text-[#71798A]">
              {{ $t('home.careers.description') }}
            </p>
            <button
              class="flex items-center gap-[6px] rounded bg-[#5A46FF] px-4 py-3 text-[16px] font-medium text-white"
            >
              {{ $t('home.careers.cta') }}
            </button>
          </div>
        </div>

        <div class="w-full max-w-[412px] rounded-2xl bg-[#F9FAFB] p-[40px] text-center">
          <div class="flex flex-col items-center gap-[24px]">
            <h3 class="text-[28px] font-medium leading-[1.143em] tracking-[0.04em] text-[#020014]">
              {{ $t('home.contact.title') }}
            </h3>
            <p class="text-[16px] leading-[1.375em] tracking-[0.04em] text-[#71798A]">
              {{ $t('home.contact.description') }}
            </p>
            <button
              class="flex items-center gap-[6px] rounded bg-[#5A46FF] px-4 py-3 text-[16px] font-medium text-white"
            >
              {{ $t('home.contact.cta') }}
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from '@/lib/vue-swiper'
import 'swiper/css/navigation' // 必须引入的样式
import 'swiper/css/pagination'
import type { Swiper as SwiperClass, SwiperOptions } from 'swiper/types'
// import Autoplay from 'swiper'
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

const swiperModules = [Autoplay, Pagination, Navigation] // 引入模块
const activePageIndex = ref(0)

const onSlideChange = (swiper: SwiperClass) => {
  activePageIndex.value = swiper.activeIndex
}
const newsList = computed(() => [
  {
    title: t('home.newsList.news1.title'),
    description: t('home.newsList.news1.description'),
    date: t('home.newsList.news1.date'),
    imageWebp: '~/assets/images/index/index-s3-img-1.webp',
    imageJpg: '~/assets/images/index/index-s3-img-1.jpg',
  },
  {
    title: t('home.newsList.news2.title'),
    description: t('home.newsList.news2.description'),
    date: t('home.newsList.news2.date'),
    imageWebp: '~/assets/images/index/index-s3-img4.webp',
    imageJpg: '~/assets/images/index/index-s3-img4.jpg',
  },
  {
    title: t('home.newsList.news3.title'),
    description: t('home.newsList.news3.description'),
    date: t('home.newsList.news3.date'),
    imageWebp: '~/assets/images/index/index-s3-img3.webp',
    imageJpg: '~/assets/images/index/index-s3-img3.jpg',
  },
  {
    title: t('home.newsList.news4.title'),
    description: t('home.newsList.news4.description'),
    date: t('home.newsList.news4.date'),
    imageWebp: '~/assets/images/index/index-s3-img2.webp',
    imageJpg: '~/assets/images/index/index-s3-img2.jpg',
  },
])
</script>

<style scoped>
/* Responsive media styles now handled by Tailwind classes */
.swiper {
  --swiper-theme-color: #ffffff; /* 设置Swiper风格 */
  --swiper-navigation-color: #581542; /* 单独设置按钮颜色 */
}
.swiper-button-prev,
.swiper-button-next {
  margin: 0 20px; /* px-to-viewport-ignore */
  width: 24px; /* px-to-viewport-ignore */
  height: 24px; /* px-to-viewport-ignore */
  border-radius: 50%;
  background: rgba(0, 0, 0, 0); /* 初始背景透明 */
  transition: background 0.3s ease; /* 使用 background 属性过渡 */
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
  background: rgba(0, 0, 0, 0.5); /* 鼠标悬停时背景变半透明 */
}

.swiper-button-prev::after,
.swiper-button-next::after {
  content: '';
  opacity: 1; /* 箭头图标始终不透明 */
  width: 6px; /* px-to-viewport-ignore */
  height: 12px; /* px-to-viewport-ignore */
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.swiper-button-prev::after {
  background-image: url('~/assets/images/index/prev-arrow.svg');
}

.swiper-button-next::after {
  background-image: url('~/assets/images/index/next-arrow.svg');
}
/* 内容容器动画 */
.slide-content {
  transform: translateY(50px);
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

/* 激活幻灯片的动画效果 */
.swiper-slide-active .slide-content,
.swiper-slide-duplicate-active .slide-content {
  transform: translateY(0);
  opacity: 1;
}

/* 为不同元素添加延迟动画 */
.slide-content h1 {
  transition-delay: 0.1s;
}
.slide-content h2 {
  transition-delay: 0.2s;
}
.slide-content p {
  transition-delay: 0.3s;
}
.slide-content button {
  transition-delay: 0.4s;
}
:deep(.swiper-pagination) {
  /* display: none; */
  bottom: 50px !important; /* px-to-viewport-ignore */
}
:deep(.swiper-pagination-bullet) {
  display: inline-block !important;
  width: 5px; /* px-to-viewport-ignore */
  height: 5px; /* px-to-viewport-ignore */
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  transition: all 0.5s ease;
}

:deep(.swiper-pagination-bullet-active) {
  width: 30px !important; /* px-to-viewport-ignore */
  height: 5px !important; /* px-to-viewport-ignore */
  background: white !important;
  border-radius: 2px !important; /* px-to-viewport-ignore */
  transform: none !important; /* 禁用scale变换 */
}
@media (max-width: 767px) {
  .swiper-button-prev,
  .swiper-button-next {
    display: none !important;
  }
}
</style>
