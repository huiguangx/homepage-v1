<template>
  <div class="w-full max-w-[2560px] mx-auto">
    <!--1 Hero Video Section -->
    <section class="relative h-screen w-full bg-black overflow-hidden">
      <div class="h-full w-full">
        <video
          class="absolute inset-0 w-full h-full object-cover object-bottom md:hidden"
          muted
          autoplay
          loop
          playsinline
        >
          <source src="~/assets/media/describe-h5.mp4" type="video/mp4" />
        </video>
        <video
          class="absolute inset-0 w-full h-full object-cover object-bottom hidden md:block"
          muted
          autoplay
          loop
          playsinline
        >
          <source src="~/assets/media/describe.mp4" type="video/mp4" />
        </video>
        <div class="absolute inset-x-0 top-28 text-center z-20">
          <div>
            <h1 class="pw-text-[26px] md:text-5xl font-bold text-white pw-mb-[12px] md:mb-4">
              {{ $t('product.video.title') }}
            </h1>
            <p class="pw-text-[16px] md:text-lg text-white font-normal pw-mb-[16px] md:mb-6">
              {{ $t('product.video.subtitle') }}
            </p>
            <NuxtLinkLocale
              class="inline-block pw-text-[14px] md:text-base bg-transparent text-white border border-white pw-px-[20px] pw-py-[12px] md:px-5 md:py-3 rounded-md hover:bg-white md:hover:text-black transition-colors"
              href="#"
            >
              {{ $t('product.video.cta') }}
            </NuxtLinkLocale>
          </div>
        </div>
      </div>
    </section>

    <!--2 all-powerful robot-->
    <section class="w-full bg-[#161616] pw-py-[32px] md:py-20">
      <div class="h-auto w-[90%] mx-auto">
        <div class="text-center pw-pb-[14px] md:py-10">
          <div>
            <h1 class="pw-text-[22px] md:text-4xl font-medium text-white">
              {{ $t('product.performance.title') }}
            </h1>
            <p class="pw-text-[14px] md:text-lg font-normal text-[#C9C9C9]">
              {{ $t('product.performance.description') }}
            </p>
          </div>
        </div>
        <swiper
          class="product-swiper text-white"
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
          :slidesPerView="'auto'"
          @activeIndexChange="handleProductSlideChange"
        >
          <swiper-slide
            v-for="(video, index) in videos"
            :key="index"
            :class="{ 'active-slide': isActive(index) }"
          >
            <video
              :ref="'videoPlayer' + index"
              class="h-full w-full object-cover rounded-2xl"
              muted
              loop
              playsinline
              :autoplay="isActive(index)"
            >
              <source :src="video.src" type="video/mp4" />
              <!-- 兼容性提示 -->
              <p class="absolute bottom-0 text-white p-2 bg-black/50">您的浏览器不支持HTML5视频</p>
            </video>
          </swiper-slide>
        </swiper>
        <div
          class="flex justify-center md:justify-between items-center pw-pt-[30px] md:pt-14 md:px-28"
        >
          <!-- 自定义分页器 -->
          <div class="custom-pagination"></div>
          <!-- 自定义导航按钮 -->
          <div class="hidden md:flex gap-4 text-white">
            <button class="custom-prev w-9 h-9 bg-[#2A2A2A] rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
              </svg>
            </button>
            <button class="custom-next w-9 h-9 bg-[#2A2A2A] rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!--3 Performance Section -->
    sdf
    <section
      class="pw-py-[32px] md:py-20 bg-[#010101] bg-[url('~/assets/images/product/describe-s2-bg.jpg')] bg-contain"
    >
      <div class="w-[90%] mx-auto">
        <div class="mx-auto text-center pw-pb-[14px] md:pb-20">
          <h2 class="pw-text-[22px] md:text-4xl font-medium text-white pw-pb-[8px] md:pb-6">
            {{ $t('product.specs.title') }}
          </h2>
          <p class="pw-text-[14] md:text-xl font-normal text-[#C9C9C9]">
            {{ $t('product.specs.description') }}
          </p>
        </div>

        <div class="flex justify-center items-center">
          <div class="w-full md:w-2/3">
            <div class="rounded-lg">
              <div class="grid grid-cols-3 gap-x-4 relative py-8">
                <!-- 背景装饰条 -->
                <div
                  class="absolute inset-y-0 left-1/3 right-1/3 bg-[#AAAAAA] bg-opacity-30 z-0 rounded-2xl pointer-events-none"
                ></div>

                <!-- 表头 -->
                <div class="col-span-1 text-right pw-px-[14px] md:px-15 text-gray-400"></div>
                <div class="col-span-1 text-center p-[8px] pr-[8px]">
                  <h3 class="pw-text-[16px] md:text-xl font-medium mb-2 text-white my-text-class">
                    星尘智能S1
                  </h3>
                </div>
                <div class="col-span-1 text-center p-[8px]">
                  <h3 class="pw-text-[16px] md:text-xl font-medium mb-2 text-gray-300">
                    普通成年男性
                  </h3>
                </div>

                <!-- 数据行 -->
                <template v-for="(item, index) in specItems" :key="index">
                  <!-- 第一列-->
                  <div
                    class="col-span-1 text-right pr-[16px] text-[#AAAAAA] py-3 flex items-center justify-end min-h-[3rem]"
                  >
                    <span class="whitespace-normal text-right">{{ item.name }}</span>
                  </div>
                  <!-- 第二列-->
                  <div class="col-span-1 flex items-center py-3 pw-px-[16px] min-h-[3rem]">
                    <div class="flex flex-row items-baseline flex-wrap text-left w-full">
                      <!-- 修改这里 -->
                      <span class="text-2xl font-bold text-white mr-1">{{ item.s1Value }}</span>
                      <span class="text-xs text-[#AAAAAA] whitespace-normal">
                        {{ item.s1Unit }}
                      </span>
                    </div>
                  </div>
                  <!-- 第三列-->
                  <div
                    class="col-span-1 flex items-center justify-center py-3 pl-[8px] min-h-[3rem]"
                  >
                    <div class="flex flex-row items-baseline flex-wrap justify-center">
                      <span class="text-2xl font-normal text-[#AAAAAA] mr-1">
                        {{ item.humanValue }}
                      </span>
                      <span class="text-xs font-normal text-[#AAAAAA] whitespace-normal">
                        {{ item.humanUnit }}
                      </span>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>

        <p class="pw-text-[10px] md:text-xs text-[#656565] text-center mt-12">
          {{ $t('product.specs.note') }}
        </p>
      </div>
    </section>

    <!--4 Toolchain Section -->
    <section class="bg-[#161616] pw-py-[32px] md:py-20">
      <div class="w-[90%] mx-auto">
        <div class="text-center pw-pb-[14px] md:pb-10">
          <h2 class="pw-text-[22px] md:text-4xl font-medium text-white pw-pb-[8px] md:pb-6">
            {{ $t('product.toolchain.title') }}
          </h2>
          <p class="pw-text-[14px] md:text-xl font-normal text-[#C9C9C9]">
            {{ $t('product.toolchain.description') }}
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 pw-gap-[8px] md:gap-6">
          <div class="bg-[#252525] rounded-2xl pw-p-[12px] md:p-6 flex flex-col h-full">
            <div class="flex-1 flex items-center pw-pb-[8px] md:pb-5">
              <h3 class="text-[14px] md:text-xl font-medium text-white w-full text-center">
                {{ $t('product.toolchain.features.0.title') }}
              </h3>
            </div>
            <div class="rounded-xl md:rounded-2xl overflow-hidden">
              <img
                src="~/assets/images/product/describe-s3-img1.jpg"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- <p class="text-[#AAAAAA]">{{ $t('product.toolchain.features.0.description') }}</p> -->
          </div>

          <div class="bg-[#252525] rounded-2xl pw-p-[12px] md:p-6 flex flex-col h-full">
            <div class="flex-1 flex items-center pw-pb-[8px] md:pb-5">
              <h3 class="text-[14px] md:text-xl font-medium text-white w-full text-center">
                {{ $t('product.toolchain.features.1.title') }}
              </h3>
            </div>
            <div class="rounded-xl md:rounded-2xl overflow-hidden">
              <img
                src="~/assets/images/product/describe-s3-img2.jpg"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- <p class="text-[#AAAAAA]">{{ $t('product.toolchain.features.1.description') }}</p> -->
          </div>

          <div class="bg-[#252525] rounded-2xl pw-p-[12px] md:p-6 flex flex-col h-full">
            <div class="flex-1 flex items-center pw-pb-[8px] md:pb-5">
              <h3 class="text-[14px] md:text-xl font-medium text-white w-full text-center">
                {{ $t('product.toolchain.features.2.title') }}
              </h3>
            </div>
            <div class="rounded-xl md:rounded-2xl overflow-hidden">
              <img
                src="~/assets/images/product/describe-s3-img3.jpg"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- <p class="text-[#AAAAAA]">{{ $t('product.toolchain.features.2.description') }}</p> -->
          </div>

          <div class="bg-[#252525] rounded-2xl pw-p-[12px] md:p-6 flex flex-col h-full">
            <div class="flex-1 flex items-center pw-pb-[8px] md:pb-5">
              <h3 class="text-[14px] md:text-xl font-medium text-white w-full text-center">
                {{ $t('product.toolchain.features.3.title') }}
              </h3>
            </div>
            <div class="rounded-xl md:rounded-2xl overflow-hidden">
              <img
                src="~/assets/images/product/describe-s3-img4.jpg"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- <p class="text-[#AAAAAA]">{{ $t('product.toolchain.features.3.description') }}</p> -->
          </div>

          <div class="bg-[#252525] rounded-2xl pw-p-[12px] md:p-6 flex flex-col h-full">
            <div class="flex-1 flex items-center pw-pb-[8px] md:pb-5">
              <h3 class="text-[14px] md:text-xl font-medium text-white w-full text-center">
                {{ $t('product.toolchain.features.4.title') }}
              </h3>
            </div>
            <div class="rounded-xl md:rounded-2xl overflow-hidden">
              <img
                src="~/assets/images/product/describe-s3-img5.jpg"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- <p class="text-[#AAAAAA]">{{ $t('product.toolchain.features.4.description') }}</p> -->
          </div>

          <div class="bg-[#252525] rounded-2xl pw-p-[12px] md:p-6 flex flex-col h-full">
            <div class="flex-1 flex items-center pw-pb-[8px] md:pb-5">
              <h3 class="text-[14px] md:text-xl font-medium text-white w-full text-center">
                {{ $t('product.toolchain.features.5.title') }}
              </h3>
            </div>
            <div class="rounded-xl md:rounded-2xl overflow-hidden">
              <img
                src="~/assets/images/product/describe-s3-img6.jpg"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- <p class="text-[#AAAAAA]">{{ $t('product.toolchain.features.5.description') }}</p> -->
          </div>
        </div>
        <div class="bg-[#252525] rounded-2xl pw-p-[16px] md:p-10 text-center pw-mt-[24px] md:mt-6">
          <h2 class="pw-text-[14px] md:text-2xl font-medium text-white pw-pb-[8px] md:pb-8">
            {{ $t('product.teleoperation.title') }}
          </h2>
          <swiper
            class="vr-swiper"
            :modules="swiperModules"
            :autoplay="{ delay: 5000, disableOnInteraction: false }"
            :pagination="{
              el: '.vr-pagination',
              clickable: true,
              bulletClass: 'vr-custom-bullet',
              bulletActiveClass: 'vr-custom-bullet-active',
            }"
            :loop="true"
            :spaceBetween="20"
            :slidesPerView="1"
            :breakpoints="{
              768: {
                slidesPerView: 2.5,
                // centeredSlides: true,
                initialSlide: 1,
              },
            }"
            @activeIndexChange="handleVrSlideChange"
          >
            <swiper-slide
              v-for="(video, index) in vrVideos"
              :key="index"
              :class="{ 'active-slide': isActive(index) }"
            >
              <video
                :ref="'videoPlayer' + index"
                class="h-full w-full object-cover rounded-2xl"
                muted
                loop
                playsinline
                :autoplay="isActive(index)"
              >
                <source :src="video.src" type="video/mp4" />
                <!-- 兼容性提示 -->
                <p class="absolute bottom-0 text-white p-2 bg-black/50">
                  您的浏览器不支持HTML5视频
                </p>
              </video>
              <div class="flex justify-between pw-pt-[8px] md:pt-4">
                <p class="text-white">{{ video.desc }}</p>
                <!-- <div>查看详情</div> -->
              </div>
            </swiper-slide>
          </swiper>
          <div class="flex justify-center md:justify-between items-center pw-pt-[24px] md:pt-8">
            <!-- 自定义分页器 -->
            <div class="vr-pagination"></div>
            <!-- 自定义导航按钮 -->
            <div class="hidden md:flex gap-4 text-white">
              <button class="vr-custom-prev w-9 h-9 bg-[#2A2A2A] rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
                </svg>
              </button>
              <button class="vr-custom-next w-9 h-9 bg-[#2A2A2A] rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--5 Collaboration Section -->
    <section class="pw-py-[32px] md:py-20 bg-[#010101]">
      <div class="w-[90%] mx-auto">
        <div class="text-center pw-pb-[16px] md:pb-15">
          <h2 class="pw-text-[22px] md:text-4xl font-medium text-white">
            {{ $t('product.cases.title') }}
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 pw-gap-[16px] md:gap-8 mx-auto">
          <div class="bg-[#161616] rounded-2xl">
            <div class="rounded-t-2xl overflow-hidden">
              <img
                src="~/assets/images/product/describe-s4-img1.jpg"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="pw-px-[12px] pw-py-[16px] md:px-3 md:py-5">
              <div class="h-auto mb-2">
                <img
                  src="~/assets/images/product/describe-s4-tit-img1.png"
                  class="w-2/3 object-cover"
                />
              </div>

              <p class="pw-text-[12px] md:text-sm text-[#AAAAAA]">
                {{ $t('product.cases.partners.0.desc') }}
              </p>
            </div>
          </div>

          <div class="bg-[#161616] rounded-2xl">
            <div class="rounded-t-2xl overflow-hidden">
              <img
                src="~/assets/images/product/describe-s4-img2.jpg"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="pw-px-[12px] pw-py-[16px] md:px-3 md:py-5">
              <img
                src="~/assets/images/product/describe-s4-tit-img2.png"
                class="h-10 mb-2 object-cover"
              />
              <p class="pw-text-[12px] md:text-sm text-[#AAAAAA]">
                {{ $t('product.cases.partners.1.desc') }}
              </p>
            </div>
          </div>

          <div class="bg-[#161616] rounded-2xl">
            <div class="rounded-t-2xl overflow-hidden">
              <img
                src="~/assets/images/product/describe-s4-img3.jpg"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="pw-px-[12px] pw-py-[16px] md:px-3 md:py-5">
              <img
                src="~/assets/images/product/describe-s4-tit-img3.png"
                class="h-10 mb-2 object-cover"
              />
              <p class="pw-text-[12px] md:text-sm text-[#AAAAAA]">
                {{ $t('product.cases.partners.2.desc') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--6 Ecosystem Section -->
    <section class="pw-pt-[32px] pw-pb-[40px] md:pt-24 md:pb-20 bg-[#1F1F1F]">
      <div class="w-[90%] mx-auto">
        <div class="text-center">
          <h1 class="pw-text-[22px] md:text-4xl font-medium text-white pw-pb-[8px] md:pb-4">
            {{ $t('product.ecosystem.title') }}
          </h1>
          <p class="pw-text-[14px] md:text-xl text-[#C9C9C9]">
            {{ $t('product.ecosystem.vision') }}
          </p>
        </div>

        <div class="grid md:grid-cols-3 pw-py-[24px] md:py-14 pw-gap-[16px] md:gap-20 text-center">
          <div
            class="rounded-2xl flex flex-col justify-center items-center bg-[#171717] md:bg-[#1F1F1F] pw-py-[24px] pw-px-[16px] md:p-5"
          >
            <img src="~/assets/images/product/innobot.svg" alt="" />
            <h3
              class="pw-text-[18px] md:text-2xl font-medium text-white pw-pt-[12px] pw-pb-[8px] md:pt-5 md:pb-2"
            >
              {{ $t('product.ecosystem.sections.0.title') }}
            </h3>
            <p class="pw-text-[12px] md:text-sm font-normal text-[#AAAAAA]">
              {{ $t('product.ecosystem.sections.0.desc') }}
            </p>
          </div>

          <div
            class="rounded-2xl p-8 flex flex-col justify-center items-center bg-[#171717] md:bg-[#1F1F1F] pw-py-[24px] pw-px-[16px] md:p-5"
          >
            <img src="~/assets/images/product/techatom.svg" alt="" />
            <h3
              class="pw-text-[18px] md:text-2xl font-medium text-white pw-pt-[12px] pw-pb-[8px] md:pt-5 md:pb-2"
            >
              {{ $t('product.ecosystem.sections.1.title') }}
            </h3>
            <p class="pw-text-[12px] md:text-sm font-normal text-[#AAAAAA]">
              {{ $t('product.ecosystem.sections.1.desc') }}
            </p>
          </div>

          <div
            class="rounded-2xl p-8 flex flex-col justify-center items-center bg-[#171717] md:bg-[#1F1F1F] pw-py-[24px] pw-px-[16px] md:p-5"
          >
            <img src="~/assets/images/product/xplorebox.svg" alt="" />
            <h3
              class="pw-text-[18px] md:text-2xl font-medium text-white pw-pt-[12px] pw-pb-[8px] md:pt-5 md:pb-2"
            >
              {{ $t('product.ecosystem.sections.2.title') }}
            </h3>
            <p class="pw-text-[12px] md:text-sm font-normal text-[#AAAAAA]">
              {{ $t('product.ecosystem.sections.2.desc') }}
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <NuxtLinkLocale
          to="/contact"
          class="pw-px-[20px] pw-py-[12px] md:px-4 md:py-2 rounded font-normal text-white bg-[#5A46FF] pw-text-[14px] md:text-sm md:hover:bg-[#7463FF] transition-all duration-300 ease-out"
        >
          {{ $t('product.ecosystem.cta') }}
        </NuxtLinkLocale>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Swiper, SwiperSlide } from '@/lib/vue-swiper'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import video1 from '~/assets/media/遥操1.mp4'
import video2 from '~/assets/media/遥操2.mp4'
import video3 from '~/assets/media/遥操3.mp4'
import video4 from '~/assets/media/遥操4.mp4'
import video5 from '~/assets/media/遥操5.mp4'
import video6 from '~/assets/media/遥操6.mp4'
import danceVideo from '~/assets/media/01跳舞.mp4'
import catVideo from '~/assets/media/02逗猫＋扫地.mp4'
import yangqinVideo from '~/assets/media/03扬琴.mp4'
import waffleVideo from '~/assets/media/04华夫饼倒酱.mp4'
import teaVideo from '~/assets/media/05倒茶叶.mp4'
import sortingVideo from '~/assets/media/06智能分拣.mp4'
import foldingVideo from '~/assets/media/07叠衣服.mp4'
import cupVideo from '~/assets/media/08竞技叠杯.mp4'
import type { Swiper as SwiperClass } from 'swiper'

const { t } = useI18n()
const swiperModules = [Autoplay, Pagination, Navigation] // 引入模块
useHead({
  title: '产品详情页',
  // meta: [
  //   {
  //     name: 'description',
  //     content: computed(() => product.value.seoDescription)
  //   },
  //   // Open Graph协议
  //   { property: 'og:image', content: dynamicOGImage() }
  // ],
  // link: [
  //   { rel: 'canonical', href: currentCanonicalUrl }
  // ]
})
const specItems = [
  {
    name: '单臂自由度',
    s1Value: '7',
    s1Unit: '',
    humanValue: '7',
    humanUnit: '',
  },
  {
    name: '单臂额定负载（平举）',
    s1Value: '5',
    s1Unit: 'kg',
    humanValue: '3~5',
    humanUnit: 'kg',
  },
  {
    name: '末端速度',
    s1Value: '≥10',
    s1Unit: 'm/s²',
    humanValue: '5~10',
    humanUnit: 'm/s²普通挥臂',
  },
  {
    name: '末端加速度',
    s1Value: '≈100',
    s1Unit: 'm/s²',
    humanValue: '50~100',
    humanUnit: 'm/s²普通挥臂',
  },
  {
    name: '末端重复精度',
    s1Value: '±0.1',
    s1Unit: 'mm',
    humanValue: '±1~5',
    humanUnit: 'mm，特殊训练可达±0.5mm',
  },
  {
    name: '身高',
    s1Value: '170',
    s1Unit: 'cm',
    humanValue: '173',
    humanUnit: 'cm',
  },
  {
    name: '体重',
    s1Value: '80',
    s1Unit: 'kg',
    humanValue: '70',
    humanUnit: 'kg',
  },
  {
    name: '臂展',
    s1Value: '194',
    s1Unit: 'cm',
    humanValue: '171~175',
    humanUnit: 'cm',
  },
  {
    name: '续航',
    s1Value: '4~6',
    s1Unit: '小时，支持调电',
    humanValue: '10',
    humanUnit: '小时，相当于人类静息代谢',
  },
]
const videos = [
  { src: danceVideo, title: '舞蹈表演' },
  { src: catVideo, title: '逗猫扫地' },
  { src: yangqinVideo, title: '扬琴演奏' },
  { src: waffleVideo, title: '华夫饼制作' },
  { src: teaVideo, title: '茶艺展示' },
  { src: sortingVideo, title: '智能分拣' },
  { src: foldingVideo, title: '衣物整理' },
  { src: cupVideo, title: '竞技叠杯' },
]

const vrVideos = [
  { src: video2, title: '遥操2', desc: t('product.teleoperation.video_detail.0.desc') },
  { src: video3, title: '遥操3', desc: t('product.teleoperation.video_detail.1.desc') },
  { src: video4, title: '遥操4', desc: t('product.teleoperation.video_detail.2.desc') },
  { src: video5, title: '遥操5', desc: t('product.teleoperation.video_detail.3.desc') },
  { src: video6, title: '遥操6', desc: t('product.teleoperation.video_detail.4.desc') },
  { src: video1, title: '遥操1', desc: t('product.teleoperation.video_detail.5.desc') },
]

const activeIndex = ref(0)

const isActive = (index: number) => {
  const total = videos.length
  return (
    index === activeIndex.value % total ||
    (activeIndex.value >= total && index === activeIndex.value - total)
  )
}

const handleProductSlideChange = (swiper: SwiperClass) => {
  activeIndex.value = swiper.realIndex
  // 暂停所有视频
  document.querySelectorAll('.product-swiper video').forEach((video) => {
    if (video instanceof HTMLVideoElement) {
      video.pause()
    }
  })

  // 播放当前视频
  const currentSlide = swiper.slides[swiper.activeIndex]
  const currentVideo = currentSlide.querySelector('video')
  if (currentVideo instanceof HTMLVideoElement) {
    currentVideo.play().catch((e) => console.log('Autoplay failed:', e))
  }
}
const handleVrSlideChange = (swiper: SwiperClass) => {
  activeIndex.value = swiper.realIndex
  // 暂停所有视频
  document.querySelectorAll('.vr-swiper video').forEach((video) => {
    if (video instanceof HTMLVideoElement) {
      video.pause()
    }
  })

  // 播放当前视频
  const currentSlide = swiper.slides[swiper.activeIndex]
  const currentVideo = currentSlide.querySelector('video')
  if (currentVideo instanceof HTMLVideoElement) {
    currentVideo.play().catch((e) => console.log('Autoplay failed:', e))
  }
}
</script>

<style scoped lang="scss">
.my-text-class {
  color: white;
  display: inline-block;
  background-image: linear-gradient(90deg, #c7d8df 0%, #a8c4fc 40.5%, #a8bcfb 71.5%, #c3b0f7 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.product-swiper .swiper-slide {
  position: relative;
  width: 50% !important; /* 中间幻灯片占50% */
  transition: transform 0.3s;
}
@media (max-width: 768px) {
  .product-swiper .swiper-slide {
    width: 100% !important; /* 屏幕小于 768px 时宽度变为 100% */
  }
}
// .vr-swiper .swiper-slide {
//   position: relative;
//   width: 50% !important; /* 中间幻灯片占50% */
//   transition: transform 0.3s;
// }
@media (max-width: 768px) {
  .vr-swiper .swiper-slide {
    width: 100% !important; /* 屏幕小于 768px 时宽度变为 100% */
  }
}
:deep(.custom-pagination) {
  display: flex;
  height: 5px; /* px-to-viewport-ignore */
  gap: 8px; /* px-to-viewport-ignore */
  background-color: transparent; /* 确保背景透明 */
}
// 纯样式覆盖
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal {
  width: auto !important; /* 移除宽度设置 */
}

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
  background: rgba(255, 255, 255, 0.5);
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
  background: white;
  border-radius: 2px; /* px-to-viewport-ignore */
}

// vr swiper样式
:deep(.vr-pagination) {
  display: flex;
  height: 5px; /* px-to-viewport-ignore */
  gap: 8px; /* px-to-viewport-ignore */
  background-color: transparent; /* 确保背景透明 */
}
.vr-custom-prev,
.vr-custom-next {
  cursor: pointer;
  transition: all 0.3s;
}

:deep(.vr-custom-bullet) {
  width: 5px; /* px-to-viewport-ignore */
  height: 5px; /* px-to-viewport-ignore */
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
  transition:
    width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1),
    /* 使用弹性曲线 */ background 0.3s ease;
  transform: translateZ(0); /* 开启GPU加速 */
  backface-visibility: hidden; /* 隐藏背面 */
}

:deep(.vr-custom-bullet-active) {
  width: 30px; /* px-to-viewport-ignore */
  background: white;
  border-radius: 2px; /* px-to-viewport-ignore */
}
</style>
