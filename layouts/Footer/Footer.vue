<template>
  <footer class="relative bg-[#0C0C0C] w-full h-full py-[1px]">
    <div class="mx-auto w-[90%] md:max-w-[1280px]">
      <div class="hidden md:block relative">
        <div class="absolute left-[45%] top-0">
          <img src="~/assets/images/footer/footer-bg-1.png" alt="" />
        </div>
        <div class="absolute right-0 top-0 bottom-0">
          <img src="~/assets/images/footer/footer-bg-2.png" alt="" />
        </div>
        <!-- <div class="absolute left-0 top-0">
          <img src="~/assets/images/footer/footer-bg-3.png" alt="" />
        </div> -->
      </div>

      <div class="pw-pt-[32px] pw-pb-[14px] md:py-14">
        <!-- logo 和 星尘智能 -->
        <div class="flex items-center justify-between pw-pb-[20px] md:pb-10">
          <div class="flex items-center">
            <img
              class="pw-w-[126px] md:w-[150px]"
              src="~/assets/images/footer/logo-footer.png"
              alt=""
            />
            <!-- <span class="pw-text-[20px] md:text-2xl pw-ml-[4px] md:ml-2 font-medium">星尘智能</span> -->
          </div>
          <div
            @click="changeLanguage(locale === 'zh' ? 'en' : 'zh')"
            class="md:hidden pw-text-[12px] text-[#FFFFFF66]"
          >
            {{ locale === 'zh' ? 'English' : '中文' }}
          </div>
        </div>

        <div class="md:flex md:flex-row items-center md:justify-between mb-6">
          <!-- 导航 和 媒体图标 -->
          <div>
            <!-- 导航菜单 -->
            <nav class="flex items-center justify-between">
              <ul class="flex justify-between w-full md:space-x-12 text-[#FFFFFFB2]">
                <li class="relative group">
                  <NuxtLinkLocale
                    to="/"
                    class="md:hover:text-white md:hover:border-b md:hover:border-white pw-text-[14px] md:text-sm font-medium transition-colors footer_home"
                  >
                    {{ $t('menu.home') }}
                  </NuxtLinkLocale>
                  <!-- <span
                  class="absolute left-0 -bottom-1 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"
                ></span> -->
                </li>
                <li class="relative group">
                  <NuxtLinkLocale
                    to="/product"
                    class="md:hover:text-white md:hover:border-b md:hover:border-white pw-text-[14px] md:text-sm font-medium transition-colors footer_product"
                  >
                    {{ $t('menu.products') }}
                  </NuxtLinkLocale>
                  <!-- <span
                  class="absolute left-0 -bottom-1 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"
                ></span> -->
                </li>
                <li class="relative group">
                  <NuxtLinkLocale
                    to="/careers"
                    class="md:hover:text-white md:hover:border-b md:hover:border-white pw-text-[14px] md:text-sm font-medium transition-colors footer_hire"
                  >
                    {{ $t('menu.careers') }}
                  </NuxtLinkLocale>
                  <!-- <span
                  class="absolute left-0 -bottom-1 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"
                ></span> -->
                </li>
                <li class="relative group">
                  <NuxtLinkLocale
                    to="/news"
                    class="md:hover:text-white md:hover:border-b md:hover:border-white pw-text-[14px] md:text-sm font-medium transition-colors footer_news"
                  >
                    {{ $t('menu.news') }}
                  </NuxtLinkLocale>
                  <!-- <span
                  class="absolute left-0 -bottom-1 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"
                ></span> -->
                </li>
                <li class="relative group">
                  <NuxtLinkLocale
                    to="/about"
                    class="md:hover:text-white md:hover:border-b md:hover:border-white pw-text-[14px] md:text-sm font-medium transition-colors footer_about us"
                  >
                    {{ $t('menu.about') }}
                  </NuxtLinkLocale>
                  <!-- <span
                  class="absolute left-0 -bottom-1 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"
                ></span> -->
                </li>
              </ul>
            </nav>
          </div>

          <!-- 右侧社交媒体图标 -->
          <div class="flex md:space-x-8 justify-between pw-mt-[24px] md:mt-0">
            <!-- 微信（带二维码悬浮提示） -->
            <div class="relative group">
              <!-- <a href="" class="block"> -->
              <img
                src="~/assets/images/footer/wechat.svg"
                alt="微信"
                class="brightness-75 transition-all duration-300 md:hover:brightness-200 pw-w-[20px] md:w-6 h-auto"
              />
              <!-- </a> -->
              <div
                class="absolute hidden group-hover:block md:bottom-full md:left-1/2 md:-translate-x-1/2 mb-3 w-28 md:w-32 bg-white rounded-md p-2 shadow-lg"
              >
                <img
                  src="~/assets/images/footer/index-s1-qr.png"
                  alt="微信二维码"
                  class="w-full h-auto"
                />
                <p class="hidden md:block text-center text-xs text-black mt-1">扫码关注公众号</p>
                <!-- <p class="hidden md:block text-center text-xs text-black mt-1">微信公众号</p> -->
                <!-- PC端箭头（移动端隐藏） -->
                <div
                  class="hidden md:block absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-white"
                ></div>
              </div>
            </div>

            <!-- 哔哩哔哩 -->
            <div class="relative group">
              <a target="_blank" href="https://space.bilibili.com/1077677154" class="block">
                <img
                  src="~/assets/images/footer/bilibili.svg"
                  alt="哔哩哔哩"
                  class="brightness-75 transition-all duration-300 md:hover:brightness-200 pw-w-[20px] md:w-6 h-auto footer_bilibili"
                />
              </a>
              <div
                class="absolute hidden md:group-hover:block bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap bg-white text-black text-xs px-2 py-1 rounded-md shadow-lg"
              >
                哔哩哔哩频道
                <div
                  class="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-white"
                ></div>
              </div>
            </div>

            <!-- 抖音 -->
            <div class="relative group">
              <a
                target="_blank"
                href="https://www.douyin.com/user/MS4wLjABAAAAAcfipSlaUYyM673pSK5eGTC9j2S1P5yzqlrVSaGLjN4coXjFqV8inh4i4HVDsoqK"
                class="block"
              >
                <img
                  src="~/assets/images/footer/douyin.svg"
                  alt="抖音"
                  class="brightness-75 transition-all duration-300 hover:brightness-200 pw-w-[20px] md:w-6 h-auto footer_douyin"
                />
              </a>
              <div
                class="absolute hidden md:group-hover:block bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap bg-white text-black text-xs px-2 py-1 rounded-md shadow-lg"
              >
                抖音
                <div
                  class="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-white"
                ></div>
              </div>
            </div>

            <!-- YouTube -->
            <div class="relative group">
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCDjnC6m9_xW-PDeDCjv-jng"
                class="block"
              >
                <img
                  src="~/assets/images/footer/youtube.svg"
                  alt="YouTube"
                  class="brightness-75 transition-all duration-300 hover:brightness-200 pw-w-[20px] md:w-6 h-auto footer_youtube"
                />
              </a>
              <div
                class="absolute hidden md:group-hover:block bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap bg-white text-black text-xs px-2 py-1 rounded-md shadow-lg"
              >
                YouTube频道
                <div
                  class="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-white"
                ></div>
              </div>
            </div>

            <!-- Twitter/X -->
            <div class="relative group">
              <a target="_blank" href="https://x.com/Astribot_Inc?mx=2" class="block">
                <img
                  src="~/assets/images/footer/x.svg"
                  alt="X (Twitter)"
                  class="brightness-75 transition-all duration-300 md:hover:brightness-200 pw-w-[20px] md:w-6 h-auto footer_X"
                />
              </a>
              <div
                class="absolute hidden md:group-hover:block bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap bg-white text-black text-xs px-2 py-1 rounded-md shadow-lg"
              >
                X (Twitter)
                <div
                  class="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-white"
                ></div>
              </div>
            </div>

            <!-- TikTok -->
            <div class="relative group">
              <a
                target="_blank"
                href="https://www.tiktok.com/@astribot_inc?is_from_webapp=1&sender_device=pc"
                class="block"
              >
                <img
                  src="~/assets/images/footer/tiktok.svg"
                  alt="TikTok"
                  class="brightness-75 transition-all duration-300 md:hover:brightness-200 pw-w-[20px] md:w-6 h-auto footer_"
                />
              </a>
              <div
                class="absolute hidden md:group-hover:block bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap bg-white text-black text-xs px-2 py-1 rounded-md shadow-lg"
              >
                TikTok
                <div
                  class="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-white"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 分隔线 -->
        <div class="w-full h-[1px] bg-[#2a2a2a]"></div>
        <div class="mb-6"></div>

        <!-- 版权信息 -->
        <div>
          <div class="text-[#FFFFFF66] pw-text-[12px] md:text-xs">
            <div
              class="flex flex-col items-center md:flex-row md:justify-between space-y-2 md:space-y-0"
            >
              <!-- 备案信息（移动端居中，PC端左对齐） -->
              <div
                class="flex flex-col items-center md:items-start md:flex-row gap-[8px] md:space-x-4 text-center md:text-left"
              >
                <div class="flex items-center cursor-pointer">
                  <span>
                    <a
                      class="md:hover:text-gray-300"
                      rel="noreferrer"
                      target="_blank"
                      href="http://beian.miit.gov.cn/"
                    >
                      粤ICP备20253601号
                    </a>
                  </span>
                </div>
                <div class="flex items-center cursor-pointer">
                  <img
                    src="~/assets/images/footer/head-logo.png"
                    alt="公安备案图标"
                    class="w-[16px] mr-[5px]"
                  />
                  <span>
                    <a
                      class="md:hover:text-gray-300"
                      rel="noreferrer"
                      target="_blank"
                      href="https://beian.mps.gov.cn/#/query/webSearch?code=44030002006488"
                    >
                      粤公网安备44030002006488号
                    </a>
                  </span>
                </div>
                <p class="text-center md:text-left">Copyright © Astribot. All Rights Reserved.</p>
              </div>

              <!-- 语言切换（仅PC端显示在右侧） -->
              <div
                @click="changeLanguage(locale === 'zh' ? 'en' : 'zh')"
                class="md:hover:text-gray-300 transition-colors cursor-pointer hidden md:block footer_launguage"
              >
                {{ locale === 'zh' ? 'English' : '中文' }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
// const openInNewTab = () => {
//   window.open('/product') // 这里的 `/` 是你要跳转的路径
// }
const { locale, setLocale } = useI18n()
const changeLanguage = (locale) => {
  setLocale(locale)
}
</script>
