// composables/useSmartPreload.ts
export const useSmartPreload = () => {
  const isSupportedWebp = ref(true)

  onMounted(() => {
    isSupportedWebp.value = supportsWebp()
  })

  const getOptimalFormat = (path: string) => {
    const ext = isSupportedWebp.value ? '.webp' : '.jpg'
    return path.replace(/\.(webp|jpg)$/, ext)
  }

  return { getOptimalFormat }
}
