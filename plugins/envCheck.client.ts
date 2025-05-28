// plugins/envCheck.client.ts
export default defineNuxtPlugin(() => {
  if (import.meta.env.MODE === 'development') {
    console.log('[ENV] 当前为开发环境')
    console.log('VITE_GTAG_ID:', import.meta.env.VITE_GTAG_ID)
    console.log('VITE_GTM_ID:', import.meta.env.VITE_GTM_ID)
  }
})
