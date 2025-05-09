/** @type {import('tailwindcss').Config} */
// tailwind.config.js
import pxToViewport from 'tailwindcss-px-to-viewport'

module.exports = {
  // darkMode: false, // or 'media' or 'class'
  content: [
    './components/**/*.{vue,js}', // 扫描组件文件
    './layouts/**/*.vue', // 扫描布局文件
    './pages/**/*.{vue,js}', // 扫描页面文件
    './plugins/**/*.{js,ts}', // 扫描插件文件
    './nuxt.config.{js,ts}', // 扫描 Nuxt 配置文件（如果使用了 Tailwind 类）
    './app.vue', // 扫描根组件文件（如果有）
  ],
  theme: {
    // screens: {
    //   '2k': '2560px',
    // },
    // fontFamily: {
    //   sans: [
    //     'HarmonyOS_Sans_SC_Medium',
    //     'HarmonyOS_Sans_SC_Regular',
    //     'HarmonyOS_Sans_SC_Light',
    //     'HarmonyOS_Sans_SC_Bold',
    //     'sans-serif',
    //   ],
    // },
    // fontWeight: {
    //   light: 300,
    //   normal: 400,
    //   medium: 500,
    //   bold: 700,
    // },
    extend: {
      pxToViewPort: {
        // 基准视口配置
        PresetScreen: {
          width: 375, // 默认设计稿宽度（单位：px）
          // height: 1334, // 默认设计稿高度（单位：px）
        },
        // 自定义扩展规则（可选）
        utilities: {
          // 在此添加自定义转换规则
          gap: 'gap',
          rounded: 'rounded',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    pxToViewport(), // 启用插件
  ],
}
