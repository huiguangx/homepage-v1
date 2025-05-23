<template>
  <div v-if="show" class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
    <div class="relative max-w-[90%] md:max-w-[1280px] max-h-[90%]">
      <!-- 视频区域 -->
      <video
        ref="videoPlayer"
        controls
        autoplay
        :src="videoUrl"
        class="w-full h-full object-contain"
        @ended="closeModal"
      ></video>

      <!-- PC端关闭按钮：右上角浮层按钮 -->
      <button
        @click="closeModal"
        class="hidden md:flex absolute -top-12 -right-12 w-10 h-10 items-center justify-center bg-[#FFFFFFCC] rounded-full z-10 transition-colors duration-200"
      >
        <img src="~/assets/images/header/close.svg" alt="Close" class="w-5 h-5" />
      </button>
    </div>

    <!-- 移动端关闭按钮：更靠外 -->
    <button
      @click="closeModal"
      class="md:hidden absolute top-4 right-4 pw-w-[24px] pw-h-[24px] md:w-10 md:h-10 flex items-center justify-center bg-[#FFFFFFCC] rounded-full transition-colors duration-200"
    >
      <img
        class="transition-all duration-300 ease-in-out"
        @click="isMenuOpen = false"
        src="~/assets/images/header/close.svg"
        alt="Close"
      />
    </button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  videoUrl: { type: String, required: true },
  show: { type: Boolean, required: true },
})

const emit = defineEmits(['update:show'])
const videoPlayer = ref(null)

const closeModal = () => {
  if (videoPlayer.value) {
    videoPlayer.value.pause()
    videoPlayer.value.removeAttribute('src')
    videoPlayer.value.load()
  }
  emit('update:show', false)
}

// 👇 监听弹窗打开时，暂停所有其他视频，避免多个音轨
watch(
  () => props.show,
  (val) => {
    if (val) {
      const allVideos = document.querySelectorAll('video')
      allVideos.forEach((v) => {
        if (v !== videoPlayer.value) {
          v.pause()
          v.currentTime = 0
        }
      })
    }
  },
)
</script>
