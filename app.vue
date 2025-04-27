<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const i18nHead = useLocaleHead({ seo: { canonicalQueries: ['foo'] } })
useHead(() => ({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs?.lang,
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])],
}))
</script>

<style lang="scss">
@forward '@/assets/styles/global.scss';
</style>
