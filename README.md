# 星尘智能企业官网

[![License](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)
[![Nuxt.js](https://img.shields.io/badge/Nuxt.js-3.0.0-orange)](https://nuxt.com)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.0.0-brightgreen)](https://vuejs.org)

## 项目概述

星尘智能企业官网是基于Nuxt.js 3构建的现代化企业网站，具有以下特点：

- 多语言支持（中英文切换）
- 响应式设计，适配各种设备
- 高性能页面加载
- SEO优化
- 视频和图片内容展示

## 技术栈

- **核心框架**: Nuxt.js 3 + Vue 3
- **样式**: Tailwind CSS + WindiCSS
- **国际化**: @nuxtjs/i18n
- **图片处理**: @nuxt/image
- **轮播组件**: Swiper
- **分析工具**: Google Analytics (gtag)
- **构建工具**: Vite

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm run dev
```

### 生产构建

```bash
pnpm run build
```

### 启动生产服务器

```bash
pnpm run start
```

## 项目结构

```
.
├── assets/            # 静态资源
│   ├── font/          # 字体文件
│   ├── images/        # 图片资源
│   ├── media/         # 视频资源
│   └── styles/        # 全局样式
├── components/        # 公共组件
├── composables/       # 组合式函数
├── config/            # 项目配置
├── layouts/           # 布局组件
├── pages/             # 页面组件
│   ├── about/         # 关于我们
│   ├── home/          # 首页
│   ├── product/       # 产品页
│   └── news/          # 新闻页
├── public/            # 公共文件
└── server/            # 服务端代码
```

## 配置说明

1. 复制环境变量文件：

```bash
cp .env.example .env
```

2. 配置Google Analytics：

```env
VITE_GTAG_ID=your_gtag_id
```

3. 多语言配置在`config/i18n.ts`中修改

## 开发指南

1. 页面开发在`pages/`目录下创建对应路由
2. 公共组件放在`components/`目录
3. 样式使用Tailwind CSS工具类
4. 多语言文本在`i18n/locales/`中维护

## 部署

### Docker部署

```bash
docker-compose up -d
```

### PM2部署

```bash
pnpm run build
pm2 start ecosystem.config.cjs
```

## 贡献

欢迎提交Pull Request，请遵循现有代码风格。

## 联系方式

如有问题请联系：dev@example.com

## 许可证

MIT License
