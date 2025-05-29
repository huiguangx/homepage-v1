<template>
  <div class="w-full">
    <!--1 Hero Banner -->
    <section class="relative w-full h-[100dvh]">
      <div class="h-full w-full">
        <ClientOnly>
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
            :effect="'fade'"
            :fade-effect="{
              crossFade: true,
            }"
            :speed="800"
            direction="horizontal"
            :slides-offset-after="200"
            :resistance-ratio="0"
            :loop="true"
            @slideChange="onSlideChange"
            @swiper="onSwiper"
          >
            <swiper-slide>
              <div class="relative h-full w-full overflow-hidden">
                <picture class="absolute inset-0 block">
                  <source
                    media="(max-width: 767px)"
                    srcset="/images/index/index-s1-o4-bg-h5.webp"
                    type="image/webp"
                  />
                  <source
                    media="(max-width: 767px)"
                    srcset="/images/index/index-s1-o4-bg-h5.jpg"
                    type="image/jpeg"
                  />
                  <source
                    media="(min-width: 768px)"
                    srcset="/images/index/index-s1-o4-bg.webp"
                    type="image/webp"
                  />
                  <img
                    src="/images/index/index-s1-o4-bg.jpg"
                    class="w-full h-full object-cover"
                    :alt="t('home.newsBanner.title')"
                  />
                </picture>
                <div
                  class="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.5)] via-[rgba(0,0,0,0.1)] to-[rgba(0,0,0,0)] h-[35%] md:h-[25%] w-full"
                ></div>

                <div
                  class="relative z-10 w-[90%] md:max-w-[1280px] mx-auto h-full pw-pt-[74px] md:pt-0 flex flex-col justify-start md:justify-center"
                >
                  <div class="slide-content text-center md:text-left">
                    <div class="space-y-3 md:space-y-6">
                      <h1
                        class="text-[14px] md:text-[28px] font-medium text-[#23233D] mx-auto md:mx-0"
                      >
                        {{ $t('home.newsBanner.title') }}
                      </h1>
                      <h2
                        class="text-[22px] md:text-[40px] font-medium text-[#23233D] mx-auto md:mx-0"
                      >
                        {{ $t('home.newsBanner.subtitle') }}
                      </h2>
                      <h3
                        v-if="locale === 'zh'"
                        class="text-[24px] md:text-5xl font-bold text-[#5A46FF] mx-auto md:mx-0"
                      >
                        {{ $t('home.newsBanner.slogan') }}
                      </h3>
                    </div>
                    <div class="pw-mt-[16px] md:mt-10">
                      <a
                        href="https://mp.weixin.qq.com/s/fh2JlVvN4p5EWbIcHG5YMw"
                        target="_blank"
                        class="home_duocore_banner_button inline-block rounded border border-[#5A46FF] md:border-none bg-transparent md:bg-[#5A46FF] text-[14px] md:text-lg font-normal pw-px-[12px] pw-py-[8px] md:px-4 md:py-[10px] text-[#5A46FF] md:text-white md:hover:bg-[#7463FF] transition-all duration-300 mx-auto md:mx-0"
                      >
                        {{ $t('home.newsBanner.cta') }}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="relative h-full w-full">
                <video
                  v-if="isSmallScreen"
                  class="absolute inset-0 w-full h-full object-cover"
                  poster="/images/index/banner-poster.jpg"
                  muted
                  autoplay
                  loop
                  x5-playsinline="true"
                  x5-video-player-type="h5-page"
                  webkit-playsinline="true"
                  preload="auto"
                  playsinline
                >
                  <source src="/index/s1banner/banner-h5.mp4" type="video/mp4" />
                </video>

                <video
                  v-else
                  class="absolute inset-0 w-full h-full object-cover"
                  poster="/images/index/banner.jpg"
                  muted
                  autoplay
                  loop
                  x5-playsinline="true"
                  x5-video-player-type="h5-page"
                  webkit-playsinline="true"
                  preload="auto"
                  playsinline
                >
                  <source src="/index/s1banner/banner.mp4" type="video/mp4" />
                </video>
                <div
                  class="w-[90%] md:max-w-[1280px] mx-auto h-full pw-pt-[74px] md:pt-0 flex flex-col justify-start md:justify-center"
                >
                  <div class="slide-content text-center md:text-left">
                    <h1
                      class="pw-text-[20px] md:text-4xl pw-pb-[8px] md:pb-4 font-medium text-white mx-auto md:mx-0"
                    >
                      {{ $t('home.hero.title') }}
                    </h1>
                    <h2 class="pw-text-[20px] md:text-4xl font-medium text-white mx-auto md:mx-0">
                      {{ $t('home.hero.subtitle') }}
                    </h2>

                    <p
                      class="pw-text-[16px] pw-py-[12px] md:py-8 md:text-3xl font-normal text-[#D2D0FB] mx-auto md:mx-0"
                    >
                      {{ $t('home.hero.slogan') }}
                    </p>

                    <NuxtLinkLocale
                      to="/about"
                      class="home_sky banner_button inline-block rounded border border-white md:border-none bg-transparent md:cursor-pointer md:bg-[#5A46FF] pw-text-[14px] md:text-lg font-normal pw-px-[12px] pw-py-[8px] md:px-4 md:py-[10px] text-white md:hover:bg-[#7463FF] transition-all duration-300 ease-out mx-auto md:mx-0"
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
                    :alt="t('home.preorder.title')"
                  />
                </picture>

                <div class="md:hidden absolute inset-0 bg-black/40"></div>
                <div
                  class="w-[90%] md:max-w-[1280px] mx-auto h-full pw-pt-[74px] md:pt-0 flex flex-col justify-start md:justify-center"
                >
                  <div class="slide-content space-y-2 md:space-y-4 text-center md:text-left">
                    <h1 class="pw-text-[22px] md:text-4xl font-medium text-white mx-auto md:mx-0">
                      {{ $t('home.preorder.title') }}
                    </h1>
                    <h2
                      class="pw-text-[16px] md:text-xl font-medium tracking-wider text-white mx-auto md:mx-0"
                    >
                      {{ $t('home.preorder.description') }}
                    </h2>
                    <p
                      class="pw-text-[24px] md:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#caadff] via-[#98beff] to-[#ddffff] bg-[length:100%_auto] inline-block mx-auto md:mx-0"
                      :class="locale !== 'en' ? 'tracking-[12px]' : ''"
                    >
                      {{ $t('home.preorder.status') }}
                    </p>

                    <div
                      class="flex flex-col items-center md:items-start md:pt-2"
                      v-if="locale === 'zh'"
                    >
                      <div class="flex flex-col item-center">
                        <img
                          src="~/assets/images/index/index-s1-qr-en.png"
                          :alt="t('home.preorder.hint')"
                          class="pw-w-[60px] md:w-20 h-auto"
                        />
                        <div class="pw-pt-[8px] md:pt-4 text-center">
                          <p
                            class="pw-text-[12px] md:text-base font-light tracking-widest text-white"
                          >
                            先到先得
                          </p>
                          <p
                            class="pw-text-[12px] md:text-base font-light tracking-widest text-white"
                          >
                            扫码咨询
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <NuxtLinkLocale
                        to="/contact"
                        v-if="locale === 'en'"
                        class="home_contact us button inline-block rounded border mt-4 border-white md:border-none bg-transparent md:cursor-pointer md:bg-[#5A46FF] pw-text-[14px] md:text-lg pw-px-[12px] pw-py-[8px] md:px-4 md:py-[10px] text-white md:hover:bg-[#7463FF] transition-all duration-300 ease-out mx-auto md:mx-0"
                      >
                        {{ $t('home.contact.title') }}
                      </NuxtLinkLocale>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>

            <div class="swiper-button-prev">
              <button class="rounded-lg">
                <img
                  src="~/assets/images/index/prev-arrow.svg"
                  class="home_banner_Left arrow"
                  :alt="t('menu.home')"
                />
              </button>
            </div>
            <div class="swiper-button-next">
              <button class="rounded-lg">
                <img
                  src="~/assets/images/index/next-arrow.svg"
                  class="home_banner_right arrow"
                  :alt="t('menu.home')"
                />
              </button>
            </div>
          </swiper>
        </ClientOnly>
      </div>
    </section>

    <!--2 Product Showcase -->
    <section class="w-full bg-white py-8 md:pt-16 pb-20 animate-fade-in-up">
      <div class="w-[90%] md:max-w-[1280px] m-auto flex flex-col items-center">
        <div class="flex flex-col items-center py-4 md:py-6 gap-2 md:gap-4">
          <h1 class="pw-text-[22px] md:text-4xl font-medium text-[#23233D] animate-h1">
            {{ $t('home.product.title') }}
          </h1>
          <p class="pw-text-[14px] md:text-lg font-normal text-[#71798A] animate-p">
            {{ $t('home.product.tagline') }}
          </p>
        </div>

        <div
          class="w-full lg:w-5/6 xl:w-3/4 2xl:w-2/3 aspect-video rounded-2xl bg-gray-100 overflow-hidden home_S1video"
        >
          <!-- <video
            class="w-full h-full object-cover home_S1video"
            poster="~/assets/images/index/index-s2-test.webp"
            controls
            x5-playsinline="true"
            x5-video-player-type="h5-page"
            webkit-playsinline="true"
            autoplay
            playsinline
          >
            <source src="~/assets/media/test.mp4" type="video/mp4" />
            您的浏览器不支持视频播放
          </video> -->
          <VideoPlayer
            v-if="locale === 'zh'"
            class="w-full h-full object-cover home_S1video"
            src="/index/s2test/index-s2-test.m3u8"
            poster="/index/s2test/index-s2-test.webp"
            :width="'100%'"
            :height="'100%'"
            controls
          />
          <VideoPlayer
            v-if="locale === 'en'"
            class="w-full h-full object-cover home_S1video"
            src="/index/s2testen/index-s2-test-en.m3u8"
            poster="/index/s2testen/index-s2-test-en.webp"
            :width="'100%'"
            :height="'100%'"
            controls
          />
        </div>
      </div>
    </section>

    <!--3 About Section -->
    <section class="bg-[#F9FAFB] py-8 md:py-32 animate-fade-in-up">
      <div
        class="mx-auto w-[90%] md:max-w-[1280px] flex flex-col items-center gap-0 md:gap-8 md:flex-row md:items-center md:justify-center"
      >
        <h1
          class="mb-4 pw-text-[22px] font-medium leading-snug tracking-tight text-[#23233D] md:hidden animate-h1"
        >
          {{ $t('home.about.title') }}
        </h1>

        <div class="w-full overflow-hidden rounded-2xl md:w-[720px] animate-img">
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
        <div class="flex-1 animate-h1">
          <h1
            class="hidden md:block text-3xl md:text-4xl font-medium leading-snug tracking-tight text-[#23233D] animate-h1"
          >
            {{ $t('home.about.title') }}
          </h1>
          <p
            class="mt-4 mb-5 pw-text-[12px] md:text-lg font-normal leading-relaxed text-[#71798A] animate-p"
          >
            {{ $t('home.about.content') }}
          </p>
          <p
            class="mb-6 pw-text-[12px] md:text-lg font-normal leading-relaxed text-[#71798A] animate-p"
          >
            {{ $t('home.about.nextcontent') }}
          </p>
          <NuxtLinkLocale
            to="/about"
            class="flex items-center gap-1.5 justify-end md:justify-start group pw-text-[12px] md:text-base font-medium text-[#475467] md:hover:text-[#5A46FF] animate-p"
          >
            {{ $t('home.about.cta') }}
            <!-- 可添加箭头图标（示例使用Heroicons） -->
            <!-- <img class="md:hidden" src="~/assets/images/index/learnmore-arrow.svg" alt="" /> -->
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="transition-all duration-300 hidden md:inline-block"
            >
              <path
                d="M13.5 4.25C13.9142 4.25 14.25 4.58579 14.25 5V11C14.25 11.4142 13.9142 11.75 13.5 11.75C13.0858 11.75 12.75 11.4142 12.75 11V6.81055L5.03028 14.5303C4.73738 14.8232 4.26262 14.8232 3.96973 14.5303C3.67684 14.2374 3.67684 13.7626 3.96973 13.4697L11.6895 5.75H7.5C7.08579 5.75 6.75 5.41421 6.75 5C6.75 4.58579 7.08579 4.25 7.5 4.25H13.5Z"
                fill="#475467"
                class="transition-colors duration-300 group-hover:fill-[#5A46FF]"
              />
            </svg>
            <img class="block md:hidden" src="~/assets/images/index/learnmore-h5.svg" alt="" />
          </NuxtLinkLocale>
        </div>
      </div>
    </section>

    <!--4 News Section -->
    <section class="w-full bg-white pw-py-[32px] md:py-14 animate-fade-in-up">
      <div class="mx-auto w-[90%] md:max-w-[1280px]">
        <h1
          class="pw-text-[22px] md:text-4xl text-center font-medium pw-pb-[14px] md:pb-6 animate-h1"
        >
          {{ $t('home.news.title') }}
        </h1>
        <div class="grid w-full pw-gap-[8px] md:gap-6 grid-cols-2 md:grid-cols-4">
          <div
            v-for="(news, index) in newsList"
            :key="index"
            class="group flex flex-col rounded-lg md:rounded-2xl bg-[#F9FAFB] md:hover:bg-white transition-all duration-300 md:hover:shadow-xl transform-gpu news-card"
            :class="{
              'hidden md:block': index >= 2,
              'delay-100': index === 1,
              'delay-200': index === 2,
              'delay-300': index === 3,
              'delay-[400ms]': index === 4,
              'delay-[500ms]': index === 5,
              'delay-[600ms]': index === 6,
              'delay-[700ms]': index === 7,
            }"
          >
            <a target="_blank" :href="news.href" class="md:pb-2">
              <!-- 图片容器 -->
              <div class="w-full rounded-t-[8px] md:rounded-t-2xl overflow-hidden bg-gray-200">
                <picture>
                  <img
                    :src="news.image"
                    alt="星尘智能"
                    loading="lazy"
                    class="w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.2,0,0,1)] md:group-hover:scale-110 aspect-[847/492]"
                    :class="`${news.className}`"
                  />
                </picture>
              </div>

              <!-- 文字内容区域（使用 flex-grow 撑满剩余空间） -->
              <div
                class="flex flex-1 flex-col pw-p-[8px] md:p-4 transition-colors duration-300 cursor-pointer"
              >
                <div class="flex-1 overflow-hidden">
                  <h1
                    class="pw-text-[14px] md:text-base font-medium text-[#020014] group-hover:text-[#000000] line-clamp-2 overflow-hidden text-ellipsis min-h-[2.8em] leading-snug"
                    :class="`${news.className}`"
                  >
                    {{ news.title }}
                  </h1>
                  <p
                    class="pw-mt-[8px] pw-mb-[8px] md:mb-2 md:mt-2 pw-text-[12px] md:text-sm text-[#71798A] group-hover:text-[#5a6473] line-clamp-2 md:line-clamp-2 overflow-hidden text-ellipsis"
                    :class="`${news.className}`"
                  >
                    {{ news.description }}
                  </p>
                </div>
                <div
                  class="mt-auto flex items-center justify-between pw-text-[11px] md:text-xs text-[#71798A] md:group-hover:text-[#5a6473] transition-all duration-300"
                >
                  <span :class="`${news.className}`">
                    {{ news.date }}
                  </span>

                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="transition-all duration-300"
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
            class="inline-block pw-text-[12px] md:text-base bg-transparent text-[#475467] border border-[#E4E4E7] md:hover:bg-[#F9FAFB] pw-px-[16px] pw-py-[8px] md:px-5 md:py-3 rounded md:rounded-md transition-colors md:cursor-pointer"
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
                class="home_join us button mt-auto flex items-center text-base pw-text-[14px] md:text-base md:cursor-pointer text-[#5A46FF] font-medium md:border-b md:hover:border-b md:border-transparent md:hover:border-[#5A46FF]"
              >
                {{ $t('home.careers.cta') }}
                <picture>
                  <!-- 小于768px（移动端）时使用 go-arrow-mobile.svg -->
                  <source
                    srcset="~/assets/images/index/go-arrow-h5.svg"
                    media="(max-width: 767px)"
                  />
                  <!-- 默认（大于等于768px）使用 go-arrow.svg -->
                  <img
                    class="pw-ml-[4px] md:ml-1"
                    src="~/assets/images/index/go-arrow.svg"
                    alt="Arrow"
                  />
                </picture>
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
                class="home_contact us button mt-auto flex items-center pw-text-[14px] md:text-base md:cursor-pointer text-[#5A46FF] font-medium md:border-b md:hover:border-b md:border-transparent md:hover:border-[#5A46FF]"
              >
                {{ $t('home.contact.cta') }}
                <picture>
                  <!-- 小于768px（移动端）时使用 go-arrow-mobile.svg -->
                  <source
                    srcset="~/assets/images/index/go-arrow-h5.svg"
                    media="(max-width: 767px)"
                  />
                  <!-- 默认（大于等于768px）使用 go-arrow.svg -->
                  <img
                    class="pw-ml-[4px] md:ml-1"
                    src="~/assets/images/index/go-arrow.svg"
                    alt="Arrow"
                  />
                </picture>
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
import type { Swiper as SwiperClass } from 'swiper/types'
import { useI18n } from 'vue-i18n'
import { Autoplay, Pagination, Navigation, EffectFade, EffectCube } from 'swiper/modules'
import { useMediaQuery } from '@vueuse/core'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

const isSmallScreen = useMediaQuery('(max-width: 767px)')

const { t, locale } = useI18n()
const autoplayDelay = 4000 // 轮播时间 30 秒

useHead(() => ({
  title: locale.value === 'zh' ? '星尘智能' : 'Astirbot',
  meta: [
    {
      name: 'description',
      content: t('home.hero.subtitle'),
    },
    {
      name: 'keywords',
      content:
        locale.value === 'zh'
          ? '星尘智能,AI机器人,智能机器人,人形机器人,机器人公司,人工智能,通用机器人,具身智能'
          : 'Astribot,AI Robot,Intelligent Robot,Humanoid Robot,Robotics Company,Artificial Intelligence,General Purpose Robot,Embodied AI',
    },
    // Open Graph tags
    {
      property: 'og:title',
      content: t('home.hero.title'),
    },
    {
      property: 'og:description',
      content: t('home.hero.subtitle'),
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:image',
      content: '/images/index/index-s1-bg.jpg',
    },
    {
      property: 'og:locale',
      content: locale.value,
    },
    {
      property: 'og:locale:alternate',
      content: locale.value === 'zh' ? 'en' : 'zh',
    },
    // Twitter Card tags
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: t('home.hero.title'),
    },
    {
      name: 'twitter:description',
      content: t('home.hero.subtitle'),
    },
    {
      name: 'twitter:image',
      content: '/images/index/index-s1-bg.jpg',
    },
    // Additional SEO tags
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      name: 'author',
      content: 'Astribot',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
  ],
  link: [
    {
      rel: 'preload',
      href: isSmallScreen.value
        ? '/images/index/index-s1-o4-bg-h5.webp'
        : '/images/index/index-s1-o4-bg.webp',
      as: 'image',
      type: 'image/webp',
    },
    {
      rel: 'preload',
      href: isSmallScreen.value ? '/images/index/banner-poster.jpg' : '/images/index/banner.jpg',
      as: 'image',
      type: 'image/jpeg',
    },
  ],
}))
useSchemaOrg([
  {
    '@type': 'Organization',
    name: 'Astribot',
    url: 'https://astribot.com',
    logo: 'https://astribot.com/images/logo.png',
    sameAs: [
      'https://www.linkedin.com/company/astribot',
      'https://twitter.com/astribot',
      'https://www.youtube.com/@astribot',
    ],
  },
  {
    '@type': 'WebSite',
    name: t('home.hero.title'),
    description: t('home.hero.subtitle'),
    url: `https://astribot.com/${locale.value}`,
    potentialAction: {
      '@type': 'SearchAction',
      target: `https://astribot.com/${locale.value}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  },
  {
    '@type': 'Product',
    name: t('home.product.title'),
    description: t('home.product.tagline'),
    image: '/images/index/index-s1-bg.jpg',
    brand: {
      '@type': 'Brand',
      name: 'Astribot',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Astribot',
    },
  },
  {
    '@type': 'NewsArticle',
    headline: t('home.newsList.news1.title'),
    description: t('home.newsList.news1.description'),
    datePublished: '2025-01-27',
    image: '/images/news/news-s2-img1.jpg',
    publisher: {
      '@type': 'Organization',
      name: 'Astribot',
      logo: {
        '@type': 'ImageObject',
        url: 'https://astribot.com/images/logo.png',
      },
    },
  },
])
const newsList = [
  {
    title: t('news.items.news1.title'),
    description: t('news.items.news1.description'),
    date: t('news.items.news1.date'),
    image: '/images/news/news-s2-img1.jpg',
    className: 'home_news_Spring Festival',
    href: 'https://mp.weixin.qq.com/s/bZWECwN9k7D_2Cn8K314lQ?mpshare=1&scene=1&srcid=0127j220u00QpuH07Pkz8Axa&sharer_shareinfo=95a16edcaf4201d6cf4218df9d6f71e1&sharer_shareinfo_first=95a16edcaf4201d6cf4218df9d6f71e1&from=industrynews&nwr_flag=1#wechat_redirect',
  },
  {
    title: t('news.items.news2.title'),
    description: t('news.items.news2.description'),
    date: t('news.items.news2.date'),
    image: '/images/news/news-s2-img2.jpg',
    className: 'home_news_π',
    href: 'https://mp.weixin.qq.com/s/iLqSChrf7JbVPW_N6G2BTA',
  },
  {
    title: t('news.items.news3.title'),
    description: t('news.items.news3.description'),
    date: t('news.items.news3.date'),
    image: '/images/news/news-s2-img3.jpg',
    className: 'home_news_Campus recruitment',
    href: 'https://mp.weixin.qq.com/s/fLL1ZBXU9_dXACOcfhpAJA',
  },
  {
    title: t('news.items.news4.title'),
    description: t('news.items.news4.description'),
    date: t('news.items.news4.date'),
    image: '/images/news/news-s2-img4.jpg',
    className: 'home_news_WRC',
    href: 'https://mp.weixin.qq.com/s/I-J3udvsligc9OSoGgxMsA',
  },
]

const swiperModules = [Autoplay, Pagination, Navigation, EffectFade, EffectCube] // 引入模块
const activePageIndex = ref(0)

const onSlideChange = (swiper: SwiperClass) => {
  activePageIndex.value = swiper.realIndex
}
const swiperInstance = ref<SwiperClass | null>(null)

const onSwiper = (swiper: SwiperClass) => {
  swiperInstance.value = swiper
}
const route = useRoute()

onBeforeUnmount(() => {
  if (swiperInstance.value) {
    swiperInstance.value.destroy(true, true)
    swiperInstance.value = null
  }

  document.querySelectorAll('video').forEach((video) => {
    video.pause()
    video.removeAttribute('src') // 清除视频源
    video.load() // 触发卸载
  })
})
// 滚动动画逻辑
const handleScrollAnimation = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          // 可以选择在这里停止观察，如果只需要动画执行一次
          observer.unobserve(entry.target)
        } else {
          // 如果需要元素滚动出视口时重置动画，可以移除in-view类
          // entry.target.classList.remove('in-view');
        }
      })
    },
    {
      threshold: 0.1, // 元素10%进入视口时触发
      rootMargin: '-100px 0px', // 提前100px触发
    },
  )

  // 找到所有需要动画的容器元素
  const animateElements = document.querySelectorAll('.animate-fade-in-up')
  animateElements.forEach((el) => observer.observe(el))

  onBeforeUnmount(() => {
    // 在组件卸载前停止观察
    animateElements.forEach((el) => observer.unobserve(el))
    observer.disconnect() // Disconnect observer on unmount
  })
}

onMounted(() => {
  handleScrollAnimation()
})
</script>

<style scoped lang="scss">
/* Responsive media styles now handled by Tailwind classes */
.swiper {
  --swiper-theme-color: #ffffff; /* 设置Swiper风格 */
  --swiper-navigation-color: #581542; /* 单独设置按钮颜色 */
}
.swiper-button-prev,
.swiper-button-next {
  margin: 25px; /* px-to-viewport-ignore */
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
  // width: 12px; /* px-to-viewport-ignore */
  // height: 24px; /* px-to-viewport-ignore */
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

// .swiper-button-prev::after {
//   background-image: url('~/assets/images/index/prev-arrow.svg');
// }

// .swiper-button-next::after {
//   background-image: url('~/assets/images/index/next-arrow.svg');
// }
/* 内容容器动画 */
// .slide-content {
//   transform: translateY(100px); /* px-to-viewport-ignore */
//   opacity: 0;
//   transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
// }

/* 激活幻灯片的动画效果 */
.swiper-slide-active .slide-content,
.swiper-slide-duplicate-active .slide-content {
  transform: translateY(0);
  opacity: 1;
}

.slide-content h1,
.slide-content h2,
.slide-content h3,
.slide-content p {
  opacity: 0;
  transform: translateY(10px);
  will-change: transform, opacity;
}

@keyframes fadeInUpSingle {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.swiper-slide-active .slide-content h1 {
  animation: fadeInUpSingle 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: 0.2s;
}

.swiper-slide-active .slide-content h2 {
  animation: fadeInUpSingle 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: 0.4s;
}

.swiper-slide-active .slide-content h3 {
  animation: fadeInUpSingle 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: 0.6s;
}
.swiper-slide-active .slide-content p {
  animation: fadeInUpSingle 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: 0.6s;
}

/* 为不同元素添加延迟动画 */
// .slide-content h1 {
//   transition-delay: 0.1s;
// }
// .slide-content h2 {
//   transition-delay: 0.2s;
// }
// .slide-content p {
//   transition-delay: 0.3s;
// }
// .slide-content button {
//   transition-delay: 0.4s;
// }
// .slide-content a {
//   transition-delay: 0.4s;
// }
:deep(.swiper-pagination) {
  /* display: none; */
  bottom: 50px; /* px-to-viewport-ignore */
}

:deep(.swiper-pagination-bullet) {
  display: inline-block;
  width: 5px; /* px-to-viewport-ignore */
  height: 5px; /* px-to-viewport-ignore */
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  opacity: 0.9;
  transition: all 0.3s ease;

  // 非激活状态样式
  // &:not(.swiper-pagination-bullet-active) {
  //   transform: scale(1);
  // }
}

:deep(.swiper-pagination-bullet-active) {
  width: 30px; /* px-to-viewport-ignore */
  height: 5px; /* px-to-viewport-ignore */
  background: rgba(255, 255, 255, 0.6);
  border-radius: 2px; /* px-to-viewport-ignore */
  position: relative;
  overflow: hidden;
  opacity: 1;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    background: white;
    border-radius: 2px; /* px-to-viewport-ignore */
    animation: progressBar var(--swiper-autoplay-duration, 4s) linear forwards;
  }
}
@keyframes progressBar {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
@media (max-width: 767px) {
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
}

// section2
@keyframes fadeInUpSmooth {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeInUpSmoothX {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-h1,
.animate-p,
.animate-img {
  opacity: 0;
  transform: translateY(30px);
  will-change: opacity, transform; /* 性能优化 */
}
.animate-img {
  opacity: 0;
  transform: translateX(-30px);
  will-change: opacity, transform; /* 性能优化 */
}
/* 动画触发 */
.animate-fade-in-up.in-view .animate-h1 {
  animation: fadeInUpSmooth 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: 0.2s;
}

.animate-fade-in-up.in-view .animate-p {
  animation: fadeInUpSmooth 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: 0.4s;
}

.animate-fade-in-up.in-view .animate-img {
  animation: fadeInUpSmoothX 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: 0.4s;
}

// section 4

// .news-card {
//   animation: slideUp 0.5s ease-out forwards;
//   opacity: 0;
// }

// @keyframes slideUp {
//   from {
//     transform: translateY(200px);
//     opacity: 0;
//   }
//   to {
//     transform: translateY(0);
//     opacity: 1;
//   }
// }

// .delay-100 {
//   animation-delay: 0.1s;
// }

// .delay-200 {
//   animation-delay: 0.2s;
// }

// .delay-300 {
//   animation-delay: 0.3s;
// }

// .delay-\[400ms\] {
//   animation-delay: 0.4s;
// }

// .delay-\[500ms\] {
//   animation-delay: 0.5s;
// }

// .delay-\[600ms\] {
//   animation-delay: 0.6s;
// }

// .delay-\[700ms\] {
//   animation-delay: 0.7s;
// }
</style>
