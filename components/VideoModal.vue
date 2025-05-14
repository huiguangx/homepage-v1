<template>
  <div v-if="show" class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
    <!-- 添加 rounded-2xl 圆角 -->
    <div class="relative max-w-[90%] md:max-w-[1280px] max-h-[90%] rounded-2xl overflow-hidden">
      <video
        ref="videoPlayer"
        controls
        autoplay
        muted
        :src="videoUrl"
        class="w-full h-full object-contain"
        @ended="closeModal"
      ></video>
      <!-- 添加灰色圆形关闭按钮 -->
    </div>
    <button
      @click="closeModal"
      class="absolute top-4 right-4 pw-w-[24px] pw-h-[24px] md:w-10 md:h-10 flex items-center justify-center bg-[#FFFFFFCC] rounded-full transition-colors duration-200"
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
import { ref } from 'vue'

const props = defineProps({
  videoUrl: String,
  show: Boolean,
})

const emit = defineEmits(['update:show'])
const videoPlayer = ref(null)

const closeModal = () => {
  emit('update:show', false)
}
</script>
