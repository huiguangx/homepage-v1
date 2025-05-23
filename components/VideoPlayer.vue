<template>
  <div class="hls-player">
    <video
      ref="videoElement"
      class="video-element"
      :class="$attrs.class"
      :controls="controls"
      :autoplay="autoplay"
      :muted="muted"
      :loop="loop"
      :poster="poster"
      :preload="preload"
      playsinline
      x5-playsinline
      webkit-playsinline
      v-on="videoListeners"
    ></video>
    <div v-if="error" class="error-message">
      {{ error }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, defineExpose, useAttrs } from 'vue'
import Hls from 'hls.js'

const props = defineProps({
  src: { type: String, required: true },
  width: { type: [Number, String], default: '640px' },
  height: { type: [Number, String], default: '360px' },
  autoplay: { type: Boolean, default: false },
  muted: { type: Boolean, default: false },
  loop: { type: Boolean, default: false },
  controls: { type: Boolean, default: true },
  poster: { type: String, default: '' },
  preload: {
    type: String,
    default: 'auto',
    validator: (value) => ['auto', 'metadata', 'none'].includes(value),
  },
})

const videoElement = ref(null)
const error = ref(null)
const hlsInstance = ref(null)

const attrs = useAttrs()
console.log(attrs, 66666)
const videoEvents = [
  'play',
  'pause',
  'ended',
  'error',
  'loadedmetadata',
  'timeupdate',
  'seeking',
  'seeked',
  'volumechange',
  'ratechange',
  'waiting',
  'canplay',
]

const videoListeners = {}
videoEvents.forEach((event) => {
  const handler = attrs[`on${event.charAt(0).toUpperCase() + event.slice(1)}`]
  if (handler) {
    videoListeners[event] = handler
  }
})

defineExpose({
  play: () => videoElement.value?.play(),
  pause: () => videoElement.value?.pause(),
  requestFullscreen: () => videoElement.value?.requestFullscreen(),
  get currentTime() {
    return videoElement.value?.currentTime
  },
  set currentTime(val) {
    if (videoElement.value) videoElement.value.currentTime = val
  },
  get duration() {
    return videoElement.value?.duration
  },
  get paused() {
    return videoElement.value?.paused
  },
  get muted() {
    return videoElement.value?.muted
  },
  set muted(val) {
    if (videoElement.value) videoElement.value.muted = val
  },
  get volume() {
    return videoElement.value?.volume
  },
  set volume(val) {
    if (videoElement.value) videoElement.value.volume = val
  },
})

const initPlayer = () => {
  if (!videoElement.value) return

  if (Hls.isSupported()) {
    const hls = new Hls({
      maxBufferLength: 30,
      maxMaxBufferLength: 60,
      maxBufferSize: 60 * 1000 * 1000,
      maxBufferHole: 0.5,
      abrEwmaFastLive: 3.0,
      abrEwmaSlowLive: 9.0,
      abrEwmaDefaultEstimate: 500_000,
      abrMaxWithRealBitrate: true,
      fragLoadingTimeOut: 5000,
      fragLoadingMaxRetry: 3,
      fragLoadingRetryDelay: 1000,
      fragLoadingMaxRetryTimeout: 3000,
      startLevel: -1,
    })
    hls.attachMedia(videoElement.value)
    hls.loadSource(props.src)

    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      hls.startLevel = getStartLevel()
      hls.autoLevelEnabled = true

      if (props.autoplay) {
        videoElement.value.play().catch(() => {
          error.value = '自动播放被阻止，请点击播放按钮'
        })
      }
    })

    hls.on(Hls.Events.ERROR, (event, data) => {
      if (data.fatal) {
        switch (data.type) {
          case Hls.ErrorTypes.NETWORK_ERROR:
            error.value = '网络错误，尝试恢复中...'
            hls.startLoad()
            break
          case Hls.ErrorTypes.MEDIA_ERROR:
            error.value = '媒体错误，尝试恢复中...'
            hls.recoverMediaError()
            break
          default:
            error.value = `播放失败: ${data.details}`
            destroyPlayer()
        }
      }
    })

    setupConnectionWatcher(hls)
    hlsInstance.value = hls
  } else if (videoElement.value.canPlayType('application/vnd.apple.mpegurl')) {
    videoElement.value.src = props.src
    videoElement.value.addEventListener('loadedmetadata', () => {
      if (props.autoplay) {
        videoElement.value.play().catch(() => {
          error.value = '自动播放被阻止，请点击播放按钮'
        })
      }
    })
  } else {
    error.value = '您的浏览器不支持HLS视频播放'
  }
}

const getStartLevel = () => {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
  if (connection && connection.downlink) {
    const downlinkMbps = connection.downlink
    if (downlinkMbps >= 4) return 2
    if (downlinkMbps >= 2) return 1
    return 1
  }
  return 1
}

const setupConnectionWatcher = (hls) => {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection

  if (connection?.addEventListener) {
    connection.addEventListener('change', () => {
      hls.autoLevelEnabled = true
      hls.nextLevel = -1
    })
  }
}

const destroyPlayer = () => {
  hlsInstance.value?.destroy()
  hlsInstance.value = null
}

onMounted(initPlayer)
onBeforeUnmount(destroyPlayer)

watch(
  () => props.src,
  (newVal, oldVal) => {
    if (newVal !== oldVal) {
      destroyPlayer()
      initPlayer()
    }
  },
)
</script>

<style scoped>
.hls-player {
  position: relative;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
}

.video-element {
  object-fit: cover;
  background: #000;
  display: block;
}

.error-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  z-index: 10;
}
</style>
