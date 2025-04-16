<template>
  <div class="w-full">
    <!-- Hero Video Section -->
    <section class="relative h-screen w-full bg-black">
      <div class="h-full w-full">
        <video class="absolute inset-0 w-full h-full object-cover md:hidden" muted autoplay loop>
          <source src="@/assets/media/video/banner-h5.mp4" type="video/mp4" />
        </video>
        <video
          class="absolute inset-0 w-full h-full object-cover hidden md:block"
          muted
          autoplay
          loop
        >
          <source src="@/assets/media/video/banner.mp4" type="video/mp4" />
        </video>
        <div class="container absolute inset-0 z-10 mx-auto flex h-full flex-col justify-center">
          <div class="max-w-4xl space-y-6 px-4">
            <h1 class="text-5xl md:text-6xl font-medium text-white leading-tight">
              全能型AI机器人，定义操作新高度
            </h1>
            <p class="text-2xl text-[#C9C9C9] max-w-3xl">
              更快速、更柔顺、更安全，星尘智能S1首创面向AI的软硬件一体化系统架构
              <br />
              将"AI智能"与"最强操作"深度耦合，能像人一样学习思考和劳动，与人安全智能地交互
            </p>
            <button class="bg-[#5A46FF] px-8 py-4 rounded-lg text-white text-lg font-medium">
              立即咨询
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Performance Section -->
    <section class="py-28 bg-[#010101]">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center mb-20">
          <h2 class="text-4xl font-medium text-white mb-6">高度仿人，更强创造力</h2>
          <p class="text-xl text-[#C9C9C9]">
            星尘智能 S1 各项关键操作指标媲美成年男性
            <br />
            兼顾性能满足、安全性和稳定性，给科研工作者及部分场景探索者提供更大想象空间
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div class="bg-[#252525] rounded-2xl p-8">
            <h3 class="text-2xl font-medium text-white mb-8">星尘智能S1</h3>
            <div class="space-y-6">
              <div class="flex justify-between items-end border-b border-[#333333] pb-2">
                <span class="text-[#AAAAAA]">单臂自由度</span>
                <span class="text-white text-2xl">7</span>
              </div>
              <div class="flex justify-between items-end border-b border-[#333333] pb-2">
                <span class="text-[#AAAAAA]">单臂额定负载（平举）</span>
                <span class="text-white text-2xl">
                  5
                  <span class="text-sm text-[#939393] ml-1">kg</span>
                </span>
              </div>
              <div class="flex justify-between items-end border-b border-[#333333] pb-2">
                <span class="text-[#AAAAAA]">末端速度</span>
                <span class="text-white text-2xl">
                  ≥10
                  <span class="text-sm text-[#939393] ml-1">m/s²</span>
                </span>
              </div>
              <div class="flex justify-between items-end border-b border-[#333333] pb-2">
                <span class="text-[#AAAAAA]">末端加速度</span>
                <span class="text-white text-2xl">
                  ≈100
                  <span class="text-sm text-[#939393] ml-1">m/s²</span>
                </span>
              </div>
              <div class="flex justify-between items-end border-b border-[#333333] pb-2">
                <span class="text-[#AAAAAA]">末端重复精度</span>
                <span class="text-white text-2xl">
                  ±0.1
                  <span class="text-sm text-[#939393] ml-1">mm</span>
                </span>
              </div>
              <div class="flex justify-between items-end border-b border-[#333333] pb-2">
                <span class="text-[#AAAAAA]">身高</span>
                <span class="text-white text-2xl">
                  170
                  <span class="text-sm text-[#939393] ml-1">cm</span>
                </span>
              </div>
              <div class="flex justify-between items-end border-b border-[#333333] pb-2">
                <span class="text-[#AAAAAA]">体重</span>
                <span class="text-white text-2xl">
                  80
                  <span class="text-sm text-[#939393] ml-1">kg</span>
                </span>
              </div>
              <div class="flex justify-between items-end border-b border-[#333333] pb-2">
                <span class="text-[#AAAAAA]">臂展</span>
                <span class="text-white text-2xl">
                  194
                  <span class="text-sm text-[#939393] ml-1">cm</span>
                </span>
              </div>
              <div class="flex justify-between items-end">
                <span class="text-[#AAAAAA]">续航</span>
                <span class="text-white text-2xl">
                  4~6
                  <span class="text-sm text-[#939393] ml-1">小时，支持插电</span>
                </span>
              </div>
            </div>
          </div>

          <div class="bg-[#252525] rounded-2xl p-8">
            <h3 class="text-2xl font-medium text-[#AAAAAA] mb-8">普通成年男性</h3>
            <div class="space-y-6">
              <div class="flex justify-between items-end border-b border-[#333333] pb-2">
                <span class="text-[#AAAAAA]">单臂自由度</span>
                <span class="text-[#AAAAAA] text-2xl">7</span>
              </div>
              <div class="flex justify-between items-end border-b border-[#333333] pb-2">
                <span class="text-[#AAAAAA]">单臂额定负载（平举）</span>
                <span class="text-[#AAAAAA] text-2xl">
                  3~5
                  <span class="text-sm text-[#939393] ml-1">kg</span>
                </span>
              </div>
              <div class="flex justify-between items-end border-b border-[#333333] pb-2">
                <span class="text-[#AAAAAA]">末端速度</span>
                <span class="text-[#AAAAAA] text-2xl">
                  5~10
                  <span class="text-sm text-[#939393] ml-1">m/s²普通摆臂</span>
                </span>
              </div>
              <div class="flex justify-between items-end border-b border-[#333333] pb-2">
                <span class="text-[#AAAAAA]">末端加速度</span>
                <span class="text-[#AAAAAA] text-2xl">
                  50~100
                  <span class="text-sm text-[#939393] ml-1">m/s²普通摆臂</span>
                </span>
              </div>
              <div class="flex justify-between items-end border-b border-[#333333] pb-2">
                <span class="text-[#AAAAAA]">末端重复精度</span>
                <span class="text-[#AAAAAA] text-2xl">
                  ±1~5
                  <span class="text-sm text-[#939393] ml-1">mm，特殊训练可达±0.5mm</span>
                </span>
              </div>
              <div class="flex justify-between items-end border-b border-[#333333] pb-2">
                <span class="text-[#AAAAAA]">身高</span>
                <span class="text-[#AAAAAA] text-2xl">
                  173
                  <span class="text-sm text-[#939393] ml-1">cm</span>
                </span>
              </div>
              <div class="flex justify-between items-end border-b border-[#333333] pb-2">
                <span class="text-[#AAAAAA]">体重</span>
                <span class="text-[#AAAAAA] text-2xl">
                  70
                  <span class="text-sm text-[#939393] ml-1">kg</span>
                </span>
              </div>
              <div class="flex justify-between items-end border-b border-[#333333] pb-2">
                <span class="text-[#AAAAAA]">臂展</span>
                <span class="text-[#AAAAAA] text-2xl">
                  171~175
                  <span class="text-sm text-[#939393] ml-1">cm</span>
                </span>
              </div>
              <div class="flex justify-between items-end">
                <span class="text-[#AAAAAA]">续航</span>
                <span class="text-[#AAAAAA] text-2xl">
                  10
                  <span class="text-sm text-[#939393] ml-1">小时，相当于人类静息代谢</span>
                </span>
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
    <section class="py-28 bg-[#161616]">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center mb-20">
          <h2 class="text-4xl font-medium text-white mb-6">持续丰富工具链，降低科研门槛</h2>
          <p class="text-xl text-[#C9C9C9]">
            我们将持续完善工具链，打造开放、易用、高性能的科研工具生态
            <br />
            快速验证创新算法及模型功能，助力科研突破
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div class="bg-[#252525] rounded-2xl p-6">
            <div class="aspect-square rounded-2xl overflow-hidden mb-6">
              <!-- <img
                src="@/assets/images/index/firstPage/product-image.jpg"
                class="w-full h-full object-cover"
              /> -->
            </div>
            <h3 class="text-xl font-medium text-white mb-4">功能全面的API</h3>
            <p class="text-[#AAAAAA]">提供完整的API接口，支持多种编程语言调用，满足不同开发需求</p>
          </div>

          <div class="bg-[#252525] rounded-2xl p-6">
            <div class="aspect-square rounded-2xl overflow-hidden mb-6">
              <!-- <img
                src="@/assets/images/index/firstPage/product-image.jpg"
                class="w-full h-full object-cover"
              /> -->
            </div>
            <h3 class="text-xl font-medium text-white mb-4">详细专业的开发指南</h3>
            <p class="text-[#AAAAAA]">提供详细的开发文档和示例代码，帮助开发者快速上手</p>
          </div>

          <div class="bg-[#252525] rounded-2xl p-6">
            <div class="aspect-square rounded-2xl overflow-hidden mb-6">
              <!-- <img
                src="@/assets/images/index/firstPage/product-image.jpg"
                class="w-full h-full object-cover"
              /> -->
            </div>
            <h3 class="text-xl font-medium text-white mb-4">可视化界面便捷开发</h3>
            <p class="text-[#AAAAAA]">提供图形化操作界面，降低使用门槛，无需编程基础也能快速开发</p>
          </div>

          <div class="bg-[#252525] rounded-2xl p-6">
            <div class="aspect-square rounded-2xl overflow-hidden mb-6">
              <!-- <img
                src="@/assets/images/index/firstPage/product-image.jpg"
                class="w-full h-full object-cover"
              /> -->
            </div>
            <h3 class="text-xl font-medium text-white mb-4">支持主流仿真平台</h3>
            <p class="text-[#AAAAAA]">兼容MuJoco等主流仿真平台，方便迁移现有算法和模型</p>
          </div>

          <div class="bg-[#252525] rounded-2xl p-6">
            <div class="aspect-square rounded-2xl overflow-hidden mb-6">
              <!-- <img
                src="@/assets/images/index/firstPage/product-image.jpg"
                class="w-full h-full object-cover"
              /> -->
            </div>
            <h3 class="text-xl font-medium text-white mb-4">完整的AI部署全流程指导</h3>
            <p class="text-[#AAAAAA]">从数据采集到模型训练再到部署测试，提供全流程技术支持和指导</p>
          </div>

          <div class="bg-[#252525] rounded-2xl p-6">
            <div class="aspect-square rounded-2xl overflow-hidden mb-6">
              <!-- <img
                src="@/assets/images/index/firstPage/product-image.jpg"
                class="w-full h-full object-cover"
              /> -->
            </div>
            <h3 class="text-xl font-medium text-white mb-4">快速响应的技术支持</h3>
            <p class="text-[#AAAAAA]">专业的技术支持团队，快速响应开发者的各种问题和需求</p>
          </div>
        </div>
      </div>
    </section>

    <!-- VR Teleoperation Section -->
    <section class="py-28 bg-[#010101]">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center mb-20">
          <h2 class="text-4xl font-medium text-white mb-6">VR远程操控，突破空间限制</h2>
          <p class="text-xl text-[#C9C9C9]">
            通过VR设备实现远程操控，让操作者身临其境
            <br />
            突破空间限制，实现远程精准控制
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div class="bg-[#252525] rounded-2xl aspect-video overflow-hidden">
            <!-- <img
              src="@/assets/images/index/firstPage/product-image.jpg"
              class="w-full h-full object-cover"
            /> -->
          </div>

          <div class="space-y-8">
            <div class="bg-[#252525] rounded-2xl p-8">
              <h3 class="text-2xl font-medium text-white mb-6">VR远程操控</h3>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <div
                    class="bg-[#5A46FF] rounded-full w-6 h-6 flex items-center justify-center mr-4 mt-1 flex-shrink-0"
                  >
                    <span class="text-white text-sm">1</span>
                  </div>
                  <p class="text-[#AAAAAA]">
                    通过VR设备实现沉浸式远程操控体验，操作者可以身临其境地控制机器人
                  </p>
                </li>
                <li class="flex items-start">
                  <div
                    class="bg-[#5A46FF] rounded-full w-6 h-6 flex items-center justify-center mr-4 mt-1 flex-shrink-0"
                  >
                    <span class="text-white text-sm">2</span>
                  </div>
                  <p class="text-[#AAAAAA]">
                    支持主流VR设备，包括Oculus、HTC Vive等，提供流畅的操作体验
                  </p>
                </li>
                <li class="flex items-start">
                  <div
                    class="bg-[#5A46FF] rounded-full w-6 h-6 flex items-center justify-center mr-4 mt-1 flex-shrink-0"
                  >
                    <span class="text-white text-sm">3</span>
                  </div>
                  <p class="text-[#AAAAAA]">低延迟传输技术，确保远程操控的实时性和精准度</p>
                </li>
              </ul>
            </div>

            <div class="bg-[#252525] rounded-2xl p-8">
              <h3 class="text-2xl font-medium text-white mb-6">应用场景</h3>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <div
                    class="bg-[#5A46FF] rounded-full w-6 h-6 flex items-center justify-center mr-4 mt-1 flex-shrink-0"
                  >
                    <span class="text-white text-sm">1</span>
                  </div>
                  <p class="text-[#AAAAAA]">危险环境作业：核电站、化工厂等危险环境的远程操作</p>
                </li>
                <li class="flex items-start">
                  <div
                    class="bg-[#5A46FF] rounded-full w-6 h-6 flex items-center justify-center mr-4 mt-1 flex-shrink-0"
                  >
                    <span class="text-white text-sm">2</span>
                  </div>
                  <p class="text-[#AAAAAA]">远程医疗：医生可以通过VR远程操控机器人进行手术</p>
                </li>
                <li class="flex items-start">
                  <div
                    class="bg-[#5A46FF] rounded-full w-6 h-6 flex items-center justify-center mr-4 mt-1 flex-shrink-0"
                  >
                    <span class="text-white text-sm">3</span>
                  </div>
                  <p class="text-[#AAAAAA]">教育培训：提供沉浸式的机器人操作培训体验</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases Section -->
    <section class="py-28 bg-[#161616]">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center mb-20">
          <h2 class="text-4xl font-medium text-white mb-6">应用场景</h2>
          <p class="text-xl text-[#C9C9C9]">
            星尘智能S1适用于多种场景，助力科研和产业发展
            <br />
            为不同领域提供智能化解决方案
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div class="bg-[#252525] rounded-2xl p-8">
            <div class="bg-[#5A46FF] rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-medium text-white mb-4">科研实验</h3>
            <p class="text-[#AAAAAA]">
              为高校和科研机构提供机器人平台，支持AI算法验证、机器人控制研究等前沿科研工作
            </p>
          </div>

          <div class="bg-[#252525] rounded-2xl p-8">
            <div class="bg-[#5A46FF] rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-medium text-white mb-4">工业制造</h3>
            <p class="text-[#AAAAAA]">应用于精密装配、质量检测等工业场景，提高生产效率和产品质量</p>
          </div>

          <div class="bg-[#252525] rounded-2xl p-8">
            <div class="bg-[#5A46FF] rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-medium text-white mb-4">医疗辅助</h3>
            <p class="text-[#AAAAAA]">
              支持远程手术、康复训练等医疗应用，提高医疗服务的可及性和精准度
            </p>
          </div>

          <div class="bg-[#252525] rounded-2xl p-8">
            <div class="bg-[#5A46FF] rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-medium text-white mb-4">教育培训</h3>
            <p class="text-[#AAAAAA]">为机器人、AI相关专业提供教学平台，培养未来科技人才</p>
          </div>

          <div class="bg-[#252525] rounded-2xl p-8">
            <div class="bg-[#5A46FF] rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-medium text-white mb-4">危险环境</h3>
            <p class="text-[#AAAAAA]">适用于核电站、化工厂等危险环境，替代人工完成高风险作业</p>
          </div>

          <div class="bg-[#252525] rounded-2xl p-8">
            <div class="bg-[#5A46FF] rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-medium text-white mb-4">安防巡检</h3>
            <p class="text-[#AAAAAA]">应用于重要设施巡检、边境巡逻等安防场景，提高安全防护能力</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Ecosystem Section -->
    <section class="py-28 bg-[#010101]">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center mb-20">
          <h2 class="text-4xl font-medium text-white mb-6">开放生态，共创未来</h2>
          <p class="text-xl text-[#C9C9C9]">
            我们致力于构建开放的机器人生态系统
            <br />
            与全球开发者、科研机构和企业共同推动机器人技术的发展
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div class="bg-[#252525] rounded-2xl p-8">
            <div class="bg-[#5A46FF] rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-medium text-white mb-4">开发者社区</h3>
            <p class="text-[#AAAAAA]">
              建立活跃的开发者社区，提供技术文档、示例代码和论坛支持，促进开发者之间的交流与合作
            </p>
          </div>

          <div class="bg-[#252525] rounded-2xl p-8">
            <div class="bg-[#5A46FF] rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-medium text-white mb-4">合作伙伴计划</h3>
            <p class="text-[#AAAAAA]">
              与行业领先企业建立战略合作关系，共同开发创新应用场景和解决方案
            </p>
          </div>

          <div class="bg-[#252525] rounded-2xl p-8">
            <div class="bg-[#5A46FF] rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-medium text-white mb-4">科研合作</h3>
            <p class="text-[#AAAAAA]">
              与全球顶尖高校和科研机构合作，推动机器人前沿技术的研究与突破
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
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

const toolchainFeatures = computed(() => t('product.toolchain.features') as unknown as string[])
const teleoperationSections = computed(
  () => t('product.teleoperation.sections') as unknown as TeleoperationSection[],
)
const casePartners = computed(() => t('product.cases.partners') as unknown as CasePartner[])
const ecosystemSections = computed(
  () => t('product.ecosystem.sections') as unknown as EcosystemSection[],
)
</script>
