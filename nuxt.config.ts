// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-06-28",
  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

  experimental: {
    scanPageMeta: "after-resolve",
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,
    normalizeComponentNames: false,
    spaLoadingTemplateLocation: "within",
    parseErrorData: false,
    pendingWhenIdle: true,
    alwaysRunFetchOnKeyChange: true,
    defaults: {
      useAsyncData: {
        deep: true,
      },
    },
  },

  features: {
    inlineStyles: true,
  },

  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false,
    },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "v-gsap-nuxt",
    "nuxt-svgo",
  ],

  googleFonts: {
    families: {
      "Inter Tight": true,
      Roboto: true,
    },
  },

  css: ["@/assets/css/main.css"],
  ssr: false,

  app: {
    head: {
      title: "Tesla Clone",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/shared/icons/favicon-96x96.png",
        },
      ],
    },
  },
});
