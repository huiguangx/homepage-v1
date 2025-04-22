<template>
  <!-- <NuxtImg src="/_nuxt/assets/images/about/about-astribot.jpg"></NuxtImg> -->
  <section>
    <div class="relative w-full h-screen">
      <img
        src="~/assets/images/about/about-astribot.jpg"
        class="w-full h-full object-cover"
        alt=""
      />
      <div class="absolute top- flex items-center justify-center text-white">
        <h2>创未来科技，传经典文化</h2>
      </div>
    </div>
  </section>
  <section
    class="text-white py-16 relative bg-[url('~/assets/images/about/about-s2-bg.jpg')] bg-no-repeat"
    style="background-size: 100% 100%"
  >
    <div class="mx-auto px-6 relative z-10">
      <h2 class="text-3xl font-normal text-center mb-20">企业文化</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-0">
        <!-- Mission Column -->
        <div class="border-r border-white border-opacity-20 px-8">
          <div class="flex items-center mb-6">
            <span class="text-xl">使命</span>

            <span class="text-gray-400 ml-2 text-sm">Mission</span>
          </div>
          <div class="w-8 h-0.5 bg-white bg-opacity-80 mb-6"></div>
          <h4 class="text-lg font-medium mb-2">推动人机共存、共创、共赢</h4>
          <p class="text-gray-400 text-xs leading-relaxed">
            Promote co-existence, co-creation, and co-prosperity between humans and robots
          </p>
        </div>

        <!-- Vision Column -->
        <div class="border-r border-white border-opacity-20 px-8">
          <div class="flex items-center mb-6">
            <span class="text-xl">愿景</span>
            <span class="text-white ml-2 text-sm">Vision</span>
          </div>
          <div class="w-8 h-0.5 bg-white bg-opacity-80 mb-6"></div>
          <h4 class="text-lg font-medium mb-2">让数十亿人拥有AI机器人助理</h4>
          <p class="text-gray-400 text-xs leading-relaxed">
            Empower billions of people with AI robotic partners
          </p>
        </div>

        <!-- Values Column -->
        <div class="px-8">
          <div class="flex items-center mb-6">
            <span class="text-xl">价值观</span>
            <span class="text-white ml-2 text-sm">Values</span>
          </div>
          <div class="w-8 h-0.5 bg-white bg-opacity-80 mb-6"></div>
          <div class="grid grid-cols-2 gap-y-6">
            <div>
              <h4 class="text-base font-medium mb-1">探索本质</h4>
              <p class="text-gray-400 text-xs">Seek Core Principles</p>
            </div>
            <div>
              <h4 class="text-base font-medium mb-1">创造不凡</h4>
              <p class="text-white text-xs">Create Wonders</p>
            </div>
            <div>
              <h4 class="text-base font-medium mb-1">协作共赢</h4>
              <p class="text-gray-400 text-xs">Together Forward</p>
            </div>
            <div>
              <h4 class="text-base font-medium mb-1">无限进化</h4>
              <p class="text-gray-400 text-xs">Evolve Infinitely</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="relative">
      <img src="~/assets/images/about/about-s3-bg.jpg" alt="" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-transparent to-white">
        <div class="px-20 py-16 z-10 flex justify-between">
          <div>
            <h2 class="text-4xl font-medium text-center mr-">关于星尘</h2>
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
