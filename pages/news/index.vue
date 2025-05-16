<template>
  <div class="relative">
    <!--1 Banner Section -->
    <section class="w-full h-auto pw-mt-[44px] md:mt-16 relative">
      <div>
        <picture>
          <source
            media="(max-width: 767px)"
            srcset="~/assets/images/news/news-s1-poster-h5.webp"
            type="image/webp"
          />
          <source media="(max-width: 767px)" srcset="~/assets/images/news/news-s1-poster-h5.jpg" />
          <source
            media="(min-width: 768px)"
            srcset="~/assets/images/news/news-s1-poster.webp"
            type="image/webp"
          />
          <source media="(min-width: 768px)" srcset="~/assets/images/news/news-s1-poster.jpg" />
          <img
            src="~/assets/images/news/news-s1-poster.jpg"
            alt=""
            class="w-full h-auto object-cover aspect-[750/416] md:aspect-[2880/588]"
            loading="lazy"
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
      <div class="mx-auto w-[90%] md:max-w-[1280px]">
        <div class="grid w-full pw-gap-[8px] md:gap-6 grid-cols-2 md:grid-cols-4">
          <div
            v-for="(news, index) in newsList"
            :key="index"
            class="group flex flex-col rounded-lg md:rounded-2xl bg-[#F9FAFB] md:hover:bg-white transition-all duration-300 md:hover:shadow-xl transform-gpu"
          >
            <a :href="news.href" target="_blank" class="md:cursor-pointer md:pb-2">
              <!-- 图片容器 -->
              <div class="w-full rounded-t-2xl overflow-hidden bg-gray-200">
                <picture>
                  <source :srcset="news.imageWp" type="image/webp" />
                  <img
                    :src="news.image"
                    alt=""
                    class="w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.2,0,0,1)] md:group-hover:scale-110 aspect-[847/492]"
                  />
                </picture>
              </div>

              <!-- 文字内容区域（使用 flex-grow 撑满剩余空间） -->
              <div class="flex flex-1 flex-col pw-p-[8px] md:p-4 transition-colors duration-300">
                <div class="flex-1 overflow-hidden">
                  <h1
                    class="pw-text-[14px] md:text-base font-medium text-[#020014] group-hover:text-[#000000] line-clamp-2 overflow-hidden text-ellipsis min-h-[2.8em] leading-snug"
                  >
                    {{ news.title }}
                  </h1>
                  <p
                    class="pw-mt-[8px] pw-mb-[8px] md:mb-2 md:mt-2 pw-text-[12px] md:text-sm text-[#71798A] group-hover:text-[#5a6473] line-clamp-2 md:line-clamp-2 overflow-hidden text-ellipsis"
                  >
                    {{ news.description }}
                  </p>
                </div>
                <div
                  class="mt-auto flex items-center justify-between pw-text-[11px] md:text-xs text-[#71798A] md:group-hover:text-[#5a6473] transition-all duration-300"
                >
                  <span class="transition-transform duration-300 ease-out">
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
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import img1 from '~/assets/images/news/news-s2-img1.jpg'
import img2 from '~/assets/images/news/news-s2-img2.jpg'
import img3 from '~/assets/images/news/news-s2-img3.jpg'
import img4 from '~/assets/images/news/news-s2-img4.jpg'
import img5 from '~/assets/images/news/news-s2-img5.jpg'
import img6 from '~/assets/images/news/news-s2-img6.jpg'
import img1w from '~/assets/images/news/news-s2-img1.webp'
import img2w from '~/assets/images/news/news-s2-img2.webp'
import img3w from '~/assets/images/news/news-s2-img3.webp'
import img4w from '~/assets/images/news/news-s2-img4.webp'
import img5w from '~/assets/images/news/news-s2-img5.webp'
import img6w from '~/assets/images/news/news-s2-img6.webp'

const { t, locale } = useI18n()

useHead({
  title: locale.value === 'zh' ? '新闻动态' : 'News',
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
const newsList = [
  {
    title: t('news.items.news1.title'),
    description: t('news.items.news1.description'),
    date: t('news.items.news1.date'),
    image: img1,
    imageWp: img1w,
    href: 'https://mp.weixin.qq.com/s/bZWECwN9k7D_2Cn8K314lQ?mpshare=1&scene=1&srcid=0127j220u00QpuH07Pkz8Axa&sharer_shareinfo=95a16edcaf4201d6cf4218df9d6f71e1&sharer_shareinfo_first=95a16edcaf4201d6cf4218df9d6f71e1&from=industrynews&nwr_flag=1#wechat_redirect',
  },
  {
    title: t('news.items.news2.title'),
    description: t('news.items.news2.description'),
    date: t('news.items.news2.date'),
    image: img2,
    imageWp: img2w,
    href: 'https://mp.weixin.qq.com/s/iLqSChrf7JbVPW_N6G2BTA',
  },
  {
    title: t('news.items.news3.title'),
    description: t('news.items.news3.description'),
    date: t('news.items.news3.date'),
    image: img3,
    imageWp: img3w,
    href: 'https://mp.weixin.qq.com/s/fLL1ZBXU9_dXACOcfhpAJA',
  },
  {
    title: t('news.items.news4.title'),
    description: t('news.items.news4.description'),
    date: t('news.items.news4.date'),
    image: img4,
    imageWp: img4w,
    href: 'https://mp.weixin.qq.com/s/I-J3udvsligc9OSoGgxMsA',
  },
  {
    title: t('news.items.news5.title'),
    description: t('news.items.news5.description'),
    date: t('news.items.news5.date'),
    image: img5,
    imageWp: img5w,
    href: 'https://twitter.com/Astribot_Inc/status/1825341062514438179?s=19',
  },
  {
    title: t('news.items.news6.title'),
    description: t('news.items.news6.description'),
    date: t('news.items.news6.date'),
    image: img6,
    imageWp: img6w,
    href: 'https://twitter.com/Astribot_Inc/status/1783716048673640641?s=19',
  },
]

useHead({
  title: t('menu.news'),
})
definePageMeta({
  // 禁用页面过渡效果
  pageTransition: false,
  // 自定义滚动行为
  scrollToTop: true,
})
</script>
