<template>
  <div class="w-full mx-auto">
    <!--1 Hero Banner -->
    <section class="relative w-full h-[100dvh]">
      <div class="h-full w-full">
        <swiper
          class="h-full swiper-container"
          :modules="swiperModules"
          :autoplay="{ delay: autoplayDelay, disableOnInteraction: false }"
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
          @autoplayStart="startProgress"
          @autoplayStop="stopProgress"
          @init="onSwiperInit"
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
              <div
                class="w-[85%] mx-auto h-full pw-pt-[74px] md:pt-0 flex flex-col justify-start md:justify-center"
              >
                <div class="slide-content space-y-3 md:space-y-8 text-center md:text-left">
                  <h1 class="pw-text-[14px] md:text-3xl font-medium text-white mx-auto md:mx-0">
                    {{ $t('home.hero.title') }}
                  </h1>
                  <h2
                    class="pw-text-[22px] md:text-5xl font-bold md:font-medium text-white mx-auto md:mx-0"
                  >
                    {{ $t('home.hero.subtitle') }}
                  </h2>

                  <p class="pw-text-[16px] md:text-3xl font-medium text-[#D2D0FB] mx-auto md:mx-0">
                    {{ $t('home.hero.slogan') }}
                  </p>

                  <NuxtLinkLocale
                    to="/about"
                    class="inline-block rounded border border-white md:border-none bg-transparent md:cursor-pointer md:bg-[#5A46FF] pw-text-[14px] md:text-lg font-normal pw-px-[12px] pw-py-[8px] md:px-4 md:py-3 text-white md:hover:bg-[#7463FF] transition-all duration-300 ease-out mx-auto md:mx-0"
                  >
                    {{ $t('home.hero.cta') }}
                  </NuxtLinkLocale>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="relative h-full w-full">
              <picture class="absolute inset-0 block">
                <source
                  media="(max-width: 767px)"
                  srcset="~/assets/images/index/index-s1-bg-h5.webp"
                  type="image/webp"
                />
                <source
                  media="(max-width: 767px)"
                  srcset="~/assets/images/index/index-s1-bg-h5.jpg"
                  type="image/jpeg"
                />
                <source
                  media="(min-width: 768px)"
                  srcset="~/assets/images/index/index-s1-bg.webp"
                  type="image/webp"
                />
                <img
                  src="~/assets/images/index/index-s1-bg.jpg"
                  class="w-full h-full object-cover"
                  alt="Recruitment Background"
                />
              </picture>

              <div class="md:hidden absolute inset-0 bg-black/40"></div>
              <div
                class="w-[90%] mx-auto h-full pw-pt-[74px] md:pt-0 flex flex-col justify-start md:justify-center"
              >
                <div class="slide-content space-y-3 md:space-y-8 text-center md:text-left">
                  <h1
                    class="pw-text-[22px] md:text-5xl font-bold md:font-medium text-white mx-auto md:mx-0"
                  >
                    {{ $t('home.preorder.title') }}
                  </h1>
                  <h2 class="pw-text-[16px] md:text-3xl font-medium text-white mx-auto md:mx-0">
                    {{ $t('home.preorder.description') }}
                  </h2>
                  <p
                    class="pw-text-[24px] md:text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#caadff] via-[#98beff] to-[#ddffff] bg-[length:100%_auto] inline-block mx-auto md:mx-0"
                  >
                    {{ $t('home.preorder.status') }}
                  </p>

                  <div
                    class="flex flex-col items-center md:items-start"
                    :class="{ hidden: locale === 'en' }"
                  >
                    <img
                      src="~/assets/images/index/index-s1-qr-en.png"
                      alt="QR Code"
                      class="pw-w-[80px] md:w-24 h-auto"
                    />
                    <div class="pw-pt-[8px] md:pt-4 text-center md:text-left">
                      <p class="pw-text-[12px] md:text-base text-white">先到先得</p>
                      <p class="pw-text-[12px] md:text-base text-white">扫码咨询</p>
                    </div>
                  </div>
                  <div>
                    <NuxtLinkLocale
                      to="/contact"
                      class="inline-block rounded border border-white md:border-none bg-transparent md:cursor-pointer md:bg-[#5A46FF] pw-text-[14px] md:text-lg pw-px-[12px] pw-py-[8px] md:px-6 md:py-3 text-white md:hover:bg-[#7463FF] transition-all duration-300 ease-out mx-auto md:mx-0"
                    >
                      {{ $t('home.contact.title') }}
                    </NuxtLinkLocale>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="relative h-full w-full overflow-hidden">
              <picture class="absolute inset-0 block">
                <source
                  media="(max-width: 767px)"
                  srcset="~/assets/images/index/index-s1-o3-bg-h5.webp"
                  type="image/webp"
                />
                <source
                  media="(max-width: 767px)"
                  srcset="~/assets/images/index/index-s1-o3-bg-h5.jpg"
                  type="image/jpeg"
                />
                <source
                  media="(min-width: 768px)"
                  srcset="~/assets/images/index/index-s1-o3-bg.webp"
                  type="image/webp"
                />
                <img
                  src="~/assets/images/index/index-s1-o3-bg.jpg"
                  class="w-full h-full object-cover"
                  alt="Recruitment Background"
                />
              </picture>

              <div
                class="relative z-10 w-[90%] mx-auto h-full pw-pt-[74px] md:pt-0 flex flex-col justify-start md:justify-center"
              >
                <div class="slide-content space-y-3 md:space-y-8 text-center md:text-left">
                  <h1 class="text-[14px] md:text-3xl font-medium text-white mx-auto md:mx-0">
                    {{ $t('home.recruitment.title') }}
                  </h1>
                  <h2
                    class="text-[22px] md:text-5xl font-bold md:font-medium text-white mx-auto md:mx-0"
                  >
                    {{ $t('home.recruitment.description') }}
                  </h2>
                  <NuxtLinkLocale
                    :to="{ path: '/careers', hash: '#joinus' }"
                    class="inline-block rounded border border-white md:border-none bg-transparent md:bg-[#5A46FF] text-[14px] md:text-lg pw-px-[12px] pw-py-[8px] md:px-6 md:py-3 text-white hover:bg-[#7463FF] transition-all duration-300 mx-auto md:mx-0"
                  >
                    {{ $t('home.careers.title') }}
                  </NuxtLinkLocale>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>

        <div class="swiper-button-prev w-14 h-14 rounded-full"></div>
        <div class="swiper-button-next w-14 h-14 rounded-full"></div>
      </div>
    </section>

    <!--2 Product Showcase -->
    <section class="w-full bg-white py-8 md:pt-16 pb-20">
      <div class="w-[90%] md:max-w-[1280px] m-auto flex flex-col items-center">
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
          <video
            class="w-full h-full object-cover"
            poster="~/assets/images/index/index-s2-test.webp"
            controls
          >
            <source src="~/assets/media/test.mp4" type="video/mp4" />
            您的浏览器不支持视频播放
          </video>
        </div>
      </div>
    </section>

    <!--3 About Section -->
    <section class="bg-[#F9FAFB] py-8 md:py-32">
      <div
        class="mx-auto w-[90%] md:max-w-[1280px] flex flex-col items-center gap-0 md:gap-8 md:flex-row md:items-center md:justify-center"
      >
        <h1
          class="mb-4 pw-text-[22px] font-medium leading-snug tracking-tight text-[#23233D] md:hidden"
        >
          {{ $t('home.about.title') }}
        </h1>

        <div class="w-full overflow-hidden rounded-2xl bg-gray-200 md:w-1/2">
          <picture>
            <source srcset="~/assets/images/index/index-s5-img.webp" type="image/webp" />

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
            to="/about"
            class="flex gap-1.5 justify-end md:justify-start pw-text-[12px] md:text-base font-medium text-[#475467] md:hover:text-[#5A46FF]"
          >
            {{ $t('home.about.cta') }}
            <!-- 可添加箭头图标（示例使用Heroicons） -->
            <img src="~/assets/images/index/learnmore-arrow.svg" alt="" />
          </NuxtLinkLocale>
        </div>
      </div>
    </section>

    <!--4 News Section -->
    <section class="w-full bg-white pw-py-[32px] md:py-14">
      <div class="mx-auto w-[90%] md:max-w-[1280px]">
        <h1 class="pw-text-[22px] md:text-4xl text-center font-medium pw-pb-[14px] md:pb-6">
          {{ $t('home.news.title') }}
        </h1>
        <div class="grid w-full pw-gap-[8px] md:gap-6 grid-cols-2 md:grid-cols-4">
          <div
            v-for="(news, index) in newsList"
            :key="index"
            class="group flex flex-col rounded-lg md:rounded-2xl bg-[#F9FAFB] md:hover:bg-white transition-all duration-300 md:hover:shadow-lg md:hover:-translate-y-1 transform-gpu"
            :class="{ 'hidden md:block': index >= 2 }"
          >
            <a target="_blank" :href="news.href">
              <!-- 图片容器 -->
              <div class="w-full rounded-t-[8px] md:rounded-t-2xl overflow-hidden bg-gray-200">
                <picture>
                  <!-- <source
                  media="(min-width: 768px)"
                  srcset="~/assets/images/news/news-s1-poster.jpg"
                /> -->
                  <img
                    :src="news.image"
                    alt="News Banner"
                    class="w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.2,0,0,1)] md:group-hover:scale-110"
                  />
                </picture>
              </div>

              <!-- 文字内容区域（使用 flex-grow 撑满剩余空间） -->
              <div class="flex flex-1 flex-col p-4 transition-colors duration-300 cursor-pointer">
                <div class="flex-1 overflow-hidden">
                  <h1
                    class="pw-text-[14px] md:text-base font-medium text-[#020014] group-hover:text-[#000000] line-clamp-2 overflow-hidden text-ellipsis min-h-[2.8em] leading-snug"
                  >
                    {{ news.title }}
                  </h1>
                  <p
                    class="pw-mt-[8px] pw-mb-[8px] md:mb-2 md:mt-2 pw-text-[12px] md:text-sm text-[#71798A] group-hover:text-[#5a6473] line-clamp-2 md:line-clamp-3 overflow-hidden text-ellipsis"
                  >
                    {{ news.description }}
                  </p>
                </div>
                <div
                  class="mt-auto flex items-center justify-between pw-text-[11px] md:text-xs text-[#71798A] md:group-hover:text-[#5a6473] transition-all duration-300 group-hover:-translate-y-0.5"
                >
                  <span>
                    {{ news.date }}
                  </span>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="transition-all duration-300 group-hover:scale-110 group-hover:translate-x-0.5"
                  >
                    <path
                      d="M1 9L9 1M9 1H3.66667M9 1V6.33333"
                      stroke="currentColor"
                      stroke-width="1.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="text-[#71798A] group-hover:text-[#5A46FF]"
                    />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="flex justify-center pw-mt-[16px] md:mt-8">
          <NuxtLinkLocale
            :to="{ path: '/news' }"
            class="inline-block pw-text-[12px] md:text-base bg-transparent text-[#475467] border border-[#E4E4E4] pw-px-[16px] pw-py-[8px] md:px-5 md:py-3 rounded md:rounded-md transition-colors md:cursor-pointer"
          >
            {{ $t('home.news.btn') }}
          </NuxtLinkLocale>
        </div>
      </div>
    </section>

    <!--5 Join & Business Sections -->
    <section class="w-full bg-[#F9FAFB] pw-py-[32px] md:py-16">
      <div class="mx-auto w-[90%] md:max-w-[1280px] flex justify-center">
        <div
          class="grid grid-cols-2 md:grid-cols-[repeat(2,minmax(300px,400px))] gap-[8px] md:gap-20 px-0"
        >
          <!-- 卡片1 -->
          <div class="rounded-2xl bg-white pw-p-[24px] md:p-10 text-center h-full">
            <NuxtLinkLocale
              :to="{ path: '/careers', hash: '#joinus' }"
              class="flex flex-col items-center h-full"
            >
              <h1 class="pw-text-[18px] md:text-2xl font-medium text-[#23233D]">
                {{ $t('home.careers.title') }}
              </h1>
              <p
                class="pw-text-[12px] md:text-base pw-mt-[8px] pw-mb-[16px] md:mt-4 md:mb-6 text-[#71798A]"
              >
                {{ $t('home.careers.description') }}
              </p>
              <div
                class="mt-auto flex items-center pw-text-[12px] md:text-base md:cursor-pointer rounded text-[#5A46FF] font-medium"
              >
                {{ $t('home.careers.cta') }}
                <img
                  class="pw-ml-[4px] md:ml-1 md:mt-1"
                  src="~/assets/images/index/go-arrow.svg"
                  alt=""
                />
              </div>
            </NuxtLinkLocale>
          </div>

          <!-- 卡片2 -->
          <div class="rounded-2xl bg-white pw-p-[24px] md:p-10 text-center h-full">
            <NuxtLinkLocale :to="{ path: '/contact' }" class="flex flex-col items-center h-full">
              <h1 class="pw-text-[18px] md:text-2xl font-medium text-[#23233D]">
                {{ $t('home.contact.subtitle') }}
              </h1>
              <p
                class="pw-text-[12px] md:text-base pw-mt-[8px] pw-mb-[16px] md:mt-4 md:mb-6 text-[#71798A]"
              >
                {{ $t('home.contact.description') }}
              </p>
              <div
                class="mt-auto flex items-center pw-text-[12px] md:text-base md:cursor-pointer rounded text-[#5A46FF] font-medium"
              >
                {{ $t('home.contact.cta') }}
                <img
                  class="pw-ml-[4px] md:ml-1 md:mt-1"
                  src="~/assets/images/index/go-arrow.svg"
                  alt=""
                />
              </div>
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
import { useI18n } from 'vue-i18n'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import img1 from '~/assets/images/news/news-s2-img1.jpg'
import img2 from '~/assets/images/news/news-s2-img2.jpg'
import img3 from '~/assets/images/news/news-s2-img3.jpg'
import img4 from '~/assets/images/news/news-s2-img4.jpg'
// import img5 from '~/assets/images/news/news-s2-img5.jpg'
// import img6 from '~/assets/images/news/news-s2-img6.jpg'
const { t, locale } = useI18n()
useHead({
  title: locale.value === 'zh' ? '星尘智能' : 'Astirbot',
  meta: [
    {
      name: 'description',
      content: '',
    },
    {
      name: 'keywords',
      content: '', // 如果未定义，默认值为 'AI,智能助手,人工智能'
    },
  ],
})
useSchemaOrg([
  {
    '@type': 'DefinedTerm',
    name: 'Nuxt Schema.org',
    description: 'Nuxt Schema.org is a Nuxt module for adding Schema.org to your Nuxt app.',
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: 'Nuxt Modules',
    },
  },
])
const newsList = [
  {
    title: t('news.items.news1.title'),
    description: t('news.items.news1.description'),
    date: t('news.items.news1.date'),
    image: img1,
    href: 'https://mp.weixin.qq.com/s/bZWECwN9k7D_2Cn8K314lQ?mpshare=1&scene=1&srcid=0127j220u00QpuH07Pkz8Axa&sharer_shareinfo=95a16edcaf4201d6cf4218df9d6f71e1&sharer_shareinfo_first=95a16edcaf4201d6cf4218df9d6f71e1&from=industrynews&nwr_flag=1#wechat_redirect',
  },
  {
    title: t('news.items.news2.title'),
    description: t('news.items.news2.description'),
    date: t('news.items.news2.date'),
    image: img2,
    href: 'https://mp.weixin.qq.com/s/iLqSChrf7JbVPW_N6G2BTA',
  },
  {
    title: t('news.items.news3.title'),
    description: t('news.items.news3.description'),
    date: t('news.items.news3.date'),
    image: img3,
    href: 'https://mp.weixin.qq.com/s/fLL1ZBXU9_dXACOcfhpAJA',
  },
  {
    title: t('news.items.news4.title'),
    description: t('news.items.news4.description'),
    date: t('news.items.news4.date'),
    image: img4,
    href: 'https://mp.weixin.qq.com/s/I-J3udvsligc9OSoGgxMsA',
  },
  // {
  //   title: t('news.items.news5.title'),
  //   description: t('news.items.news5.description'),
  //   date: t('news.items.news5.date'),
  //   image: img5,
  // },
  // {
  //   title: t('news.items.news6.title'),
  //   description: t('news.items.news6.description'),
  //   date: t('news.items.news6.date'),
  //   image: img6,
  // },
]

const swiperModules = [Autoplay, Pagination, Navigation] // 引入模块
const activePageIndex = ref(0)

const onSlideChange = (swiper: SwiperClass) => {
  activePageIndex.value = swiper.activeIndex
  startProgress() // 重启计时器
}

const progress = ref(0) // 进度（0 到 100）
let progressInterval: number | null = null // 计时器 ID
const autoplayDelay = 4000 // 轮播时间 30 秒
// 开始进度计时
const startProgress = () => {
  stopProgress() // 清除现有计时器
  progress.value = 0
  const startTime = Date.now()
  progressInterval = setInterval(() => {
    const elapsed = Date.now() - startTime
    progress.value = Math.min((elapsed / autoplayDelay) * 100, 100) // 0% 到 100%
    console.log('Progress:', progress.value) // 调试用
    updateBulletProgress()
  }, 50) // 每 50ms 更新
}

// 停止进度计时
const stopProgress = () => {
  if (progressInterval !== null) {
    clearInterval(progressInterval)
    progressInterval = null
  }
}

const updateBulletProgress = () => {
  const bullets = document.querySelectorAll<HTMLElement>('.swiper-pagination-bullet')
  const realIndex = activePageIndex.value % bullets.length

  // 先更新响应式变量，再操作DOM
  progress.value = 100 // 确保其他依赖progress的地方能收到更新

  nextTick(() => {
    // 确保DOM更新后执行
    bullets.forEach((bullet, index) => {
      bullet.style.setProperty('--progress', index === realIndex ? '100%' : '0%')
    })
  })
}
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
  transform: translateY(100px); /* px-to-viewport-ignore */
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
// :deep(.swiper-pagination-bullet) {
//   display: inline-block;
//   width: 5px; /* px-to-viewport-ignore */
//   height: 5px; /* px-to-viewport-ignore */
//   background: rgba(255, 255, 255, 0.6);
//   border-radius: 50%;
//   transition: all 0.5s ease;
//   opacity: 0.9;
// }

// :deep(.swiper-pagination-bullet-active) {
//   width: 30px; /* px-to-viewport-ignore */
//   height: 5px; /* px-to-viewport-ignore */
//   background: white;
//   border-radius: 2px; /* px-to-viewport-ignore */
//   opacity: 1;
// }
:deep(.swiper-pagination-bullet) {
  display: inline-block;
  width: 5px; /* px-to-viewport-ignore */
  height: 5px; /* px-to-viewport-ignore */
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  transition: all 0.5s ease;
  opacity: 0.9;
  position: relative;
}

:deep(.swiper-pagination-bullet-active) {
  width: 30px; /* px-to-viewport-ignore */
  height: 5px; /* px-to-viewport-ignore */
  background: rgba(255, 255, 255, 0.6);
  border-radius: 2px; /* px-to-viewport-ignore */
  opacity: 1;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: var(--progress, 0%);
    height: 100%;
    background: white;
    border-radius: 2px; /* px-to-viewport-ignore */
    transition: width 3s linear; /* 匹配 3 秒轮播时间 */
  }
}
@media (max-width: 767px) {
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
}
</style>
