export default defineNuxtConfig({
  modules: [
    "nuxt-size",
    "@unocss/nuxt",
    "@vueuse/nuxt",
    "@nuxt/devtools",
    "@nuxtjs/fontaine",
    "@nuxt/image-edge",
    "@element-plus/nuxt",
    "@nuxtjs/critters",
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: "zh-CN",
      },
    },
  },
  unocss: {
    uno: true,
    attributify: true,
  },
  vite: {
    define: {
      __VUE_OPTIONS_API__: false, // 明确不使用 options api
    },
  },
  sourcemap: false,
  typescript: {
    shim: false,
  },
  nitro: {
    minify: true,
    prerender: {
      crawlLinks: true,
    },
  },
});
