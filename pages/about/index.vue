<template>
  <!--1 hero section-->
  <section>
    <div class="relative w-full h-[70vh] md:h-screen">
      <!-- 图片 -->
      <img src="~/assets/images/about/about-s1-bg.jpg" alt="" class="w-full h-full object-cover" />
      <!-- 文字内容 -->
      <div
        class="poster absolute top-1/2 left-[10%] -translate-y-1/2 text-white space-y-2 md:space-y-6 animate-fade-in-up"
      >
        <h1 class="pw-text-[18px] md:text-4xl font-medium">创未来科技，传经典文化</h1>
        <p class="pw-text-[14px] md:text-2xl text-[#D2D0FB]">High Tech, High Life</p>
      </div>
    </div>
  </section>
  <!--2 culture section-->
  <section
    class="text-white flex items-center justify-center pw-pt-[32px] pw-pb-[60px] md:py-16 h-auto md:h-[80vh] relative bg-[url('~/assets/images/about/about-s2-bg.jpg')] bg-no-repeat"
    style="background-size: 100% 100%"
  >
    <div class="m-auto w-[90%] relative">
      <!-- 标题动画 -->
      <h2
        class="pw-text-[22px] md:text-3xl font-normal text-center pw-pb-[24px] md:pb-20 animate-fade-in-up"
      >
        {{ $t('about.culture') }}
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 pw-gap-[24px] md:gap-5">
        <!-- Mission Column -->
        <div
          class="border-b md:border-b-0 pw-pb-[24px] md:border-r border-white border-opacity-20 animate-fade-in-up"
          style="animation-delay: 0.2s"
        >
          <div class="flex items-center mb-6">
            <span class="pw-text-[18px] md:text-xl">使命</span>
            <span class="text-gray-400 ml-2 text-sm">Mission</span>
          </div>
          <div
            class="w-8 h-0.5 bg-white bg-opacity-40 mb-6 animate-fade-in-up"
            style="animation-delay: 0.3s"
          ></div>
          <h4 class="text-lg font-medium mb-2 animate-fade-in-up" style="animation-delay: 0.4s">
            推动人机共存、共创、共赢
          </h4>
          <p
            class="text-gray-400 text-xs leading-relaxed animate-fade-in-up"
            style="animation-delay: 0.5s"
          >
            Promote co-existence, co-creation, and co-prosperity between humans and robots
          </p>
        </div>

        <!-- Vision Column -->
        <div
          class="border-b md:border-b-0 pw-pb-[24px] md:border-r border-white border-opacity-20 animate-fade-in-up"
          style="animation-delay: 0.3s"
        >
          <div class="flex items-center mb-6">
            <span class="pw-text-[18px] md:text-xl">愿景</span>
            <span class="text-white ml-2 text-sm">Vision</span>
          </div>
          <div
            class="w-8 h-0.5 bg-white bg-opacity-40 mb-6 animate-fade-in-up"
            style="animation-delay: 0.4s"
          ></div>
          <h4 class="text-lg font-medium mb-2 animate-fade-in-up" style="animation-delay: 0.5s">
            让数十亿人拥有AI机器人助理
          </h4>
          <p
            class="text-gray-400 text-xs leading-relaxed animate-fade-in-up"
            style="animation-delay: 0.6s"
          >
            Empower billions of people with AI robotic partners
          </p>
        </div>

        <!-- Values Column -->
        <div class="animate-fade-in-up" style="animation-delay: 0.4s">
          <div class="flex items-center mb-6">
            <span class="pw-text-[18px] md:text-xl">价值观</span>
            <span class="text-white ml-2 text-sm">Values</span>
          </div>
          <div
            class="w-8 h-0.5 bg-white bg-opacity-40 mb-6 animate-fade-in-up"
            style="animation-delay: 0.5s"
          ></div>
          <div class="grid grid-cols-2 gap-y-6">
            <div class="animate-fade-in-up" style="animation-delay: 0.6s">
              <h4 class="text-base font-medium mb-1">探索本质</h4>
              <p class="text-gray-400 text-xs">Seek Core Principles</p>
            </div>
            <div class="animate-fade-in-up" style="animation-delay: 0.7s">
              <h4 class="text-base font-medium mb-1">创造不凡</h4>
              <p class="text-gray-400 text-xs">Create Wonders</p>
            </div>
            <div class="animate-fade-in-up" style="animation-delay: 0.8s">
              <h4 class="text-base font-medium mb-1">协作共赢</h4>
              <p class="text-gray-400 text-xs">Together Forward</p>
            </div>
            <div class="animate-fade-in-up" style="animation-delay: 0.9s">
              <h4 class="text-base font-medium mb-1">无限进化</h4>
              <p class="text-gray-400 text-xs">Evolve Infinitely</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--3 about astirbot section-->
  <section>
    <div class="relative overflow-hidden">
      <!-- 图片 -->
      <img
        src="~/assets/images/about/about-s3-bg.jpg"
        alt=""
        class="w-full h-full object-cover md:object-contain"
      />
      <!-- 覆盖层 -->
      <div class="absolute inset-0 bg-gradient-to-t from-transparent to-white">
        <div class="px-20 py-16 z-10 flex flex-col md:flex-row md:justify-between">
          <div>
            <h2 class="pw-text-[22px] md:text-4xl font-medium text-left md:text-center">
              关于星尘
            </h2>
          </div>
          <div class="md:w-3/4">
            <p class="text-[#71798A] text-lg leading-relaxed">
              星尘智能（Atribot）于2022年底在深圳成立，首创面向AI（Design for
              AI，DFAI）的软硬件一体化系统架构，将「AI智能」与「最强操作」深度耦合，在获取具身数据上取得关键性突破。
            </p>
            <p class="text-[#71798A] text-lg leading-relaxed mt-4">
              我们希望让机器人能像人一样学习、思考和劳动，与人流畅智能地交互，使用人的工具和设备、帮人完成枯燥、困难或危险的任务。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// import { NuxtPicture, NuxtImg } from '#components'
useHead({
  title: 'About Us',
})
</script>
<style scoped>
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
@keyframes slideUp {
  from {
    transform: translateY(100px) translateZ(0); /* 调大初始位移 */
    opacity: 0;
  }
  to {
    transform: translateY(0) translateZ(0);
    opacity: 1;
  }
}

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

.animate-fade-in-up {
  animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: 0.3s; /* 统一延迟 */
}

/* 子元素动画 */
.animate-fade-in-up h1 {
  animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  animation-delay: 0.4s;
}

.animate-fade-in-up p {
  animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  animation-delay: 0.6s;
}

/* 性能优化 */
.animate-fade-in-up > * {
  will-change: transform, opacity;
  opacity: 0; /* 初始状态 */
}
</style>
