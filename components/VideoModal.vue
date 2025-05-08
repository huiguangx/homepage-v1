<template>
  <div v-if="showModal" class="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
    <video
      ref="videoPlayer"
      controls
      autoplay
      :src="videoUrl"
      class="max-w-[90%] md:max-w-[1280px] max-h-[90%]"
      @ended="closeModal"
    ></video>
    <button @click="closeModal" class="absolute top-4 right-4 text-white text-2xl">×</button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  videoUrl: String,
  show: Boolean,
})

const emit = defineEmits(['update:show'])
const videoPlayer = ref(null)

const showModal = ref(false)

watch(
  () => props.show,
  (val) => {
    showModal.value = val
    if (val && videoPlayer.value) {
      videoPlayer.value.play()
    }
  },
)

const closeModal = () => {
  emit('update:show', false)
  if (videoPlayer.value) {
    videoPlayer.value.pause()
    videoPlayer.value.currentTime = 0
  }
}
</script>
