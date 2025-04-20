<template>
  <footer class="bg-black text-white py-14 px-20">
    <div class="mx-auto">
      <!-- 顶部导航和社交媒体区域 -->
      <div class="flex items-center mb-10">
        <img class="w-9" src="~/assets/images/header/logo.svg" alt="" />
        <span class="ml-2 text-2xl font-medium">星尘智能</span>
      </div>

      <div class="flex flex-col md:flex-row justify-between items-center mb-6">
        <!-- 左侧 Logo 和导航 -->
        <div class="flex items-end space-x-2">
          <!-- Logo 和公司名称 -->

          <!-- 导航菜单 -->
          <nav class="flex items-center">
            <ul class="flex space-x-12 text-sm text-gray-300">
              <li class="relative group">
                <NuxtLinkLocale to="/" class="hover:text-white transition-colors">
                  {{ $t('menu.home') }}
                </NuxtLinkLocale>
                <span
                  class="absolute left-0 -bottom-1 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"
                ></span>
              </li>
              <li class="relative group">
                <NuxtLinkLocale to="/product" class="hover:text-white transition-colors">
                  {{ $t('menu.products') }}
                </NuxtLinkLocale>
                <span
                  class="absolute left-0 -bottom-1 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"
                ></span>
              </li>
              <li class="relative group">
                <NuxtLinkLocale to="/careers" class="hover:text-white transition-colors">
                  {{ $t('menu.careers') }}
                </NuxtLinkLocale>
                <span
                  class="absolute left-0 -bottom-1 h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300"
                ></span>
              </li>
              <li class="relative group">
                <NuxtLinkLocale to="/about" class="hover:text-white transition-colors">
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
        <div class="flex space-x-4 mt-4 md:mt-0">
          <!-- 微信 -->
          <div class="relative group">
            <a href="#" s>
              <img
                src="~/assets/images/footer/wechat.svg"
                alt=""
                class="brightness-75 transition-all duration-300 hover:brightness-200"
              />
            </a>
            <div
              class="absolute hidden group-hover:block bottom-full mb-5 w-24 p-2 h-auto bg-white rounded-sm"
            >
              <img
                src="~/assets/images/footer/index-s1-qr.png"
                alt="微信二维码"
                class="w-full object-contain"
              />
            </div>
          </div>

          <!-- 日历/新闻 -->
          <a href="#">
            <img
              src="~/assets/images/footer/bilibili.svg"
              class="brightness-75 transition-all duration-300 hover:brightness-200"
              alt=""
            />
          </a>

          <!-- 抖音 -->
          <a href="#">
            <img
              src="~/assets/images/footer/douyin.svg"
              class="brightness-75 transition-all duration-300 hover:brightness-200"
              alt=""
            />
          </a>

          <!-- YouTube -->
          <a href="#">
            <img
              src="~/assets/images/footer/youtube.svg"
              class="brightness-75 transition-all duration-300 hover:brightness-200"
              alt=""
            />
          </a>

          <!-- Twitter/X -->
          <a href="#">
            <img
              src="~/assets/images/footer/x.svg"
              class="brightness-75 transition-all duration-300 hover:brightness-200"
              alt=""
            />
          </a>

          <!-- 抖音 (第二个) -->
          <a href="#">
            <img
              src="~/assets/images/footer/tiktok.svg"
              class="brightness-75 transition-all duration-300 hover:brightness-200"
              alt=""
            />
          </a>
        </div>
      </div>

      <!-- 分隔线 -->
      <div class="border-t border-gray-800 mb-6"></div>

      <!-- 版权信息 -->
      <div>
        <div class="text-gray-500 text-base">
          <p class="mb-2">Copyright © Astribot. All Rights Reserved.</p>
          <div class="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <div class="flex items-center cursor-pointer">
              <span>粤ICP备20253601号</span>
            </div>
            <div class="flex items-center cursor-pointer">
              <img
                src="~/assets/images/footer/head-logo.png"
                alt="公安备案图标"
                class="w-[16px] mr-[5px]"
              />
              <span>粤公网安备44030002006488号</span>
            </div>

            <div
              @click="changeLanguage(locale === 'zh' ? 'en' : 'zh')"
              class="hover:text-gray-300 transition-colors cursor-pointer"
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
import AppLink from '~/components/AppLink.vue'

const { locale, setLocale } = useI18n()
const changeLanguage = (locale) => {
  console.log('666666666666')
  setLocale(locale)
}
</script>
