// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path'
import { currentLocales } from './config/i18n'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  // ssr: process.env.NODE_ENV !== 'development',
  css: [],
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/image',
    'nuxt-gtag',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo',
    // '@nuxt/fonts',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Noto Sans': {
            wght: [300, 400, 500, 700],
          },
        },
        display: 'swap',
        subsets: ['latin'],
        preload: true,
        preconnect: true,
        prefetch: true,
        useStylesheet: true,
        download: true,
        base64: false,
        overwriting: false,
      },
    ],
    '@zadigetvoltaire/nuxt-gtm',
  ],
  gtm: {
    id: process.env.VITE_GTM_ID || 'GTM-52BQM7PX',
    enabled: true,
    defer: true,
    enableRouterSync: true,
    compatibility: true,
  },
  // runtimeConfig: {
  //   public: {
  //     gtm: {
  //       id: 'GTM-52BQM7PX',
  //       // queryParams: {
  //       //   gtm_auth: 'AB7cDEf3GHIjkl-MnOP8qr',
  //       //   gtm_preview: 'env-4',
  //       //   gtm_cookies_win: 'x',
  //       // },
  //       // defer: false,
  //       // compatibility: false,
  //       // nonce: '2726c7f26c',
  //       // enabled: true,
  //       // debug: true,
  //       // loadScript: true,
  //       // enableRouterSync: true,
  //       // ignoredViews: ['homepage'],
  //       // trackOnNextTick: false,
  //       // devtools: true,
  //     },
  //   },
  // },

  // fonts: {
  //   families: [
  //     { name: 'HarmonyOS Sans', provider: 'local' }, // 本地鸿蒙字体文件
  //     { name: 'Noto Sans', provider: 'google' }, // 从 Google Fonts 加载
  //   ],
  // },
  // googleFonts: {
  //   families: {
  //     'Noto Sans SC': [300, 400, 500, 700], // 只加载 Noto Sans
  //   },
  // },
  gtag: {
    id: import.meta.env.VITE_GTAG_ID,
    enabled: true,
  },

  i18n: {
    locales: currentLocales,
    langDir: 'locales',
    defaultLocale: 'zh',
    strategy: 'prefix_except_default',
    vueI18n: path.resolve(__dirname, './config/i18n.config.ts'),
    // 启用浏览器语言检测，以便在访问者第一次访问您的站点时自动将其重定向到首选语言环境。
    detectBrowserLanguage: {
      // 启动 cookie
      useCookie: true,
      // 用于存储当前语言环境的变量名
      cookieKey: 'i18n_redirected',
      // (建议用于改进SEO) -仅检测站点根路径(/)上的浏览器区域设置。只有当使用策略而不是"no_prefix"时才有效。
      redirectOn: 'root',
    },
    baseUrl: process.env.SEO_URL || 'http://localhost:3000',
    bundle: {
      optimizeTranslationDirective: false,
    },
  },

  postcss: {
    plugins: {
      'postcss-px-to-viewport-8-plugin': {
        // 配置参数使用与 postcss-px-to-viewport 一致
        viewportWidth: 375, // 设计稿宽度（通常为 750px 或 375px）
        unitPrecision: 5, // 转换后的精度（小数点位数）
        viewportUnit: 'vw', // 转换的目标单位
        selectorBlackList: [], // 不需要转换的选择器
        minPixelValue: 1, // 最小转换值
        mediaQuery: false, // 是否转换媒体查询中的 px
        exclude: /^(?:(?!pages|layouts).)*$/,
      },
    },
  },
  vite: {
    esbuild: {
      drop: ['debugger'],
      pure: process.env.NUXT_ENV === 'production' ? ['console.log'] : [],
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              // Nuxt 核心相关
              if (id.includes('nuxt') || id.includes('vue')) {
                return 'vendor-nuxt'
              }
              // 国际化相关
              if (id.includes('i18n') || id.includes('vue-i18n')) {
                return 'vendor-i18n'
              }
              // 图片处理相关
              if (id.includes('@nuxt/image')) {
                return 'vendor-image'
              }
              // UI 框架相关
              if (id.includes('tailwindcss')) {
                return 'vendor-tailwind'
              }
              // 工具库相关
              if (id.includes('@vueuse/core')) {
                return 'vendor-vueuse'
              }
              // 日期处理相关
              if (id.includes('dayjs')) {
                return 'vendor-dayjs'
              }
              // 轮播相关
              if (id.includes('swiper')) {
                return 'vendor-swiper'
              }
              // 其他第三方依赖
              return 'vendor-others'
            }
          },
        },
      },
      // 启用压缩
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: process.env.NODE_ENV === 'production',
          drop_debugger: true,
        },
      },
    },
  },

  build: {
    analyze: {
      // 是否启用分析工具，默认为 false
      enabled: true,
      // 分析报告的输出目录，默认为 '.nuxt/analyze'
      reportFilename: '.nuxt/analyze/report.html',
      // 是否在浏览器中自动打开分析报告，默认为 false
      open: true,
      // 分析器类型，可选值有 'webpack-bundle-analyzer' 和 'source-map-explorer'
      analyzerMode: 'server',
      // 分析服务器的端口号
      port: 8888,
      // 其他 webpack-bundle-analyzer 配置项
      generateStatsFile: false,
      statsFilename: '.nuxt/analyze/stats.json',
      statsOptions: null,
      logLevel: 'info',
    },
  },
  // 开启gzip压缩
  // nitro: {
  //   compressPublicAssets: true,
  //   routeRules: {
  //     '/**': {
  //       headers: {
  //         'Cache-Control': 'public, max-age=31536000, immutable',
  //       },
  //     },
  //     '/api/**': {
  //       headers: {
  //         'Cache-Control': 'no-cache, no-store, must-revalidate',
  //       },
  //     },
  //   },
  // },

  // 配置开发服务器：允许局域网访问并指定端口 3000
  // devServer: {
  //   host: '0.0.0.0',
  //   port: 3000,
  // },

  app: {
    baseURL: process.env.BASE_URL || '/',
    head: {
      title: '星尘智能',
      meta: [
        {
          name: 'viewport',
          content:
            'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0',
        },
        { name: 'keywords', content: '' },
        { name: 'description', content: '' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      style: [],
      script: [
        // <!-- Google Tag Manager -->
        process.env.ENABLE_GTM === 'true'
          ? {
              hid: 'gtm',
              children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${process.env.VITE_GTM_ID}');`,
              type: 'text/javascript',
            }
          : undefined,
        // <!-- End Google Tag Manager -->
      ].filter(Boolean),
      noscript: [],
    },
  },
})
