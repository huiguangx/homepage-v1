<template>
  <div class="relative">
    <!--1 Hero Video Section -->

    <section class="w-full h-[80vh] md:h-screen bg-black overflow-hidden">
      <div class="relative h-full w-full">
        <div class="w-full h-full">
          <ClientOnly>
            <!-- <VideoPlayer
              v-if="isSmallScreen"
              class="fixed inset-0 w-full h-[80vh] md:h-full object-cover object-bottom"
              src="/products/describemobile/describemobile.m3u8"
              :preload="'auto'"
              :controls="false"
              :muted="true"
              :loop="true"
              :autoplay="true"
              :width="'100%'"
              :height="'100%'"
              :forceQuality="2"
              :poster="'/products/describemobile/describe-s1-poster-h5.webp'"
            ></VideoPlayer> -->

            <video
              v-if="isSmallScreen"
              class="fixed inset-0 w-full h-[80vh] md:h-full object-cover object-bottom"
              muted
              autoplay
              loop
              x5-playsinline="true"
              x5-video-player-type="h5-page"
              webkit-playsinline="true"
              playsinline
              preload="auto"
              poster="/products/describemobile/describe-s1-poster-h5.webp"
            >
              <source src="/products/describemobile/describe-h5.mp4" type="video/mp4" />
            </video>
            <!-- <VideoPlayer
              v-else
              class="fixed inset-0 w-full h-[80vh] md:h-full object-cover object-bottom"
              src="/products/describe/describe.m3u8"
              :preload="'auto'"
              :controls="false"
              :muted="true"
              :loop="true"
              :autoplay="true"
              :width="'100%'"
              :height="'80%'"
              :forceQuality="2"
              :poster="'/products/describe/describe-s1-poster.webp'"
            ></VideoPlayer> -->
            <video
              v-else
              class="fixed inset-0 w-full h-[80vh] md:h-full object-cover object-bottom"
              muted
              autoplay
              loop
              x5-playsinline="true"
              x5-video-player-type="h5-page"
              webkit-playsinline="true"
              playsinline
              preload="auto"
              poster="/products/describe/describe-s1-poster.webp"
            >
              <source src="/products/describe/describe.mp4" type="video/mp4" />
            </video>
          </ClientOnly>
        </div>
        <div
          class="absolute top-0 pw-h-[242px] md:h-80 w-full"
          style="background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%)"
        ></div>
        <div class="absolute inset-x-0 pw-top-[74px] md:top-28 text-center z-20">
          <div>
            <h1 class="pw-text-[26px] md:text-5xl font-bold text-white pw-mb-[12px] md:mb-4">
              {{ t('product.video.title') }}
            </h1>
            <p class="pw-text-[16px] md:text-lg text-white font-normal pw-mb-[16px] md:mb-6">
              {{ t('product.video.subtitle') }}
            </p>
            <NuxtLinkLocale
              to="/contact"
              class="product_contact us inline-block pw-text-[14px] md:text-base bg-transparent text-white border border-white pw-px-[20px] pw-py-[12px] md:px-5 md:py-3 rounded-md hover:bg-white md:hover:text-black transition-colors cursor-pointer"
            >
              {{ t('product.video.cta') }}
            </NuxtLinkLocale>
          </div>
        </div>
      </div>
    </section>

    <!--2 all-powerful robot-->
    <section class="w-full relative bg-[#161616] pw-py-[32px] md:py-20">
      <div class="h-auto w-[90%] md:w-full mx-auto">
        <div class="container mx-auto text-center pw-pb-[14px] md:py-10 md:max-w-[1280px]">
          <div>
            <h1 class="pw-text-[22px] md:text-4xl font-medium text-white pw-pb-[8px] md:pb-4">
              {{ t('product.performance.title') }}
            </h1>
            <p
              v-if="isSmallScreen === true"
              class="pw-text-[14px] md:text-lg font-normal text-[#C9C9C9]"
            >
              {{ t('product.performance.description1') }}{{ t('product.performance.description2') }}
            </p>

            <template v-else>
              <p class="pw-text-[14px] md:text-lg font-normal text-[#C9C9C9]">
                {{ t('product.performance.description1') }}
              </p>
              <p class="pw-text-[14px] md:text-lg font-normal text-[#C9C9C9]">
                {{ t('product.performance.description2') }}
              </p>
            </template>
          </div>
        </div>
        <div class="md:max-w-[1920px] mx-auto">
          <ClientOnly>
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
              :slidesPerView="'auto'"
              :spaceBetween="20"
              :breakpoints="{
                1560: {
                  slidesPerView: 3,
                  centeredSlides: true,
                  spaceBetween: 20,
                },
              }"
              @slideChange="handleProductSlideChange"
            >
              <swiper-slide
                v-for="(video, index) in videos"
                :key="index"
                :class="{ 'active-slide': isActive(index) }"
              >
                <div class="slide-content w-full aspect-[16/9]">
                  <video
                    :ref="'videoPlayer' + index"
                    class="h-full w-full object-cover rounded-2xl"
                    muted
                    loop
                    x5-playsinline="true"
                    x5-video-player-type="h5-page"
                    webkit-playsinline="true"
                    playsinline
                    :poster="video.posterSrc"
                    :autoplay="isActive(index)"
                  >
                    <source :src="video.src" type="video/mp4" />
                    <p class="absolute bottom-0 text-white p-2 bg-black/50">
                      您的浏览器不支持HTML5视频
                    </p>
                  </video>
                </div>
              </swiper-slide>
            </swiper>
          </ClientOnly>
          <div
            class="flex justify-center md:justify-between items-center pw-pt-[30px] md:pt-14 md:px-28 max-w-[1280px] mx-auto"
          >
            <!-- 自定义分页器 -->
            <div class="custom-pagination"></div>
            <!-- 自定义导航按钮 -->
            <div class="hidden md:flex gap-4 text-white">
              <button
                class="custom-prev w-9 h-9 bg-[#2A2A2A] md:hover:bg-[#555555] text-center rounded-lg flex items-center justify-center"
              >
                <img
                  src="~/assets/images/index/prev-arrow.svg"
                  :alt="t('menu.products')"
                  class="block mx-auto"
                />
              </button>
              <button
                class="custom-next w-9 h-9 bg-[#2A2A2A] md:hover:bg-[#555555] text-center rounded-lg flex items-center justify-center"
              >
                <img
                  src="~/assets/images/index/next-arrow.svg"
                  :alt="t('menu.products')"
                  class="block mx-auto"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--3 Performance Section -->
    <section class="relative bg-[#010101]">
      <div class="hidden md:block absolute left-0 top-0 h-full">
        <img src="~/assets/images/product/describe-s2-bg.png" class="h-full" alt="星尘智能" />
      </div>
      <div class="w-[90%] pw-py-[32px] md:py-20 md:max-w-[1280px] mx-auto">
        <div class="mx-auto text-center pw-pb-[14px] md:pb-12">
          <h2 class="pw-text-[22px] md:text-4xl font-medium text-white pw-pb-[8px] md:pb-6">
            {{ t('product.specs.title') }}
          </h2>

          <p
            v-if="isSmallScreen === true"
            class="pw-text-[14px] md:text-xl font-normal text-[#C9C9C9]"
          >
            {{ t('product.specs.description1') }}{{ t('product.specs.description2') }}
          </p>
          <template v-else>
            <p class="pw-text-[14px] md:text-xl font-normal text-[#C9C9C9]">
              {{ t('product.specs.description1') }}
            </p>
            <p class="pw-text-[14px] md:text-xl font-normal text-[#C9C9C9]">
              {{ t('product.specs.description2') }}
            </p>
          </template>
        </div>

        <div class="flex justify-center items-center">
          <div class="w-full md:w-2/3">
            <div class="rounded-lg">
              <div class="grid grid-cols-[80px_0.9fr_1.1fr] md:grid-cols-3 relative py-6">
                <!-- 背景装饰条 -->
                <div
                  class="absolute inset-y-0 left-[80px] md:left-1/3 right-[calc(42%)] md:right-1/3 bg-[#FFFFFF26] bg-opacity-30 z-0 rounded-2xl pointer-events-none"
                ></div>

                <!-- 表头 -->
                <div class="col-span-1 text-right pw-px-[10px] md:px-15 text-gray-400"></div>
                <div class="col-span-1 text-left pw-pl-[12px] md:px-10">
                  <h3 class="pw-text-[16px] md:text-xl font-medium text-white my-text-class">
                    {{ t('product.specs.modelName') }}
                  </h3>
                </div>
                <div class="col-span-1 text-left flex items-end pw-pl-[12px] md:px-15">
                  <h3 class="pw-text-[14px] md:text-xl font-medium text-[#AAAAAA]">
                    {{ t('product.specs.comparisonTarget') }}
                  </h3>
                </div>

                <!-- 数据行 -->
                <template v-for="(item, index) in specItems" :key="index" class="mb-2">
                  <!-- 第一列-->
                  <div
                    class="col-span-1 text-right pw-pr-[10px] md:px-15 text-[#AAAAAA] md:py-3 flex items-center justify-end"
                  >
                    <span class="whitespace-normal pw-text-[11px] md:text-sm text-right">
                      {{ item.name }}
                    </span>
                  </div>
                  <!-- 第二列-->
                  <div class="hidden col-span-1 md:flex items-center py-3 pw-px-[10px] md:px-10">
                    <div class="flex flex-row items-baseline flex-wrap text-left w-full">
                      <span class="pw-text-[20px] md:text-3xl font-medium text-white">
                        {{ item.s1Value }}
                      </span>
                      <span
                        class="pw-text-[10px] md:text-xs pw-px-[4px] md:px-2 text-[#AAAAAA] whitespace-normal"
                      >
                        {{ item.s1Unit }}
                      </span>
                      <span class="pw-text-[10px] md:text-xs text-[#AAAAAA] whitespace-normal">
                        {{ item.s1UnitDesc }}
                      </span>
                    </div>
                  </div>
                  <!-- 移动端第三列 -->
                  <!-- <div
                    class="md:hidden col-span-1 flex items-center py-3 pw-px-[16px] md:px-10 min-h-[3rem]"
                  >
                    <div class="flex flex-row text-left flex-wrap w-full align-baseline">
                      <span class="pw-text-[20px] md:text-3xl font-normal text-[#FFFFFF] mr-1">
                        {{ item.s1Value }}
                      </span>

                      <div class="inline-block align-baseline">
                        <span class="pw-text-[10px] md:text-xs text-[#AAAAAA] whitespace-normal">
                          {{ item.s1Unit }}
                        </span>

                        <span
                          class="pw-text-[10px] md:text-xs text-[#AAAAAA] block whitespace-normal"
                        >
                          {{ item.s1UnitDesc }}
                        </span>
                      </div>
                    </div>
                  </div> -->
                  <!-- 移动端第二列 -->
                  <div class="md:hidden col-span-1 flex items-center pw-pl-[10px] md:pl-15">
                    <div
                      class="flex flex-row text-left flex-wrap w-full align-baseline"
                      :class="item.s1UnitDesc ? '' : 'items-baseline'"
                    >
                      <span class="pw-text-[20px] md:text-3xl font-normal text-white">
                        <!-- 关键：`align-baseline` -->
                        {{ item.s1Value }}
                      </span>

                      <div class="inline-block align-baseline pw-pl-[4px]">
                        <span
                          class="pw-text-[10px] md:text-xs font-normal text-[#AAAAAA] whitespace-normal"
                          :class="item.humanDesc ? 'block' : 'inline-block'"
                        >
                          {{ item.s1Unit }}
                        </span>
                        <span
                          class="pw-text-[10px] md:text-xs font-normal text-[#AAAAAA] whitespace-normal block"
                        >
                          {{ item.s1UnitDesc }}
                        </span>
                      </div>
                    </div>
                  </div>
                  <!-- 第三列-->
                  <div
                    class="hidden col-span-1 md:flex items-center justify-center py-3 pw-pl-[12px] md:pl-15"
                  >
                    <div class="flex flex-row items-baseline text-left flex-wrap w-full">
                      <div>
                        <span class="pw-text-[20px] md:text-3xl font-normal text-[#AAAAAA]">
                          {{ item.humanValue }}
                        </span>
                        <span
                          class="pw-text-[10px] md:text-xs font-normal pw-px-[4px] md:px-2 text-[#AAAAAA] whitespace-normal"
                        >
                          {{ item.humanUnit }}
                        </span>
                      </div>
                      <div
                        class="pw-text-[10px] md:text-xs font-normal text-[#AAAAAA] whitespace-normal"
                      >
                        {{ item.humanDesc }}
                      </div>
                    </div>
                  </div>
                  <!-- 移动端第三列 -->
                  <div
                    class="md:hidden col-span-1 flex items-center pw-py-[10px] pw-pl-[12px] md:pl-15"
                  >
                    <div
                      class="flex flex-row text-left flex-wrap w-full align-baseline"
                      :class="item.humanDesc ? '' : 'items-baseline'"
                    >
                      <span class="pw-text-[18px] md:text-3xl font-normal text-[#AAAAAA]">
                        {{ item.humanValue }}
                      </span>

                      <div class="inline-block align-baseline pw-pl-[4px]">
                        <span
                          class="pw-text-[8px] md:text-xs font-normal text-[#939393] whitespace-normal"
                          :class="item.humanDesc ? 'block' : 'inline-block'"
                        >
                          {{ item.humanUnit }}
                        </span>
                        <span
                          class="pw-text-[8px] md:text-xs font-normal text-[#939393] whitespace-normal block"
                        >
                          {{ item.humanDesc }}
                        </span>
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>

        <p class="pw-text-[10px] md:text-xs text-[#656565] text-center mt-6">
          {{ t('product.specs.note') }}
        </p>
      </div>
    </section>

    <!--4 Toolchain Section -->
    <section class="relative bg-[#161616] pw-py-[32px] md:py-20">
      <div class="w-[90%] md:max-w-[1280px] mx-auto">
        <div class="text-center pw-pb-[14px] md:pb-10">
          <h2 class="pw-text-[22px] md:text-4xl font-medium text-white pw-pb-[8px] md:pb-6">
            {{ t('product.toolchain.title') }}
          </h2>
          <p
            v-if="isSmallScreen === true"
            class="pw-text-[14px] md:text-xl font-normal text-[#C9C9C9]"
          >
            {{ t('product.toolchain.description1') }}{{ t('product.toolchain.description2') }}
          </p>
          <template v-else>
            <p class="pw-text-[14px] md:text-xl font-normal text-[#C9C9C9]">
              {{ t('product.toolchain.description1') }}
            </p>
            <p class="pw-text-[14px] md:text-xl font-normal text-[#C9C9C9]">
              {{ t('product.toolchain.description2') }}
            </p>
          </template>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 pw-gap-[8px] md:gap-6">
          <div class="bg-[#252525] rounded-2xl pw-p-[12px] md:p-6 flex flex-col h-full">
            <div class="flex-1 flex items-center pw-pb-[8px] md:pb-5">
              <h3 class="text-[14px] md:text-xl font-medium text-white w-full text-center">
                {{ t('product.toolchain.features.0.title') }}
              </h3>
            </div>
            <div class="rounded-xl md:rounded-2xl overflow-hidden">
              <img
                src="~/assets/images/product/describe-s3-img1.jpg"
                loading="lazy"
                class="w-full h-full object-cover"
                :alt="t('product.toolchain.features.0.title')"
              />
            </div>

            <!-- <p class="text-[#AAAAAA]">{{ $t('product.toolchain.features.0.description') }}</p> -->
          </div>

          <div class="bg-[#252525] rounded-2xl pw-p-[12px] md:p-6 flex flex-col h-full">
            <div class="flex-1 flex items-center pw-pb-[8px] md:pb-5">
              <h3 class="text-[14px] md:text-xl font-medium text-white w-full text-center">
                {{ t('product.toolchain.features.1.title') }}
              </h3>
            </div>
            <div class="rounded-xl md:rounded-2xl overflow-hidden">
              <img
                src="~/assets/images/product/describe-s3-img2.jpg"
                loading="lazy"
                class="w-full h-full object-cover"
                :alt="t('product.toolchain.features.1.title')"
              />
            </div>

            <!-- <p class="text-[#AAAAAA]">{{ $t('product.toolchain.features.1.description') }}</p> -->
          </div>

          <div class="bg-[#252525] rounded-2xl pw-p-[12px] md:p-6 flex flex-col h-full">
            <div class="flex-1 flex items-center pw-pb-[8px] md:pb-5">
              <h3 class="text-[14px] md:text-xl font-medium text-white w-full text-center">
                {{ t('product.toolchain.features.2.title') }}
              </h3>
            </div>
            <div class="rounded-xl md:rounded-2xl overflow-hidden">
              <img
                src="~/assets/images/product/describe-s3-img3.jpg"
                class="w-full h-full object-cover"
                loading="lazy"
                :alt="t('product.toolchain.features.2.title')"
              />
            </div>

            <!-- <p class="text-[#AAAAAA]">{{ $t('product.toolchain.features.2.description') }}</p> -->
          </div>

          <div class="bg-[#252525] rounded-2xl pw-p-[12px] md:p-6 flex flex-col h-full">
            <div class="flex-1 flex items-center pw-pb-[8px] md:pb-5">
              <h3 class="text-[14px] md:text-xl font-medium text-white w-full text-center">
                {{ t('product.toolchain.features.3.title') }}
              </h3>
            </div>
            <div class="rounded-xl md:rounded-2xl overflow-hidden">
              <img
                src="~/assets/images/product/describe-s3-img4.jpg"
                class="w-full h-full object-cover"
                loading="lazy"
                :alt="t('product.toolchain.features.3.title')"
              />
            </div>

            <!-- <p class="text-[#AAAAAA]">{{ $t('product.toolchain.features.3.description') }}</p> -->
          </div>

          <div class="bg-[#252525] rounded-2xl pw-p-[12px] md:p-6 flex flex-col h-full">
            <div class="flex-1 flex items-center pw-pb-[8px] md:pb-5">
              <h3 class="text-[14px] md:text-xl font-medium text-white w-full text-center">
                {{ t('product.toolchain.features.4.title') }}
              </h3>
            </div>
            <div class="relative rounded-xl md:rounded-2xl overflow-hidden">
              <img
                src="~/assets/images/product/describe-s3-img5.jpg"
                class="w-full h-full object-cover rounded-b-2xl md:rounded-b-3xl"
                loading="lazy"
                :alt="t('product.toolchain.features.4.title')"
              />
              <div
                class="absolute inset-x-0 bottom-0 rounded-b-xl md:rounded-b-2xl bg-black/50 backdrop-blur-[4px]"
              >
                <div
                  class="pw-px-[6px] md:px-15 pw-py-[6px] md:py-4 pw-text-[12px] md:text-base text-center text-white font-normal"
                >
                  {{ t('product.toolchain.features.4.other') }}
                </div>
              </div>
            </div>
          </div>

          <div class="bg-[#252525] rounded-2xl pw-p-[12px] md:p-6 flex flex-col h-full">
            <div class="flex-1 flex items-center pw-pb-[8px] md:pb-5">
              <h3 class="text-[14px] md:text-xl font-medium text-white w-full text-center">
                {{ t('product.toolchain.features.5.title') }}
              </h3>
            </div>
            <div class="rounded-xl md:rounded-2xl overflow-hidden">
              <img
                src="~/assets/images/product/describe-s3-img6.jpg"
                class="w-full h-full object-cover"
                loading="lazy"
                :alt="t('product.toolchain.features.5.title')"
              />
            </div>

            <!-- <p class="text-[#AAAAAA]">{{ $t('product.toolchain.features.5.description') }}</p> -->
          </div>
        </div>
        <div class="bg-[#252525] rounded-2xl pw-p-[16px] md:p-10 text-center pw-mt-[24px] md:mt-6">
          <h2 class="pw-text-[14px] md:text-2xl font-medium text-white pw-pb-[8px] md:pb-8">
            {{ t('product.teleoperation.title') }}
          </h2>
          <ClientOnly>
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
              :navigation="{
                nextEl: '.vr-custom-next',
                prevEl: '.vr-custom-prev',
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
                class="!overflow-hidden"
              >
                <div class="vr-video h-full w-full rounded-2xl overflow-hidden">
                  <video
                    class="w-full h-full object-cover"
                    :ref="'videoPlayer' + index"
                    muted
                    loop
                    x5-playsinline="true"
                    x5-video-player-type="h5-page"
                    webkit-playsinline="true"
                    playsinline
                    :autoplay="isActive(index)"
                  >
                    <source :src="video.src" type="video/mp4" />

                    <p class="absolute bottom-0 text-white p-2 bg-black/50">
                      您的浏览器不支持HTML5视频
                    </p>
                  </video>
                </div>
                <div class="flex justify-between pw-pt-[8px] md:pt-4">
                  <p class="text-white text-left flex-1 pr-4">
                    {{ video.desc }}
                  </p>
                  <div
                    v-if="video.url"
                    class="text-[#6A97FF] pw-text-[14px] md:text-sm md:pt-[4px] font-light whitespace-nowrap flex-shrink-0 cursor-pointer md:hover:border-b md:hover:border-[#6A97FF] self-start"
                    @click="openVideo(video.url)"
                    :class="video.className"
                  >
                    {{ t('product.teleoperation.btn') }}
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </ClientOnly>
          <div class="flex justify-center md:justify-between items-center pw-pt-[24px] md:pt-8">
            <!-- 自定义分页器 -->
            <div class="vr-pagination"></div>
            <!-- 自定义导航按钮 -->
            <div class="hidden md:flex gap-4 text-white">
              <button
                class="vr-custom-prev w-9 h-9 bg-[#2A2A2A] md:hover:bg-[#555555] rounded-lg flex items-center justify-center"
              >
                <img
                  src="~/assets/images/index/prev-arrow.svg"
                  :alt="t('menu.products')"
                  class="block mx-auto"
                />
              </button>
              <button
                class="vr-custom-next w-9 h-9 bg-[#2A2A2A] md:hover:bg-[#555555] rounded-lg flex items-center justify-center"
              >
                <img
                  src="~/assets/images/index/next-arrow.svg"
                  :alt="t('menu.products')"
                  class="block mx-auto"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--5 Collaboration Section -->
    <section class="relative pw-py-[32px] md:py-20 bg-[#010101]">
      <div class="w-[90%] md:max-w-[1280px] mx-auto">
        <div class="text-center pw-pb-[16px] md:pb-15">
          <h2 class="pw-text-[22px] md:text-4xl font-medium text-white">
            {{ t('product.cases.title') }}
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 pw-gap-[16px] md:gap-8 mx-auto">
          <div class="bg-[#161616] rounded-2xl">
            <div class="rounded-t-2xl overflow-hidden">
              <img
                src="~/assets/images/product/describe-s4-img1.jpg"
                class="w-full h-full object-cover"
                loading="lazy"
                :alt="t('product.cases.partners.0.name')"
              />
            </div>
            <div class="pw-px-[12px] pw-py-[16px] md:px-3 md:py-5">
              <div class="h-auto mb-2 flex justify-between items-center">
                <img
                  src="~/assets/images/product/describe-s4-tit-img1.png"
                  class="w-2/3 object-cover"
                  :alt="t('product.cases.partners.0.name')"
                />
                <button
                  class="product_view case text-[#6A97FF] pw-text-[14px] md:text-sm font-light h-5 md:hover:border-b md:hover:border-[#6A97FF]"
                  @click="
                    openVideo(
                      locale === 'zh' ? '/media/星尘中文版_x264.mp4' : '/media/星尘英文版_x264.mp4',
                    )
                  "
                >
                  {{ t('product.cases.btn') }}
                </button>
              </div>

              <p class="pw-text-[12px] md:text-sm text-[#AAAAAA]">
                {{ t('product.cases.partners.0.desc') }}
              </p>
            </div>
          </div>

          <div class="bg-[#161616] rounded-2xl">
            <div class="rounded-t-2xl overflow-hidden">
              <img
                src="~/assets/images/product/describe-s4-img2.jpg"
                class="w-full h-full object-cover"
                loading="lazy"
                :alt="t('product.cases.partners.1.name')"
              />
            </div>
            <div class="pw-px-[12px] pw-py-[16px] md:px-3 md:py-5">
              <img
                src="~/assets/images/product/describe-s4-tit-img2.png"
                class="h-10 mb-2 object-cover"
                loading="lazy"
                :alt="t('product.cases.partners.1.name')"
              />
              <p class="pw-text-[12px] md:text-sm text-[#AAAAAA]">
                {{ t('product.cases.partners.1.desc') }}
              </p>
            </div>
          </div>

          <div class="bg-[#161616] rounded-2xl">
            <div class="rounded-t-2xl overflow-hidden">
              <img
                src="~/assets/images/product/describe-s4-img3.jpg"
                class="w-full h-full object-cover"
                loading="lazy"
                :alt="t('product.cases.partners.2.name')"
              />
            </div>
            <div class="pw-px-[12px] pw-py-[16px] md:px-3 md:py-5">
              <img
                src="~/assets/images/product/describe-s4-tit-img3.png"
                class="h-10 mb-2 object-cover"
                loading="lazy"
                :alt="t('product.cases.partners.2.name')"
              />
              <p class="pw-text-[12px] md:text-sm text-[#AAAAAA]">
                {{ t('product.cases.partners.2.desc') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--6 Ecosystem Section -->
    <section class="relative pw-pt-[32px] pw-pb-[40px] md:pt-24 md:pb-20 bg-[#1F1F1F]">
      <div class="w-[90%] md:max-w-[1280px] mx-auto">
        <div class="text-center">
          <div class="pw-pb-[8px] md:pb-4">
            <h1
              class="pw-text-[22px] md:text-4xl font-medium text-white md:inline-block"
              :class="{ 'inline ': locale === 'en' }"
            >
              {{ t('product.ecosystem.title') }}
            </h1>
            <!-- <h1 class="pw-text-[22px] md:text-4xl font-medium text-white hidden md:inline-block">
              {{ t('product.ecosystem.quote') }}
            </h1> -->
            <!-- <h1
              class="pw-text-[22px] md:text-4xl font-medium text-white md:inline-block"
              :class="{ 'inline ': locale === 'en' }"
            >
              {{ t('product.ecosystem.subTitle') }}
            </h1> -->
          </div>
          <p class="pw-text-[14px] md:text-xl text-[#C9C9C9]">
            {{ t('product.ecosystem.vision') }}
          </p>
        </div>

        <div class="grid md:grid-cols-3 pw-py-[24px] md:py-14 pw-gap-[16px] md:gap-20 text-center">
          <div
            class="rounded-2xl flex flex-col justify-start items-center bg-[#171717] md:bg-[#1F1F1F] pw-py-[24px] pw-px-[16px] md:p-5"
          >
            <img
              src="~/assets/images/product/innobot.svg"
              :alt="t('product.ecosystem.sections.0.title')"
            />
            <h3
              class="pw-text-[18px] md:text-2xl font-medium text-white pw-pt-[12px] pw-pb-[8px] md:pt-5 md:pb-2"
            >
              {{ t('product.ecosystem.sections.0.title') }}
            </h3>
            <p class="pw-text-[12px] md:text-sm font-normal text-[#AAAAAA]">
              {{ t('product.ecosystem.sections.0.desc') }}
            </p>
          </div>

          <div
            class="rounded-2xl p-8 flex flex-col justify-start items-center bg-[#171717] md:bg-[#1F1F1F] pw-py-[24px] pw-px-[16px] md:p-5"
          >
            <img
              src="~/assets/images/product/techatom.svg"
              :alt="t('product.ecosystem.sections.1.title')"
            />
            <h3
              class="pw-text-[18px] md:text-2xl font-medium text-white pw-pt-[12px] pw-pb-[8px] md:pt-5 md:pb-2"
            >
              {{ t('product.ecosystem.sections.1.title') }}
            </h3>
            <p class="pw-text-[12px] md:text-sm font-normal text-[#AAAAAA]">
              {{ t('product.ecosystem.sections.1.desc') }}
            </p>
          </div>

          <div
            class="rounded-2xl p-8 flex flex-col justify-start items-center bg-[#171717] md:bg-[#1F1F1F] pw-py-[24px] pw-px-[16px] md:p-5"
          >
            <img
              src="~/assets/images/product/xplorebox.svg"
              :alt="t('product.ecosystem.sections.2.title')"
            />
            <h3
              class="pw-text-[18px] md:text-2xl font-medium text-white pw-pt-[12px] pw-pb-[8px] md:pt-5 md:pb-2"
            >
              {{ t('product.ecosystem.sections.2.title') }}
            </h3>
            <p class="pw-text-[12px] md:text-sm font-normal text-[#AAAAAA]">
              {{ t('product.ecosystem.sections.2.desc') }}
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <NuxtLinkLocale
          to="/contact"
          class="product_Partner contact us pw-px-[20px] pw-py-[12px] md:px-4 md:py-2 rounded font-normal text-white bg-[#5A46FF] pw-text-[14px] md:text-sm md:hover:bg-[#7463FF] transition-all duration-300 ease-out"
        >
          {{ t('product.ecosystem.cta') }}
        </NuxtLinkLocale>
      </div>
      <VideoModal v-model:show="showVideoModal" :video-url="currentVideoUrl" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Swiper, SwiperSlide } from '@/lib/vue-swiper'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import type { Swiper as SwiperClass } from 'swiper'
import { useMediaQuery } from '@vueuse/core'

const isSmallScreen = useMediaQuery('(max-width: 767px)')

const { t, locale } = useI18n()
const swiperModules = [Autoplay, Pagination, Navigation] // 引入模块
useHead({
  title: locale.value === 'zh' ? '星尘智能 S1' : 'Astirbot S1',
  meta: [
    {
      name: 'description',
      content:
        locale.value === 'zh'
          ? '星尘智能 S1是一款高性能人形机器人，具备精确的运动控制、智能感知和远程操作能力，适用于工业、服务等多个领域。'
          : 'Astirbot S1 is a high-performance humanoid robot with precise motion control, intelligent perception, and remote operation capabilities, suitable for industrial and service applications.',
    },
    {
      name: 'keywords',
      content:
        locale.value === 'zh'
          ? '星尘智能,人形机器人,机器人技术,智能机器人,工业机器人,服务机器人,远程操作,运动控制'
          : 'Astirbot, humanoid robot, robotics, intelligent robot, industrial robot, service robot, remote operation, motion control',
    },
    // Open Graph tags
    {
      property: 'og:title',
      content:
        locale.value === 'zh'
          ? '星尘智能 S1 - 高性能人形机器人'
          : 'Astirbot S1 - High Performance Humanoid Robot',
    },
    {
      property: 'og:description',
      content:
        locale.value === 'zh'
          ? '星尘智能 S1是一款高性能人形机器人，具备精确的运动控制、智能感知和远程操作能力。'
          : 'Astirbot S1 is a high-performance humanoid robot with precise motion control and intelligent perception.',
    },
    {
      property: 'og:image',
      content: '/products/describe/describe-s1-poster.webp',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    // Twitter Card tags
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content:
        locale.value === 'zh'
          ? '星尘智能 S1 - 高性能人形机器人'
          : 'Astirbot S1 - High Performance Humanoid Robot',
    },
    {
      name: 'twitter:description',
      content:
        locale.value === 'zh'
          ? '星尘智能 S1是一款高性能人形机器人，具备精确的运动控制、智能感知和远程操作能力。'
          : 'Astirbot S1 is a high-performance humanoid robot with precise motion control and intelligent perception.',
    },
    {
      name: 'twitter:image',
      content: '/products/describe/describe-s1-poster.webp',
    },
  ],
})
const specItems = [
  {
    name: t('product.specs.comparison.items.0'),
    s1Value: '7',
    s1Unit: '',
    humanValue: '7',
    humanUnit: '',
    humanDesc: '',
  },
  {
    name: t('product.specs.comparison.items.1'),
    s1Value: '5',
    s1Unit: 'kg',
    humanValue: '3~5',
    humanUnit: 'kg',
    humanDesc: '',
  },
  {
    name: t('product.specs.comparison.items.2'),
    s1Value: '≥10',
    s1Unit: 'm/s',
    humanValue: '5~10',
    humanUnit: 'm/s',
    humanDesc: t('product.specs.comparison.unit.0'),
  },
  {
    name: t('product.specs.comparison.items.3'),
    s1Value: '≈100',
    s1Unit: 'm/s²',
    humanValue: '50~100',
    humanUnit: 'm/s²',
    humanDesc: t('product.specs.comparison.unit.0'),
  },
  {
    name: t('product.specs.comparison.items.4'),
    s1Value: '±0.1',
    s1Unit: 'mm',
    humanValue: '±1~5',
    humanUnit: 'mm',
    humanDesc: t('product.specs.comparison.unit.1'),
  },
  {
    name: t('product.specs.comparison.items.5'),
    s1Value: '170',
    s1Unit: 'cm',
    humanValue: '173',
    humanUnit: 'cm',
    humanDesc: '',
  },
  {
    name: t('product.specs.comparison.items.6'),
    s1Value: '80',
    s1Unit: 'kg',
    humanValue: '70',
    humanUnit: 'kg',
    humanDesc: '',
  },
  {
    name: t('product.specs.comparison.items.7'),
    s1Value: '194',
    s1Unit: 'cm',
    humanValue: '171~175',
    humanUnit: 'cm',
    humanDesc: '',
  },
  {
    name: t('product.specs.comparison.items.8'),
    s1Value: '4~6',
    s1Unit: t('product.specs.comparison.unit.3'),
    s1UnitDesc: t('product.specs.comparison.unit.4'),
    humanValue: '10',
    humanUnit: t('product.specs.comparison.unit.3'),
    humanDesc: t('product.specs.comparison.unit.2'),
  },
]

// 基础视频信息
// 基础视频信息
const baseVideos = [
  {
    src: '/media/01跳舞.mp4',
    title: '舞蹈表演',
    enSrc: '/media/01跳舞-en.mp4',
    posterSrc: '/images/product/01跳舞.jpg',
    enPosterSrc: '/images/product/01跳舞-en.jpg',
  },
  {
    src: '/media/02逗猫扫地.mp4',
    title: '逗猫扫地',
    enSrc: '/media/02逗猫扫地-en.mp4',
    posterSrc: '/images/product/02逗猫扫地.jpg',
    enPosterSrc: '/images/product/02逗猫扫地-en.jpg',
  },
  {
    src: '/media/03扬琴.mp4',
    title: '扬琴演奏',
    enSrc: '/media/03扬琴-en.mp4',
    posterSrc: '/images/product/03扬琴.jpg',
    enPosterSrc: '/images/product/03扬琴-en.jpg',
  },
  {
    src: '/media/04华夫饼倒酱.mp4',
    title: '华夫饼制作',
    enSrc: '/media/04华夫饼倒酱-en.mp4',
    posterSrc: '/images/product/04华夫饼倒酱.jpg',
    enPosterSrc: '/images/product/04华夫饼倒酱-en.jpg',
  },
  {
    src: '/media/05倒茶叶.mp4',
    title: '茶艺展示',
    enSrc: '/media/05倒茶叶-en.mp4',
    posterSrc: '/images/product/05倒茶叶.jpg',
    enPosterSrc: '/images/product/05倒茶叶-en.jpg',
  },
  {
    src: '/media/06智能分拣.mp4',
    title: '智能分拣',
    enSrc: '/media/06智能分拣-en.mp4',
    posterSrc: '/images/product/06智能分拣.jpg',
    enPosterSrc: '/images/product/06智能分拣-en.jpg',
  },
  {
    src: '/media/07叠衣服.mp4',
    title: '衣物整理',
    enSrc: '/media/07叠衣服-en.mp4',
    posterSrc: '/images/product/07叠衣服.jpg',
    enPosterSrc: '/images/product/07叠衣服-en.jpg',
  },
  {
    src: '/media/08竞技叠杯.mp4',
    title: '竞技叠杯',
    enSrc: '/media/08竞技叠杯-en.mp4',
    posterSrc: '/images/product/08竞技叠杯.jpg',
    enPosterSrc: '/images/product/08竞技叠杯-en.jpg',
  },
  {
    src: '/media/09写字.mp4',
    title: '写字',
    enSrc: '/media/09写字-en.mp4',
    posterSrc: '/images/product/09写字.jpg',
    enPosterSrc: '/images/product/09写字-en.jpg',
  },
]

const showVideoModal = ref(false)
const currentVideoUrl = ref('')

const openVideo = (url: string) => {
  currentVideoUrl.value = url
  showVideoModal.value = true
}

// 动态生成当前语言环境下的视频列表
const videos = computed(() => {
  return baseVideos.map((video) => ({
    ...video,
    posterSrc: locale.value === 'zh' ? video.posterSrc : video.enPosterSrc,
    src: locale.value === 'zh' ? video.src : video.enSrc,
  }))
})
const vrVideos = [
  { src: '/media/遥操2.mp4', title: '遥操2', desc: t('product.teleoperation.video_detail.1.desc') },
  {
    src: '/media/遥操3.mp4',
    title: '遥操3',
    desc: t('product.teleoperation.video_detail.2.desc'),
    url: '/media/遥操3高清版.mp4',
    className: 'product_VR View details1',
  },
  { src: '/media/遥操4.mp4', title: '遥操4', desc: t('product.teleoperation.video_detail.3.desc') },
  { src: '/media/遥操5.mp4', title: '遥操5', desc: t('product.teleoperation.video_detail.4.desc') },
  { src: '/media/遥操6.mp4', title: '遥操6', desc: t('product.teleoperation.video_detail.5.desc') },
  {
    src: '/media/遥操1.mp4',
    title: '遥操1',
    desc: t('product.teleoperation.video_detail.0.desc'),
    url: '/media/遥操1高清版.mp4',
    className: 'product_VR View details2',
  },
]

const activeIndex = ref(0)

const isActive = (index: number) => {
  const total = videos.value.length
  return (
    index === activeIndex.value % total ||
    (activeIndex.value >= total && index === activeIndex.value - total)
  )
}

// 修改后的handleProductSlideChange函数
const handleProductSlideChange = async (swiper: SwiperClass) => {
  activeIndex.value = swiper.realIndex

  // 暂停所有幻灯片中的视频
  swiper.slides.forEach((slide, index) => {
    const video = slide.querySelector('video')
    if (video) {
      video.pause()
      video.currentTime = 0 // 重置播放进度
    }
  })

  // 播放当前活动视频
  const currentSlide = swiper.slides[swiper.activeIndex]
  const currentVideo = currentSlide.querySelector('video')
  if (currentVideo) {
    try {
      currentVideo.muted = true // 确保静音以符合自动播放策略
      await currentVideo.play()
    } catch (err) {
      // console.log('视频自动播放被阻止，需要用户交互')
      // 这里可以添加点击播放按钮的逻辑
    }
  }
}

// 修改后的handleVrSlideChange函数（逻辑相同）
const handleVrSlideChange = async (swiper: SwiperClass) => {
  activeIndex.value = swiper.realIndex

  swiper.slides.forEach((slide) => {
    const video = slide.querySelector('video')
    if (video) {
      video.pause()
      video.currentTime = 0
    }
  })

  const currentSlide = swiper.slides[swiper.activeIndex]
  const currentVideo = currentSlide.querySelector('video')
  if (currentVideo) {
    try {
      currentVideo.muted = true
      await currentVideo.play()
    } catch (err) {
      console.log('VR视频自动播放失败')
    }
  }
}

onBeforeUnmount(() => {
  document.querySelectorAll('video').forEach((video) => {
    video.pause()
    video.removeAttribute('src') // 清除视频源
    video.load() // 触发卸载
  })
})
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
  width: 50%; /* 默认每个幻灯片占25% */
}

// .product-swiper .swiper-slide.active-slide {
//   width: 50% !important; /* 中间幻灯片占50% */
// }

@media (max-width: 768px) {
  .product-swiper .swiper-slide {
    width: 100% !important; /* 屏幕小于 768px 时宽度变为 100% */
  }
}

@media (max-width: 768px) {
  .vr-swiper .swiper-slide {
    width: 100%; /* 屏幕小于 768px 时宽度变为 100% */
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
  transition: all 0.3s ease;
  opacity: 0.9;
}

:deep(.custom-bullet-active) {
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
    animation: progressBar var(--swiper-autoplay-duration, 5s) linear forwards;
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
  transition: all 0.3s ease;
  opacity: 0.9;
}

:deep(.vr-custom-bullet-active) {
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
</style>
