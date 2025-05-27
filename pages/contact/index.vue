<template>
  <div class="w-full mx-auto">
    <section
      class="pw-pt-[44px] md:pt-16 bg-[url('/assets/images/contact/contact-s1-img1.jpg')] bg-cover bg-center"
    >
      <div class="w-[90%] md:max-w-[1280px] mx-auto pw-py-[32px] md:py-14">
        <div class="flex flex-col items-center md:flex-row md:justify-around">
          <div class="md:w-1/3 flex justify-center items-center text-center">
            <div class="text-center">
              <h1 class="pw-pb-[8px] md:pb-4 pw-text-[22px] md:text-4xl font-medium text-[#23233D]">
                {{ $t('contact.cooperation.title') }}
              </h1>
              <p class="text-gray-600">{{ $t('contact.cooperation.subtitle') }}</p>
            </div>
          </div>

          <div class="w-full md:w-2/5 pw-pt-[24px] md:pt-0 relative">
            <div>
              <div
                v-if="toast.show"
                :class="{
                  'text-[#73D13D] md:text-[#B7EB8F]': toast.type === 'success', // 成功时的文本颜色
                  'text-red-500': toast.type === 'error', // 失败时的文本颜色
                }"
                class="absolute top-1/2 md:top-3/4 left-1/2 md:left-0 -translate-x-1/2 md:-translate-x-1/2 -translate-y-1/2 py-2 px-4 rounded-md bg-[#000000CC] shadow-lg transition-opacity duration-300 z-[9999] flex items-center space-x-2"
              >
                <img
                  v-if="toast.type === 'success'"
                  src="~/assets/images/contact/success-h5.svg"
                  alt="Success"
                  class="md:hidden"
                />
                <img
                  v-if="toast.type === 'success'"
                  src="~/assets/images/contact/success.svg"
                  alt="Success"
                  class="hidden md:block"
                />
                <!-- <img
                  v-if="toast.type === 'error'"
                  src="~/assets/images/contact/error.svg"
                  alt="Error"
                  class="w-5 h-5"
                /> -->
                <span class="pw-text-[14px] md:text-sm">{{ toast.message }}</span>
              </div>
              <form @submit.prevent="submitForm">
                <div class="grid grid-cols-2 pw-gap-[8px] md:gap-6">
                  <div>
                    <input
                      id="name"
                      v-model="formData.name"
                      type="text"
                      @input="errors.name = ''"
                      class="w-full pw-text-[14px] md:text-sm px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-[#5A46FF]"
                      :class="{ 'border-red-500': errors.name }"
                      :placeholder="$t('contact.cooperation.form.name')"
                    />
                    <p v-if="errors.name" class="text-red-500 text-xs mt-1">{{ errors.name }}</p>
                  </div>

                  <div>
                    <input
                      id="company"
                      @input="errors.company = ''"
                      v-model="formData.company"
                      type="text"
                      class="w-full pw-text-[14px] md:text-sm px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-[#5A46FF]"
                      :class="{ 'border-red-500': errors.company }"
                      :placeholder="$t('contact.cooperation.form.company')"
                    />
                    <p v-if="errors.company" class="text-red-500 text-xs mt-1">
                      {{ errors.company }}
                    </p>
                  </div>

                  <div>
                    <input
                      id="email"
                      @input="errors.email = ''"
                      v-model="formData.email"
                      class="w-full pw-text-[14px] md:text-sm px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-[#5A46FF]"
                      :class="{ 'border-red-500': errors.email }"
                      :placeholder="$t('contact.cooperation.form.email')"
                    />
                    <p v-if="errors.email" class="text-red-500 text-xs mt-1">{{ errors.email }}</p>
                  </div>

                  <div>
                    <input
                      id="phone"
                      @input="errors.phone = ''"
                      v-model="formData.phone"
                      type="tel"
                      class="w-full pw-text-[14px] md:text-sm px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-[#5A46FF]"
                      :class="{ 'border-red-500': errors.phone }"
                      :placeholder="$t('contact.cooperation.form.phone')"
                    />
                    <p v-if="errors.phone" class="text-red-500 text-xs mt-1">{{ errors.phone }}</p>
                  </div>
                </div>

                <div class="pw-mt-[16px] md:mt-4">
                  <textarea
                    id="message"
                    @input="errors.message = ''"
                    v-model="formData.message"
                    rows="4"
                    class="w-full pw-text-[14px] md:text-sm px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-[#5A46FF]"
                    :class="{ 'border-red-500': errors.message }"
                    :placeholder="$t('contact.cooperation.form.description')"
                  ></textarea>
                  <p v-if="errors.message" class="text-red-500 text-xs mt-1">
                    {{ errors.message }}
                  </p>
                </div>

                <div
                  class="flex flex-col items-center justify-between mt-6 space-y-4 md:flex-row md:space-y-0"
                >
                  <button
                    type="submit"
                    tabindex="0"
                    class="px-8 py-3 font-medium w-full text-white text-center transition-colors bg-[#5A46FF] rounded md:hover:bg-[#7463FF] focus:outline-none cursor-pointer focus:ring-1 focus:border-[#5A46FF]"
                  >
                    {{ $t('contact.cooperation.form.submit') }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pw-pt-[32px] md:pt-16 bg-white">
      <div class="w-[90%] md:max-w-[1280px] mx-auto">
        <h2 class="pw-text-[22px] md:text-3xl font-medium text-center pw-mb-[24px] md:mb-12">
          {{ $t('contact.connect.title') }}
        </h2>

        <div
          class="grid grid-cols-1 md:grid-cols-[1.35fr_1fr_1fr_0.4fr] pw-gap-[24px] md:gap-20 text-left"
        >
          <div
            class="rounded-lg bg-[#F9FAFB] md:bg-transparent text-center md:text-left pw-py-[24px] pw-px-[8px] md:p-0"
          >
            <h3 class="pw-text-[16px] md:text-base font-medium text-[#23233D] pw-pb-[16px] md:pb-4">
              {{ $t('contact.connect.social.title') }}
            </h3>
            <div class="grid grid-cols-3 gap-x-[8px] gap-y-[32px] md:gap-y-9 md:gap-x-8">
              <a
                target="_blank"
                href="https://space.bilibili.com/1077677154"
                class="flex items-center relative md:hover:text-gray-900 group"
              >
                <div class="flex items-center justify-center">
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
              <div
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
              </div>
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

          <div
            class="rounded-lg bg-[#F9FAFB] md:bg-transparent text-center md:text-left pw-py-[24px] pw-px-[16px] md:p-0"
          >
            <h3 class="pw-text-[16px] md:text-base font-medium text-[#23233D] pw-pb-[16px] md:pb-4">
              {{ $t('contact.connect.address.phone') }}
            </h3>
            <div class="flex flex-col md:flex-row justify-between items-center w-full">
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
import { reactive, ref } from 'vue' // 引入 ref 用于 toast

const { t, locale } = useI18n()
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
})

// 校验错误信息
const errors = reactive({
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
})

// Toast 提示状态
const toast = reactive({
  show: false,
  message: '',
  type: 'success' as 'success' | 'error', // 明确类型
})

const showToast = (message: string, type: 'success' | 'error' = 'success') => {
  toast.show = true
  toast.message = message
  toast.type = type
  setTimeout(() => {
    toast.show = false
  }, 3000) // 3秒后自动隐藏
}

const loading_url = 'https://us-loading.ctmon.net'

const submitForm = async () => {
  // 重置错误信息
  Object.keys(errors).forEach((key) => (errors[key as keyof typeof errors] = ''))

  let isValid = true

  // 表单校验
  if (!formData.name) {
    errors.name = t('contact.cooperation.form.nameRequired') || '姓名是必填项'
    isValid = false
  }
  if (!formData.company) {
    errors.company = t('contact.cooperation.form.companyRequired') || '公司是必填项'
    isValid = false
  }
  if (!formData.email) {
    errors.email = t('contact.cooperation.form.emailRequired') || '邮箱是必填项'
    isValid = false
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = t('contact.cooperation.form.emailInvalid') || '请输入有效的邮箱地址'
    isValid = false
  }
  if (!formData.phone) {
    errors.phone = t('contact.cooperation.form.phoneRequired') || '电话是必填项'
    isValid = false
  } else if (!/^\+?[0-9\s-()]{7,20}$/.test(formData.phone)) {
    // 简单的电话号码正则
    errors.phone = t('contact.cooperation.form.phoneInvalid') || '请输入有效的电话号码'
    isValid = false
  }
  if (!formData.message) {
    errors.message = t('contact.cooperation.form.messageRequired') || '留言内容是必填项'
    isValid = false
  }

  if (!isValid) {
    // showToast(t('contact.cooperation.form.fillRequired') || '请填写所有必填项', 'error')
    return // 如果表单无效，则停止提交
  }

  // 格式化手机号，加上国家码
  const phoneWithCode = formData.phone.startsWith('+') ? formData.phone : '+86' + formData.phone

  // 构造要发送的数据，跟你之前jQuery的一致
  const sendData = {
    title: '客户留言',
    lang: 'en', // 默认en，根据实际情况可能需要切换为 locale.value
    company_name: formData.company,
    username: formData.name,
    email: formData.email,
    mobile: phoneWithCode,
    whatsapp: phoneWithCode,
    message: formData.message,
    url: typeof window !== 'undefined' ? window.location.href : '', // 兼容 SSR
    custom_mail: 'business@astribot.com',
    custom_company: '固特英文',
    bc_mail_master: 'business@astribot.com',
    bc_mail_slave: 'fengyuyuan@ctmon.cn',
    bc_mail_three: 'graysonx@163.com',
    bc_mail_three_name: '抄送人2',
    bc_mail_four: 'business@astribot.com',
    bc_mail_four_name: '客户邮箱2',
  }

  console.log(sendData)

  try {
    // const isSubmitting = ref(true);

    const res = await $fetch<{ status: number }>(loading_url, {
      // 明确指定返回类型
      method: 'POST',
      body: sendData,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    // isSubmitting.value = false;

    // Handle response
    if (res.status === 200) {
      showToast(t('contact.cooperation.form.submitSuccess') || '提交成功！', 'success')

      // Reset form data
      Object.assign(formData, {
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
      })
    } else {
      showToast(t('contact.cooperation.form.submitFail') || '提交失败，请稍后再试。', 'error')
    }
  } catch (error) {
    // isSubmitting.value = false;

    showToast(t('contact.cooperation.form.submitFail') || '提交失败，请稍后再试。', 'error')
    console.error('表单提交错误:', error)
  }
}
</script>
