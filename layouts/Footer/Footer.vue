<template>
  <footer class="bg-black text-white py-6 px-20">
    <div class="mx-auto px-4 md:px-8">
      <!-- 顶部导航和社交媒体区域 -->
      <div class="flex items-center">
        <img src="~/assets/images/header/logo.svg" alt="" />
        <span class="ml-2 text-sm font-medium">星尘智能</span>
      </div>

      <div class="flex flex-col md:flex-row justify-between items-center mb-6">
        <!-- 左侧 Logo 和导航 -->
        <div class="flex items-end space-x-2">
          <!-- Logo 和公司名称 -->

          <!-- 导航菜单 -->
          <nav class="flex items-center">
            <ul class="flex space-x-1 text-[16px]">
              <li>
                <AppLink to="/" class="hover:text-gray-300 transition-colors">
                  {{ $t('menu.home') }}
                </AppLink>
              </li>
              <li>
                <AppLink to="/product" class="hover:text-gray-300 transition-colors">
                  {{ $t('menu.products') }}
                </AppLink>
              </li>
              <li>
                <AppLink to="/careers" class="hover:text-gray-300 transition-colors">
                  {{ $t('menu.careers') }}
                </AppLink>
              </li>
              <li>
                <AppLink to="/about" class="hover:text-gray-300 transition-colors">
                  {{ $t('menu.about') }}
                </AppLink>
              </li>
              <li>
                <button
                  @click="changeLanguage(locale === 'zh' ? 'en' : 'zh')"
                  class="hover:text-gray-300 transition-colors"
                >
                  {{ locale === 'zh' ? 'EN' : '中文' }}
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <!-- 右侧社交媒体图标 -->
        <div class="flex space-x-4 mt-4 md:mt-0">
          <!-- 微信 -->
          <div class="relative group">
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <img src="~/assets/images/footer/wechat.svg" alt="" />
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
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <img src="~/assets/images/footer/bilibili.svg" alt="" />
          </a>

          <!-- 抖音 -->
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <img src="~/assets/images/footer/douyin.svg" alt="" />
          </a>

          <!-- YouTube -->
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <img src="~/assets/images/footer/youtube.svg" alt="" />
          </a>

          <!-- Twitter/X -->
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <img src="~/assets/images/footer/x.svg" alt="" />
          </a>

          <!-- 抖音 (第二个) -->
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <img src="~/assets/images/footer/tiktok.svg" alt="" />
          </a>
        </div>
      </div>

      <!-- 分隔线 -->
      <div class="border-t border-gray-800 mb-6"></div>

      <!-- 版权信息 -->
      <div class="text-gray-500 text-[16px]">
        <p class="mb-2">Copyright © Astribot. All Rights Reserved.</p>
        <div class="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <div class="flex items-center">
            <span>粤ICP备20253601号</span>
          </div>
          <div class="flex items-center">
            <img
              src="~/assets/images/footer/head-logo.png"
              alt="公安备案图标"
              class="w-[16px] mr-[5px]"
            />
            <span>粤公网安备44030002006488号</span>
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
