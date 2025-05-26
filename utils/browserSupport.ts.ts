// utils/browserSupport.ts
export const supportsWebp = () => {
  if (typeof window === 'undefined') return true // SSR 阶段默认按支持处理
  return document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0
}
