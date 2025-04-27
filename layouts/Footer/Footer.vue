<template>
  <footer class="relative bg-black text-white pw-pt-[32px] pw-pb-[14px] md:py-14">
    <div class="mx-auto w-[90%]">
      <!-- logo 和 星尘智能 -->
      <div class="flex items-center justify-between pw-pb-[20px] md:pb-10">
        <div class="flex items-center">
          <img class="pw-w-[30px] md:w-9" src="~/assets/images/header/logo.svg" alt="" />
          <span class="pw-text-[20px] md:text-2xl pw-ml-[4px] md:ml-2 font-medium">星尘智能</span>
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
                  class="md:hover:text-white pw-text-[14px] md:text-sm transition-colors"
                >
                  {{ $t('menu.home') }}
                </NuxtLinkLocale>
                <span
                  class="absolute left-0 -bottom-1 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"
                ></span>
              </li>
              <li class="relative group">
                <NuxtLinkLocale to="/product" class="md:hover:text-white transition-colors">
                  {{ $t('menu.products') }}
                </NuxtLinkLocale>
                <span
                  class="absolute left-0 -bottom-1 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"
                ></span>
              </li>
              <li class="relative group">
                <NuxtLinkLocale to="/careers" class="md:hover:text-white transition-colors">
                  {{ $t('menu.careers') }}
                </NuxtLinkLocale>
                <span
                  class="absolute left-0 -bottom-1 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"
                ></span>
              </li>
              <li class="relative group">
                <NuxtLinkLocale to="/news" class="hmd:over:text-white transition-colors">
                  {{ $t('menu.news') }}
                </NuxtLinkLocale>
                <span
                  class="absolute left-0 -bottom-1 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"
                ></span>
              </li>
              <li class="relative group">
                <NuxtLinkLocale to="/about" class="hmd:over:text-white transition-colors">
                  {{ $t('menu.about') }}
                </NuxtLinkLocale>
                <span
                  class="absolute left-0 -bottom-1 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"
                ></span>
              </li>
            </ul>
          </nav>
        </div>

        <!-- 右侧社交媒体图标 -->
        <!-- 右侧社交媒体图标 -->
        <div class="flex md:space-x-4 justify-between pw-mt-[24px] md:mt-0">
          <!-- 微信（带二维码悬浮提示） -->
          <div class="relative group">
            <a href="" class="block">
              <img
                src="~/assets/images/footer/wechat.svg"
                alt="微信"
                class="brightness-75 transition-all duration-300 md:hover:brightness-200 pw-w-[20px] md:w-6 h-auto"
              />
            </a>
            <div
              class="absolute hidden group-hover:block bottom-full left-1/2 mb-3 -translate-x-1/2 w-32 bg-white rounded-md p-2 shadow-lg"
            >
              <img
                src="~/assets/images/footer/index-s1-qr.png"
                alt="微信二维码"
                class="w-full h-auto"
              />
              <p class="text-center text-xs text-black mt-1">扫码关注公众号</p>
              <div
                class="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-white"
              ></div>
            </div>
          </div>

          <!-- 哔哩哔哩 -->
          <div class="relative group">
            <a target="_blank" href="https://space.bilibili.com/1077677154" class="block">
              <img
                src="~/assets/images/footer/bilibili.svg"
                alt="哔哩哔哩"
                class="brightness-75 transition-all duration-300 md:hover:brightness-200 pw-w-[20px] md:w-6 h-auto"
              />
            </a>
            <div
              class="absolute hidden group-hover:block bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap bg-white text-black text-xs px-2 py-1 rounded-md shadow-lg"
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
              href="https://www.douyin.com/user/MS4wLjABAAAAAcfipSlaUYyM673pSK5eGTC9j2S1P5yzqlrVSaGLjN4coXjFqV8inh4i4HVDsoqK"
              class="block"
            >
              <img
                src="~/assets/images/footer/douyin.svg"
                alt="抖音"
                class="brightness-75 transition-all duration-300 hover:brightness-200 pw-w-[20px] md:w-6 h-auto"
              />
            </a>
            <div
              class="absolute hidden group-hover:block bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap bg-white text-black text-xs px-2 py-1 rounded-md shadow-lg"
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
                class="brightness-75 transition-all duration-300 hover:brightness-200 pw-w-[20px] md:w-6 h-auto"
              />
            </a>
            <div
              class="absolute hidden group-hover:block bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap bg-white text-black text-xs px-2 py-1 rounded-md shadow-lg"
            >
              YouTube频道
              <div
                class="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-white"
              ></div>
            </div>
          </div>

          <!-- Twitter/X -->
          <div class="relative group">
            <a href="https://x.com/Astribot_Inc?mx=2" class="block">
              <img
                src="~/assets/images/footer/x.svg"
                alt="X (Twitter)"
                class="brightness-75 transition-all duration-300 md:hover:brightness-200 pw-w-[20px] md:w-6 h-auto"
              />
            </a>
            <div
              class="absolute hidden group-hover:block bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap bg-white text-black text-xs px-2 py-1 rounded-md shadow-lg"
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
                class="brightness-75 transition-all duration-300 md:hover:brightness-200 pw-w-[20px] md:w-6 h-auto"
              />
            </a>
            <div
              class="absolute hidden group-hover:block bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap bg-white text-black text-xs px-2 py-1 rounded-md shadow-lg"
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
      <div class="border-t border-gray-800 mb-6"></div>

      <!-- 版权信息 -->
      <div>
        <div class="text-gray-500 pw-text-[12px] md:text-xs">
          <p class="mb-2 text-center md:text-left">Copyright © Astribot. All Rights Reserved.</p>
          <div
            class="flex flex-col items-center md:flex-row md:justify-between space-y-2 md:space-y-0"
          >
            <!-- 备案信息（移动端居中，PC端左对齐） -->
            <div
              class="flex flex-col items-center md:items-start md:flex-row md:space-x-4 text-center md:text-left"
            >
              <div class="flex items-center cursor-pointer">
                <span>
                  <a
                    class="hover:text-gray-300"
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
                    class="hover:text-gray-300"
                    rel="noreferrer"
                    target="_blank"
                    href="https://beian.mps.gov.cn/#/query/webSearch?code=44030002006488"
                  >
                    粤公网安备44030002006488号
                  </a>
                </span>
              </div>
            </div>

            <!-- 语言切换（仅PC端显示在右侧） -->
            <div
              @click="changeLanguage(locale === 'zh' ? 'en' : 'zh')"
              class="hover:text-gray-300 transition-colors cursor-pointer hidden md:block"
            >
              {{ locale === 'zh' ? 'English' : '中文' }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale, setLocale } = useI18n()
const changeLanguage = (locale) => {
  setLocale(locale)
}
</script>
