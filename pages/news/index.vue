<template>
  <div class="bg-white">
    <!-- Banner Section -->
    <section class="relative overflow-hidden">
      <img
        src="~/assets/images/news/news-poster.jpg"
        alt="News Banner"
        class="w-full h-auto object-cover"
      />
      <div class="absolute inset-0 flex justify-center items-center z-20">
        <div class="text-center">
          <h1 class="text-4xl font-bold mb-6 text-white">
            {{ $t('menu.news') }}
          </h1>
          <p class="text-2xl text-white">{{ $t('news.subtitle') }}</p>
        </div>
      </div>
    </section>

    <!-- News Section -->
    <section class="w-full bg-white py-20">
      <!-- 使用Tailwind标准单位 py-20=80px -->
      <div class="mx-auto flex flex-col items-center gap-6 px-20">
        <!-- gap-8=32px -->
        <!-- <h3 class="text-3xl md:text-4xl font-medium leading-snug tracking-tight text-[#020014]">
          {{ $t('home.news.title') }}
        </h3> -->

        <!-- 网格布局（4列） -->
        <div class="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(news, index) in newsList"
            :key="index"
            class="group flex flex-col rounded-2xl bg-[#F9FAFB] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 transform-gpu"
          >
            <!-- 图片容器 -->
            <div class="aspect-video w-full rounded-t-2xl overflow-hidden bg-gray-200">
              <NuxtImg
                :src="news.imageJpg"
                :alt="news.title"
                class="h-full w-full object-cover transition-transform duration-500"
                loading="lazy"
                placeholder
              />
            </div>

            <!-- 文字内容区域（使用 flex-grow 撑满剩余空间） -->
            <div class="flex flex-1 flex-col p-4 transition-colors duration-300">
              <h4
                class="mb-2 text-base font-medium leading-[1.375] text-[#020014] group-hover:text-[#000000]"
              >
                {{ news.title }}
              </h4>
              <p class="mb-4 text-sm leading-[1.429] text-[#71798A] group-hover:text-[#5a6473]">
                {{ news.description }}
              </p>

              <!-- 日期容器（自动 margin-top 推到最底部） -->
              <div
                class="mt-auto flex items-center justify-between text-xs leading-[1.333] text-[#71798A] group-hover:text-[#5a6473]"
              >
                <span>{{ news.date }}</span>
                <img src="~/assets/images/index/news-arrow.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { t } = useI18n()

const newsList = [
  {
    title: t('news.items.news1.title'),
    description: t('news.items.news1.description'),
    date: t('news.items.news1.date'),
    image: '/images/news-1.jpg',
  },
  {
    title: t('news.items.news2.title'),
    description: t('news.items.news2.description'),
    date: t('news.items.news2.date'),
    image: '/images/news-2.jpg',
  },
  {
    title: t('news.items.news3.title'),
    description: t('news.items.news3.description'),
    date: t('news.items.news3.date'),
    image: '/images/news-3.jpg',
  },
  {
    title: t('news.items.news4.title'),
    description: t('news.items.news4.description'),
    date: t('news.items.news4.date'),
    image: '/images/news-4.jpg',
  },
  {
    title: t('news.items.news1.title'),
    description: t('news.items.news1.description'),
    date: t('news.items.news1.date'),
    image: '/images/news-1.jpg',
  },
  {
    title: t('news.items.news2.title'),
    description: t('news.items.news2.description'),
    date: t('news.items.news2.date'),
    image: '/images/news-2.jpg',
  },
  {
    title: t('news.items.news3.title'),
    description: t('news.items.news3.description'),
    date: t('news.items.news3.date'),
    image: '/images/news-3.jpg',
  },
  {
    title: t('news.items.news4.title'),
    description: t('news.items.news4.description'),
    date: t('news.items.news4.date'),
    image: '/images/news-4.jpg',
  },
]

useHead({
  title: t('menu.news'),
})
</script>
