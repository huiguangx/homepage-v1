<template>
  <div class="w-full">
    <!--1 Hero Banner -->
    <section class="relative h-screen w-full">
      <div class="h-full w-full">
        <swiper
          class="h-full swiper-container"
          :modules="swiperModules"
          :autoplay="{ delay: 300000, disableOnInteraction: false }"
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
                poster="~/assets/images/index/banner-poster.jpg"
                muted
                autoplay
                loop
                playsinline
              >
                <source src="~/assets/media/video/banner-h5.mp4" type="video/mp4" />
              </video>
              <video
                class="absolute inset-0 w-full h-full object-cover hidden md:block"
                poster="~/assets/images/index/banner.jpg"
                muted
                autoplay
                loop
                playsinline
              >
                <source src="~/assets/media/video/banner.mp4" type="video/mp4" />
              </video>
              <div class="w-[90%] mx-auto h-full flex flex-col justify-center">
                <div class="slide-content space-y-3 md:space-y-8 text-center md:text-left">
                  <h1 class="pw-text-[14px] md:text-3xl font-medium text-white mx-auto md:mx-0">
                    {{ $t('home.hero.title') }}
                  </h1>
                  <h2
                    class="pw-text-[22px] md:text-5xl font-bold md:font-medium text-white mx-auto md:mx-0"
                  >
                    {{ $t('home.hero.subtitle') }}
                  </h2>

                  <!-- 标语部分 -->
                  <p class="pw-text-[16hpx] md:text-3xl font-medium text-[#D2D0FB] mx-auto md:mx-0">
                    {{ $t('home.hero.slogan') }}
                  </p>

                  <!-- 按钮链接 -->
                  <NuxtLinkLocale
                    to=""
                    class="inline-block rounded border border-white md:border-none bg-transparent md:bg-[#5A46FF] pw-text-[14px] md:text-lg px-6 py-3 text-white md:hover:bg-[#7463FF] transition-all duration-300 ease-out mx-auto md:mx-0 no-border-on-pc"
                  >
                    {{ $t('home.hero.cta') }}
                  </NuxtLinkLocale>
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
              <div class="w-[90%] mx-auto h-full flex flex-col justify-center">
                <div class="slide-content space-y-3 md:space-y-8 text-center md:text-left">
                  <h1 class="pw-text-[14px] md:text-3xl font-medium text-white mx-auto md:mx-0">
                    {{ $t('home.hero.title') }}
                  </h1>
                  <h2
                    class="pw-text-[22px] md:text-5xl font-bold md:font-medium text-white mx-auto md:mx-0"
                  >
                    {{ $t('home.hero.subtitle') }}
                  </h2>

                  <!-- 标语部分 -->
                  <p class="pw-text-[16hpx] md:text-3xl font-medium text-[#D2D0FB] mx-auto md:mx-0">
                    {{ $t('home.hero.slogan') }}
                  </p>

                  <!-- 按钮链接 -->
                  <NuxtLinkLocale
                    to=""
                    class="inline-block rounded border border-white md:border-none bg-transparent md:bg-[#5A46FF] pw-text-[14px] md:text-lg px-6 py-3 text-white md:hover:bg-[#7463FF] transition-all duration-300 ease-out mx-auto md:mx-0 no-border-on-pc"
                  >
                    {{ $t('home.hero.cta') }}
                  </NuxtLinkLocale>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <!-- 导航按钮 - 完全使用Tailwind自定义 -->
        <div class="swiper-button-prev w-14 h-14 rounded-full"></div>
        <div class="swiper-button-next w-14 h-14 rounded-full"></div>
      </div>
    </section>

    <!--2 Product Showcase -->
    <section class="w-full bg-white py-8 md:pt-16 pb-20">
      <div class="w-[90%] m-auto flex flex-col items-center">
        <div class="flex flex-col items-center py-4 md:py-6 gap-2 md:gap-4">
          <h1 class="pw-text-[22px] md:text-4xl font-medium text-[#23233D]">
            {{ $t('home.product.title') }}
          </h1>
          <p class="pw-text-[14px] md:text-lg font-normal text-[#71798A]">
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
    <section class="bg-[#F9FAFB] py-8 md:py-32">
      <!-- 使用Tailwind标准单位 py-20=80px -->
      <div
        class="mx-auto w-[90%] flex flex-col items-center gap-0 md:gap-8 md:flex-row md:items-center md:justify-center"
      >
        <h1
          class="mb-4 pw-text-[22px] font-medium leading-snug tracking-tight text-[#23233D] md:hidden"
        >
          {{ $t('home.about.title') }}
        </h1>
        <!-- 图片部分 - 支持WebP -->
        <div class="w-full overflow-hidden rounded-2xl bg-gray-200 md:w-1/2">
          <picture>
            <!-- 优先加载WebP格式 -->
            <source srcset="~/assets/images/index/index-s5-img.webp" type="image/webp" />
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
        <div class="w-full md:w-1/2">
          <h1
            class="hidden md:block text-3xl md:text-4xl font-medium leading-snug tracking-tight text-[#23233D]"
          >
            {{ $t('home.about.title') }}
          </h1>
          <p class="mt-4 mb-5 pw-text-[12px] md:text-lg font-normal leading-relaxed text-[#71798A]">
            {{ $t('home.about.content') }}
          </p>
          <p class="mb-6 pw-text-[12px] md:text-lg font-normal leading-relaxed text-[#71798A]">
            {{ $t('home.about.nextcontent') }}
          </p>
          <NuxtLinkLocale
            to=""
            class="flex gap-1.5 justify-end md:justify-start pw-text-[12px] md:text-base font-medium text-[#475467] md:hover:text-[#1D2939]"
          >
            {{ $t('home.about.cta') }}
            <!-- 可添加箭头图标（示例使用Heroicons） -->
            <img src="~/assets/images/index/learnmore-arrow.svg" alt="" />
          </NuxtLinkLocale>
        </div>
      </div>
    </section>

    <!-- News Section -->
    <section class="w-full bg-white py-8 md:py-20">
      <!-- 使用Tailwind标准单位 py-20=80px -->
      <div class="mx-auto w-[90%] flex flex-col items-center gap-4 md:gap-6">
        <!-- gap-8=32px -->
        <h1
          class="pw-text-[22px] md:text-4xl font-medium leading-snug tracking-tight text-[#23233D]"
        >
          {{ $t('home.news.title') }}
        </h1>

        <!-- 网格布局（4列） -->
        <div class="grid w-full grid-cols-2 gap-2 md:gap-6 lg:grid-cols-4">
          <div
            v-for="(news, index) in newsList.slice(0, 4)"
            :key="index"
            class="group flex flex-col pw-h-[218px] md:h-auto rounded-lg md:rounded-2xl bg-[#F9FAFB] transition-all duration-300 md:hover:shadow-lg md:hover:-translate-y-1 transform-gpu"
          >
            <!-- 图片容器 -->
            <div
              class="aspect-video w-full rounded-t-lg md:rounded-t-2xl overflow-hidden bg-gray-200"
            >
              <NuxtImg
                :src="news.imageJpg"
                :alt="news.title"
                class="h-full w-full object-cover transition-transform duration-500"
                loading="lazy"
                placeholder
              />
            </div>

            <!-- 文字内容区域（使用 flex-grow 撑满剩余空间） -->
            <div class="flex flex-1 flex-col pw-p-[8px] md:p-4 transition-colors duration-300">
              <h1
                class="pw-pb-[8px] md:pb-2 pw-text-[14px] md:text-base font-medium leading-[1.375] text-[#020014] md:group-hover:text-[#000000]"
              >
                {{ news.title }}
              </h1>
              <p
                class="pw-pb-[8px] md:pb-4 pw-text-[12px] font-normal md:text-sm leading-[1.429] text-[#71798A] md:group-hover:text-[#5a6473]"
              >
                {{ news.description }}
              </p>

              <!-- 日期容器（自动 margin-top 推到最底部） -->
              <div
                class="mt-auto flex items-center justify-between pw-text-[12px] font-normal md:text-xs text-[#71798A] md:group-hover:text-[#5a6473]"
              >
                <span>{{ news.date }}</span>
                <img src="~/assets/images/index/news-arrow.svg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <button
          class="mt-6 flex items-center rounded gap-1.5 border border-[#E4E4E4] px-5 py-3 text-base text-[#475467] md:hover:bg-gray-50"
        >
          {{ $t('home.news.cta') }}
        </button>
      </div>
    </section>

    <!-- Join & Business Sections -->
    <section class="w-full bg-[#F9FAFB] pw-py-[32px] md:py-16">
      <div class="mx-auto w-[90%] flex justify-center gap-[8px] md:gap-20 px-0">
        <div class="rounded-2xl bg-white pw-p-[24px] md:p-10 text-center">
          <div class="flex flex-col items-center">
            <h1 class="pw-text-[18px] md:text-2xl font-medium text-[#23233D]">
              {{ $t('home.careers.title') }}
            </h1>
            <p
              class="pw-text-[12px] md:text-base pw-mt-[8px] pw-mb-[16px] md:mt-4 md:mb-6 text-[#71798A]"
            >
              {{ $t('home.careers.description') }}
            </p>
            <NuxtLinkLocale
              class="flex items-center pw-text-[12px] md:text-base md:cursor-pointer rounded text-[#5A46FF] font-medium"
            >
              {{ $t('home.careers.cta') }}
              <img class="pw-pl-[4px]" src="~/assets/images/index/go-arrow.svg" alt="" />
            </NuxtLinkLocale>
          </div>
        </div>

        <div class="rounded-2xl bg-white pw-p-[24px] md:p-10 text-center">
          <div class="flex flex-col items-center">
            <h1 class="pw-text-[18px] md:text-2xl font-medium text-[#23233D]">
              {{ $t('home.contact.title') }}
            </h1>
            <p
              class="pw-text-[12px] md:text-base pw-mt-[8px] pw-mb-[16px] md:mt-4 md:mb-6 text-[#71798A]"
            >
              {{ $t('home.contact.description') }}
            </p>
            <NuxtLinkLocale
              class="flex items-center pw-text-[12px] md:text-base md:cursor-pointer rounded text-[#5A46FF] font-medium"
            >
              {{ $t('home.contact.cta') }}
              <img class="pw-pl-[4px]" src="~/assets/images/index/go-arrow.svg" alt="" />
            </NuxtLinkLocale>
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

<style scoped lang="scss">
/* Responsive media styles now handled by Tailwind classes */
.swiper {
  --swiper-theme-color: #ffffff; /* 设置Swiper风格 */
  --swiper-navigation-color: #581542; /* 单独设置按钮颜色 */
}
.swiper-button-prev,
.swiper-button-next {
  width: 56px; /* px-to-viewport-ignore */
  height: 56px; /* px-to-viewport-ignore */
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
  width: 12px; /* px-to-viewport-ignore */
  height: 24px; /* px-to-viewport-ignore */
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
  transform: translateY(50px); /* px-to-viewport-ignore */
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
  bottom: 50px; /* px-to-viewport-ignore */
}
:deep(.swiper-pagination-bullet) {
  display: inline-block;
  width: 5px; /* px-to-viewport-ignore */
  height: 5px; /* px-to-viewport-ignore */
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  transition: all 0.5s ease;
}

:deep(.swiper-pagination-bullet-active) {
  width: 30px; /* px-to-viewport-ignore */
  height: 5px; /* px-to-viewport-ignore */
  background: white;
  border-radius: 2px; /* px-to-viewport-ignore */
}
@media (max-width: 767px) {
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
}
</style>
