<template>
  <div class="">
    <!--1 hero section-->
    <section>
      <div class="relative w-full pw-pt-[44px] md:pt-16 md:h-auto">
        <picture>
          <source
            media="(max-width: 767px)"
            srcset="/assets/images/about/about-s1-bg-h5.webp"
            type="image/webp"
          />

          <source
            media="(max-width: 767px)"
            srcset="/assets/images/about/about-s1-bg-h5.jpg"
            type="image/jpeg"
          />

          <source
            media="(min-width: 768px)"
            srcset="/assets/images/about/about-s1-bg.webp"
            type="image/webp"
          />

          <img
            src="/assets/images/about/about-s1-bg.jpg"
            alt="响应式图片"
            class="w-full h-auto md:object-cover object-contain"
            loading="lazy"
          />
        </picture>
        <div
          class="poster absolute top-1/2 left-[10%] -translate-y-1/2 text-white space-y-2 md:space-y-6 animate-fade-in-up"
        >
          <h1
            class="pw-text-[18px] md:text-4xl font-medium bg-gradient-to-r from-[#caadff] via-[#98beff] to-[#ddffff] text-transparent bg-clip-text"
          >
            创未来科技，传经典文化
          </h1>
          <p class="pw-text-[14px] md:text-2xl text-[#D2D0FB]">High Tech, High Life</p>
        </div>
      </div>
    </section>

    <!--2 culture section（修改后的完整代码） -->
    <section
      class="text-white flex items-center justify-center pw-pt-[32px] pw-pb-[60px] md:py-16 h-full md:h-[66vh] relative bg-[url('~/assets/images/about/about-s2-bg.jpg')] bg-no-repeat [background-size:100%_100%]"
    >
      <!-- 动画容器 -->
      <div class="m-auto w-[90%] md:max-w-[1280px] relative animate-fade-in-up">
        <h2 class="pw-text-[22px] md:text-4xl font-medium text-center pw-pb-[24px] md:pb-20">
          {{ $t('about.culture') }}
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 pw-gap-[24px] md:gap-16">
          <!-- Mission Column -->
          <div
            class="border-b md:border-b-0 pw-pb-[24px] md:pr-16 md:border-r border-[#FFFFFF33] border-opacity-20"
          >
            <div class="flex items-baseline mb-4">
              <span class="pw-text-[18px] md:text-2xl font-medium">使命</span>
              <span class="text-white ml-2 pw-text-[16px] md:text-xl font-light">Mission</span>
            </div>
            <div class="w-8 h-[3px] bg-[#FFFFFF99] rounded-full mb-4"></div>
            <h4 class="pw-text-[14px] md:text-base font-normal mb-2">推动人机共存、共创、共赢</h4>
            <p class="text-[#FFFFFFCC] pw-text-[12px] md:text-xs font-light">
              Promote co-existence, co-creation, and co-prosperity between humans and robots
            </p>
          </div>

          <!-- Vision Column -->
          <div
            class="border-b md:border-b-0 pw-pb-[24px] md:border-r border-[#FFFFFF33] border-opacity-20"
          >
            <div class="flex items-baseline mb-4">
              <span class="pw-text-[18px] md:text-2xl font-medium">愿景</span>
              <span class="text-white ml-2 pw-text-[16px] md:text-xl font-light">Vision</span>
            </div>
            <div class="w-8 h-[3px] bg-[#FFFFFF99] rounded-full mb-4"></div>
            <h4 class="pw-text-[14px] md:text-base font-normal mb-2">让数十亿人拥有AI机器人助理</h4>
            <p class="text-[#FFFFFFCC] pw-text-[12px] md:text-xs font-light leading-relaxed">
              Empower billions of people with AI robotic partners
            </p>
          </div>

          <!-- Values Column -->
          <div class="">
            <div class="flex items-baseline mb-4">
              <span class="pw-text-[18px] md:text-2xl font-medium">价值观</span>
              <span class="text-white ml-2 pw-text-[16px] md:text-xl font-light">Values</span>
            </div>
            <div class="w-8 h-[3px] bg-[#FFFFFF99] rounded-full mb-4"></div>
            <div class="grid grid-cols-2 gap-y-6">
              <div>
                <h4 class="pw-text-[14px] md:text-base font-normal mb-1">探索本质</h4>
                <p class="text-[#FFFFFFCC] pw-text-[12px] md:text-xs font-light">
                  Seek Core Principles
                </p>
              </div>
              <div>
                <h4 class="pw-text-[14px] md:text-base font-normal mb-1">创造不凡</h4>
                <p class="text-[#FFFFFFCC] pw-text-[12px] md:text-xs font-light">Create Wonders</p>
              </div>
              <div>
                <h4 class="pw-text-[14px] md:text-base font-normal mb-1">协作共赢</h4>
                <p class="text-[#FFFFFFCC] pw-text-[12px] md:text-xs font-light">
                  Together Forward
                </p>
              </div>
              <div>
                <h4 class="pw-text-[14px] md:text-base font-normal mb-1">无限进化</h4>
                <p class="text-[#FFFFFFCC] pw-text-[12px] md:text-xs font-light">
                  Evolve Infinitely
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--3 about astirbot section-->
    <section class="">
      <!-- 外层容器：相对定位（用于文字定位） -->
      <div class="relative">
        <!-- 图片部分（直接显示，不用绝对定位） -->
        <picture>
          <source
            media="(max-width: 767px)"
            srcset="~/assets/images/about/about-s3-bg-h5.webp"
            type="image/webp"
          />
          <source
            media="(max-width: 767px)"
            srcset="~/assets/images/about/about-s3-bg-h5.jpg"
            type="image/jpeg"
          />
          <source
            media="(min-width: 768px)"
            srcset="~/assets/images/about/about-s3-bg.webp"
            type="image/webp"
          />
          <img
            src="~/assets/images/about/about-s3-bg.jpg"
            alt="响应式图片"
            class="w-full h-auto md:h-[60vh] md:object-cover"
            loading="lazy"
          />
        </picture>
        <picture class="absolute inset-0 w-full">
          <source media="(max-width: 767px)" srcset="~/assets/images/about/about-s3-mask-h5.png" />

          <source media="(min-width: 768px)" srcset="~/assets/images/about/about-s3-mask.png" />
          <img
            src="~/assets/images/about/about-s3-mask.png"
            alt="遮罩图"
            class="w-full h-auto"
            loading="lazy"
          />
        </picture>

        <!-- 文字部分（保持绝对定位覆盖在图片上） -->
        <div class="absolute inset-0 pw-top-[32px] md:top-16">
          <div
            class="w-[90%] md:max-w-[1280px] mx-auto h-full flex flex-col md:flex-row md:justify-between"
          >
            <div>
              <h2 class="pw-text-[22px] md:text-4xl font-medium text-left pw-pb-[16px] md:pb-0">
                关于星尘
              </h2>
            </div>
            <div class="md:w-3/4">
              <p class="pw-text-[13px] text-[#71798A] md:text-lg font-normal leading-relaxed">
                星尘智能（Atribot）于2022年底在深圳成立，首创面向AI（Design for
                AI，DFAI）的软硬件一体化系统架构，将「AI智能」与「最强操作」深度耦合，在获取具身数据上取得关键性突破。
              </p>
              <p class="pw-text-[13px] text-[#71798A] md:text-lg leading-relaxed mt-4">
                我们希望让机器人能像人一样学习、思考和劳动，与人流畅智能地交互，使用人的工具和设备、帮人完成枯燥、困难或危险的任务。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()

useHead({
  title: locale.value === 'zh' ? '关于我们' : 'About Us',
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
// 滚动动画逻辑
const handleScrollAnimation = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1, // 元素10%进入视口时触发
      rootMargin: '-100px 0px', // 提前100px触发
    },
  )

  const animateElements = document.querySelectorAll('.animate-fade-in-up')
  animateElements.forEach((el) => observer.observe(el))

  onBeforeUnmount(() => {
    animateElements.forEach((el) => observer.unobserve(el))
  })
}

onMounted(() => {
  handleScrollAnimation()
})
</script>

<style scoped>
/* 图片基础样式 */
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 70% center; /* 移动端显示更多右侧内容，但仍保留部分左侧 */
}

/* PC端样式 */
@media (min-width: 768px) {
  img {
    object-position: center; /* PC端居中显示 */
  }
}

/* 动画关键帧 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px) translateZ(0);
  }
  to {
    opacity: 1;
    transform: translateY(0) translateZ(0);
  }
}

/* 动画控制类 */
.animate-fade-in-up {
  opacity: 0;
  transform: translateY(20px);
}

.animate-fade-in-up.in-view {
  animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: 0.2s;
}

/* 原有样式保持不变 */
/* ...（省略其他原有样式保持不变）... */
</style>
