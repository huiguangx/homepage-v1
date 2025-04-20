<template>
  <div class="w-full max-w-[2560px] mx-auto">
    <!-- Hero Video Section -->
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
            <h1 class="text-5xl font-bold text-white mb-6">星尘智能 S1</h1>
            <p class="text-lg text-white font-normal mb-6">AI机器人平台，助力行业共创共赢</p>
            <a
              class="bg-transparent text-white border border-white px-5 py-3 rounded-md hover:bg-white hover:text-black transition-colors"
              href="#"
            >
              立即咨询
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- second -->
    <section class="h-screen w-full bg-[#161616] pt-20">
      <div class="h-full w-full">
        <div class="text-center top-24">
          <div class="space-y-8">
            <h1 class="text-4xl font-medium text-white leading-tight tracking-wide">
              全能型AI机器人，定义操作新高度
            </h1>
            <p class="text-lg text-[#C9C9C9]">
              更快速、更柔顺、更安全，星尘智能S1首创面向AI的软硬件一体化系统架构
              <br />
              将"AI智能"与"最强操作"深度耦合，能像人一样学习思考和劳动，与人安全智能地交互
            </p>
          </div>
        </div>
        <swiper
          class="product-swiper text-white"
          :modules="[Autoplay, Pagination]"
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          :pagination="{ clickable: true }"
          :loop="true"
          :centeredSlides="true"
          :spaceBetween="20"
          :slidesPerView="'auto'"
          @activeIndexChange="handleSlideChange"
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
        <!-- <swiper
          class="product-swiper text-white"
          :modules="[Autoplay, Pagination]"
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          :pagination="{ clickable: true }"
          :loop="true"
          :centeredSlides="true"
          :spaceBetween="20"
          slidesPerView="auto"
        >
          <swiper-slide>
            <div>
              <video class="h-full object-cover rounded-2xl" muted autoplay loop playsinline>
                <source src="~/assets/media/01跳舞.mp4" type="video/mp4" />
              </video>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <video class="h-full object-cover rounded-2xl" muted autoplay loop playsinline>
                <source src="~/assets/media/02逗猫＋扫地.mp4" type="video/mp4" />
              </video>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <video class="h-full object-cover rounded-2xl" muted autoplay loop playsinline>
                <source src="~/assets/media/03扬琴.mp4" type="video/mp4" />
              </video>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <video class="h-full object-cover rounded-2xl" muted autoplay loop playsinline>
                <source src="~/assets/media/04华夫饼倒酱.mp4" type="video/mp4" />
              </video>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <video class="h-full object-cover rounded-2xl" muted autoplay loop playsinline>
                <source src="~/assets/media/05倒茶叶.mp4" type="video/mp4" />
              </video>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <video class="h-full object-cover rounded-2xl" muted autoplay loop playsinline>
                <source src="~/assets/media/06智能分拣.mp4" type="video/mp4" />
              </video>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <video class="h-full object-cover rounded-2xl" muted autoplay loop playsinline>
                <source src="~/assets/media/07叠衣服.mp4" type="video/mp4" />
              </video>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div>
              <video class="h-full object-cover rounded-2xl" muted autoplay loop playsinline>
                <source src="~/assets/media/08竞技叠杯.mp4" type="video/mp4" />
              </video>
            </div>
          </swiper-slide>
        </swiper> -->
      </div>
    </section>

    <!-- Performance Section -->
    <section
      class="py-20 bg-[#010101] bg-[url('~/assets/images/product/describe-s2-bg.jpg')] bg-cover"
    >
      <div class="container mx-auto px-4">
        <div class="mx-auto text-center mb-20">
          <h2 class="text-4xl font-medium text-white mb-6">高度仿人，更强创造力</h2>
          <p class="text-xl text-[#C9C9C9]">
            星尘智能 S1 各项关键操作指标媲美成年男性
            <br />
            兼顾性能满足、安全性和稳定性，给科研工作者及部分场景探索者提供更大想象空间
          </p>
        </div>

        <div class="flex justify-center items-center">
          <div class="w-full md:w-2/3">
            <!-- 单一大框容器 -->
            <div class="rounded-lg p-4">
              <div class="grid grid-cols-3 gap-x-4 relative py-8">
                <!-- 第二列背景 -->
                <div
                  class="absolute inset-y-0 left-1/3 right-1/3 bg-[#AAAAAA] bg-opacity-30 z-0 rounded-2xl pointer-events-none"
                ></div>
                <!-- 表格标题行 -->
                <div class="col-span-1 text-right pr-4 text-gray-400"></div>
                <div class="col-span-1 text-center">
                  <h3 class="text-lg font-medium mb-2 text-white my-text-class">星尘智能S1</h3>
                </div>
                <div class="col-span-1 text-center">
                  <h3 class="text-lg font-medium mb-2 text-gray-300">普通成年男性</h3>
                </div>

                <template v-for="(item, index) in specItems" :key="index">
                  <div
                    class="col-span-1 text-right pr-4 text-[#AAAAAA] py-3 flex items-center justify-end min-h-[3rem]"
                  >
                    <span class="whitespace-normal text-right">{{ item.name }}</span>
                  </div>
                  <div class="col-span-1 flex items-center justify-center py-3 min-h-[3rem]">
                    <div class="flex flex-row items-baseline flex-wrap justify-center">
                      <span class="text-2xl font-bold text-white mr-1">{{ item.s1Value }}</span>
                      <span class="text-xs text-[#AAAAAA] whitespace-normal">
                        {{ item.s1Unit }}
                      </span>
                    </div>
                  </div>
                  <div class="col-span-1 flex items-center justify-center py-3 min-h-[3rem]">
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

        <p class="text-sm text-[#656565] text-center mt-12">
          注：S1针对大科研、开发者和部分场景用户，相关指标可解锁至更高性能。
        </p>
      </div>
    </section>

    <!-- Toolchain Section -->
    <section class="py-20 px-28 bg-[#161616]">
      <div class="mx-auto">
        <div class="max-w-4xl mx-auto text-center mb-20">
          <h2 class="text-4xl font-medium text-white mb-6">持续丰富工具链，降低科研门槛</h2>
          <p class="text-xl text-[#C9C9C9]">
            我们将持续完善工具链，打造开放、易用、高性能的科研工具生态
            <br />
            快速验证创新算法及模型功能，助力科研突破
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-6 mx-auto">
          <div class="bg-[#252525] rounded-2xl p-6">
            <div class="rounded-2xl overflow-hidden mb-6">
              <img
                src="~/assets/images/product/describe-s3-img1.jpg"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="text-xl font-medium text-white mb-4">功能全面的API</h3>
            <p class="text-[#AAAAAA]">提供完整的API接口，支持多种编程语言调用，满足不同开发需求</p>
          </div>

          <div class="bg-[#252525] rounded-2xl p-6">
            <div class="rounded-2xl overflow-hidden mb-6">
              <img
                src="~/assets/images/product/describe-s3-img2.jpg"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="text-xl font-medium text-white mb-4">详细专业的开发指南</h3>
            <p class="text-[#AAAAAA]">提供详细的开发文档和示例代码，帮助开发者快速上手</p>
          </div>

          <div class="bg-[#252525] rounded-2xl p-6">
            <div class="rounded-2xl overflow-hidden mb-6">
              <img
                src="~/assets/images/product/describe-s3-img3.jpg"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="text-xl font-medium text-white mb-4">可视化界面便捷开发</h3>
            <p class="text-[#AAAAAA]">提供图形化操作界面，降低使用门槛，无需编程基础也能快速开发</p>
          </div>

          <div class="bg-[#252525] rounded-2xl p-6">
            <div class="rounded-2xl overflow-hidden mb-6">
              <img
                src="~/assets/images/product/describe-s3-img4.jpg"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="text-xl font-medium text-white mb-4">支持主流仿真平台</h3>
            <p class="text-[#AAAAAA]">兼容MuJoco等主流仿真平台，方便迁移现有算法和模型</p>
          </div>

          <div class="bg-[#252525] rounded-2xl p-6">
            <div class="rounded-2xl overflow-hidden mb-6">
              <img
                src="~/assets/images/product/describe-s3-img5.jpg"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="text-xl font-medium text-white mb-4">完整的AI部署全流程指导</h3>
            <p class="text-[#AAAAAA]">从数据采集到模型训练再到部署测试，提供全流程技术支持和指导</p>
          </div>

          <div class="bg-[#252525] rounded-2xl p-6">
            <div class="rounded-2xl overflow-hidden mb-6">
              <img
                src="~/assets/images/product/describe-s3-img6.jpg"
                class="w-full h-full object-cover"
              />
            </div>
            <h3 class="text-xl font-medium text-white mb-4">快速响应的技术支持</h3>
            <p class="text-[#AAAAAA]">专业的技术支持团队，快速响应开发者的各种问题和需求</p>
          </div>
        </div>
      </div>
      <div class="bg-[#252525] rounded-2xl my-6 text-center">
        <h2 class="text-2xl font-medium text-white pt-6">VR遥操作，让Astribot成为你的AI训练伙伴</h2>

        <h3 class="text-xl font-medium text-white mb-4">功能全面的API</h3>
        <p class="text-[#AAAAAA]">提供完整的API接口，支持多种编程语言调用，满足不同开发需求</p>
      </div>
    </section>

    <!-- Use Cases Section -->
    <section class="py-28 bg-[#010101]">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center mb-20">
          <h2 class="text-4xl font-medium text-white mb-6">携手共创，不断进化</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
          <div class="bg-[#252525] rounded-2xl">
            <div class="rounded-t-2xl overflow-hidden">
              <img
                src="~/assets/images/product/describe-s3-img1.jpg"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="px-3 py-5">
              <div class="h-10 mb-2">
                <img
                  src="~/assets/images/product/describe-s4-tit-img1.png"
                  class="w-2/3 object-cover"
                />
              </div>

              <p class="text-[#AAAAAA]">
                针对AI及具身模型类企业，Astribot在数据和模型层提供方案，助力模型验证及泛化能力提升
              </p>
            </div>
          </div>

          <div class="bg-[#252525] rounded-2xl">
            <div class="rounded-t-2xl overflow-hidden">
              <img
                src="~/assets/images/product/describe-s3-img2.jpg"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="px-3 py-5">
              <img
                src="~/assets/images/product/describe-s4-tit-img2.png"
                class="h-10 mb-2 object-cover"
              />
              <p class="text-[#AAAAAA]">
                针对数据采集中心及行业研究院，Astribot推出VR 遥操作数据采集方案，高效舒适，简易安全
              </p>
            </div>
          </div>

          <div class="bg-[#252525] rounded-2xl">
            <div class="rounded-t-2xl overflow-hidden">
              <img
                src="~/assets/images/product/describe-s3-img3.jpg"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="px-3 py-5">
              <img
                src="~/assets/images/product/describe-s4-tit-img3.png"
                class="h-10 mb-2 object-cover"
              />
              <p class="text-[#AAAAAA]">
                针对高校及研究机构，星尘智能不断完善智能本体和工具链，为科研工作者创造更便捷的开发环境，
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Ecosystem Section -->
    <section class="py-28 bg-[#1F1F1F]">
      <div class="container mx-auto px-4">
        <div class="mx-auto text-center">
          <h2 class="text-4xl font-medium text-white mb-6">诚邀各行业伙伴，共推世界智能化变革</h2>
          <p class="text-xl text-[#C9C9C9]">
            具身智能机器人是世界级的难题，也是跨世纪的机会，我们将和各行业伙伴共同前进，不断进化
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mx-auto mt-16">
          <div class="rounded-2xl p-8 flex flex-col justify-center items-center">
            <img src="~/assets/images/product/innobot.svg" alt="" />
            <h3 class="text-2xl font-medium text-white mb-4">开发者社区</h3>
            <p class="text-[#AAAAAA]">
              建立活跃的开发者社区，提供技术文档、示例代码和论坛支持，促进开发者之间的交流与合作
            </p>
          </div>

          <div class="rounded-2xl p-8 flex flex-col justify-center items-center">
            <img src="~/assets/images/product/techatom.svg" alt="" />
            <h3 class="text-2xl font-medium text-white mb-4">合作伙伴计划</h3>
            <p class="text-[#AAAAAA]">
              与行业领先企业建立战略合作关系，共同开发创新应用场景和解决方案
            </p>
          </div>

          <div class="rounded-2xl p-8 flex flex-col justify-center items-center">
            <img src="~/assets/images/product/xplorebox.svg" alt="" />
            <h3 class="text-2xl font-medium text-white mb-4">科研合作</h3>
            <p class="text-[#AAAAAA]">
              与全球顶尖高校和科研机构合作，推动机器人前沿技术的研究与突破
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-20">
        <NuxtLinkLocale
          class="px-4 py-2 rounded font-thin text-white bg-[#5A46FF] text-3.5 hover:bg-[#7463FF] transition-all duration-300 ease-out"
        >
          立即咨询
        </NuxtLinkLocale>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Swiper, SwiperSlide } from '@/lib/vue-swiper'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import danceVideo from '~/assets/media/01跳舞.mp4'
import catVideo from '~/assets/media/02逗猫＋扫地.mp4'
import yangqinVideo from '~/assets/media/03扬琴.mp4'
import waffleVideo from '~/assets/media/04华夫饼倒酱.mp4'
import teaVideo from '~/assets/media/05倒茶叶.mp4'
import sortingVideo from '~/assets/media/06智能分拣.mp4'
import foldingVideo from '~/assets/media/07叠衣服.mp4'
import cupVideo from '~/assets/media/08竞技叠杯.mp4'

const { t } = useI18n()

interface TeleoperationSection {
  title: string
  points: string[]
}

interface CasePartner {
  name: string
  desc: string
}

interface EcosystemSection {
  title: string
  desc: string
}

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

const activeIndex = ref(0)

const isActive = (index) => {
  const total = videos.length
  return (
    index === activeIndex.value % total ||
    (activeIndex.value >= total && index === activeIndex.value - total)
  )
}

const handleSlideChange = (swiper) => {
  activeIndex.value = swiper.realIndex
  console.log(6666, activeIndex.value)
  // 暂停所有视频
  document.querySelectorAll('.product-swiper video').forEach((video) => {
    video.pause()
  })

  // 播放当前视频
  const currentSlide = swiper.slides[swiper.activeIndex]
  const currentVideo = currentSlide.querySelector('video')
  if (currentVideo) {
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
  width: 50% !important; /* 中间幻灯片占50% */
  transition: transform 0.3s;
}
</style>
