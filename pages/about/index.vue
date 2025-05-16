<template>
  <div class="relative pw-mt-[44px] md:mt-16">
    <!--1 hero section-->
    <section>
      <div class="relative w-full h-auto">
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
            alt=""
            class="w-full h-auto md:object-cover object-contain aspect-[750/416] md:aspect-[1440/528]"
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
      class="text-white flex items-center justify-center pw-pt-[32px] pw-pb-[60px] md:py-16 h-full md:h-[66vh] relative bg-[url('~/assets/images/about/about-s2-bg.jpg')] bg-no-repeat [background-size:100%_100%] animate-fade-in-up"
    >
      <div class="m-auto w-[90%] md:max-w-[1280px] relative culture-container">
        <h2 class="pw-text-[22px] md:text-4xl font-medium text-center pw-pb-[24px] md:pb-20">
          {{ $t('about.culture') }}
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 pw-gap-[24px] md:gap-16">
          <div
            class="culture-item border-b md:border-b-0 pw-pb-[24px] md:pr-16 md:pl-20 md:border-r border-[#FFFFFF33] border-opacity-20"
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

          <div
            class="culture-item border-b md:border-b-0 pw-pb-[24px] md:border-r border-[#FFFFFF33] border-opacity-20"
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

          <div class="culture-item">
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
      <div class="relative">
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
            alt=""
            class="w-full h-auto md:h-[60vh] md:object-cover"
            loading="lazy"
          />
        </picture>
        <picture class="absolute inset-0 w-full">
          <source media="(max-width: 767px)" srcset="~/assets/images/about/about-s3-mask-h5.png" />

          <source media="(min-width: 768px)" srcset="~/assets/images/about/about-s3-mask.png" />
          <img
            src="~/assets/images/about/about-s3-mask.png"
            alt=""
            class="w-full h-auto"
            loading="lazy"
          />
        </picture>

        <div class="absolute inset-0 pw-top-[32px] md:top-16 animate-fade-in-up about-container">
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

/* ------------------- 动画优化 ------------------- */

/* 定义核心的文字进入动画 keyframes */
@keyframes fadeInUpSmooth {
  0% {
    opacity: 0;
    transform: translateY(20px); /* 调整起始位置，可以根据需要修改 */
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 设置需要动画的文本元素的初始状态（在容器不在视口时）*/
/* Hero Section */
.poster h1,
.poster p {
  opacity: 0;
  transform: translateY(20px); /* 保持与 keyframes 起始位置一致 */
  will-change: opacity, transform; /* 性能优化 */
}

/* Culture Section */
/* 直接选择 culture-item 类下的子元素，或者更精确地选择 h2, div.flex, div.w-8, h4, p 等 */
/* 为了简化，我们让整个 culture-item 块一起淡入，延迟应用于 culture-item 块本身 */
.culture-container h2,
.culture-item {
  opacity: 0;
  transform: translateY(20px);
  will-change: opacity, transform;
}
/* Culture section内部的h4和p也可以单独延迟，如果需要更精细控制，但会增加复杂度 */

/* About Section */
.about-container h2,
.about-container p {
  opacity: 0;
  transform: translateY(20px);
  will-change: opacity, transform;
}

/* 当父容器进入视口时，触发子元素的动画 */
/* 移除父容器自身的动画效果（如果 animate-fade-in-up 本身有动画的话） */
.animate-fade-in-up.in-view {
  /* 这里确保容器本身是可见的，并移除其可能自带的transform */
  opacity: 1; /* 确保容器不透明 */
  transform: none; /* 移除容器自身的位移/缩放 */
  animation: none !important; /* 移除容器自身的动画 */
}

/* Hero Section - 子元素动画和延迟 */
.poster.in-view h1 {
  animation: fadeInUpSmooth 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: 0.2s; /* 第一个元素延迟 */
}

.poster.in-view p {
  animation: fadeInUpSmooth 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: 0.4s; /* 第二个元素延迟 */
}

/* Culture Section - 子元素动画和延迟 */
/* 让标题先出现 */
.animate-fade-in-up.in-view .culture-container h2 {
  animation: fadeInUpSmooth 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: 0.3s;
}

/* 然后是三个文化块依次出现 */
.animate-fade-in-up.in-view .culture-item {
  animation: fadeInUpSmooth 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: 0.3s;
}
/* .animate-fade-in-up.in-view .culture-item:nth-child(2) {
  animation: fadeInUpSmooth 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: 0.7s; 
}
.animate-fade-in-up.in-view .culture-item:nth-child(3) {
  animation: fadeInUpSmooth 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: 0.9s; 
} */
/* 如果需要文化块内部的元素也延迟，则需要更复杂的选择器和延迟设置 */

/* About Section - 子元素动画和延迟 */
.about-container.in-view h2 {
  animation: fadeInUpSmooth 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: 0.3s;
}

/* 使用 nth-of-type 来选择不同的 <p> 元素 */
.about-container.in-view p:nth-of-type(1) {
  animation: fadeInUpSmooth 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: 0.5s;
}

.about-container.in-view p:nth-of-type(2) {
  animation: fadeInUpSmooth 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: 0.7s;
}
</style>
