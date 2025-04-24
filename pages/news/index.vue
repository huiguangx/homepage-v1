<template>
  <div class="bg-white">
    <!--1 Banner Section -->
    <section class="w-full h-auto">
      <div class="relative">
        <picture>
          <!-- 移动端图片 -->
          <source media="(max-width: 767px)" srcset="~/assets/images/news/news-s1-poster-h5.jpg" />
          <!-- PC端图片 -->
          <source media="(min-width: 768px)" srcset="~/assets/images/news/news-s1-poster.jpg" />
          <!-- 默认回退 -->
          <img
            src="~/assets/images/news/news-s1-poster.jpg"
            alt="News Banner"
            class="w-full h-auto object-cover"
          />
        </picture>
        <div>
          <div class="absolute inset-0 flex justify-center items-center z-20">
            <div class="text-center">
              <h1 class="pw-text-[24px] md:text-4xl font-medium pw-pb-[8px] md:pb-4 text-white">
                {{ $t('menu.news') }}
              </h1>
              <p class="pw-text-[14px] md:text-2xl text-white">{{ $t('news.subtitle') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--2 News Section -->
    <section class="w-full bg-white pw-py-[32px] md:py-14">
      <div class="mx-auto w-[90%]">
        <div class="grid w-full pw-gap-[8px] md:gap-6 grid-cols-2 md:grid-cols-4">
          <div
            v-for="(news, index) in newsList"
            :key="index"
            class="group flex flex-col rounded-lg md:rounded-2xl bg-[#F9FAFB] transition-all duration-300 md:hover:shadow-lg md:hover:-translate-y-1 transform-gpu"
          >
            <!-- 图片容器 -->
            <div class="w-full rounded-t-2xl overflow-hidden bg-gray-200">
              <picture>
                <!-- <source
                  media="(min-width: 768px)"
                  srcset="~/assets/images/news/news-s1-poster.jpg"
                /> -->
                <img :src="news.image" alt="News Banner" class="w-full object-cover" />
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
                <span class="group-hover:scale-105 transition-transform duration-300 ease-out">
                  {{ news.date }}
                </span>
                <img
                  src="~/assets/images/index/news-arrow.svg"
                  alt=""
                  class="transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:translate-x-0.5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import img1 from '~/assets/images/news/news-s2-img1.jpg'
import img2 from '~/assets/images/news/news-s2-img2.jpg'
import img3 from '~/assets/images/news/news-s2-img3.jpg'
import img4 from '~/assets/images/news/news-s2-img4.jpg'
import img5 from '~/assets/images/news/news-s2-img5.jpg'
import img6 from '~/assets/images/news/news-s2-img6.jpg'

const { t } = useI18n()

const newsList = [
  {
    title: t('news.items.news1.title'),
    description: t('news.items.news1.description'),
    date: t('news.items.news1.date'),
    image: img1,
  },
  {
    title: t('news.items.news2.title'),
    description: t('news.items.news2.description'),
    date: t('news.items.news2.date'),
    image: img2,
  },
  {
    title: t('news.items.news3.title'),
    description: t('news.items.news3.description'),
    date: t('news.items.news3.date'),
    image: img3,
  },
  {
    title: t('news.items.news4.title'),
    description: t('news.items.news4.description'),
    date: t('news.items.news4.date'),
    image: img4,
  },
  {
    title: t('news.items.news5.title'),
    description: t('news.items.news5.description'),
    date: t('news.items.news5.date'),
    image: img5,
  },
  {
    title: t('news.items.news6.title'),
    description: t('news.items.news6.description'),
    date: t('news.items.news6.date'),
    image: img6,
  },
]

useHead({
  title: t('menu.news'),
})
</script>
