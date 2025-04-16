<template>
  <div class="w-full">
    <!-- Hero Banner -->
    <section class="relative h-screen w-full bg-black">
      <!-- <div class="absolute inset-0 bg-black/60"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div> -->
      <div class="h-full w-full">
        <swiper
          class="h-full"
          :modules="swiperModules"
          :autoplay="{ delay: 1000, disableOnInteraction: false }"
          direction="horizontal"
          :slides-offset-after="200"
          :resistance-ratio="0"
          :pagination="{ clickable: true }"
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
                <div class="space-y-2">
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
                <div class="max-w-[697px] space-y-8">
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
      </div>
    </section>

    <!-- Product Showcase -->
    <section class="w-full bg-white py-[80px]">
      <div class="container mx-auto flex flex-col items-center gap-[24px] px-4">
        <div class="flex flex-col items-center gap-[16px]">
          <h3 class="text-[36px] font-medium leading-[1.172em] tracking-[0.04em] text-[#020014]">
            {{ $t('home.product.title') }}
          </h3>
          <p class="text-[18px] leading-[1.444em] text-[#71798A]">
            {{ $t('home.product.tagline') }}
          </p>
        </div>

        <div
          class="relative aspect-video w-full max-w-4xl overflow-hidden rounded-2xl bg-gray-100"
        ></div>
      </div>
    </section>

    <!-- About Section -->
    <section class="w-full bg-[#F9FAFB] py-[80px]">
      <div
        class="container mx-auto flex flex-col items-center gap-[40px] px-4 md:flex-row md:justify-center"
      >
        <div class="aspect-square w-full max-w-xl overflow-hidden rounded-2xl bg-gray-200"></div>

        <div class="max-w-xl">
          <h3
            class="mb-6 text-[36px] font-medium leading-[1.172em] tracking-[0.04em] text-[#020014]"
          >
            {{ $t('home.about.title') }}
          </h3>
          <p class="mb-8 text-[18px] leading-[1.444em] text-[#71798A]">
            {{ $t('home.about.content') }}
          </p>
          <button class="flex items-center gap-[6px] text-[16px] font-medium text-[#475467]">
            {{ $t('home.hero.cta') }}
          </button>
        </div>
      </div>
    </section>

    <!-- News Section -->
    <section class="w-full bg-white py-[80px]">
      <div class="container mx-auto flex flex-col items-center gap-[32px] px-4">
        <h3 class="text-[36px] font-medium leading-[1.172em] tracking-[0.04em] text-[#020014]">
          {{ $t('home.news.title') }}
        </h3>

        <div class="flex w-full snap-x snap-mandatory gap-[24px] overflow-x-auto px-[80px] pb-4">
          <div
            v-for="(news, index) in newsList"
            :key="index"
            class="w-[320px] flex-shrink-0 snap-center rounded-2xl bg-[#F9FAFB]"
          >
            <div class="aspect-video w-full rounded-t-2xl bg-gray-200"></div>
            <div class="p-4">
              <h4 class="mb-2 text-[16px] font-medium leading-[1.375em] text-[#020014]">
                {{ news.title }}
              </h4>
              <p class="mb-4 text-[14px] leading-[1.429em] text-[#71798A]">
                {{ news.description }}
              </p>
              <div
                class="flex items-center justify-between text-[12px] leading-[1.333em] text-[#71798A]"
              >
                <span>{{ news.date }}</span>
                <div class="h-4 w-4"></div>
              </div>
            </div>
          </div>
        </div>

        <button
          class="flex items-center gap-[6px] rounded border border-[#E4E4E4] px-5 py-3 text-[16px] text-[#475467]"
        >
          {{ $t('home.news.cta') }}
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
import { Swiper, SwiperSlide, modules as swiperModules } from '@/lib/vue-swiper'
import type { Swiper as SwiperClass, SwiperOptions } from 'swiper/types'
// import Autoplay from 'swiper'
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

// swiper
// const swiperOptions: SwiperOptions = {
//   autoplay: {
//     delay: 3000, // 每3秒自动切换
//     disableOnInteraction: false, // 用户交互后仍然继续自动播放
//   },
//   modules: swiperModules,
//   direction: 'horizontal',
//   mousewheel: false,
//   slidesOffsetAfter: 200,
//   resistanceRatio: 0,
//   loop: true,
// }
const activePageIndex = ref(0)

const onSlideChange = (swiper: SwiperClass) => {
  activePageIndex.value = swiper.activeIndex
}
interface NewsItem {
  title: string
  description: string
  date: string
}

const newsList = computed<NewsItem[]>(() => {
  try {
    const items = JSON.parse(t('home.news.items'))
    return Array.isArray(items) ? items : []
  } catch {
    return []
  }
})
</script>

<style scoped>
/* Responsive media styles now handled by Tailwind classes */
</style>
