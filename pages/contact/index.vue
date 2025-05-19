<template>
  <div class="w-full mx-auto">
    <section
      class="pw-pt-[44px] md:pt-16 bg-[url('/assets/images/contact/contact-s1-img1.jpg')] bg-cover bg-center"
    >
      <div class="w-[90%] md:max-w-[1280px] mx-auto pw-py-[32px] md:py-14">
        <div class="flex flex-col items-center md:flex-row md:justify-around">
          <!-- Left title area -->
          <div class="md:w-1/3 flex justify-center items-center text-center">
            <div class="text-center">
              <h1 class="pw-pb-[8px] md:pb-4 pw-text-[22px] md:text-4xl font-medium text-[#23233D]">
                {{ $t('contact.cooperation.title') }}
              </h1>
              <p class="text-gray-600">{{ $t('contact.cooperation.subtitle') }}</p>
            </div>
          </div>

          <!-- Right form area -->
          <div class="w-full md:w-2/5 pw-pt-[24px] md:pt-0">
            <div>
              <form @submit.prevent="submitForm">
                <div class="grid grid-cols-2 pw-gap-[8px] md:gap-6">
                  <div>
                    <input
                      id="name"
                      v-model="formData.name"
                      type="text"
                      class="w-full pw-text-[14px] md:text-sm px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-[#5A46FF]"
                      :placeholder="$t('contact.cooperation.form.name')"
                    />
                  </div>

                  <div>
                    <input
                      id="company"
                      v-model="formData.company"
                      type="text"
                      class="w-full pw-text-[14px] md:text-sm px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-[#5A46FF]"
                      :placeholder="$t('contact.cooperation.form.company')"
                    />
                  </div>

                  <div>
                    <input
                      id="email"
                      v-model="formData.email"
                      type="email"
                      class="w-full pw-text-[14px] md:text-sm px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-[#5A46FF]"
                      :placeholder="$t('contact.cooperation.form.email')"
                      h
                    />
                  </div>

                  <div>
                    <input
                      id="phone"
                      v-model="formData.phone"
                      type="tel"
                      class="w-full pw-text-[14px] md:text-sm px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-[#5A46FF]"
                      :placeholder="$t('contact.cooperation.form.phone')"
                    />
                  </div>
                </div>

                <div class="pw-mt-[16px] md:mt-4">
                  <textarea
                    id="message"
                    v-model="formData.message"
                    rows="4"
                    class="w-full pw-text-[14px] md:text-sm px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-[#5A46FF]"
                    :placeholder="$t('contact.cooperation.form.description')"
                  ></textarea>
                </div>

                <div
                  class="flex flex-col items-center justify-between mt-6 space-y-4 md:flex-row md:space-y-0"
                >
                  <NuxtLinkLocale
                    type="submit"
                    class="px-8 py-3 font-medium w-full text-white text-center transition-colors bg-[#5A46FF] rounded md:hover:bg-[#7463FF] focus:outline-none cursor-pointer"
                  >
                    {{ $t('contact.cooperation.form.submit') }}
                  </NuxtLinkLocale>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pw-pt-[32px] md:pt-16 bg-white">
      <div class="w-[90%] md:max-w-[1280px] mx-auto">
        <!-- title -->
        <h2 class="pw-text-[22px] md:text-3xl font-medium text-center pw-mb-[24px] md:mb-12">
          {{ $t('contact.connect.title') }}
        </h2>

        <!-- Contact Information-->
        <div
          class="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_0.8fr] pw-gap-[24px] md:gap-8 text-left"
        >
          <!-- Social Media -->
          <div
            class="rounded-lg bg-[#F9FAFB] md:bg-transparent text-center md:text-left pw-py-[24px] pw-px-[8px] md:p-0"
          >
            <h3 class="pw-text-[16px] md:text-base font-medium text-[#23233D] pw-pb-[16px] md:pb-4">
              {{ $t('contact.connect.social.title') }}
            </h3>
            <div class="grid grid-cols-3 gap-x-[16px] gap-y-[32px] md:gap-y-9 md:gap-x-8">
              <a
                target="_blank"
                href="https://space.bilibili.com/1077677154"
                class="flex items-center relative md:hover:text-gray-900 group"
              >
                <div class="">
                  <img
                    src="~/assets/images/contact/bilibili.svg"
                    class="brightness-100 transition-all duration-300 md:group-hover:brightness-50 about us_bilibili"
                    alt=""
                  />
                  <span
                    class="pw-pl-[4px] md:pl-2 pw-text-[14px] md:text-sm text-[#71798A] group-hover:text-[#23233D] about us_bilibili"
                  >
                    {{ $t('contact.connect.social.bilibili') }}
                  </span>
                </div>
                <div
                  class="absolute hidden md:group-hover:block bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap bg-white text-black text-xs px-2 py-1 rounded-md shadow-lg"
                >
                  哔哩哔哩频道
                  <div
                    class="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-white"
                  ></div>
                </div>
              </a>
              <a
                target="_blank"
                href=""
                class="flex items-center relative md:hover:text-gray-900 group"
              >
                <img
                  src="~/assets/images/contact/wechat.svg"
                  class="brightness-100 transition-all duration-300 md:group-hover:brightness-50"
                  alt=""
                />
                <span
                  class="pw-pl-[4px] md:pl-2 pw-text-[14px] md:text-sm text-[#71798A] group-hover:text-[#23233D]"
                >
                  {{ $t('contact.connect.social.wechat') }}
                </span>
                <div
                  class="absolute hidden md:group-hover:block bottom-full left-1/2 mb-3 -translate-x-1/2 w-32 bg-white rounded-md p-2 shadow-lg"
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
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCDjnC6m9_xW-PDeDCjv-jng"
                class="flex items-center relative md:hover:text-gray-900 group"
              >
                <img
                  src="~/assets/images/contact/youtube.svg"
                  class="brightness-100 transition-all duration-300 md:group-hover:brightness-50 about us_youtube"
                  alt=""
                />

                <span
                  class="pw-pl-[4px] md:pl-2 pw-text-[14px] md:text-sm text-[#71798A] group-hover:text-[#23233D] about us_youtube"
                >
                  {{ $t('contact.connect.social.youtube') }}
                </span>
                <div
                  class="absolute hidden md:group-hover:block bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap bg-white text-black text-xs px-2 py-1 rounded-md shadow-lg"
                >
                  YouTube频道
                  <div
                    class="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-white"
                  ></div>
                </div>
              </a>
              <a
                target="_blank"
                href="https://www.douyin.com/user/MS4wLjABAAAAAcfipSlaUYyM673pSK5eGTC9j2S1P5yzqlrVSaGLjN4coXjFqV8inh4i4HVDsoqK"
                class="flex items-center relative md:hover:text-gray-900 group"
              >
                <img
                  src="~/assets/images/contact/douyin.svg"
                  class="brightness-100 transition-all duration-300 md:group-hover:brightness-50 about us_douyin"
                  alt=""
                />

                <span
                  class="pw-pl-[4px] md:pl-2 pw-text-[14px] md:text-sm text-[#71798A] group-hover:text-[#23233D] about us_douyin"
                >
                  {{ $t('contact.connect.social.douyin') }}
                </span>
                <div
                  class="absolute hidden md:group-hover:block bottom-full left-1/3 mb-3 -translate-x-1/2 whitespace-nowrap bg-white text-black text-xs px-2 py-1 rounded-md shadow-lg"
                >
                  抖音
                  <div
                    class="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-white"
                  ></div>
                </div>
              </a>
              <a
                target="_blank"
                href="https://www.tiktok.com/@astribot_inc?is_from_webapp=1&sender_device=pc"
                class="flex items-center relative md:hover:text-gray-900 group"
              >
                <img
                  src="~/assets/images/contact/tiktok.svg"
                  class="brightness-100 transition-all duration-300 md:group-hover:brightness-50 about us_tiktok"
                  alt=""
                />

                <span
                  class="pw-pl-[4px] md:pl-2 pw-text-[14px] md:text-sm text-[#71798A] group-hover:text-[#23233D] about us_tiktok"
                >
                  {{ $t('contact.connect.social.tiktok') }}
                </span>
                <div
                  class="absolute hidden md:group-hover:block bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap bg-white text-black text-xs px-2 py-1 rounded-md shadow-lg"
                >
                  TikTok
                  <div
                    class="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-white"
                  ></div>
                </div>
              </a>
              <a
                target="_blank"
                href="https://x.com/Astribot_Inc?mx=2"
                class="flex items-center relative md:hover:text-gray-900 group"
              >
                <img
                  src="~/assets/images/contact/x.svg"
                  class="brightness-100 transition-all duration-300 md:group-hover:brightness-50 about us_X"
                  alt=""
                />
                <div
                  class="absolute hidden md:group-hover:block bottom-full left-1/4 mb-3 -translate-x-1/2 whitespace-nowrap bg-white text-black text-xs px-2 py-1 rounded-md shadow-lg"
                >
                  X (Twitter)
                  <div
                    class="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-white"
                  ></div>
                </div>
                <span
                  class="pw-pl-[4px] md:pl-2 pw-text-[14px] md:text-sm text-[#71798A] group-hover:text-[#23233D] about us_X"
                >
                  {{ $t('contact.connect.social.x') }}
                </span>
              </a>
            </div>
          </div>

          <div
            class="rounded-lg bg-[#F9FAFB] md:bg-transparent text-center md:text-left pw-py-[24px] pw-px-[16px] md:p-0"
          >
            <h3 class="pw-text-[16px] md:text-base font-medium text-[#23233D] pw-pb-[16px] md:pb-4">
              {{ $t('contact.connect.email.title') }}
            </h3>
            <div class="md:space-y-6">
              <div class="flex items-center justify-center md:justify-start">
                <p class="pw-text-[14px] md:text-sm text-[#71798A] pw-mb-[16px] md:mb-0">
                  {{ $t('contact.connect.email.business') }}：
                </p>
                <a
                  href="mailto:business@astribot.com"
                  class="pw-text-[14px] md:text-sm text-[#71798A] md:hover:text-[#23233D] pw-mb-[16px] md:mb-0"
                >
                  business@astribot.com
                </a>
              </div>
              <div class="flex items-center justify-center md:justify-start">
                <p class="pw-text-[14px] md:text-sm text-[#71798A] pw-mb-[16px] md:mb-0">
                  {{ $t('contact.connect.email.recruitment') }}：
                </p>
                <a
                  href="mailto:join@astribot.com"
                  class="pw-text-[14px] md:text-sm text-[#71798A] md:hover:text-[#23233D] pw-mb-[16px] md:mb-0"
                >
                  join@astribot.com
                </a>
              </div>
              <div class="flex items-center justify-center md:justify-start">
                <p class="pw-text-[14px] md:text-sm text-[#71798A] pw-mb-[16px] md:mb-0">
                  {{ $t('contact.connect.email.other') }}：
                </p>
                <a
                  href="mailto:contact@astribot.com"
                  class="pw-text-[14px] md:text-sm text-[#71798A] md:hover:text-[#23233D] pw-mb-[16px] md:mb-0"
                >
                  contact@astribot.com
                </a>
              </div>
            </div>
          </div>

          <!-- 公司地址 -->
          <div
            class="rounded-lg bg-[#F9FAFB] md:bg-transparent text-center md:text-left pw-py-[24px] pw-px-[16px] md:p-0"
          >
            <h3 class="pw-text-[16px] md:text-base font-medium text-[#23233D] pw-pb-[16px] md:pb-4">
              {{ $t('contact.connect.address.title') }}
            </h3>
            <div class="flex justify-center md:justify-start">
              <p class="pw-text-[14px] md:text-sm text-[#71798A]">
                {{ locale === 'zh' ? '' : '@' }}
              </p>
              <p class="pw-text-[14px] md:text-sm text-[#71798A]">
                {{ $t('contact.connect.address.detail') }}
              </p>
            </div>
          </div>

          <!-- 联系电话 -->

          <div
            class="rounded-lg bg-[#F9FAFB] md:bg-transparent text-center md:text-left pw-py-[24px] pw-px-[16px] md:p-0"
          >
            <h3 class="pw-text-[16px] md:text-base font-medium text-[#23233D] pw-pb-[16px] md:pb-4">
              {{ $t('contact.connect.address.phone') }}
            </h3>
            <div class="flex justify-between items-center w-full">
              <!-- 修改这里 -->
              <span class="pw-text-[14px] md:text-sm text-[#71798A]">联系电话：</span>
              <a
                href="tel:0755-86701637"
                class="pw-text-[14px] md:text-sm text-[#71798A] md:hover:text-[#23233D] whitespace-nowrap"
              >
                0755-86701637
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="container mx-auto px-4 mt-12">
        <div class="border-t border-gray-200"></div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
useHead({
  title: locale.value === 'zh' ? '联系我们' : 'Contact Us',
  meta: [
    {
      name: 'description',
      content: '',
    },
    {
      name: 'keywords',
      content: '',
    },
  ],
})
const formData = reactive({
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
  captcha: '',
})

const submitForm = () => {
  // 这里添加表单提交逻辑
  console.log('表单数据:', formData)
  // 可以添加表单验证和API提交
  alert('表单已提交！')
}
</script>
