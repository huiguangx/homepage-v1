<template>
  <div class="bg-white">
    <!-- Banner Section -->
    <section class="relative w-full h-screen overflow-hidden">
      <!-- 背景图 -->
      <img
        src="~/assets/images/career/hire-s1-bg.jpg"
        class="w-full h-full object-cover absolute inset-0 z-10"
      />

      <!-- 文字容器（绝对定位居中） -->
      <div class="absolute inset-y-0 flex items-center justify-center z-20 px-4">
        <div class="">
          <h1 class="text-4xl text-white font-bold mb-6">
            {{ $t('careers.heroTitle') }}
          </h1>
          <p
            class="text-2xl bg-gradient-to-r from-purple-300 via-blue-300 to-white bg-clip-text text-transparent"
          >
            {{ $t('careers.heroSubtitle') }}
          </p>
        </div>
      </div>
    </section>
    <!-- Work Environment -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-6">{{ $t('careers.workEnvironment') }}</h2>
        <p class="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
          {{ $t('careers.workEnvironmentDesc') }}
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div
            v-for="(image, index) in workImages"
            :key="index"
            class="rounded-2xl overflow-hidden h-80"
          >
            <img :src="image.src" :alt="image.alt" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    <!-- Open Positions -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-6">{{ $t('careers.openPositions') }}</h2>
        <p class="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
          {{ $t('careers.openPositionsDesc') }}
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Social Recruitment -->
          <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div class="border-b border-blue-500 pb-4 mb-6">
              <h3 class="text-2xl font-semibold text-center">
                {{ $t('careers.socialRecruitment') }}
              </h3>
            </div>
            <div class="space-y-4">
              <div
                v-for="(position, index) in socialPositions"
                :key="index"
                class="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h4 class="font-medium">{{ position.title }}</h4>
                <span class="text-sm text-gray-500">{{ position.type }}</span>
              </div>
            </div>
            <button
              class="mt-6 w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {{ $t('careers.viewMore') }}
            </button>
          </div>

          <!-- Campus Recruitment -->
          <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div class="border-b border-blue-500 pb-4 mb-6">
              <h3 class="text-2xl font-semibold text-center">
                {{ $t('careers.campusRecruitment') }}
              </h3>
            </div>
            <div class="space-y-4">
              <div
                v-for="(position, index) in campusPositions"
                :key="index"
                class="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h4 class="font-medium">{{ position.title }}</h4>
                <span class="text-sm text-gray-500">{{ position.type }}</span>
              </div>
            </div>
            <button
              class="mt-6 w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {{ $t('careers.viewMore') }}
            </button>
          </div>

          <!-- Internship -->
          <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div class="border-b border-blue-500 pb-4 mb-6">
              <h3 class="text-2xl font-semibold text-center">{{ $t('careers.internship') }}</h3>
            </div>
            <div class="space-y-4">
              <div
                v-for="(position, index) in internPositions"
                :key="index"
                class="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h4 class="font-medium">{{ position.title }}</h4>
                <span class="text-sm text-gray-500">{{ position.type }}</span>
              </div>
            </div>
            <button
              class="mt-6 w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {{ $t('careers.viewMore') }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
const { t } = useI18n()

const workImages = [
  { src: '/images/careers-env-1.jpg', alt: t('careers.workEnv1Alt') },
  { src: '/images/careers-env-2.jpg', alt: t('careers.workEnv2Alt') },
  { src: '/images/careers-env-3.jpg', alt: t('careers.workEnv3Alt') },
]

const socialPositions = [
  {
    title: t('careers.positions.hardwareEngineer.title'),
    type: t('careers.positions.hardwareEngineer.type'),
  },
  {
    title: t('careers.positions.mechanicalEngineer.title'),
    type: t('careers.positions.mechanicalEngineer.type'),
  },
  {
    title: t('careers.positions.perceptionEngineer.title'),
    type: t('careers.positions.perceptionEngineer.type'),
  },
  {
    title: t('careers.positions.roboticsEngineer.title'),
    type: t('careers.positions.roboticsEngineer.type'),
  },
  {
    title: t('careers.positions.productManager.title'),
    type: t('careers.positions.productManager.type'),
  },
]

const campusPositions = [
  {
    title: t('careers.positions.hardwareEngineerPower.title'),
    type: t('careers.positions.hardwareEngineerPower.type'),
  },
  {
    title: t('careers.positions.projectManager.title'),
    type: t('careers.positions.projectManager.type'),
  },
  {
    title: t('careers.positions.productManager.title'),
    type: t('careers.positions.productManager.type'),
  },
  {
    title: t('careers.positions.marketingManager.title'),
    type: t('careers.positions.marketingManager.type'),
  },
  {
    title: t('careers.positions.adminAssistant.title'),
    type: t('careers.positions.adminAssistant.type'),
  },
]

const internPositions = [
  {
    title: t('careers.positions.perceptionIntern.title'),
    type: t('careers.positions.perceptionIntern.type'),
  },
  {
    title: t('careers.positions.embodiedAIIntern.title'),
    type: t('careers.positions.embodiedAIIntern.type'),
  },
  { title: t('careers.positions.llmIntern.title'), type: t('careers.positions.llmIntern.type') },
  {
    title: t('careers.positions.marketingIntern.title'),
    type: t('careers.positions.marketingIntern.type'),
  },
  { title: t('careers.positions.hrIntern.title'), type: t('careers.positions.hrIntern.type') },
]

useHead({
  title: t('menu.careers'),
})
</script>
